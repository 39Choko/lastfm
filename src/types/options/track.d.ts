import { AutocorrectOptions, LimitOptions, MbidOptions, SearchOptions, UsernameOptions } from "../shared";

interface BaseTrackOptions {
  artist: string;
  track: string;
}

export interface TrackAddTagsOptions extends BaseTrackOptions {
  tags: string[];
}

export interface TrackGetCorrectionOptions extends BaseTrackOptions {}

export interface TrackGetInfoOptions
  extends Partial<BaseTrackOptions>,
    MbidOptions,
    UsernameOptions,
    AutocorrectOptions {}

export interface TrackGetSimilarOptions
  extends Partial<BaseTrackOptions>,
    MbidOptions,
    AutocorrectOptions,
    LimitOptions {}

export interface TrackGetTagsOptions extends Partial<BaseTrackOptions>, MbidOptions, AutocorrectOptions {
  user: string;
}

export interface TrackGetTopTagsOptions extends Partial<BaseTrackOptions>, MbidOptions, AutocorrectOptions {}

export interface TrackLoveOptions extends BaseTrackOptions {}

export interface TrackRemoveTagOptions extends BaseTrackOptions {
  tag: string;
}

export interface TrackScrobbleOptions {
  scrobbles: {
    artist: string;
    track: string;
    timestamp: number;
    album?: string;
    context?: string;
    streamId?: string;
    chosenByUser?: 0 | 1;
    trackNumber?: number;
    mbid?: string;
    albumArtist?: string;
    duration?: number;
  }[];
}

export interface TrackSearchOptions extends SearchOptions {
  track: string;
  artist?: string;
}

export interface TrackUnloveOptions extends BaseTrackOptions {}

export interface TrackUpdateNowPlayingOptions extends BaseTrackOptions, MbidOptions {
  album?: string;
  trackNumber?: number;
  duration?: number;
  albumArtist?: string;
}
