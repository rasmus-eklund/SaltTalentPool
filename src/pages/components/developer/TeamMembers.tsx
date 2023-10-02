import { Consultant } from "@/types";
import type { FC } from "react";
import Image from "next/image";

type TeamMembersProps = {
  consultant: Consultant;
};

const TeamMembers: FC<TeamMembersProps> = ({ consultant }) => {
  return (
    <li>
      <Image src={consultant.image} alt="image" width={50} height={50} />
      <p>
        {consultant.firstName} {consultant.lastName}
      </p>
    </li>
  );
};

export default TeamMembers;
