import type { Consultant } from "@/types";
import { client } from "./client";
import { data } from "./mockdata";

// eslint-disable-next-line
const populateMeilisearch = async () => {
  const devs = data.consultants.map((c: Consultant) => ({
    id: c.id,
    firstName: c.firstName,
    lastName: c.lastName,
    skills: c.skills,
    description: c.decription,
    title: c.title,
  }));
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
