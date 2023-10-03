import type { FC } from "react";
import type { Consultant } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Github from "../components/Github";
import LinkedIn from "../components/LinkedIn";

type DeveloperListProps = {
  consultant: Consultant;
};

const DeveloperItem: FC<DeveloperListProps> = ({ consultant }) => {
  return (
    <li className="flex items-center">
      <Image src={consultant.image} alt="Image" width={64} height={64} />
      <Link href={`developer/${consultant.id}`}>
        {consultant.firstName} {consultant.lastName}
      </Link>
      <p>{consultant.title}</p>
      <Github url={consultant.github} />
      <LinkedIn url={consultant.linkedin} />
    </li>
  );
};

export default DeveloperItem;
