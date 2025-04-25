import { Helmet } from "react-helmet-async";
import { IDynamicTitle } from "../../interface/dynamicTitle";
import { FC } from "react";

const DynamicTitle: FC<IDynamicTitle> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default DynamicTitle;
