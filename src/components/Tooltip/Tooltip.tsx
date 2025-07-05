import { FC } from "react";

interface ITooltipProps {
  link: string;
  icon?: JSX.Element;
  toolText: string;
}

const Tooltip: FC<ITooltipProps> = ({ link, icon, toolText }) => {
  return (
    <div className="dark:border-black border border-[#e5e7eb90] rounded-lg p-[6px] ">
      <a href={link} target="_blank">
        <span
          className="tooltip tooltip-top tooltip-primary mb-2"
          data-tooltip={toolText}
        >
          {icon}
        </span>
      </a>
    </div>
  );
};

export default Tooltip;
