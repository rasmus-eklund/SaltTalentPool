import DeveloperList from "./DeveloperList";
import { data } from "../mockdata";

const Search = () => {
  return (
    <main>
      <DeveloperList consultant={data.consultants[0]!} />
    </main>
  );
};

export default Search;
