import { data } from "./mockdata";
import { MeiliSearch } from "meilisearch";
import { env } from "../env.mjs";
import type { Consultant } from "@/types";

export const getUser = async (id: string) => {
  // fetch
  return data.consultants.find((c) => c.id === id)!;
};

export const getUsers = async () => {
  return data.consultants;
};

const client = new MeiliSearch({
  host: env.NEXT_PUBLIC_MEILISEARCH_HOST,
  apiKey: env.NEXT_PUBLIC_MEILISEARCH_KEY
});

export const queryConsultants = async (text: string) => {
  const res = await client.index("developers").search(text);
  return res.hits as Consultant[];
};
