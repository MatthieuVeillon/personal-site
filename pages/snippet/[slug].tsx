import React, { FC } from "react";
import hydrate from "next-mdx-remote/hydrate";
import path from "path";
import { SNIPPET_PATH, snippetFilePaths } from "../../utils/mdxUtils";
import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import { NextSeo } from "next-seo";
import Header from "../../components/Header";

type SnippetMetaData = {
  title: string;
  description: string;
};

//todo mutualise type with Post
export type Snippet = {
  content: string;
  data: { [p: string]: any };
  filePath: string;
};

type SnippetPageProps = { meta: SnippetMetaData; source: string };

const SnippetPage: FC<SnippetPageProps> = ({ meta, source }) => {
  const content = hydrate(source);

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta?.description || meta.title}
      />
      <Header />
      <main className="prose pt-10 container">{content}</main>
    </>
  );
};

export default SnippetPage;

export const getStaticProps = async ({ params }) => {
  const snippetFilePaths = path.join(SNIPPET_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(snippetFilePaths);

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
  const paths = snippetFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
