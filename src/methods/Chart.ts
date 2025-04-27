import { Client } from "../Client";
import { ChartPaginationOptions, ChartResponse } from "../types";

export class Chart {
  constructor(private client: Client) {}

  /**
   * Get the top artists chart.
   *
   * @link https://www.last.fm/api/show/chart.getTopArtists
   */
  public async getTopArtists(options: ChartPaginationOptions): Promise<ChartResponse["getTopArtists"]> {
    const { limit = 50, page = 1 } = options;

    const req: ChartResponse["getTopArtists"] = await this.client.request("chart.getTopArtists", {
      limit,
      page,
    });

    return req;
  }

  /**
   * Get the top artists chart
   *
   * @link https://www.last.fm/api/show/chart.getTopTags
   */
  public async getTopTags(options: ChartPaginationOptions): Promise<ChartResponse["getTopTags"]> {
    const { limit = 50, page = 1 } = options;

    const req: ChartResponse["getTopTags"] = await this.client.request("chart.getTopTags", {
      limit,
      page,
    });

    return req;
  }

  /**
   * Get the top tracks chart
   *
   * @link https://www.last.fm/api/show/chart.getTopTracks
   */
  public async getTopTracks(options: ChartPaginationOptions): Promise<ChartResponse["getTopTracks"]> {
    const { limit = 50, page = 1 } = options;

    const req: ChartResponse["getTopTracks"] = await this.client.request("chart.getTopTracks", {
      limit,
      page,
    });

    return req;
  }
}
