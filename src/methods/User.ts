import { Client } from "../Client";
import { booleanToNumber } from "../lib/verification";
import {
  TaggingType,
  UserGetFriendsOptions,
  UserGetInfoOptions,
  UserGetLovedTracksOptions,
  UserGetPersonalTagsOptions,
  UserGetRecentTracksOptions,
  UserGetTopAlbumsOptions,
  UserGetTopArtistsOptions,
  UserGetTopTagsOptions,
  UserGetTopTracksOptions,
  UserGetWeeklyAlbumChartOptions,
  UserGetWeeklyArtistChartOptions,
  UsergetWeeklyChartListOptions,
  UserGetWeeklyTrackChartOptions,
  UserResponse,
} from "../types";

export class User {
  constructor(private client: Client) {}

  /**
   * Get a list of the user's friends on Last.fm.
   *
   * @link https://www.last.fm/api/show/user.getFriends
   */
  public async getFriends(options: UserGetFriendsOptions): Promise<UserResponse["getFriends"]> {
    const { user, limit = 50, recentTracks = false, page = 1 } = options;

    const req: UserResponse["getFriends"] = await this.client.request("user.getFriends", {
      user,
      limit,
      recenttracks: booleanToNumber(recentTracks),
      page,
    });

    return req;
  }

  /**
   * Get information about a user profile.
   *
   * @link https://www.last.fm/api/show/user.getInfo
   */
  public async getInfo(options: UserGetInfoOptions): Promise<UserResponse["getInfo"]> {
    const { user = undefined } = options;

    if (!user && !this.client.isLogged()) {
      throw new Error("You need to be authenticated to continue, or specify a user.");
    }

    const req: UserResponse["getInfo"] = await this.client.request("user.getInfo", {
      user,
    });

    return req;
  }

  /**
   * Get the last 50 tracks loved by a user.
   *
   * @link https://www.last.fm/api/show/user.getLovedTracks
   */
  public async getLovedTracks(options: UserGetLovedTracksOptions): Promise<UserResponse["getLovedTracks"]> {
    const { user, limit = 1, page = 50 } = options;

    const req: UserResponse["getLovedTracks"] = await this.client.request("user.getLovedTracks", {
      user,
      limit,
      page,
    });

    return req;
  }

  /**
   * Get the user's personal tags
   *
   * @link https://www.last.fm/api/show/user.getPersonalTags
   */
  public async getPersonalTags(options: UserGetPersonalTagsOptions): Promise<UserResponse["getPersonalTags"]> {
    const { tag, taggingType, user, limit = 50, page = 1 } = options;

    if (!Object.values(TaggingType).includes(taggingType as TaggingType)) {
      throw new Error("Invalid taggingType");
    }

    const req: UserResponse["getPersonalTags"] = await this.client.request("user.getPersonalTags", {
      user,
      tag,
      taggingtype: taggingType,
      limit,
      page,
    });

    return req;
  }

  /**
   * Get a list of the recent tracks listened to by this user
   *
   * @link https://www.last.fm/api/show/user.getRecentTracks
   */
  public async getRecentTracks(options: UserGetRecentTracksOptions): Promise<UserResponse["getRecentTracks"]> {
    const { user, extended = false, from = undefined, to = undefined, limit = 50, page = 1 } = options;

    if (limit > 200) throw new Error("Your limit is too high.");

    const req: UserResponse["getRecentTracks"] = await this.client.request("user.getRecentTracks", {
      user,
      extended: booleanToNumber(extended),
      from,
      to,
      limit,
      page,
    });

    return req;
  }

  /**
   * Get the top albums listened to by a user.
   *
   * @link https://www.last.fm/api/show/user.getTopAlbums
   */
  public async getTopAlbums(options: UserGetTopAlbumsOptions): Promise<UserResponse["getTopAlbums"]> {
    const { user, limit = 50, page = 1, period = "overall" } = options;

    const req: UserResponse["getTopAlbums"] = await this.client.request("user.getTopAlbums", {
      user,
      limit,
      page,
      period,
    });

    return req;
  }

  /**
   * Get the top artists listened to by a user.
   *
   * @link https://www.last.fm/api/show/user.getTopArtists
   */
  public async getTopArtists(options: UserGetTopArtistsOptions): Promise<UserResponse["getTopArtists"]> {
    const { user, limit = 50, page = 1, period = "overall" } = options;

    const req: UserResponse["getTopArtists"] = await this.client.request("user.getTopArtists", {
      user,
      limit,
      page,
      period,
    });

    return req;
  }

  /**
   * Get the top tags used by this user.
   *
   * @link https://www.last.fm/api/show/user.getTopTags
   */
  public async getTopTags(options: UserGetTopTagsOptions): Promise<UserResponse["getTopTags"]> {
    const { user, limit = 50 } = options;

    const req: UserResponse["getTopTags"] = await this.client.request("user.getTopTags", {
      user,
      limit,
    });

    return req;
  }

  /**
   * Get the top tracks listened to by a user.
   *
   * @link https://www.last.fm/api/show/user.getTopTracks
   */
  public async getTopTracks(options: UserGetTopTracksOptions): Promise<UserResponse["getTopTracks"]> {
    const { user, limit = 50, page = 1, period = "overall" } = options;

    const req: UserResponse["getTopTracks"] = await this.client.request("user.getTopTracks", {
      user,
      limit,
      page,
      period,
    });

    return req;
  }

  /**
   * Get an album chart for a user profile, for a given date range. If no date range is supplied, it will return the
   * most recent album chart for this user.
   *
   * @link https://www.last.fm/api/show/user.getWeeklyAlbumChart
   */
  public async getWeeklyAlbumChart(
    options: UserGetWeeklyAlbumChartOptions,
  ): Promise<UserResponse["getWeeklyAlbumChart"]> {
    const { user, from = undefined, to = undefined } = options;

    const req: UserResponse["getWeeklyAlbumChart"] = await this.client.request("user.getWeeklyAlbumChart", {
      user,
      from,
      to,
    });

    return req;
  }

  /**
   * Get an artist chart for a user profile, for a given date range. If no date range is supplied, it will return the
   * most recent artist chart for this user.
   *
   * @link https://www.last.fm/api/show/user.getWeeklyArtistChart
   */
  public async getWeeklyArtistChart(
    options: UserGetWeeklyArtistChartOptions,
  ): Promise<UserResponse["getWeeklyArtistChart"]> {
    const { user, from = undefined, to = undefined } = options;

    const req: UserResponse["getWeeklyArtistChart"] = await this.client.request("user.getWeeklyArtistChart", {
      user,
      from,
      to,
    });

    return req;
  }

  /**
   * Get a list of available charts for this user, expressed as date ranges which can be sent to the chart services.
   *
   * @link https://www.last.fm/api/show/user.getWeeklyChartList
   */
  public async getWeeklyChartList(options: UsergetWeeklyChartListOptions): Promise<UserResponse["getWeeklyChartList"]> {
    const { user } = options;

    const req: UserResponse["getWeeklyChartList"] = await this.client.request("user.getWeeklyChartList", {
      user,
    });

    return req;
  }

  /**
   * Get a track chart for a user profile, for a given date range. If no date range is supplied, it will return the most
   * recent track chart for this user.
   *
   * @link https://www.last.fm/api/show/user.getWeeklyTrackChart
   */
  public async getWeeklyTrackChart(
    options: UserGetWeeklyTrackChartOptions,
  ): Promise<UserResponse["getWeeklyTrackChart"]> {
    const { user, from = undefined, to = undefined } = options;

    const req: UserResponse["getWeeklyTrackChart"] = await this.client.request("user.getWeeklyTrackChart", {
      user,
      from,
      to,
    });

    return req;
  }
}
