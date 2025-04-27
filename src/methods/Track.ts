import { Client } from "../Client";
import { validateArtistTrackMbid } from "../lib/verification";
import {
  TrackAddTagsOptions,
  TrackGetCorrectionOptions,
  TrackGetInfoOptions,
  TrackGetSimilarOptions,
  TrackGetTagsOptions,
  TrackGetTopTagsOptions,
  TrackLoveOptions,
  TrackRemoveTagOptions,
  TrackResponse,
  TrackScrobbleOptions,
  TrackSearchOptions,
  TrackUnloveOptions,
  TrackUpdateNowPlayingOptions,
} from "../types";

export class Track {
  constructor(private client: Client) {}

  /**
   * Tag an album using a list of user supplied tags.
   *
   * @link https://www.last.fm/api/show/track.addTags
   */
  public async addTags(options: TrackAddTagsOptions): Promise<void> {
    const { artist, track, tags } = options;

    await this.client.request(
      "track.addTags",
      {
        sk: this.client.getSessionKey(),
        artist,
        track,
        tags: tags.slice(0, 10).join(","),
      },
      true,
      true,
    );
  }

  /**
   * Use the last.fm corrections data to check whether the supplied track has a correction to a canonical track.
   *
   * @link https://www.last.fm/api/show/track.getCorrection
   */
  public async getCorrection(options: TrackGetCorrectionOptions): Promise<TrackResponse["getCorrection"]> {
    const { artist, track } = options;

    const req: TrackResponse["getCorrection"] = await this.client.request("track.getCorrection", {
      artist,
      track,
    });

    return req;
  }

  /**
   * Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
   *
   * @link https://www.last.fm/api/show/track.getInfo
   */
  public async getInfo(options: TrackGetInfoOptions): Promise<TrackResponse["getInfo"]> {
    const {
      artist = undefined,
      track = undefined,
      mbid = undefined,
      username = undefined,
      autocorrect = undefined,
    } = options;

    validateArtistTrackMbid({ artist, mbid, track });

    const req: TrackResponse["getInfo"] = await this.client.request("track.getInfo", {
      artist,
      track,
      mbid,
      username,
      autocorrect,
    });

    return req;
  }

  /**
   * Get the metadata for a track on Last.fm using the artist/track name or a musicbrainz id.
   *
   * @link https://www.last.fm/api/show/track.getSimilar
   */
  public async getSimilar(options: TrackGetSimilarOptions): Promise<TrackResponse["getSimilar"]> {
    const {
      artist = undefined,
      track = undefined,
      mbid = undefined,
      limit = undefined,
      autocorrect = undefined,
    } = options;

    const req: TrackResponse["getSimilar"] = await this.client.request("track.getSimilar", {
      artist,
      track,
      mbid,
      limit,
      autocorrect,
    });

    return req;
  }

  /**
   * Get the tags applied by an individual user to a track on Last.fm.
   *
   * @link https://www.last.fm/api/show/track.getTags
   */
  public async getTags(options: TrackGetTagsOptions): Promise<TrackResponse["getTags"]> {
    const { user, artist = undefined, track = undefined, mbid = undefined, autocorrect = undefined } = options;
    validateArtistTrackMbid({ artist, mbid, track });

    const req: TrackResponse["getTags"] = await this.client.request("track.getTags", {
      artist,
      track,
      mbid,
      user,
      autocorrect,
    });

    return req;
  }

  /**
   * Get the top tags for this track on Last.fm, ordered by tag count.
   *
   * @link https://www.last.fm/api/show/track.getTopTags
   */
  public async getTopTags(options: TrackGetTopTagsOptions): Promise<TrackResponse["getTopTags"]> {
    const { artist = undefined, track = undefined, mbid = undefined, autocorrect = undefined } = options;

    const req: TrackResponse["getTopTags"] = await this.client.request("track.getTopTags", {
      artist,
      track,
      mbid,
      autocorrect,
    });

    return req;
  }

  /**
   * Love a track for a user profile.
   *
   * @link https://www.last.fm/api/show/track.love
   */
  public async love(options: TrackLoveOptions): Promise<void> {
    const { artist, track } = options;

    await this.client.request(
      "track.love",
      {
        sk: this.client.getSessionKey(),
        artist,
        track,
      },
      true,
      true,
    );
  }

  /**
   * Remove a user's tag from a track.
   *
   * @link https://www.last.fm/api/show/track.removeTag
   */
  public async removeTag(options: TrackRemoveTagOptions): Promise<void> {
    const { artist, track, tag } = options;

    await this.client.request(
      "track.removeTag",
      {
        sk: this.client.getSessionKey(),
        artist,
        track,
        tag,
      },
      true,
      true,
    );
  }

  /**
   * Used to add a track-play to a user's profile
   *
   * @link https://www.last.fm/api/show/track.scrobble
   */
  public async scrobble(options: TrackScrobbleOptions): Promise<TrackResponse["scrobble"]> {
    const { scrobbles } = options;

    if (!scrobbles || scrobbles.length === 0 || scrobbles.length > 50) {
      throw new Error("Scrobbles array must contain between 1 and 50 scrobble objects.");
    }

    const params: any = {};

    scrobbles.forEach((scrobble, index) => {
      const prefix = `[${index}]`;

      params[`artist${prefix}`] = scrobble.artist;
      params[`track${prefix}`] = scrobble.track;
      params[`timestamp${prefix}`] = scrobble.timestamp;

      if (scrobble.album !== undefined) params[`album${prefix}`] = scrobble.album;
      if (scrobble.context !== undefined) params[`context${prefix}`] = scrobble.context;
      if (scrobble.streamId !== undefined) params[`streamId${prefix}`] = scrobble.streamId;
      if (scrobble.chosenByUser !== undefined) params[`chosenByUser${prefix}`] = scrobble.chosenByUser;
      if (scrobble.trackNumber !== undefined) params[`trackNumber${prefix}`] = scrobble.trackNumber;
      if (scrobble.mbid !== undefined) params[`mbid${prefix}`] = scrobble.mbid;
      if (scrobble.albumArtist !== undefined) params[`albumArtist${prefix}`] = scrobble.albumArtist;
      if (scrobble.duration !== undefined) params[`duration${prefix}`] = scrobble.duration;
    });

    const req: TrackResponse["scrobble"] = await this.client.request(
      "track.scrobble",
      {
        sk: this.client.getSessionKey(),
        ...params,
      },
      true,
      true,
    );

    return req;
  }

  /**
   * Search for a track by track name Returns artist matches sorted by relevance.
   *
   * @link https://www.last.fm/api/show/artist.search
   */
  public async search(options: TrackSearchOptions): Promise<TrackResponse["search"]> {
    const { track, artist = undefined, limit = 30, page = 1 } = options;

    const req: TrackResponse["search"] = await this.client.request("track.search", {
      track,
      artist,
      limit,
      page,
    });

    return req;
  }

  /**
   * Unlove a track for a user profile.
   *
   * @link https://www.last.fm/api/show/track.unlove
   */
  public async unlove(options: TrackUnloveOptions): Promise<void> {
    const { artist, track } = options;

    await this.client.request(
      "track.unlove",
      {
        sk: this.client.getSessionKey(),
        artist,
        track,
      },
      true,
      true,
    );
  }

  /**
   * Unlove a track for a user profile.
   *
   * @link https://www.last.fm/api/show/track.updateNowPlaying
   */
  public async updateNowPlaying(options: TrackUpdateNowPlayingOptions): Promise<TrackResponse["updateNowPlaying"]> {
    const {
      artist,
      track,
      album = undefined,
      albumArtist = undefined,
      duration = undefined,
      mbid = undefined,
      trackNumber = undefined,
    } = options;

    const req: TrackResponse["updateNowPlaying"] = await this.client.request(
      "track.updateNowPlaying",
      {
        sk: this.client.getSessionKey(),
        artist,
        track,
        album,
        albumArtist,
        duration,
        mbid,
        trackNumber,
      },
      true,
      true,
    );

    return req;
  }
}
