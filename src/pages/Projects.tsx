import { FC, useEffect, useMemo, useState } from "react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useFadeIn } from "../hooks/useFadeIn";
import Heading from "../components/Heading/Heading";
import Button from "../components/Button/Button";
import DynamicTitle from "../components/DynamicTitle/DynamicTitle";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects: FC = () => {
  const { animationProps } = useFadeIn({ delay: 0 });
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [selectedId, setSelectedId] = useState<string | number | null>(
    projects[0]?.id ?? null
  );
  const selected = useMemo(
    () => projects.find((b) => b.id === selectedId),
    [selectedId]
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width <= 768 ? (
        <motion.div {...animationProps}>
          <DynamicTitle title="Portfolio | Projects" />
          <Heading text="My Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col dark:bg-dark-bg dark:border-none border border-[#e5e7eb90] hover:shadow-lg bg-white  dark:shadow-header-bg rounded-xl overflow-hidden w-full hover:-translate-y-1 duration-300 transition-all"
              >
                <Link to={`/projects/${project.id}`}>
                  <div className="flex-shrink-0">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-52 object-cover rounded-xl"
                    />
                  </div>
                </Link>
                <div className="flex flex-col justify-between flex-grow p-4">
                  <h2 className="text-xl font-semibold dark:text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-600  mb-4 dark:text-dark-text">
                    {project.description}
                  </p>
                  <Button
                    text="See the project"
                    source={`/projects/${project.id}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="flex gap-5">
          <div className="flex-[30%]">
            <Sidebar
              text="My Projects"
              data={projects}
              selectedId={selectedId}
              onSelect={(id) => setSelectedId(id)}
            />
          </div>

          <div className="flex-[70%]">
            <DynamicTitle title="Portfolio | Projects" />

            {selected && (
              <article className="flex flex-col dark:bg-dark-bg dark:border-none border border-[#e5e7eb90] bg-white dark:shadow-header-bg rounded-xl overflow-hidden w-full">
                {selected.imageUrl && (
                  <>
                    <Link to={selected.link} target="_blank">
                      <img
                        src={selected.imageUrl}
                        alt={selected.title}
                        className="rounded-t-xl max-h-[350px] w-full object-cover shadow-lg"
                      />
                    </Link>
                    <div className="p-6">
                      <h1 className="text-2xl dark:text-white font-medium mb-4">
                        {selected.title}
                      </h1>
                      <h2 className="font-light text-lg dark:text-dark-text">
                        {selected.description}
                      </h2>
                      <div className="flex items-center gap-5 mt-5">
                        <span className="bg-blue-200 flex-[20%] text-center dark:bg-hover-bg max-sm:text-center max-sm:flex-1 py-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
                          Platform
                        </span>
                        <p className="font-light flex-[80%] dark:text-dark-text max-sm:flex-1">
                          {selected.platform}
                        </p>
                      </div>
                      <div className="flex items-center gap-5 mt-5">
                        <span className="bg-blue-200 flex-[20%] text-center dark:bg-hover-bg max-sm:text-center max-sm:flex-1 py-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
                          Technologies
                        </span>
                        <p className="font-light flex-[80%] dark:text-dark-text max-sm:flex-1">
                          {selected.stack}
                        </p>
                      </div>
                      <div className="flex items-center gap-5 mt-5 max-sm:flex-1">
                        <span className="bg-blue-200 flex-[20%] text-center dark:bg-hover-bg py-1 max-sm:text-center max-sm:flex-1 px-2 rounded-xl text-sm text-blue-700 font-medium">
                          Language
                        </span>
                        <p className="font-light flex-[80%] dark:text-dark-text max-sm:flex-1">
                          {selected.language}
                        </p>
                      </div>
                      <div className="flex gap-4 mt-7 items-center">
                        <div>
                          <a
                            className="text-blue-500 dark:text-blue-700 text-md text-center flex justify-start max-w-36 items-center gap-2 dark:hover:bg-hover-bg hover:bg-blue-200 rounded-2xl p-2 duration-300 transition-all"
                            href={selected.link}
                            target="_blank"
                          >
                            Live preview <FaEye />
                          </a>
                        </div>
                        {selected.gitHub && (
                          <div>
                            <a
                              className="text-blue-500 dark:text-blue-700 text-md flex justify-start max-w-36 items-center gap-2 dark:hover:bg-hover-bg hover:bg-blue-200 rounded-2xl p-2 duration-300 transition-all"
                              href={selected.gitHub}
                              target="_blank"
                            >
                              GitHub repo <FaGithub />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </article>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
