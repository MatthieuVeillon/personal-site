import React, { FC } from "react";
import { Post } from "../pages";
import ArrowLink from "./ArrowLink";
import ContentTitleLink from "./ContentTitleLink";

type PostPreviewProps = {
  post: Post;
};

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  const asPath = `/${post.filePath.replace(/\.mdx?$/, "")}`;

  return (
    <li className="p-6 max-w-full rounded-md shadow-md h-30">
      <ContentTitleLink
        asPath={asPath}
        href="/[slug]"
        title={post.data.title}
      />
      <p>{post.data.description}</p>
      <div className="mt-sm">
        <ArrowLink
          as={`/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/[slug]`}
          label="read"
        />
      </div>
    </li>
  );
};

export default PostPreview;
