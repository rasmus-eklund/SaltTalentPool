import type { FC } from "react";
import type { Consultant } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Github from "./icons/Github";
import LinkedIn from "./icons/LinkedIn";

type DeveloperListProps = {
  consultant: Consultant;
};

const SearchItem: FC<DeveloperListProps> = ({ consultant }) => {
  return (
    <li className="flex items-center justify-between rounded-md border-2 border-black/30 p-2 shadow-lg hover:bg-orange/50 ease-linear duration-500 md:p-4">
      <div className="flex items-center gap-4">
        <Image
          src={consultant.image}
          alt="Image"
          width={48}
          height={48}
          className="rounded-full border-2 border-black"
        />
        <Link
          href={`developer/${consultant.id}`}
          className="text-sm md:text-2xl font-bold"
        >
          {consultant.firstName} {consultant.lastName}
        </Link>
        <p className="hidden md:block">{consultant.title}</p>
      </div>
      <div className="flex items-center ">
        <Github url={consultant.github} className={'h-10 w-10 md:h-16 md:w-16'} />
        <LinkedIn url={consultant.linkedin} className={'h-10 w-10 md:h-16 md:w-16'} />
      </div>
    </li>
  );
};

export default SearchItem;
