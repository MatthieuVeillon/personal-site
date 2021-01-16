import React, { FC } from "react";
import PostPreview from "./PostPreview";
import { Post } from "../pages";

type BlogSectionProps = {
  posts: Post[];
};

const BlogSection: FC<BlogSectionProps> = ({ posts }) => {
  return (
    <>
      <h2 className="text-3xl mb-sm">Blog Posts</h2>
      <ul className="mx-auto flex flex-col space-y-2">
        {posts.map((post) => (
          <PostPreview key={post.data.title} post={post} />
        ))}
      </ul>
    </>
  );
};

export default BlogSection;
