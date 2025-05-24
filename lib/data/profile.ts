import axios from "axios";
import { Result } from "../interface";

const RANDOM_USER_API_URL = "https://randomuser.me/api";

export default async function getProfilePhotos(): Promise<string[]> {
  const res = await axios.get(RANDOM_USER_API_URL, {
    params: { results: 78 },
  });

  return res.data.results.map((result: Result) => result.picture.medium);
}
