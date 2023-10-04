import { useEffect, useState } from "react";
import type { Consultant } from "@/types";
import { useRouter } from "next/router";
import { getUser } from "@/server/client";
import TeamMembers from "../components/developer/TeamMembers";
import Skillset from "../components/developer/Skillset";
import ContactCard from "../components/developer/ContactCard";
import RecentProject from "../components/developer/RecentProject";

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
              <ContactCard consultant={consultant} />
            </section>
            <hr className="h-full border-[1px] border-black/20" />
            <section className="flex w-3/4 flex-col justify-around gap-8 px-10 text-xl">
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
