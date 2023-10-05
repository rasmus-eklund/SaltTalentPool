import { useEffect, useState } from "react";
import type { Consultant } from "@/types";
import { useRouter } from "next/router";
import { getUser } from "@/server/client";
import TeamMembers from "../../components/DeveloperTeamMembers";
import Skills from "../../components/DeveloperSkills";
import ContactCard from "../../components/DeveloperContactCard";
import Projects from "../../components/DeveloperProjects";
import SectionHeader from "@/components/SectionHeader";

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
      <div className="flex flex-col md:w-[95%] md:flex-row gap-4">
        {consultant && (
          <>
            <div className="md:w-1/4 bg-gray">
              <ContactCard consultant={consultant} />
            </div>
            {/* <hr className="h-full border-[1px] border-black/20" /> */}
            <div className="flex flex-col gap-12 p-4 text-xl md:w-3/4 md:px-10 bg-gray">
              <section className="flex flex-col gap-4">
                <SectionHeader title={consultant.title} />
                <p>{consultant.decription}</p>
              </section>
              <Projects project={consultant.recentProjects[0]!} />
              <Skills skills={consultant.skills} />
              <TeamMembers consultants={members} />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Developer;
