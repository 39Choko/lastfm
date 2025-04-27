import { ArtistCore, Image, Countries, RankAttribute, Mbid } from "../index";

export interface GeoResponse {
  getTopArtists: GeoGetTopArtistsResponse;
  getTopTracks: GeoGetTopTracksResponse;
}

interface GeoAttributes {
  country: Countries;
}

export interface GeoTopArtist extends Mbid {
  name: string;
  playcount: string;
  url: string;
  streamable: "0" | "1";
  image: Image[];
  "@attr": RankAttribute;
}

export interface GeoGetTopArtistsResponse {
  topartists: {
    artist: GeoTopArtist[];
    "@attr": GeoAttributes;
  };
}

interface GeoTrackStreamable {
  "#text": "0" | "1";
  fulltrack: "0" | "1";
}

export interface GeoTopTrack extends Mbid {
  name: string;
  playcount: string;
  url: string;
  streamable: GeoTrackStreamable | "0" | "1";
  artist: ArtistCore;
  image?: Image[];
  "@attr": {
    rank: string;
  };
}

export interface GeoGetTopTracksResponse {
  toptracks: {
    track: GeoTopTrack[];
    "@attr": GeoAttributes;
  };
}
