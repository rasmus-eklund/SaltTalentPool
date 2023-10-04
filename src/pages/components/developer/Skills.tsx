import type { FC } from "react";

type Props = { skills: string[] };

const Skills: FC<Props> = ({ skills }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Skillset</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <li key={skill + index}>
            <p className="bg-orange px-4 py-1 rounded-full text-white">{skill}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
