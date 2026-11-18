import type { MediaType, ProviderDomain } from "./types";

export const STORAGE_KEY = "ma_instance_url";
export const DEFAULT_INSTANCE_URL = "http://musicassistant.local:8095";
export const LEGACY_DEFAULT_INSTANCE_URL = "http://homeassistant.local:8095";

export const PROVIDER_LABELS: Record<ProviderDomain, string> = {
  spotify: "Spotify",
  tidal: "Tidal",
  qobuz: "Qobuz",
  ytmusic: "YouTube Music",
  deezer: "Deezer",
  apple_music: "Apple Music",
};

export const MEDIA_TYPE_EMOJI: Record<MediaType, string> = {
  track: "🎵",
  album: "💿",
  artist: "🎤",
};
