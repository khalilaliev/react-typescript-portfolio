import { FC } from "react";

interface ITitle {
  text: string;
}

const Title: FC<ITitle> = ({ text }) => {
  return (
    <h2 className="font-medium text-2xl mb-5 dark:text-dark-text">{text}</h2>
  );
};

export default Title;
