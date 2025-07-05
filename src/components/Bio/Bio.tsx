import { FC } from "react";
import { FaBook, FaHtml5, FaJs, FaReact, FaUniversity } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import Tooltip from "../Tooltip/Tooltip";

const Bio: FC = () => {
  return (
    <div className=" flex items-start justify-between max-lg:flex-col">
      <ul className="flex flex-col gap-2 max-lg:mb-9">
        <li className="flex items-center gap-[8px] dark:text-white">
          <MdOutlineWork className="text-2xl max-md:hidden" />
          2024 - present: Front-End Developer at toweb GmbH
        </li>
        <li className="flex items-center gap-[8px] dark:text-white">
          <FaBook className="text-2xl max-md:hidden" />
          2023 - 2025: Front-End Development at Hillel IT School
        </li>
        <li className="flex items-center gap-[8px] dark:text-white">
          <FaUniversity className="text-2xl max-md:hidden" />
          2019 - 2023: Bachelor of International Economics
        </li>
      </ul>
      <div className="flex gap-5 flex-wrap">
        <Tooltip
          toolText="Front-End Basic"
          icon={<FaHtml5 className="text-5xl" />}
          link="https://certificate.ithillel.ua/view/77103560"
        />
        <Tooltip
          toolText="JavaScript"
          icon={<FaJs className="text-5xl" />}
          link="https://certificate.ithillel.ua/view/60702782"
        />
        <Tooltip
          toolText="Front-End Pro"
          icon={<IoCodeSlash className="text-5xl" />}
          link="https://certificate.ithillel.ua/view/25861834"
        />
        <Tooltip
          toolText="React"
          icon={<FaReact className="text-5xl" />}
          link="https://certificate.ithillel.ua/view/94365887"
        />
        <Tooltip
          toolText="TypeScript"
          icon={<SiTypescript className="text-5xl" />}
          link="https://certificate.ithillel.ua/view/25754293"
        />
      </div>
    </div>
  );
};

export default Bio;
