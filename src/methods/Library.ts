import { Client } from "../Client";
import { LibraryGetArtistsOptions, LibraryResponse } from "../types";

export class Library {
  constructor(private client: Client) {}

  /**
   * A paginated list of all the artists in a user's library, with play counts and tag counts.
   *
   * @link https://www.last.fm/api/show/library.getArtists
   */
  public async getArtists(options: LibraryGetArtistsOptions): Promise<LibraryResponse["getArtists"]> {
    const { user, page = 1, limit = 50 } = options;

    const req: LibraryResponse["getArtists"] = await this.client.request("library.getArtists", {
      user,
      page,
      limit,
    });

    return req;
  }
}
