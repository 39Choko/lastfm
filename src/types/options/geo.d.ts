import { Country, SearchOptions } from "../index";

interface BaseGeoOptions {
  country: Country;
}

export interface GeoGetTopArtistsOptions extends BaseGeoOptions, SearchOptions {
  page?: number;
  limit?: number;
}

export interface GeoGetTopTracksOptions extends BaseGeoOptions, SearchOptions {
  location?: string;
}
