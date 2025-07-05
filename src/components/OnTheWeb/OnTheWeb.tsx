import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Title from "../Title/Title";
import { MdMail } from "react-icons/md";

const OnTheWeb = () => {
  return (
    <div className="mt-9">
      <Title text="On the Web" />
      <ul className="mt-3 space-y-2">
        <li className="max-w-32">
          <a
            href="https://github.com/khalilaliev"
            target="_blank"
            className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all duration-300 gap-2 dark:text-dark-text"
          >
            <FaGithub className="text-xl " /> GitHub
          </a>
        </li>
        <li className="max-w-32">
          <a
            href="https://www.linkedin.com/in/khalil-aliiev-b31036298/"
            target="_blank"
            className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all duration-300 gap-2 dark:text-dark-text"
          >
            <FaLinkedin className="text-xl " /> Linkedin
          </a>
        </li>
        <li className="max-w-32">
          <a
            href="https://www.instagram.com/khalilaliev/"
            target="_blank"
            className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all  duration-300 gap-2 dark:text-dark-text"
          >
            <FaInstagram className="text-xl " /> Instagram
          </a>
        </li>
        <li className="max-w-32">
          <a
            href="mailto:khalilaliev0@gmail.com"
            target="_blank"
            className="flex text-lg items-center dark:hover:text-blue-500 hover:text-blue-500 transition-all  duration-300 gap-2 dark:text-dark-text"
          >
            <MdMail className="text-xl " /> E-Mail
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OnTheWeb;
