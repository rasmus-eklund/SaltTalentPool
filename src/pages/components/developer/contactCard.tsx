import type { Consultant } from "@/types";
import type { FC } from "react";
import Image from "next/image";
import Github from "../Github";
import LinkedIn from "../LinkedIn";
import { mdilEmail, mdilPhone, mdilMapMarker } from "@mdi/light-js";
import IconTemp from "../IconTemp";

type ContactCardProps = {
  consultant: Consultant;
};

const ContactCard: FC<ContactCardProps> = ({ consultant }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Image
          className="rounded-full "
          src={consultant.image}
          alt="profile picture"
          width={100}
          height={100}
        />
        <h2 className="text-center text-4xl">
          {consultant.firstName} {consultant.lastName}
        </h2>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <IconTemp path={mdilPhone} content={consultant.phone} />
        <IconTemp path={mdilEmail} content={consultant.mail} />
        <IconTemp
          path={mdilMapMarker}
          content={`${consultant.location.address} ${consultant.location.city} ${consultant.location.country}`}
        />
      </div>
      <div className="flex">
        <Github url={consultant.github} size={50} />
        <LinkedIn url={consultant.linkedin} size={50} />
      </div>
    </>
  );
};

export default ContactCard;
