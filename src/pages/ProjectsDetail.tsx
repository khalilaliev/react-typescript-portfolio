import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { FaEye, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";
import BackButton from "../components/Button/BackButton";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";

const ProjectsDetail: FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));
  const { animationProps } = useFadeIn({ delay: 0 });

  if (!project) {
    return <div>Project not Found!</div>;
  }

  return (
    <motion.div {...animationProps}>
      <DynamicTitle title={`Portfolio | ${project.title}`} />
      <BackButton source="/projects" text="Back to projects" />
      <div className="flex flex-col dark:bg-dark-bg bg-white shadow-lg dark:shadow-header-bg rounded-xl overflow-hidden w-full  duration-300 transition-all">
        <div className="flex-shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow p-10">
          <div className="mt-5 flex justify-between items-center gap-9">
            <Link
              to={"/projects"}
              className="text-2xl flex gap-2 items-center dark:text-blue-600 text-blue-500 dark:hover:text-dark-text hover:text-black duration-300 transition-all"
            >
              Projects{" "}
              <FaArrowUpRightFromSquare className="text-base mt-1 font-light" />
            </Link>
            <h1 className="font-light text-xl dark:text-dark-text">
              {project.description}
            </h1>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <span className="bg-blue-200 dark:bg-hover-bg max-sm:text-center max-sm:flex-1 py-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
              Platform
            </span>
            <p className="font-light dark:text-dark-text max-sm:flex-1">
              {project.platform}
            </p>
          </div>
          <div className="flex items-center gap-5 mt-5">
            <span className="bg-blue-200 dark:bg-hover-bg max-sm:text-center max-sm:flex-1 py-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
              Technologies
            </span>
            <p className="font-light dark:text-dark-text max-sm:flex-1">
              {project.stack}
            </p>
          </div>
          <div className="flex items-center gap-5 mt-5 max-sm:flex-1">
            <span className="bg-blue-200 dark:bg-hover-bg py-1 max-sm:text-center max-sm:flex-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
              Language
            </span>
            <p className="font-light dark:text-dark-text max-sm:flex-1">
              {project.language}
            </p>
          </div>
          <div className="mt-5 text-left">
            <a
              className="text-blue-500 dark:text-blue-700 text-lg flex justify-start max-w-36 items-center gap-2 dark:hover:bg-hover-bg hover:bg-blue-200 rounded-2xl p-2 duration-300 transition-all"
              href={project.link}
              target="_blank"
            >
              Live preview <FaEye />
            </a>
          </div>
          {project.gitHub && (
            <div className="mt-2 text-left">
              <a
                className="text-blue-500 dark:text-blue-700 text-lg flex justify-start max-w-36 items-center gap-2 dark:hover:bg-hover-bg hover:bg-blue-200 rounded-2xl p-2 duration-300 transition-all"
                href={project.gitHub}
                target="_blank"
              >
                GitHub repo <FaGithub />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsDetail;
