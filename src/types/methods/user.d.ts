import { ArtistCore, Image, PeriodTime } from "../shared";

export interface UserResponse {
  getFriends: UserGetFriendsResponse;
  getInfo: UserGetInfoResponse;
  getLovedTracks: UserGetLovedTracksResponse;
  getPersonalTags: UserGetPersonalTagsResponse;
  getRecentTracks: UserGetRecentTracksResponse;
  getTopAlbums: UserGetTopAlbumsResponse;
  getTopArtists: UserGetTopArtistsResponse;
  getTopTags: UserGetTopTagsResponse;
  getTopTracks: UserGetTopTracksResponse;
  getWeeklyAlbumChart: UserGetWeeklyAlbumChartResponse;
  getWeeklyArtistChart: UserGetWeeklyArtistChartResponse;
  getWeeklyChartList: UserGetWeeklyChartListResponse;
  getWeeklyTrackChart: UserGetWeeklyTrackChartResponse;
}

interface UserGetFriendsResponse {
  friends: {
    "@attr": UserAttribute;
    user: Users[] &
      {
        registered: {
          unixtime: string;
          "#text": string;
        };
      }[];
  };
}

interface UserGetInfoResponse {
  user: Users & {
    age: string;
    gender: string;
    artist_count: string;
    track_count: string;
    album_count: string;
    registered: {
      unixtime: string;
      "#text": number;
    };
  };
}

interface UserGetLovedTracksResponse {
  lovedtracks: {
    "@attr": UserAttribute;
    track: {
      name: string;
      mbid: string | undefined;
      url: string;
      date: {
        uts: string;
        "#text": string;
      };
      artist: ArtistCore;
      image: Image[];
      streamable: {
        fulltrack: string;
        "#text": string;
      };
    };
  };
}

interface UserGetPersonalTagsResponse {
  taggings: {
    "@attr": UserAttribute & {
      tag: string;
    };
    artists?: { artist: UserArtist[] };
    tracks?: { track: UserTrack[] };
    albums?: { album: UserAlbum[] };
  };
}

interface UserGetRecentTracksResponse {
  recenttracks: {
    "@attr": UserAttribute;
    track: UserRecentTracks[] | UserExtendedRecentTracks[];
  };
}

interface UserGetTopAlbumsResponse {
  topalbums: {
    "@attr": UserAttribute & {
      type: PeriodTime;
    };
    album: {
      "@attr": {
        rank: string;
      };
      name: string;
      playcount: string;
      mbid: string | undefined;
      url: string;
      artist: ArtistCore;
      image: Image[];
    }[];
  };
}

interface UserGetTopArtistsResponse {
  topartists: {
    "@attr": UserAttribute & {
      type: PeriodTime;
    };
    artist: {
      "@attr": {
        rank: string;
      };
      name: string;
      playcount: string;
      mbid: string | undefined;
      url: string;
      streamable: string;
      image: Image[];
    }[];
  };
}

interface UserGetTopTagsResponse {
  toptags: {
    "@attr": {
      user: string;
    };
    tag: {
      name: string;
      count: string;
      url: string;
    }[];
  };
}

interface UserGetTopTracksResponse {
  toptracks: {
    "@attr": UserAttribute & {
      type: PeriodTime;
    };
    track: {
      "@attr": {
        rank: string;
      };
      name: string;
      playcount: string;
      mbid: string | null;
      url: string;
      streamable: {
        fullstrack: string;
        "#text": string;
      };
      artist: ArtistCore;
      image: Image[];
    }[];
  };
}

interface UserGetWeeklyAlbumChartResponse {
  weeklyalbumchart: {
    "@attr": {
      name: string;
      from: string;
      to: string;
    };
    album: {
      "@attr": { rank: string };
      artist: {
        mbid: string | undefined;
        "#text": string;
      };
      name: string;
      mbid: string | undefined;
      playcount: string;
      url: string;
    }[];
  };
}

interface UserGetWeeklyArtistChartResponse {
  weeklyartistchart: {
    "@attr": {
      name: string;
      from: string;
      to: string;
    };
    artist: {
      "@attr": { rank: string };
      name: string;
      mbid: string | undefined;
      playcount: string;
      url: string;
    }[];
  };
}

interface UserGetWeeklyChartListResponse {
  weeklychartlist: {
    "@attr": string;
    chart: {
      "#text": "";
      from: string;
      to: string;
    }[];
  };
}

interface UserGetWeeklyTrackChartResponse {
  weeklytrackchart: {
    "@attr": {
      name: string;
      from: string;
      to: string;
    };
    track: {
      "@attr": { rank: string };
      artist: {
        mbid: string | undefined;
        "#text": string;
      };
      name: string;
      mbid: string | undefined;
      playcount: string;
      url: string;
    }[];
  };
}

interface Users {
  name: string;
  url: string;
  country: string;
  playlist: string;
  playcount: string;
  image: Image[];
  realname: string;
  subscriber: string;
  bootstrap: string;
  type: string;
}

interface UserAttribute {
  user: string;
  totalPages: string;
  page: string;
  total: string;
  perPage: string;
}

interface UserArtist extends ArtistCore {
  image: Image[];
  steamable: string;
}

interface UserTrack {
  name: string;
  duration: string;
  mbid: string | undefined;
  url: string;
  streamable: {
    "#text": string;
    fulltrack: string;
  };
  artist: ArtistCore;
  image: Image[];
}

interface UserAlbum {
  name: string;
  mbid: string | undefined;
  url: string;
  artist: ArtistCore;
  image: Image[];
}

export interface UserRecentTracks {
  artist: {
    mbid: string | undefined;
    "#text": string;
  };
  album: {
    mbid: string | undefined;
    "#text": string;
  };
  name: string;
  streamable: string;
  image: Image[];
  mbid: string | undefined;
  url: string;
  "@attr"?: {
    nowplaying: "true" | "false";
  };
  date?: {
    uts: string;
    "#text": string;
  };
}

export interface UserExtendedRecentTracks extends UserRecentTracks {
  artist: UserRecentTracks["artist"] & {
    url: string;
    name: string;
    image: Image[];
  };
  loved: string;
}
