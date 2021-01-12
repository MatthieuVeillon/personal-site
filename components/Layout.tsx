import React, { FC, ReactNode } from "react";
import Header from "./Header";
import PostHeader from "./PostHeader";

type LayoutProps = { meta: { [p: string]: any }; content: ReactNode };

const Layout: FC<LayoutProps> = ({ meta, content }) => {
  return (
    <div className="mx-auto bg-red-100 max-w-xl">
      <Header />
      <PostHeader meta={meta} />
      <main>{content}</main>
    </div>
  );
};

export default Layout;
