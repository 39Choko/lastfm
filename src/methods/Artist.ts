import { Client } from "../Client";
import { booleanToNumber, validateArtistMbid } from "../lib/verification";
import {
  type ArtistResponse,
  type ArtistAddTagsOptions,
  type ArtistGetCorrectionOptions,
  type ArtistGetInfoOptions,
  type ArtistGetSimilarOptions,
  type ArtistGetTagsOptions,
  type ArtistGetTopAlbumsOptions,
  type ArtistGetTopTagsOptions,
  type ArtistGetTopTracksOptions,
  type ArtistRemoveTagOptions,
  type ArtistSearchOptions,
} from "../types";

export class Artist {
  constructor(private client: Client) {}

  /**
   * Tag an artist with one or more user supplied tags.
   *
   * @link https://www.last.fm/api/show/artist.addTags
   */
  public async addTags(options: ArtistAddTagsOptions): Promise<void> {
    const { artist, tags } = options;

    await this.client.request(
      "artist.addTags",
      {
        sk: this.client.getSessionKey(),
        artist,
        tags: tags.slice(0, 10).join(","),
      },
      true,
      true,
    );
  }

  /**
   * Use the last.fm corrections data to check whether the supplied artist has a correction to a canonical artist
   *
   * @link https://www.last.fm/api/show/artist.getCorrection
   */
  public async getCorrection(options: ArtistGetCorrectionOptions): Promise<ArtistResponse["getCorrection"]> {
    const { artist } = options;

    const req: ArtistResponse["getCorrection"] = await this.client.request("artist.getCorrection", {
      artist,
    });

    return req;
  }

  /**
   * Get the metadata for an artist. Includes biography, truncated at 300 characters.
   *
   * @link https://www.last.fm/api/show/artist.getInfo
   */
  public async getInfo(options: ArtistGetInfoOptions): Promise<ArtistResponse["getInfo"]> {
    const { artist = undefined, mbid = undefined, autocorrect = false, username = undefined, lang = "en" } = options;
    validateArtistMbid({ artist, mbid });

    const req: ArtistResponse["getInfo"] = await this.client.request("artist.getInfo", {
      artist,
      mbid,
      autocorrect: booleanToNumber(autocorrect),
      username,
      lang,
    });

    return req;
  }

  /**
   * Get all the artists similar to this artist
   *
   * @link https://www.last.fm/api/show/artist.getSimilar
   */
  public async getSimilar(options: ArtistGetSimilarOptions): Promise<ArtistResponse["getSimilar"]> {
    const { artist = undefined, mbid = undefined, limit = undefined, autocorrect = false } = options;
    validateArtistMbid({ artist, mbid });

    const req: ArtistResponse["getSimilar"] = await this.client.request("artist.getSimilar", {
      artist,
      mbid,
      limit,
      autocorrect: booleanToNumber(autocorrect),
    });
    return req;
  }

  /**
   * Get the tags applied by an individual user to an artist on Last.fm
   *
   * @link https://www.last.fm/api/show/artist.getTags
   */
  public async getTags(options: ArtistGetTagsOptions): Promise<ArtistResponse["getTags"]> {
    const { user, artist = undefined, mbid = undefined, autocorrect = false, lang = "en" } = options;
    validateArtistMbid({ artist, mbid });

    const req: ArtistResponse["getTags"] = await this.client.request("artist.getTags", {
      user,
      artist,
      mbid,
      autocorrect: booleanToNumber(autocorrect),
      lang,
    });
    return req;
  }

  /**
   * Get the top albums for an artist on Last.fm, ordered by popularity.
   *
   * @link https://www.last.fm/api/show/artist.getTopAlbums
   */
  public async getTopAlbums(options: ArtistGetTopAlbumsOptions): Promise<ArtistResponse["getTopAlbums"]> {
    const { artist = undefined, mbid = undefined, autocorrect = false, page = 1, limit = 50 } = options;
    validateArtistMbid({ artist, mbid });

    const req: ArtistResponse["getTopAlbums"] = await this.client.request("artist.getTopAlbums", {
      artist,
      mbid,
      autocorrect: booleanToNumber(autocorrect),
      page,
      limit,
    });
    return req;
  }

  /**
   * Get the top tags for an artist on Last.fm, ordered by popularity.
   *
   * @link https://www.last.fm/api/show/artist.getTopTags
   */
  public async getTopTags(options: ArtistGetTopTagsOptions): Promise<ArtistResponse["getTopTags"]> {
    const { artist = undefined, mbid = undefined, autocorrect = false } = options;
    validateArtistMbid({ artist, mbid });

    const req: ArtistResponse["getTopTags"] = await this.client.request("artist.getTopTags", {
      artist,
      mbid,
      autocorrect: booleanToNumber(autocorrect),
    });
    return req;
  }

  /**
   * Get the top tracks by an artist on Last.fm, ordered by popularity
   *
   * @link https://www.last.fm/api/show/artist.getTopAlbums
   */
  public async getTopTracks(options: ArtistGetTopTracksOptions): Promise<ArtistResponse["getTopTracks"]> {
    const { artist = undefined, mbid = undefined, autocorrect = false, page = 1, limit = 50 } = options;
    validateArtistMbid({ artist, mbid });

    const req: ArtistResponse["getTopTracks"] = await this.client.request("artist.getTopTracks", {
      artist,
      mbid,
      autocorrect: booleanToNumber(autocorrect),
      page,
      limit,
    });
    return req;
  }

  /**
   * Remove a user's tag from an artist.
   *
   * @link https://www.last.fm/api/show/artist.removeTag
   */
  public async removeTag(options: ArtistRemoveTagOptions): Promise<void> {
    const { artist, tag } = options;

    await this.client.request(
      "artist.removeTag",
      {
        sk: this.client.getSessionKey(),
        artist,
        tag,
      },
      true,
      true,
    );
  }

  /**
   * Search for an artist by name. Returns artist matches sorted by relevance.
   *
   * @link https://www.last.fm/api/show/artist.search
   */
  public async search(options: ArtistSearchOptions): Promise<ArtistResponse["search"]> {
    const { artist, limit = 30, page = 1 } = options;

    const req: ArtistResponse["search"] = await this.client.request("artist.search", {
      artist,
      limit,
      page,
    });

    return req;
  }
}
