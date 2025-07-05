import { FC } from "react";
import Title from "../Title/Title";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";

const LatestProject: FC = () => {
  const limitedProjects = projects.slice(0, 4);

  return (
    <>
      <div className="mb-5">
        <Title text="Latest Project" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {limitedProjects.map((project) => (
            <div
              className="p-2 border rounded-lg dark:bg-dark-bg dark:shadow-header-bg dark:border-black border-[#e5e7eb90] hover:shadow-lg duration-300 hover:-translate-y-1 transition-all bg-white "
              key={project.id}
            >
              <div className="flex gap-5">
                <div>
                  <Link to={`/projects/${project.id}`}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="rounded-lg object-cover h-[120px] w-[150px]"
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium mb-2 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-sm mb-auto dark:text-white">
                    {project.description.split(" ").slice(0, 5).join(" ")}...
                  </p>
                  <Link
                    className="text-md mb-2 hover:text-blue-500 dark:text-blue-500 dark:hover:text-white duration-300 transition-all text-sm"
                    to={`/projects/${project.id}`}
                  >
                    See the project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-center ">
          <Link
            to={"/projects"}
            className="text-blue-400  flex items-center gap-2 dark:hover:text-blue-700 dark:hover:bg-hover-bg hover:bg-blue-100 px-2 py-1 hover:text-blue-500 rounded-2xl transition-all duration-300"
          >
            Check out my projects <GrProjects />
          </Link>
        </div>
      </div>
    </>
  );
};

export default LatestProject;
