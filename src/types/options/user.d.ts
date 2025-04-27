import { LimitOptions, PeriodTime, SearchOptions, TaggingType } from "../index";

interface BaseUserOptions {
  user: string;
}

export interface UserGetFriendsOptions extends BaseUserOptions, SearchOptions {
  recentTracks?: boolean;
}

export interface UserGetInfoOptions extends Partial<BaseUserOptions> {}

export interface UserGetLovedTracksOptions extends BaseUserOptions, SearchOptions {}

export interface UserGetPersonalTagsOptions extends BaseUserOptions, SearchOptions {
  tag: string;
  taggingType: TaggingType | `${TaggingType}`;
}

export interface UserGetRecentTracksOptions extends BaseUserOptions, SearchOptions {
  extended?: boolean;
  from?: EpochTimeStamp;
  to?: EpochTimeStamp;
}

export interface UserGetTopAlbumsOptions extends BaseUserOptions, SearchOptions {
  period?: PeriodTime | `${PeriodTime}`;
}

export interface UserGetTopArtistsOptions extends BaseUserOptions, SearchOptions {
  period?: PeriodTime | `${PeriodTime}`;
}

export interface UserGetTopTagsOptions extends BaseUserOptions, LimitOptions {}

export interface UserGetTopTracksOptions extends BaseUserOptions, SearchOptions {
  period?: PeriodTime | `${PeriodTime}`;
}

export interface UserGetWeeklyAlbumChartOptions extends BaseUserOptions {
  from?: EpochTimeStamp;
  to?: EpochTimeStamp;
}

export interface UserGetWeeklyArtistChartOptions extends BaseUserOptions {
  from?: EpochTimeStamp;
  to?: EpochTimeStamp;
}

export interface UsergetWeeklyChartListOptions extends BaseUserOptions {}

export interface UserGetWeeklyTrackChartOptions extends BaseUserOptions {
  from?: EpochTimeStamp;
  to?: EpochTimeStamp;
}
