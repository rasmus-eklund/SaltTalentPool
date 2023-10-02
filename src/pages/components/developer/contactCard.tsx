import type { Consultant } from "@/types";
import type { FC } from "react";
import Image from "next/image";
import Github from "../Github";
import LinkedIn from "../LinkedIn";
import Icon from "@mdi/react";
import { mdilEmail, mdilPhone, mdilMapMarker } from "@mdi/light-js";

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
      <div className="flex flex-col gap-2">
        <Icon
          path={mdilPhone}
          title="phone"
          size={1}
          rotate={180}
          horizontal
          vertical
          color="black"
        />{" "}
        <span>{consultant.phone}</span>
        <Icon
          path={mdilEmail}
          title="email"
          size={1}
          rotate={180}
          horizontal
          vertical
          color="black"
        />
        <span>{consultant.mail}</span>
        <Icon
          path={mdilMapMarker}
          title="address"
          size={1}
          rotate={180}
          horizontal
          vertical
          color="black"
        />
        <span>
          {consultant.location.address} {consultant.location.city}{" "}
          {consultant.location.country}
        </span>
        <Github url={consultant.github} />
        <LinkedIn url={consultant.linkedin} />
      </div>
    </section>
  );
};

export default ContactCard;
