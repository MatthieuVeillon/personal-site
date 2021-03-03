import React, { FC } from "react";
import matter from "gray-matter";
import path from "path";
import * as fs from "fs";
import renderToString from "next-mdx-remote/render-to-string";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";
import PostLayout, { PostMetaData } from "../components/PostLayout";
import AnchorTitle from "../components/AnchorTitle";
import Image from "next/image";

var mdx = require("@mdx-js/mdx");
// const remark = require("remark-mdx");

type PostPageProps = { meta: PostMetaData; source: string; mdxText: string };
const components = { AnchorTitle, Image };

const PostPage: FC<PostPageProps> = ({ meta, source, mdxText }) => {
  const content = hydrate(source, { components });

  return <PostLayout content={content} meta={meta} mdxText={mdxText} />;
};

export default PostPage;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data: meta } = matter(source);

  const mdxSource = await renderToString(content, { components });
  const mdxText = await mdx(content);
  return {
    props: {
      mdxText,
      source: mdxSource,
      meta,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
