import { Client } from "../Client";
import { validateArtistAlbumMbid } from "../lib/verification";
import {
  AlbumResponse,
  AlbumAddTagsOptions,
  AlbumGetInfoOptions,
  AlbumGetTagsOptions,
  AlbumGetTopTagsOptions,
  AlbumRemoveTagOptions,
  AlbumSearchOptions,
} from "../types";

export class Album {
  constructor(private client: Client) {}

  /**
   * Tag an album using a list of user supplied tags.
   *
   * @link https://www.last.fm/api/show/album.addTags
   */
  public async addTags(options: AlbumAddTagsOptions): Promise<void> {
    const { artist, album, tags } = options;

    await this.client.request(
      "album.addTags",
      {
        sk: this.client.getSessionKey(),
        artist,
        album,
        tags: tags.slice(0, 10).join(","),
      },
      true,
      true,
    );
  }

  /**
   * Get the metadata and tracklist for an album on Last.fm using the album name or a musicbrainz id.
   *
   * @link https://www.last.fm/api/show/album.getInfo
   */
  public async getInfo(options: AlbumGetInfoOptions): Promise<AlbumResponse["getInfo"]> {
    validateArtistAlbumMbid(options);
    const { artist, album, mbid = undefined, autocorrect = undefined, username = undefined, lang = "en" } = options;

    const req: AlbumResponse["getInfo"] = await this.client.request("album.getInfo", {
      artist,
      album,
      mbid,
      autocorrect,
      username,
      lang,
    });

    return req;
  }

  /**
   * Get the tags applied by an individual user to an album on Last.fm.
   *
   * @link https://www.last.fm/api/show/album.getTags
   */
  public async getTags(options: AlbumGetTagsOptions): Promise<AlbumResponse["getTags"]> {
    validateArtistAlbumMbid(options);
    const { artist, album, user, mbid = undefined, autocorrect = undefined, lang = "en" } = options;

    const req: AlbumResponse["getTags"] = await this.client.request("album.getTags", {
      artist,
      album,
      user,
      mbid,
      autocorrect,
      lang,
    });
    return req;
  }

  /**
   * Get the top tags for an album on Last.fm.
   *
   * @link https://www.last.fm/api/show/album.getTopTags
   */
  public async getTopTags(options: AlbumGetTopTagsOptions): Promise<AlbumResponse["getTopTags"]> {
    validateArtistAlbumMbid(options);
    const { artist, album, mbid = undefined, autocorrect = undefined } = options;

    const req: AlbumResponse["getTopTags"] = await this.client.request("album.getTopTags", {
      artist,
      album,
      mbid,
      autocorrect,
    });
    return req;
  }

  /**
   * Remove a user's tag from an album.
   *
   * @link https://www.last.fm/api/show/album.removeTag
   */
  public async removeTag(options: AlbumRemoveTagOptions): Promise<void> {
    const { artist, album, tag } = options;

    await this.client.request(
      "album.removeTag",
      {
        sk: this.client.getSessionKey(),
        artist,
        album,
        tag,
      },
      true,
      true,
    );
  }

  /**
   * Search for an album by name.
   *
   * @link https://www.last.fm/api/show/album.search
   */
  public async search(options: AlbumSearchOptions): Promise<AlbumResponse["search"]> {
    const { album, limit = 30, page = 1 } = options;

    const req: AlbumResponse["search"] = await this.client.request("album.search", {
      album,
      limit,
      page,
    });

    return req;
  }
}
