import { FC } from "react";
import { Link } from "react-router-dom";

interface IBackButton {
  source: string;
  text: string;
}

const Button: FC<IBackButton> = ({ source, text }) => {
  return (
    <div className="w-fit mb-5">
      <Link
        className=" text-blue-400 dark:text-blue-600 text-sm  dark:hover:bg-hover-bg hover:bg-blue-100 px-3 py-1 hover:text-blue-500 rounded-2xl transition-all duration-300 flex items-center gap-2"
        to={source}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
