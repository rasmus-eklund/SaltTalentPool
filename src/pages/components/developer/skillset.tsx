import type { FC } from "react";

type Props = { skills: string[] };

const skillset: FC<Props> = ({ skills }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <li key={skill + index}>
          <p>{skill}</p>
        </li>
      ))}
    </ul>
  );
};

export default skillset;
