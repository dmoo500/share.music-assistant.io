export type MediaType = "track" | "album" | "artist";

export type ProviderDomain = "spotify" | "tidal" | "qobuz" | "ytmusic" | "deezer" | "apple_music";

export type ProviderUrls = Partial<Record<ProviderDomain, string>>;

/** Item metadata carried in a share link, already validated by `decodeSharePayload`. */
export interface SharePayload {
  type: MediaType;
  title: string;
  artist?: string;
  artists?: string[];
  album?: string;
  isrc?: string;
  mbid?: string;
  mb_track?: string;
  barcode?: string;
  art_url?: string;
  provider_urls?: ProviderUrls;
  version?: string;
  /** Track duration in seconds. */
  duration?: number;
}
