import type { Consultant } from "@/types";
import type { FC } from "react";
import Image from "next/image";
import Github from "../Github";
import LinkedIn from "../LinkedIn";
import Phone from "../Phone";
import Email from "../Email";

type ContactCardProps = {
  consultant: Consultant;
};

const ContactCard: FC<ContactCardProps> = ({ consultant }) => {
  return (
    <section className="flex flex-col items-center">
      <Image
        className="rounded-full"
        src={consultant.image}
        alt="profile picture"
        width={100}
        height={100}
      />
      <h2 className="text-4xl">
        {consultant.firstName} {consultant.lastName}
      </h2>
      <div className="flex gap-2">
        <Phone /> <span>{consultant.phone}</span>
        <Email/><span>{consultant.mail}</span>
        <Github url={consultant.github} />
        <LinkedIn url={consultant.linkedin} />
      </div>
    </section>
  );
};

export default ContactCard;
