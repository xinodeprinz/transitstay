import axios from "axios";
import { Photo } from "../interface";

const PIXEL_API_KEY =
  "6ZZILGQu38UeYPWVC8GPeRQZGm6dUBq4b1tRO4C7KRWPdUfnvqZ9TPgy";
const PIXEL_BASE_URL = "https://api.pexels.com/v1/search";

export default async function getPhotos(queries: string[]): Promise<Photo[]> {
  const totalPhotos = 78;
  const photosPerQuery = Math.floor(totalPhotos / queries.length);
  const remainder = totalPhotos % queries.length;

  let allPhotos: Photo[] = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    // Distribute remainder photos among the first few queries
    const currentPerPage = photosPerQuery + (i < remainder ? 1 : 0);

    const res = await axios.get(PIXEL_BASE_URL, {
      headers: {
        Authorization: PIXEL_API_KEY,
      },
      params: {
        query,
        per_page: currentPerPage,
      },
    });

    allPhotos = [...allPhotos, ...res.data.photos];
  }

  return allPhotos;
}
