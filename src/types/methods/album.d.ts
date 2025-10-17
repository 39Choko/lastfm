import { Image, Tag, OpensearchQuery, ArtistCore, Tags, RankAttribute, Mbid } from "../index";

interface AlbumAttribute {
  artist: string;
  album: string;
}

export interface AlbumResponse {
  getInfo: AlbumGetInfoResponse;
  getTags: AlbumGetTagsResponse;
  getTopTags: AlbumTopTagsResponse;
  search: AlbumSearchResponse;
}

interface AlbumGetInfoResponse {
  album: Album;
}

interface AlbumGetTagsResponse {
  tags: {
    tag: Tag[];
    "@attr": AlbumAttribute;
  };
}

interface AlbumTopTagsResponse {
  toptags: {
    tag: Tags[];
    "@attr": AlbumAttribute;
  };
}

interface AlbumSearchResponse {
  results: {
    "opensearch:Query": OpensearchQuery;
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    albummatches: SearchResultAlbum[];
    "@attr": {
      for: string;
    };
  };
}

interface Track extends Mbid {
  name: string;
  duration: string;
  url: string;
  streamable: {
    fulltrack: "0" | "1";
    "#text": string;
  };
  artist: ArtistCore;
  "@attr": RankAttribute;
}

interface SearchResultAlbum {
  name: string;
  artist: string;
  url: string;
  image: Image[];
  streamable: string;
}

interface Album extends Mbid {
  name: string;
  artist: string;
  id: string;
  url: string;
  releasedate: string;
  image: Image[];
  listeners: string;
  playcount: string;
  tags: Tag[];
  tracks: Track[];
}
