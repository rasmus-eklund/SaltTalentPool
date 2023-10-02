import type { Consultant } from "@/types";
import type { FC } from "react";
import Image from "next/image";

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
        <a href={consultant.github}>
          <Image src="/github-icon.png" alt="gitHub" width={30} height={30} />
        </a>

        <a href={consultant.linkedin}>
          <Image
            src="/linkedin-icon.png"
            alt="LinkedIn"
            width={30}
            height={30}
          />
        </a>
      </div>
    </section>
  );
};

export default ContactCard;
