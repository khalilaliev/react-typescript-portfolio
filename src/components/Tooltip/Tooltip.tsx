import { FC } from "react";

interface ITooltipProps {
  link: string;
  icon?: JSX.Element;
  toolText: string;
}

const Tooltip: FC<ITooltipProps> = ({ link, icon, toolText }) => {
  return (
    <div className="dark:border-black border border-[#e5e7eb90] dark:border-[#ffffff80] rounded-lg p-[8px]">
      <a href={link} target="_blank">
        <span
          className="tooltip tooltip-top tooltip-primary mb-2 dark:text-white"
          data-tooltip={toolText}
        >
          {icon}
        </span>
      </a>
    </div>
  );
};

export default Tooltip;
