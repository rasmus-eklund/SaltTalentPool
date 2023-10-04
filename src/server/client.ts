"use server";
import { data } from "./mockdata";
import { MeiliSearch } from "meilisearch";
import { env } from "../env.mjs";
import { Consultant } from "@/types";

export const getUser = async (id: string) => {
  // fetch
  return data.consultants.find((c) => c.id === id)!;
};

export const getUsers = async () => {
  return data.consultants;
};

// console.log("HELOLLLOOASA", env.MEILISEARCH_HOST);
const client = new MeiliSearch({});

export const queryConsultants = async (text: string) => {
  const res = await client.index("developers").search(text);
  return res.hits as Consultant[];
};
