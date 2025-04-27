import { AutocorrectOptions, LanguageOptions, MbidOptions, SearchOptions, UsernameOptions } from "../index";

interface BaseAlbumOptions {
  artist: string;
  album: string;
}

export interface AlbumAddTagsOptions extends BaseAlbumOptions {
  tags: string[];
}

export interface AlbumGetInfoOptions
  extends Partial<BaseAlbumOptions>,
    MbidOptions,
    AutocorrectOptions,
    UsernameOptions,
    LanguageOptions {}

export interface AlbumGetTagsOptions
  extends Partial<BaseAlbumOptions>,
    MbidOptions,
    AutocorrectOptions,
    LanguageOptions {
  user: string;
}

export interface AlbumGetTopTagsOptions extends Partial<BaseAlbumOptions>, MbidOptions, AutocorrectOptions {}

export interface AlbumRemoveTagOptions extends BaseAlbumOptions {
  tag: string;
}

export interface AlbumSearchOptions extends SearchOptions {
  album: string;
}
