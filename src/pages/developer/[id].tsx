import { useEffect, useState } from "react";
import type { Consultant } from "@/types";
import { useRouter } from "next/router";
import Skillset from "../components/developer/Skillset";
import RecentProject from "../components/developer/recentProject";
import { getUser } from "@/server/client";
import TeamMembers from "../components/developer/TeamMembers";
import ContactCard from "../components/developer/ContactCard";

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
    <main className="flex grow justify-center bg-gradient-to-b from-orange to-pink px-10">
      <div className="flex h-full bg-gray">
        {consultant && (
          <>
            <ContactCard consultant={consultant} />
            <hr className="border-black/20 border-[1px] h-full"/>
            <section className="flex flex-col justify-around gap-8 px-10 text-xl">
              <p>{consultant.decription}</p>
              <RecentProject project={consultant.recentProjects[0]!} />
              <Skillset skills={consultant.skills} />
              <TeamMembers consultants={members} />
            </section>
          </>
        )}
      </div>
    </main>
  );
};

export default Developer;
