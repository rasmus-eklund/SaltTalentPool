import type { Project } from "@/types";
import type { FC } from "react";

type RecentProjectProps = {
  project: Project;
};

const RecentProject: FC<RecentProjectProps> = ({ project }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-semibold">Current Project : {project.title}</p>
      <div className="flex gap-4">
        <iframe
          src={project.youtube}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default RecentProject;
