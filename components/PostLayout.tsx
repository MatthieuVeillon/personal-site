import React, { FC, ReactNode } from "react";
import Header from "./Header";
import PostHeader from "./PostHeader";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const BASE_URL = "https://www.matthieuveillon.com";

type LayoutProps = { meta: PostMetaData; content: ReactNode };

export type PostMetaData = {
  title: string;
  date: Date;
  description: string;
  readTime: number;
};

const PostLayout: FC<LayoutProps> = ({ meta, content }) => {
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
      <PostHeader meta={meta} />
      <main className="prose">{content}</main>
    </>
  );
};

export default PostLayout;
