import { data } from "./mockdata";
import { MeiliSearch } from "meilisearch";
import { env } from "../env.mjs";
import type { SearchResult } from "@/types";

// eslint-disable-next-line
export const getUser = async (id: string) => {
  // fetch
  return data.consultants.find((c) => c.id === id)!;
};

// eslint-disable-next-line
export const getAllUsers = async () => {
  return data.consultants;
};

// eslint-disable-next-line
export const getUsersById = async (ids: string[]) => {
  return data.consultants.filter((consultant) =>
    ids.some((id) => consultant.id === id),
  );
};

const client = new MeiliSearch({
  host: env.NEXT_PUBLIC_MEILISEARCH_HOST,
  apiKey: env.NEXT_PUBLIC_MEILISEARCH_KEY,
});

export const queryConsultants = async (text: string) => {
  const res = await client.index("developers").search(text);
  const searchData = res.hits as SearchResult[];
  return await getUsersById(searchData.map((consultant) => consultant.id));
};
