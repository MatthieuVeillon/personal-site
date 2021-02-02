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
    <div className="relative">
      <NextSeo
        title={meta.title}
        description={meta?.description || meta.title}
        canonical={articleUrl}
      />
      <Header />
      <PostHeader meta={meta} />
      <PostSummary mdxText={mdxText} />
      <main className="prose col-span-3">{content}</main>
    </div>
  );
};

export default PostLayout;
