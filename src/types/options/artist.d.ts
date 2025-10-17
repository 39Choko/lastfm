import {
  AutocorrectOptions,
  LanguageOptions,
  LimitOptions,
  MbidOptions,
  SearchOptions,
  UsernameOptions,
} from "../index";

interface BaseArtistOptions {
  artist: string;
}

type OptionalBaseArtistOptions = Partial<BaseArtistOptions>;

export interface ArtistAddTagsOptions extends BaseArtistOptions {
  tags: string[];
}

export interface ArtistGetCorrectionOptions extends BaseArtistOptions {}

export interface ArtistGetInfoOptions
  extends OptionalBaseArtistOptions,
    MbidOptions,
    AutocorrectOptions,
    UsernameOptions,
    LanguageOptions {}

export interface ArtistGetSimilarOptions
  extends OptionalBaseArtistOptions,
    MbidOptions,
    LimitOptions,
    AutocorrectOptions {}

export interface ArtistGetTagsOptions
  extends OptionalBaseArtistOptions,
    MbidOptions,
    AutocorrectOptions,
    LanguageOptions {
  user: string;
}

export interface ArtistGetTopAlbumsOptions
  extends OptionalBaseArtistOptions,
    MbidOptions,
    AutocorrectOptions,
    SearchOptions {}

export interface ArtistGetTopTagsOptions extends OptionalBaseArtistOptions, MbidOptions, AutocorrectOptions {}

export interface ArtistGetTopTracksOptions
  extends OptionalBaseArtistOptions,
    MbidOptions,
    AutocorrectOptions,
    SearchOptions {}

export interface ArtistRemoveTagOptions extends BaseArtistOptions {
  tag: string;
}

export interface ArtistSearchOptions extends BaseArtistOptions, SearchOptions {}
