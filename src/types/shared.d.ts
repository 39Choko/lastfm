import { Languages } from "./index";

export enum ImageSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  EXTRA_LARGE = "extralarge",
  MEGA = "mega",
}

export enum PeriodTime {
  OVERALL = "overall",
  SEVEN_DAY = "7day",
  ONE_MONTH = "1month",
  THREE_MONTH = "3month",
  SIX_MONTH = "6month",
  TWELVE_MONTH = "12month",
}

export enum TaggingType {
  ARTIST = "artist",
  ALBUM = "album",
  TRACK = "track",
}

export interface Image {
  size: ImageSize | string;
  "#text": string;
}

export interface Tag {
  name: string;
  url: string;
}

export interface Tags extends Tag {
  count: string;
}

export interface OpensearchQuery {
  "#text": string;
  role: string;
  searchTerms: string;
  startPage: string;
}

export interface ArtistCore extends Mbid {
  name: string;
  url: string;
}

export interface TrackCore extends Mbid {
  name: string;
  url: string;
  artist: ArtistCore;
}

export interface Session {
  key: string;
  name: string;
  subscriber: number;
}

export interface ArtistTopAlbum extends Mbid {
  name: string;
  playcount: number;
  url: string;
  artist: ArtistCore;
  image: Image[];
}

export interface ArtistTopTrack extends TrackCore {
  playcount: string;
  listeners: string;
  streamable: "0" | "1";
  image: Image[];
  "@attr": RankAttribute;
}

interface Wiki {
  published: string;
  summary: string;
  content: string;
}

export interface Mbid {
  mbid: string | undefined;
}

export interface SearchAttribute {
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
}

export interface RankAttribute {
  rank: string;
}

export interface MbidOptions {
  mbid?: string;
}

export interface AutocorrectOptions {
  autocorrect?: boolean;
}

export interface LimitOptions {
  limit?: number;
}

export interface UsernameOptions {
  username?: string;
}

export interface LanguageOptions {
  lang?: Languages;
}

export interface PageOptions {
  page?: number;
}

export interface SearchOptions extends LimitOptions {
  page?: number;
}
