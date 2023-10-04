"use client";
import { useState } from "react";
import type { Consultant } from "@/types";
import DeveloperItem from "./DeveloperItem";
import { queryConsultants } from "@/server/client";

const Search = () => {
  const [consultants, setConsultants] = useState<Consultant[]>();
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col gap-10 px-6">
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          queryConsultants(search).then((res) => setConsultants(res));
        }}
        action=""
      >
        <input
          className="rounded-md border-2 border-black/50 px-2"
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
            <DeveloperItem key={consultant.id} consultant={consultant} />
          ))
        ) : (
          <p>Search to find</p>
        )}
      </ul>
    </main>
  );
};

export default Search;
