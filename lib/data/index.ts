import { Article, BlockData, Platform, Social } from "../interface";
import getPhotos from "./photos";
import getProfilePhotos from "./profile";

const platforms: Platform[] = ["tiktok", "facebook", "linkedin", "instagram"];

export async function getData(
  queries: string[]
): Promise<(Article | Social)[]> {
  const data: (Article | Social)[] = [];
  const photos = await getPhotos(queries);
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
