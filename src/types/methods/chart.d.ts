import { ArtistCore, Image, Mbid, SearchAttribute, Tag, Wiki } from "../index";

export interface ChartResponse {
  getTopArtists: ChartGetTopArtistsResponse;
  getTopTags: ChartGetTopTagsResponse;
  getTopTracks: ChartGetTopTracksResponse;
}

interface ChartGetTopArtistsResponse {
  artists: {
    artist: ChartTopArtist[];
    "@attr": SearchAttribute;
  };
}

interface ChartTopArtist extends ArtistCore {
  playcount: string;
  listeners: string;
  streamable: "0" | "1";
  image: Image[];
}

interface ChartTopTag extends Tag {
  reach: string;
  taggings: string;
  streamable: "0" | "1";
  wiki: Wiki;
}

interface ChartGetTopTagsResponse {
  tags: {
    tag: ChartTopTag[];
    "@attr": SearchAttribute;
  };
}

interface ChartTrackStreamable {
  "#text": "0" | "1";
  fulltrack: "0" | "1";
}

interface ChartTopTrack extends Mbid {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  url: string;
  streamable: ChartTrackStreamable | "0" | "1";
  artist: ArtistCore;
  image?: Image[];
}

interface ChartGetTopTracksResponse {
  tracks: {
    track: ChartTopTrack[];
    "@attr": SearchAttribute;
  };
}
