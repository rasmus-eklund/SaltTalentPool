import { useEffect, useState } from "react";
import type { Consultant } from "@/types";
import { useRouter } from "next/router";
import { getUser } from "@/server/client";
import TeamMembers from "../components/developer/TeamMembers";
import Skills from "../components/developer/Skills";
import ContactInfo from "../components/developer/ContactInfo";
import Projects from "../components/developer/Projects";

const Developer = () => {
  const router = useRouter();
  const [consultant, setConsultant] = useState<Consultant>();
  const [members, setMembers] = useState<Consultant[]>([]);

  useEffect(() => {
    // get data from api
    getUser(router.query.id as string)
      .then((res) => {
        setConsultant(res);
        return Promise.all(res.teamMembers.map((id) => getUser(id)));
      })
      .then((res) => {
        setMembers(res);
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  }, [router.query.id]);
  return (
    <main className="flex grow justify-center bg-gradient-to-b from-orange to-pink px-10 ">
      <div className="flex w-[95%] bg-gray">
        {consultant && (
          <>
            <section className="flex w-1/4 flex-col gap-6 p-5">
              <ContactInfo consultant={consultant} />
            </section>
            <hr className="h-full border-[1px] border-black/20" />
            <section className="flex w-3/4 flex-col justify-around gap-8 px-10 text-xl">
              <p>{consultant.decription}</p>
              <Projects project={consultant.recentProjects[0]!} />
              <Skills skills={consultant.skills} />
              <TeamMembers consultants={members} />
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Developer;
