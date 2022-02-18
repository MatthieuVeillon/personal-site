import React, { FC } from "react";

type ContentTitleLinkProps = {
  title: string;
};

const ContentTitle: FC<ContentTitleLinkProps> = ({ title }) => {
  return (
    <div className="mb-sm">
      <h2 className="font-Galdeano text-2xl text-blue-900 group-hover:text-blue-700">
        {title}
      </h2>
    </div>
  );
};

export default ContentTitle;
