import { Image, OpensearchQuery, Tag, TrackCore } from "../shared";

export interface TrackResponse {
  getCorrection: TrackGetCorrectionResponse;
  getInfo: TrackGetInfoResponse;
  getSimilar: TrackGetSimilarResponse;
  getTags: TrackGetTagsResponse;
  getTopTags: TrackTopTagsResponse;
  scrobble: TrackScrobbleResponse;
  search: TrackSearchResponse;
  updateNowPlaying: TrackUpdateNowPlayingResponse;
}

export interface TrackCorrection {
  track: TrackCore;
  "@attr": {
    index: string;
    artistcorrected: string;
    trackcorrected: string;
  };
}

export interface TrackGetCorrectionResponse {
  corrections: {
    correction: TrackCorrection;
  };
}

export interface TrackAlbum {
  artist: string;
  title: string;
  mbid?: string;
  url: string;
  image: Image[];
  "@attr"?: {
    position: string;
  };
}

export interface TrackWiki {
  published: string;
  summary: string;
  content: string;
}

export interface TrackDetail extends TrackCore {
  duration: string;
  streamable: {
    fulltrack: "0" | "1";
    "#text": string;
  };
  listeners: string;
  playcount: string;
  album?: TrackAlbum;
  userplaycount: string;
  userloved: string;
  toptags?: {
    tag: Tag[];
  };
  wiki?: TrackWiki;
}

export interface TrackGetInfoResponse {
  track: TrackDetail;
}

export interface SimilarTrack extends TrackCore {
  match: string;
  streamable: {
    fulltrack: "0" | "1";
    "#text": string;
  };
  image: Image[];
}

export interface TrackGetSimilarResponse {
  similartracks: {
    track: SimilarTrack[];
    "@attr": {
      artist: string;
    };
  };
}

export interface TrackGetTagsResponse {
  tags: {
    tag: Tag[];
    "@attr": {
      artist: string;
      track: string;
    };
  };
}

export interface RankedTag {
  name: string;
  count: number;
  url: string;
}

export interface TrackTopTagsResponse {
  toptags: {
    tag: RankedTag[];
    "@attr": {
      artist: string;
      track: string;
    };
  };
}

export interface Scrobble {
  track: {
    "#text": string;
    corrected: string;
  };
  artist: {
    "#text": string;
    corrected: string;
  };
  album: {
    "#text": string;
    corrected: string;
  };
  albumArtist: {
    "#text": string;
    corrected: string;
  };
  timestamp: string;
  ignoredMessage: {
    "#text": string;
    code: string;
  };
}

export interface TrackScrobbleResponse {
  scrobbles: {
    scrobble: Scrobble | Scrobble[];
    "@attr": {
      accepted: number;
      ignored: number;
    };
  };
}

export interface TrackSearchResult {
  name: string;
  artist: string;
  url: string;
  streamable: "0" | "1";
  listeners: string;
  image: Image[];
  mbid?: string;
}

export interface TrackMatches {
  track: TrackSearchResult[];
}

export interface TrackSearchResponse {
  results: {
    "opensearch:Query": OpensearchQuery;
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    trackmatches: TrackMatches;
    "@attr": {
      for: string;
    };
  };
}

export interface NowPlaying {
  track: {
    "#text": string;
    corrected: string;
  };
  artist: {
    "#text": string;
    corrected: string;
  };
  album: {
    "#text": string;
    corrected: string;
  };
  albumArtist: {
    "#text": string;
    corrected: string;
  };
  ignoredMessage: {
    "#text": string;
    code: string;
  };
}

export interface TrackUpdateNowPlayingResponse {
  nowplaying: NowPlaying;
}
