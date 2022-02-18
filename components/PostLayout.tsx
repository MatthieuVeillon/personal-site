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
  displaySummary?: boolean;
  readTime: number;
};

export type AnchorTitle = {
  href: string;
  label: string;
};

export const getAnchorTitles = (text: string): AnchorTitle[] => {
  const regex = /(?<=<AnchorTitle)(.*?)(?=<\/AnchorTitle>)/g;
  return (text.match(regex) || []).map((title) => {
    const hrefRegex = /(?<=id=")(.*?)(?=")/g;
    const labelRegex = /(?<=>)(.*)/g;
    return {
      href: title.match(hrefRegex)[0],
      label: title.match(labelRegex)[0],
    };
  });
};

const PostLayout: FC<LayoutProps> = ({ meta, content, mdxText }) => {
  const { asPath } = useRouter();
  const articleUrl = `${BASE_URL}${asPath}`;

  const anchorTitles = getAnchorTitles(mdxText);

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta?.description || meta.title}
        canonical={articleUrl}
      />
      <Header />
      <div
        className={`container grid grid-cols-4 gap-10 px-5 py-10 max-w-${
          anchorTitles?.length ? "5" : "3"
        }xl mx-auto`}
      >
        {anchorTitles?.length ? (
          <div className="col-span-1 sm:block hidden">
            <PostSummary anchorTitles={anchorTitles} />
          </div>
        ) : null}
        <div className={`col-span-${anchorTitles?.length ? "3" : "4"}`}>
          <PostHeader meta={meta} />
          <main className="prose pt-10 font-Hind max-w-none">{content}</main>
        </div>
      </div>
    </>
  );
};

export default PostLayout;
