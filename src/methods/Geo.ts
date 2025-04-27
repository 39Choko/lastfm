import { Client } from "../Client";
import { GeoGetTopArtistsOptions, GeoGetTopTracksOptions, GeoResponse } from "../types";

export class Geo {
  constructor(private client: Client) {}

  /**
   * Get the most popular artists on Last.fm by country
   *
   * @link https://www.last.fm/api/show/geo.getTopArtists
   */
  public async getTopArtists(params: GeoGetTopArtistsOptions): Promise<GeoResponse["getTopArtists"]> {
    const { country, page = 1, limit = 50 } = params;

    const req: GeoResponse["getTopArtists"] = await this.client.request("geo.getTopArtists", {
      country,
      page,
      limit,
    });

    return req;
  }

  /**
   * Get the most popular tracks on Last.fm last week by country
   *
   * @link https://www.last.fm/api/show/geo.getTopTracks
   */
  public async getTopTracks(options: GeoGetTopTracksOptions): Promise<GeoResponse["getTopTracks"]> {
    const { country, location, page = 1, limit = 50 } = options;

    const req: GeoResponse["getTopTracks"] = await this.client.request("geo.getTopTracks", {
      country,
      location,
      page,
      limit,
    });

    return req;
  }
}
