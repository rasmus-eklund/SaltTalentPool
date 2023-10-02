import type { FC } from "react";
import { data } from "../mockdata";
import type { Consultant } from "@/types";
import Image from "next/image";

type DeveloperListProps = {
  consultant: Consultant;
};

const DeveloperList: FC<DeveloperListProps> = ({ consultant }) => {
  return (
    <li>
      image
      <p>{consultant.firstName}</p>
      text gitHub inkedin
    </li>
  );
};

export default DeveloperList;
