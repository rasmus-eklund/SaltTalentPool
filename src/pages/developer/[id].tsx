import { useEffect, useState } from "react";
import type { Consultant } from "@/types";
import { useRouter } from "next/router";
import ContactCard from "../components/developer/ContactCard";
import Skillset from "../components/developer/skillset";
import RecentProject from "../components/developer/recentProject";
import { getUser } from "@/server/client";
import TeamMembers from "../components/developer/TeamMembers";

const Developer = () => {
  const router = useRouter();
  const [consultant, setConsultant] = useState<Consultant>();
  const [members, setMembers] = useState<Consultant[]>([]);

  useEffect(() => {
    // get data from api
    (async () => {
      const data = await getUser(router.query.id as string);
      setConsultant(data);
      setMembers(await Promise.all(data.teamMembers.map((id) => getUser(id))));
    })();
  }, [router.query.id]);
  return (
    <main className="flex">
      {consultant && (
        <>
          <ContactCard consultant={consultant} />
          <div className="flex flex-col">
            <p>{consultant.decription}</p>
            <Skillset skills={consultant.skills} />
            <RecentProject project={consultant.recentProjects[0]!} />
            <ul className="flex">
              {members.map((t) => {
                return <TeamMembers consultant={t} />;
              })}
            </ul>
          </div>
        </>
      )}
    </main>
  );
};

export default Developer;
