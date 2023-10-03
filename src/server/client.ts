import { data } from "./mockdata";
import { MeiliSearch } from "meilisearch";

export const getUser = async (id: string) => {
  // fetch
  return data.consultants.find((c) => c.id === id)!;
};

export const getUsers = async () => {
  return data.consultants;
};

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: "aSampleMasterKey",
});

const populateMeilisearch = async () => {
  const devs = await getUsers();
  client
    .index("developers")
    .addDocuments(devs)
    .then((res) => console.log(res))
    .catch((err: Error) => {
      console.log(err.message);
    });
};

populateMeilisearch()
  .then(() => console.log("Meilisearch populated!"))
  .catch((err: Error) => {
    console.log(err.message);
  });

export default client;
