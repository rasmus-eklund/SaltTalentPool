import { useEffect, useState } from "react";
import { data } from "../mockdata";
import type { Consultant } from "@/types";
import { useRouter } from "next/router";
import ContactCard from "../components/developer/contactCard";

const Developer = () => {
  const router = useRouter();
  const [consultant, setConsultant] = useState<Consultant>();

  useEffect(() => {
    // get data from api
    setConsultant(data.consultants.find((c) => c.id === router.query.id));
  }, [router.query.id]);
  return <main>{consultant && <ContactCard consultant={consultant} />}</main>;
};

export default Developer;
