import React, { FC } from "react";

type GlobalLayoutProps = {};

const GlobalLayout: FC<GlobalLayoutProps> = ({ children }) => {
  return <div className="container mx-auto px-2 py-10">{children}</div>;
};

export default GlobalLayout;
