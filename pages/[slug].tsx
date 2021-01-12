import React, { FC } from "react";
import matter from "gray-matter";
import path from "path";
import * as fs from "fs";
import renderToString from "next-mdx-remote/render-to-string";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";
import Layout from "../components/Layout";

type PostPageProps = { meta: { [p: string]: any }; source: string };

const PostPage: FC<PostPageProps> = ({ meta, source }) => {
  const content = hydrate(source);

  return <Layout content={content} meta={meta} />;
};

export default PostPage;

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data: meta } = matter(source);

  const mdxSource = await renderToString(content);

  return {
    props: {
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
