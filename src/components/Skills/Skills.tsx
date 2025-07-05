import { skills } from "../../data/skills";
import Title from "../Title/Title";

const Skills = () => {
  return (
    <div className="mt-9">
      <Title text="Skills" />
      <ul className="mt-3 flex flex-wrap gap-5">
        {skills.map((skill) => (
          <a
            key={skill.id}
            href={skill.links}
            target="_blank"
            className="hover:text-blue-500 dark:text-dark-text  rounded-2xl transition-all duration-300 dark:hover:bg-hover-bg"
          >
            <li className="text-lg  cursor-pointer text-center flex items-center  w-32 h-10">
              {skill.skill}
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
