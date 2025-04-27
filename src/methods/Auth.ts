import { Client } from "../Client";
import { AuthGetMobileSessionOptions, AuthGetSessionOptions, AuthResponse } from "../types";

export class Auth {
  constructor(private client: Client) {}

  /**
   * Fetch an unathorized request token for an API account. This is step 2 of the authentication process for desktop
   * applications. Web applications do not need to use this service.
   *
   * @link https://www.last.fm/api/show/auth.getToken
   */
  public async getToken(): Promise<AuthResponse["getToken"]> {
    const req: AuthResponse["getToken"] = await this.client.request("auth.getToken", {}, true);

    return req;
  }

  /**
   * Fetch a session key for a user. The third step in the authentication process. See the authentication how-to for
   * more information.
   *
   * @link https://www.last.fm/api/show/auth.getSession
   */
  public async getSession(options: AuthGetSessionOptions): Promise<AuthResponse["getSession"]> {
    const { token } = options;

    const req: AuthResponse["getSession"] = await this.client.request("auth.getSession", { token }, true);

    this.client.saveSession({
      key: req.session.key,
      name: req.session.name,
      subscriber: req.session.subscriber,
    });
    return req;
  }

  /**
   * Create a web service session for a user. Used for authenticating a user when the password can be inputted by the
   * user. Accepts email address as well, so please use the username supplied in the output.
   *
   * @deprecated This method is deprecated and will be removed in future versions. Use getSession instead.
   * @link https://www.last.fm/api/show/auth.getMobileSession
   */
  public async getMobileSession(options: AuthGetMobileSessionOptions): Promise<AuthResponse["getMobileSession"]> {
    const { username, password } = options;

    const req: AuthResponse["getMobileSession"] = await this.client.request(
      "auth.getMobileSession",
      { password, username },
      true,
    );

    this.client.saveSession({
      key: req.session.key,
      name: req.session.name,
      subscriber: req.session.subscriber,
    });
    return req;
  }
}
