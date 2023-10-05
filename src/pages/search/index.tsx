import { useEffect, useState } from "react";
import type { Consultant } from "@/types";
import SearchItem from "../../components/SearchItem";
import { queryConsultants } from "@/server/client";

const Search = () => {
  const [consultants, setConsultants] = useState<Consultant[]>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    queryConsultants("")
      .then((res) => setConsultants(res))
      .catch((err: Error) => console.log(err.message));
  }, []);

  return (
    <main className="flex grow flex-col gap-6 md:gap-10 px-6">
      <form
        className="flex gap-2 pt-4 md:w-1/3"
        onSubmit={(e) => {
          e.preventDefault();
          queryConsultants(search)
            .then((res) => setConsultants(res))
            .catch((err: Error) => console.log(err.message));
        }}
        action=""
      >
        <input
          className="min-w-0 grow rounded-md border-2 border-black/50 px-2"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <button className="rounded-lg border-2 border-black/30 bg-orange px-4 py-2 text-white">
          Search
        </button>
      </form>
      <ul className="flex flex-col gap-2">
        {consultants ? (
          consultants.map((consultant) => (
            <SearchItem key={consultant.id} consultant={consultant} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </main>
  );
};

export default Search;
