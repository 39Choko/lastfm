import { LanguageOptions, SearchOptions } from "../index";

interface BaseTagOptions {
  tag: string;
}

export interface TagGetInfoOptions extends BaseTagOptions, LanguageOptions {}

export interface TagGetSimilarOptions extends BaseTagOptions {}

export interface TagPaginationOptions extends BaseTagOptions, SearchOptions {}

export interface TagGetWeeklyChartListOptions extends BaseTagOptions {}
