import { Client } from "../Client";
import {
  TagGetInfoOptions,
  TagGetSimilarOptions,
  TagGetWeeklyChartListOptions,
  TagPaginationOptions,
  TagResponse,
} from "../types";

export class Tag {
  constructor(private client: Client) {}

  /**
   * Get the metadata for a tag.
   *
   * @link https://www.last.fm/api/show/tag.getInfo
   */
  public async getInfo(options: TagGetInfoOptions): Promise<TagResponse["getInfo"]> {
    const { tag, lang = "us" } = options;

    const req: TagResponse["getInfo"] = await this.client.request("tag.getInfo", {
      tag,
      lang,
    });

    return req;
  }

  /**
   * Search for tags similar to this one. Returns tags ranked by similarity, based on listening data.
   *
   * @link https://www.last.fm/api/show/tag.getSimilar
   */
  public async getSimilar(options: TagGetSimilarOptions): Promise<TagResponse["getSimilar"]> {
    const { tag } = options;

    const req: TagResponse["getSimilar"] = await this.client.request("tag.getSimilar", {
      tag,
    });

    return req;
  }

  /**
   * Get the top albums tagged by this tag, ordered by tag count.
   *
   * @link https://www.last.fm/api/show/tag.getTopAlbums
   */
  public async getTopAlbums(options: TagPaginationOptions): Promise<TagResponse["getTopAlbums"]> {
    const { tag, limit = 50, page = 1 } = options;

    const req: TagResponse["getTopAlbums"] = await this.client.request("tag.getTopAlbums", {
      tag,
      limit,
      page,
    });

    return req;
  }

  /**
   * Get the top artists tagged by this tag, ordered by tag count.
   *
   * @link https://www.last.fm/api/show/tag.getTopArtists
   */
  public async getTopArtists(options: TagPaginationOptions): Promise<TagResponse["getTopArtists"]> {
    const { tag, limit = 50, page = 1 } = options;

    const req: TagResponse["getTopArtists"] = await this.client.request("tag.getTopArtists", {
      tag,
      limit,
      page,
    });

    return req;
  }

  /**
   * Fetches the top global tags on Last.fm, sorted by popularity (number of times used).
   *
   * @link https://www.last.fm/api/show/tag.getTopTags
   */
  public async getTopTags(): Promise<TagResponse["getTopTags"]> {
    const req: TagResponse["getTopTags"] = await this.client.request("tag.getTopTags", {});

    return req;
  }

  /**
   * Get the top tracks tagged by this tag, ordered by tag count.
   *
   * @link https://www.last.fm/api/show/tag.getTopTracks
   */
  public async getTopTracks(options: TagPaginationOptions): Promise<TagResponse["getTopTracks"]> {
    const { tag, limit = 50, page = 1 } = options;

    const req: TagResponse["getTopTracks"] = await this.client.request("tag.getTopTracks", {
      tag,
      limit,
      page,
    });

    return req;
  }

  /**
   * Get a list of available charts for this tag, expressed as date ranges which can be sent to the chart services.
   *
   * @link https://www.last.fm/api/show/tag.getWeeklyChartList
   */
  public async getWeeklyChartList(options: TagGetWeeklyChartListOptions): Promise<TagResponse["getWeeklyChartList"]> {
    const { tag } = options;

    const req: TagResponse["getWeeklyChartList"] = await this.client.request("tag.getWeeklyChartList", {
      tag,
    });

    return req;
  }
}
