export type Type = "article" | "social";
export type Platform = "tiktok" | "facebook" | "linkedin" | "instagram";

export interface BlockData {
  photo: string;
  user: {
    photo?: string;
    name: string;
  };
}

export interface Article extends BlockData {
  type: "article";
  title: string;
  url: string;
}

export interface Social extends BlockData {
  type: "social";
  //   caption: string;
  platform: Platform;
  url: string;
}

export interface Photo {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string; // Hex color (e.g., "#322316")
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked?: boolean; // Optional (may not always be present)
  alt?: string; // Optional (alternative text description)
}
