"use client";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Props = { skills: string[] };

const Skills = ({ skills }: Props) => {
  const [more, setMore] = useState(false);
  return (
    <section className="flex flex-col gap-4">
      <SectionHeader title="Skills" />
      <ul className="flex flex-wrap gap-4">
        {skills
          .filter((_, i) => more || i < 4)
          .map((skill, index) => {
            return (
              <li key={skill + index}>
                <p className="rounded-full bg-orange px-4 py-1 text-sm text-white shadow-md">
                  {skill}
                </p>
              </li>
            );
          })}
        <li>
          {skills.length > 4 && (
            <button
              className="text-sm underline underline-offset-2"
              onClick={() => setMore((p) => !p)}
            >
              {more ? "Show less" : "Show more"}
            </button>
          )}
        </li>
      </ul>
    </section>
  );
};

export default Skills;