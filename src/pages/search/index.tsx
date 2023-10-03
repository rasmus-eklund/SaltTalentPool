import { getUser, getUsers } from "@/server/client";
import DeveloperList from "./DeveloperItem";
import { useEffect, useState } from "react";
import { Consultant } from "@/types";
import DeveloperItem from "./DeveloperItem";

const Search = () => {
  const [consultants, setConsultants] = useState<Consultant[]>();

  useEffect(() => {
    (async () => {
      setConsultants(await getUsers());
    })();
  }, []);

  return (
    <main>
      <ul>
        {consultants &&
          consultants.map((consultant) => (
            <DeveloperItem consultant={consultant} />
          ))}
      </ul>
    </main>
  );
};

export default Search;
