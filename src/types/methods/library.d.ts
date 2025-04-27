import { Image, ArtistCore, SearchAttribute } from "../index";

export interface LibraryResponse {
  getArtists: ArtistListResponse;
}

interface LibraryAttribute {
  user: string;
}

interface LibrarySearchAttribute extends LibraryAttribute, SearchAttribute {}

interface ArtistListItem extends ArtistCore {
  tagcount: string;
  image: Image[];
  playcount: string;
  streamable: "0" | "1";
}

interface ArtistListResponse {
  artists: {
    artist: ArtistListItem[];
    "@attr": LibrarySearchAttribute;
  };
}
