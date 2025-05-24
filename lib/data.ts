import axios from "axios";
import {
  Article,
  BlockData,
  Photo,
  Platform,
  Result,
  Social,
} from "./interface";

const platforms: Platform[] = ["tiktok", "facebook", "linkedin", "instagram"];

const PIXEL_API_KEY =
  "6ZZILGQu38UeYPWVC8GPeRQZGm6dUBq4b1tRO4C7KRWPdUfnvqZ9TPgy";
const PIXEL_BASE_URL = "https://api.pexels.com/v1/search";
const RANDOM_USER_API_URL = "https://randomuser.me/api";

async function getPhotos(query: string): Promise<Photo[]> {
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

async function getProfilePhotos(): Promise<string[]> {
  const res = await axios.get(RANDOM_USER_API_URL, {
    params: { results: 18 },
  });

  return res.data.results.map((result: Result) => result.picture.medium);
}

export async function getData(query: string): Promise<(Article | Social)[]> {
  const data: (Article | Social)[] = [];
  const photos = await getPhotos(query);
  const profilePhotos = await getProfilePhotos();

  for (let index = 0; index < photos.length; index++) {
    const photo = photos[index];

    const blockData: BlockData = {
      photo: photo.src.medium,
      user: {
        name: (photo.photographer_url.split("/").pop() as string)
          .substring(0, 10)
          .replaceAll("-", ""),
        ...(index % 3 === 0 && {
          photo: profilePhotos[index % profilePhotos.length],
        }),
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
