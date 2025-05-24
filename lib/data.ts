import axios from "axios";
import { Article, BlockData, Photo, Platform, Social } from "./interface";

const platforms: Platform[] = ["tiktok", "facebook", "linkedin", "instagram"];

const PIXEL_API_KEY =
  "6ZZILGQu38UeYPWVC8GPeRQZGm6dUBq4b1tRO4C7KRWPdUfnvqZ9TPgy";
const PIXEL_BASE_URL = "https://api.pexels.com/v1/search";

export async function getPhotos(query: string): Promise<Photo[]> {
  const res = await axios.get(PIXEL_BASE_URL, {
    headers: {
      Authorization: PIXEL_API_KEY,
    },
    params: {
      query,
      per_page: 78,
    },
  });

  return res.data.photos;
}

export async function getData(query: string): Promise<(Article | Social)[]> {
  const data: (Article | Social)[] = [];
  const photos = await getPhotos(query);

  for (let index = 0; index < photos.length; index++) {
    const photo = photos[index];
    const blockData: BlockData = {
      photo: photo.src.medium,
      user: {
        name: photo.photographer_url.split("/").pop() as string,
        // Add photo (profile picture) later
      },
    };

    if (index % 2 === 0) {
      // Even position: use for articles
      data.push({
        ...blockData,
        type: "article",
        title: photo.alt as string,
        url: photo.url,
      });
    } else {
      // Odd position: use for socials
      data.push({
        ...blockData,
        type: "social",
        url: photo.url,
        platform: platforms[Math.floor(Math.random() * platforms.length)],
      });
    }
  }

  return data;
}
