import React, { FC } from "react";

type AnchorTitleProps = { id: string };

const AnchorTitle: FC<AnchorTitleProps> = ({ id, children }) => {
  return <h3 id={id}>{children}</h3>;
};

export default AnchorTitle;
