import React, { FC, ReactNode } from "react";
import Header from "./Header";
import PostHeader from "./PostHeader";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PostSummary from "./PostSummary";

const BASE_URL = "https://www.matthieuveillon.com";

type LayoutProps = { meta: PostMetaData; content: ReactNode; mdxText: string };

export type PostMetaData = {
  title: string;
  date: Date;
  description: string;
  readTime: number;
};

const PostLayout: FC<LayoutProps> = ({ meta, content, mdxText }) => {
  const { asPath } = useRouter();
  const articleUrl = `${BASE_URL}${asPath}`;
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta?.description || meta.title}
        canonical={articleUrl}
      />
      <Header />
      <div className="container grid grid-cols-4 gap-10 px-5 py-10 max-w-5xl mx-auto">
        <div className="col-span-1 sm:block hidden">
          <PostSummary mdxText={mdxText} />
        </div>
        <div className="col-span-4 sm:col-span-3">
          <PostHeader meta={meta} />
          <main className="prose col-span-3">{content}</main>
        </div>
      </div>
    </>
  );
};

export default PostLayout;
