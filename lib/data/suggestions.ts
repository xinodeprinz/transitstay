import axios from "axios";
import { Suggestion } from "../interface";

const BASE_URL = "https://nominatim.openstreetmap.org/search";

export default async function getSuggestions(query: string): Promise<string[]> {
  const res = await axios.get(BASE_URL, {
    params: {
      q: query,
      format: "json",
      addressdetails: 1,
      limit: 10,
    },
  });

  return res.data.map((suggestion: Suggestion) => suggestion.name);
}
