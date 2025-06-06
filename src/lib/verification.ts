export function validateArtistAlbumMbid(options: { artist?: string; album?: string; mbid?: string }): void {
  validateArtistMbid({ mbid: options.mbid, artist: options.artist });
  validateAlbumMbid({ mbid: options.mbid, album: options.album });
}

export function validateArtistTrackMbid(options: { track?: string; artist?: string; mbid?: string }): void {
  validateArtistMbid({ mbid: options.mbid, artist: options.artist });
  validateTrackMbid({ mbid: options.mbid, track: options.track });
}

export function validateArtistMbid(options: { artist?: string; mbid?: string }): void {
  if (!options.artist && !options.mbid) {
    throw new Error("Artist name or MusicBrainz artist ID is required.");
  }
}

export function validateAlbumMbid(options: { album?: string; mbid?: string }): void {
  if (!options.album && !options.mbid) {
    throw new Error("Album name or MusicBrainz album ID is required.");
  }
}

export function validateTrackMbid(options: { track?: string; mbid?: string }): void {
  if (!options.track && !options.mbid) {
    throw new Error("Track name or MusicBrainz album ID is required.");
  }
}

export function booleanToNumber(args: boolean): number {
  if (args) return 1;
  return 0;
}

export function stringToNumber(args: "true" | "false"): number {
  if (args === "true") return 1;
  return 0;
}
