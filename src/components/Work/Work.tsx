// import { Link } from "react-router-dom";
import Title from "../Title/Title";
// import { GrProjects } from "react-icons/gr";
import { WORK } from "../../data/strings";

const Work = () => {
  return (
    <div className="mt-9">
      <Title text="Work" />
      <p className="mt-3 dark:text-dark-text">{WORK}</p>
    </div>
  );
};

export default Work;
