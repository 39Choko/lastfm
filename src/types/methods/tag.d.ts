import {
  Image,
  Tag,
  ArtistCore,
  ArtistTopAlbum,
  ArtistTopTrack,
  Wiki,
  RankAttribute,
  SearchAttribute,
  Tags,
  Mbid,
} from "../index";

export interface TagResponse {
  getInfo: TagGetInfoResponse;
  getSimilar: TagGetSimilarResponse;
  getTopAlbums: TagGetTopAlbumsResponse;
  getTopArtists: TagGetTopArtistsResponse;
  getTopTags: TagGetTopTagsResponse;
  getTopTracks: TagGetTopTracksResponse;
  getWeeklyChartList: TagGetWeeklyChartListResponse;
}

interface TagAttribute {
  tag: string;
}

interface TagSearchAttribute extends TagAttribute, SearchAttribute {}

export interface TagGetInfoResponse {
  tag: {
    name: string;
    total: number;
    reach: number;
    wiki: Wiki;
  };
}

interface SimilarTag extends Tag {
  streamable: "0" | "1";
}

export interface TagGetSimilarResponse {
  similartags: {
    tag: SimilarTag[];
    "@attr": {
      tag: string;
    };
  };
}

interface TagTopAlbum extends Mbid {
  name: string;
  url: string;
  artist: ArtistCore;
  image: Image[];
  "@attr": RankAttribute;
}

export interface TagGetTopAlbumsResponse {
  albums: {
    album: TagTopAlbum[];
    "@attr": TagSearchAttribute;
  };
}

interface TagTopArtist extends ArtistCore {
  streamable: "0" | "1";
  image: Image[];
  "@attr": RankAttribute;
}

export interface TagGetTopArtistsResponse {
  topartists: {
    artist: TagTopArtist[];
    "@attr": TagSearchAttribute;
  };
}

export interface TagGetTopTagsResponse {
  toptags: {
    tag: Tags[];
    "@attr": {
      offset: number;
      num_res: number;
      total: number;
    };
  };
}

interface TagTopTrack extends Omit<ArtistTopTrack, "streamable"> {
  duration: string;
  streamable: {
    "#text": "0" | "1";
    fulltrack: "0" | "1";
  };
}

export interface TagGetTopTracksResponse {
  tracks: {
    track: TagTopTrack[];
    "@attr": TagSearchAttribute;
  };
}

interface WeeklyChart {
  "#text": string;
  from: string;
  to: string;
}

export interface TagGetWeeklyChartListResponse {
  weeklychartlist: {
    chart: WeeklyChart[];
    "@attr": TagAttribute;
  };
}
