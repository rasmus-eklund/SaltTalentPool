import type { FC } from "react";

type Props = { skills: string[] };

const Skillset: FC<Props> = ({ skills }) => {
  return (
    <section className="flex flex-col">
      <h2>Skillset</h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <li key={skill + index}>
            <p>{skill}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skillset;
