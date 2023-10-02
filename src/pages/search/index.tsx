import { getUser } from "@/server/client";
import DeveloperList from "./DeveloperList";

const Search = () => {
  const data = getUser("1");
  return (
    <main>
      <DeveloperList consultant={data!} />
    </main>
  );
};

export default Search;
