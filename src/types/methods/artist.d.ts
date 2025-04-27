import {
  ArtistCore,
  Tag,
  ArtistTopAlbum,
  ArtistTopTrack,
  Image,
  OpensearchQuery,
  Tags,
  SearchAttribute,
} from "../index";

export interface ArtistResponse {
  getCorrection: ArtistGetCorrectionResponse;
  getInfo: ArtistGetInfoResponse;
  getSimilar: ArtistGetSimilarResponse;
  getTags: ArtistGetTagsResponse;
  getTopAlbums: ArtistGetTopAlbumsResponse;
  getTopTags: ArtistTopTagsResponse;
  getTopTracks: ArtistGetTopTracksResponse;
  search: ArtistSearchResponse;
}

interface ArtistAttribute {
  artist: string;
}

interface ArtistSearchAttribute extends ArtistAttribute, SearchAttribute {}

interface ArtistGetCorrectionResponse {
  corrections: {
    correction: {
      artist: ArtistCore;
      "@attr": {
        index: string;
      };
    };
  };
}

interface ArtistGetInfoResponse {
  artist: ArtistCore & {
    image: Image[];
    streamable: "0" | "1";
    stats: ArtistStats;
    similar: {
      artist: ArtistCore[] &
        {
          image: Image[];
        }[];
    };
    tags: {
      tag: Tag[];
    };
    bio: ArtistBio;
  };
}

interface ArtistGetSimilarResponse {
  similarartists: {
    artist: ArtistCore[] &
      {
        match: string;
        image: Image[];
        streamable: "0" | "1";
      }[];
    "@attr": ArtistAttribute;
  };
}

interface ArtistGetTagsResponse {
  tags: {
    tag: Tag[];
    "@attr": ArtistAttribute;
  };
}

interface ArtistGetTopAlbumsResponse {
  topalbums: {
    album: ArtistTopAlbum[];
    "@attr": ArtistSearchAttribute;
  };
}

interface ArtistTopTagsResponse {
  toptags: {
    tag: Tags[];
    "@attr": ArtistAttribute;
  };
}

interface ArtistGetTopTracksResponse {
  toptracks: {
    track: ArtistTopTrack[];
    "@attr": ArtistSearchAttribute;
  };
}

interface ArtistSearchResponse {
  results: {
    "opensearch:Query": OpensearchQuery;
    "opensearch:totalResults": string;
    "opensearch:startIndex": string;
    "opensearch:itemsPerPage": string;
    artistmatches: ArtistSearchResult[];
    "@attr": {
      for: string;
    };
  };
}

interface ArtistStats {
  listeners: string;
  plays: string;
}

interface ArtistBio {
  published: string;
  links: {
    "#text": string;
    rel: string;
    href: string;
  };
  summary: string;
  content: string;
}

interface ArtistSearchResult extends ArtistCore {
  listeners?: string;
  streamable: "0" | "1";
  image_small?: string;
  image?: string;
}
