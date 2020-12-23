import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FC } from "react";
import Link from "next/link";

type Post = {
  content: string;
  data: { [p: string]: any };
  filePath: string;
};

type PostPageProps = {
  posts: Post[];
};

const PostsPage: FC<PostPageProps> = ({ posts }) => {
  return (
    <>
      My Blog Posts
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <div className="p-6 max-w-sm rounded-xl shadow-md">
              <Link
                as={`/${post.filePath.replace(/\.mdx?$/, "")}`}
                href={`/[slug]`}
              >
                <a>{post.data.title}</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsPage;

// Why do I need a getStaticProps here ? (because it needs to be executed server side
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
