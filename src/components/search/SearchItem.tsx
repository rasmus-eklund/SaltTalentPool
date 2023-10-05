import type { FC } from "react";
import type { Consultant } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Github from "../icons/Github";
import LinkedIn from "../icons/LinkedIn";

type DeveloperListProps = {
  consultant: Consultant;
};

const SearchItem: FC<DeveloperListProps> = ({ consultant }) => {
  return (
    <li className="flex items-center justify-between rounded-md border-2 border-black/30 p-4 shadow-xl hover:bg-orange/50 ease-linear duration-500">
      <div className="flex items-center gap-4">
        <Image
          src={consultant.image}
          alt="Image"
          width={50}
          height={50}
          className="rounded-full border-2 border-black"
        />
        <Link
          href={`developer/${consultant.id}`}
          className="text-2xl font-bold"
        >
          {consultant.firstName} {consultant.lastName}
        </Link>
        <p>{consultant.title}</p>
      </div>
      <div className="flex items-center">
        <Github url={consultant.github} size={50} />
        <LinkedIn url={consultant.linkedin} size={50} />
      </div>
    </li>
  );
};

export default SearchItem;
