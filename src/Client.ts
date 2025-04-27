import { loadSessionFromStorage, saveSessionToStorage } from "./storage/sessions";
import { Methods, Session } from "./types";
import crypto from "crypto";
import prompts from "prompts";
import { Auth } from "./methods/Auth";
import { Album } from "./methods/Album";
import { Artist } from "./methods/Artist";
import { Chart } from "./methods/Chart";
import { Geo } from "./methods/Geo";
import { Library } from "./methods/Library";
import { Tag } from "./methods/Tag";
import { Track } from "./methods/Track";
import { User } from "./methods/User";

export class Client {
  private apiRoot = "https://ws.audioscrobbler.com/2.0/";
  private apiKey: string;
  private apiSecret?: string;
  private appName?: string;
  private headers: Record<string, string>;
  private sessionKey?: string;
  public auth: Auth;
  public album: Album;
  public artist: Artist;
  public chart: Chart;
  public geo: Geo;
  public library: Library;
  public tag: Tag;
  public track: Track;
  public user: User;

  constructor(apiKey: string, options: { apiSecret?: string; appName?: string }) {
    if (!apiKey) {
      throw new Error("Ivalid API key. You need an API Key from Last.fm to continue.");
    }

    this.apiKey = apiKey;
    this.apiSecret = options.apiSecret ?? undefined;
    this.appName = options.appName ?? "Undefined";
    this.headers = {
      "User-Agent": `${this.appName} (+https://github.com/39Choko/lastfm)`,
    };

    this.auth = new Auth(this);
    this.album = new Album(this);
    this.artist = new Artist(this);
    this.chart = new Chart(this);
    this.geo = new Geo(this);
    this.library = new Library(this);
    this.tag = new Tag(this);
    this.track = new Track(this);
    this.user = new User(this);

    this.loadSession();
  }

  public async request(
    method: Methods,
    params: Record<string, string | number | undefined | null> = {},
    signed = false,
    write = false,
  ) {
    if (signed && !this.apiSecret) {
      throw new Error("API secret is required for signed requests.");
    }

    if (method === "auth.getMobileSession") write = true;

    const baseParams: Record<string, string | number | undefined | null> = {
      ...params,
      method,
      api_key: this.apiKey,
      format: "json",
    };

    const cleanParams: Record<string, string> = Object.fromEntries(
      Object.entries(baseParams).filter(([, value]) => value !== undefined && value !== null),
    ) as Record<string, string>;

    const searchParams = new URLSearchParams(cleanParams);

    if (signed) {
      const sortedParams = Object.entries(cleanParams)
        .filter(([key]) => key !== "format")
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

      const signatureString = sortedParams.map(([k, v]) => `${k}${v}`).join("") + this.apiSecret;

      const hashedSignature = crypto.createHash("md5").update(signatureString).digest("hex");
      searchParams.set("api_sig", hashedSignature);
    }

    const queryString = searchParams.toString();
    const url = write ? this.apiRoot : `${this.apiRoot}?${queryString}`;

    const response = await fetch(url, {
      method: write ? "POST" : "GET",
      headers: {
        ...this.headers,
        ...(write && { "Content-Type": "application/x-www-form-urlencoded" }),
      },
      body: write ? queryString : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}: ${data.message || "Unknown error"}`);
    }

    return data;
  }

  public async login(): Promise<Client> {
    try {
      const session = loadSessionFromStorage(this.apiSecret);

      if (this.checkIfSessionValid(session.key)) {
        this.sessionKey = session.key;
        return this;
      }

      const { token } = await this.auth.getToken();
      const authUrl = `https://www.last.fm/api/auth/?api_key=${this.apiKey}&token=${token}`;
      console.log("\nPlease visit this URL to authorize:", authUrl);

      const { confirmed } = await prompts({
        type: "confirm",
        name: "confirmed",
        message: "Have you authorized the app in your browser?",
        initial: true,
      });

      if (!confirmed) {
        throw new Error("Authorization was not confirmed by the user.");
      }

      const sessionResponse = await this.auth.getSession({ token });
      this.sessionKey = sessionResponse.session.key;

      return this;
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  }

  private loadSession(): void {
    const session = loadSessionFromStorage(this.apiSecret);

    if (this.checkIfSessionValid(session.key)) {
      this.sessionKey = session.key;
    }
  }

  public saveSession(session: Session): void {
    this.sessionKey = session.key;
    saveSessionToStorage(session, this.apiSecret);
  }

  private checkIfSessionValid(key: string): boolean {
    if (key && key !== "undefined") {
      return true;
    }
    return false;
  }

  public getSessionKey(): string {
    return this.sessionKey ?? "";
  }

  public isLogged(): boolean {
    if (this.apiSecret !== undefined && this.checkIfSessionValid(this.getSessionKey())) {
      return true;
    }
    return false;
  }
}
