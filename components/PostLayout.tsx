import React, { FC, ReactNode } from "react";
import Header from "./Header";
import PostHeader from "./PostHeader";

type LayoutProps = { meta: Meta; content: ReactNode };

export type Meta = {
  title: string;
  date: Date;
  readTime: number;
};

const PostLayout: FC<LayoutProps> = ({ meta, content }) => {
  return (
    <>
      <Header />
      <PostHeader meta={meta} />
      <main className="prose">{content}</main>
    </>
  );
};

export default PostLayout;