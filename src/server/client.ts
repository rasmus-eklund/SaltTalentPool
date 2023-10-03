import { data } from "./mockdata";

export const getUser = async (id: string) => {
  // fetch
  return data.consultants.find((c) => c.id === id)!;
};

export const getUsers = async () => {
  return data.consultants
}