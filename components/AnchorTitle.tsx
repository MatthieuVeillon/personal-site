import React, { FC } from "react";

type AnchorTitleProps = { id: string };

const AnchorTitle: FC<AnchorTitleProps> = ({ id, children }) => {
  return (
    <div className="not-prose">
      <h3 className="text-blue-600" id={id}>
        {children}
      </h3>
    </div>
  );
};

export default AnchorTitle;
