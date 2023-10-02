import { Project } from "@/types";
import { FC } from "react";

type RecentProjectProps = {
  project: Project;
};

const RecentProject: FC<RecentProjectProps> = ({ project }) => {
  return (
    <div>
      <p>{project.title}</p>
      <div className="flex gap-2">
        <iframe
          src={project.youtube}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default RecentProject;
