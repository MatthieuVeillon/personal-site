import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FC } from "react";
import Intro from "../components/Intro";
import BlogSection from "../components/BlogSection";

export type Post = {
  content: string;
  data: { [p: string]: any };
  filePath: string;
};

type PostPageProps = {
  posts: Post[];
};

const HomePage: FC<PostPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col space-y-10">
      <Intro />
      <BlogSection posts={posts} />
    </div>
  );
};

export default HomePage;

export function getStaticProps() {
  const POSTS_PATH = path.join(process.cwd(), "posts");
  const filesPath = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path));

  const posts: Post[] = filesPath.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
