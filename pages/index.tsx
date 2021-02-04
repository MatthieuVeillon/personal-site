import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FC } from "react";
import Intro from "../components/Intro";
import BlogSection from "../components/BlogSection";
import BookSection from "../components/BookSection";
import SnippetSection from "../components/SnippetSection";
import { Snippet } from "./snippet/[slug]";
import Container from "../components/Container";

export type Post = {
  content: string;
  data: { [p: string]: any };
  filePath: string;
};

type HomePageProps = {
  posts: Post[];
  snippets: Snippet[];
};

const HomePage: FC<HomePageProps> = ({ posts, snippets }) => {
  return (
    <Container>
      <div className="flex flex-col space-y-10">
        <Intro />
        <BlogSection posts={posts} />
        <BookSection />
        <SnippetSection snippets={snippets} />
      </div>
    </Container>
  );
};

export default HomePage;

export function getStaticProps() {
  const POSTS_PATH = path.join(process.cwd(), "posts");
  const SNIPPETS_PATH = path.join(process.cwd(), "snippets");

  const postFilesPath = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const snippetFilesPath = fs
    .readdirSync(SNIPPETS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const posts: Post[] = postFilesPath.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  const snippets: Snippet[] = snippetFilesPath.map((filePath) => {
    const source = fs.readFileSync(path.join(SNIPPETS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts, snippets } };
}
