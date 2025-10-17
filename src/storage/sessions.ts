import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import crypto from "crypto";
import { Session } from "../types";

const CACHE_DIR = path.join(process.cwd(), ".cache/lastfm") || (process.env.CACHE_DIR as string);
const CACHE_PATH = path.join(CACHE_DIR, "session");

function isValidSession(obj: any): obj is Session {
  return (
    typeof obj === "object" &&
    typeof obj.key === "string" &&
    typeof obj.name === "string" &&
    typeof obj.subscriber === "number"
  );
}

function encrypt(text: string, secret: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(secret), iv);
  const encrypted = Buffer.concat([cipher.update(text, "utf-8"), cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(data: string, secret: string): string {
  const [ivHex, encryptedHex] = data.split(":");

  if (!ivHex || !encryptedHex) throw Error("Unable to decrypt the secret");

  const iv = Buffer.from(ivHex, "hex");
  const encryptedText = Buffer.from(encryptedHex, "hex");
  const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(secret), iv);
  const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);
  return decrypted.toString("utf-8");
}

export function saveSessionToStorage(session: Session, secret?: string): void {
  try {
    if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });

    const json = JSON.stringify(session);
    const data = secret && secret.length === 32 ? encrypt(json, secret) : json;

    if (!secret || secret.length !== 32) {
      console.warn("[SessionCache] ⚠️ Session is being saved in plain text (no valid secret).");
    }

    writeFileSync(CACHE_PATH, data, "utf-8");
  } catch (error) {
    console.error("[SessionCache] Error while saving session:", error);
  }
}

export function loadSessionFromStorage(secret?: string): Session {
  try {
    if (!existsSync(CACHE_PATH)) throw new Error("Session file does not exist.");

    const raw = readFileSync(CACHE_PATH, "utf-8");
    const data = secret && secret.length === 32 ? decrypt(raw, secret) : raw;

    if (!secret || secret.length !== 32) {
      console.warn("[SessionCache] ⚠️ Session is being read as plain text (no valid secret).");
    }

    const parsed = JSON.parse(data);
    if (!isValidSession(parsed)) throw new Error("Invalid session format.");
    return parsed;
  } catch (error) {
    console.warn("[SessionCache] Failed to load session, using defaults:", error);
    return {
      key: "undefined",
      name: "undefined",
      subscriber: 0,
    };
  }
}
