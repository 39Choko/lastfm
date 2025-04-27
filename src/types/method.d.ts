export type Methods = TypeMethods | EnumMethods;

type TypeMethods =
  | "album.addTags"
  | "album.getInfo"
  | "album.getTags"
  | "album.getTopTags"
  | "album.removeTag"
  | "album.search"
  | "artist.addTags"
  | "artist.getCorrection"
  | "artist.getInfo"
  | "artist.getSimilar"
  | "artist.getTags"
  | "artist.getTopAlbums"
  | "artist.getTopTags"
  | "artist.getTopTracks"
  | "artist.removeTag"
  | "artist.search"
  | "auth.getMobileSession"
  | "auth.getSession"
  | "auth.getToken"
  | "chart.getTopArtists"
  | "chart.getTopTags"
  | "chart.getTopTracks"
  | "geo.getTopArtists"
  | "geo.getTopTracks"
  | "library.getArtists"
  | "tag.getInfo"
  | "tag.getSimilar"
  | "tag.getTopAlbums"
  | "tag.getTopArtists"
  | "tag.getTopTags"
  | "tag.getTopTracks"
  | "tag.getWeeklyChartList"
  | "track.addTags"
  | "track.getCorrection"
  | "track.getInfo"
  | "track.getSimilar"
  | "track.getTags"
  | "track.getTopTags"
  | "track.love"
  | "track.removeTag"
  | "track.scrobble"
  | "track.search"
  | "track.unlove"
  | "track.updateNowPlaying"
  | "user.getFriends"
  | "user.getInfo"
  | "user.getLovedTracks"
  | "user.getPersonalTags"
  | "user.getRecentTracks"
  | "user.getTopAlbums"
  | "user.getTopArtists"
  | "user.getTopTags"
  | "user.getTopTracks"
  | "user.getWeeklyAlbumChart"
  | "user.getWeeklyArtistChart"
  | "user.getWeeklyChartList"
  | "user.getWeeklyTrackChart";

enum EnumMethods {
  AlbumAddTags = "album.addTags",
  AlbumGetInfo = "album.getInfo",
  AlbumGetTags = "album.getTags",
  AlbumGetTopTags = "album.getTopTags",
  AlbumRemoveTag = "album.removeTag",
  AlbumSearch = "album.search",
  ArtistAddTags = "artist.addTags",
  ArtistGetCorrection = "artist.getCorrection",
  ArtistGetInfo = "artist.getInfo",
  ArtistGetSimilar = "artist.getSimilar",
  ArtistGetTags = "artist.getTags",
  ArtistGetTopAlbums = "artist.getTopAlbums",
  ArtistGetTopTags = "artist.getTopTags",
  ArtistGetTopTracks = "artist.getTopTracks",
  ArtistRemoveTag = "artist.removeTag",
  ArtistSearch = "artist.search",
  AuthGetMobileSession = "auth.getMobileSession",
  AuthGetSession = "auth.getSession",
  AuthGetToken = "auth.getToken",
  ChartGetTopArtists = "chart.getTopArtists",
  ChartGetTopTags = "chart.getTopTags",
  ChartGetTopTracks = "chart.getTopTracks",
  GeoGetTopArtists = "geo.getTopArtists",
  GeoGetTopTracks = "geo.getTopTracks",
  LibraryGetArtists = "library.getArtists",
  TagGetInfo = "tag.getInfo",
  TagGetSimilar = "tag.getSimilar",
  TagGetTopAlbums = "tag.getTopAlbums",
  TagGetTopArtists = "tag.getTopArtists",
  TagGetTopTags = "tag.getTopTags",
  TagGetTopTracks = "tag.getTopTracks",
  TagGetWeeklyChartList = "tag.getWeeklyChartList",
  TrackAddTags = "track.addTags",
  TrackGetCorrection = "track.getCorrection",
  TrackGetInfo = "track.getInfo",
  TrackGetSimilar = "track.getSimilar",
  TrackGetTags = "track.getTags",
  TrackGetTopTags = "track.getTopTags",
  TrackLove = "track.love",
  TrackRemoveTag = "track.removeTag",
  TrackScrobble = "track.scrobble",
  TrackSearch = "track.search",
  TrackUnlove = "track.unlove",
  TrackUpdateNowPlaying = "track.updateNowPlaying",
  UserGetFriends = "user.getFriends",
  UserGetInfo = "user.getInfo",
  UserGetLovedTracks = "user.getLovedTracks",
  UserGetPersonalTags = "user.getPersonalTags",
  UserGetRecentTracks = "user.getRecentTracks",
  UserGetTopAlbums = "user.getTopAlbums",
  UserGetTopArtists = "user.getTopArtists",
  UserGetTopTags = "user.getTopTags",
  UserGetTopTracks = "user.getTopTracks",
  UserGetWeeklyAlbumChart = "user.getWeeklyAlbumChart",
  UserGetWeeklyArtistChart = "user.getWeeklyArtistChart",
  UserGetWeeklyChartList = "user.getWeeklyChartList",
  UserGetWeeklyTrackChart = "user.getWeeklyTrackChart",
}
