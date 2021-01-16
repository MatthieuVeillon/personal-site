import React, { FC } from "react";
import Link from "next/link";
import { Post } from "../pages";
import ArrowLink from "./ArrowLink";

type PostPreviewProps = {
  post: Post;
};

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <li className="p-6 max-w-full rounded-md shadow-md h-30">
      <div className="mb-sm">
        <Link as={`/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/[slug]`}>
          <a className="font-semibold text-lg text-green-400">
            {post.data.title}
          </a>
        </Link>
      </div>
      {post.data.description ? (
        <p>{post.data.description}</p>
      ) : (
        <p className="truncate ...">{post.data.description}</p>
      )}
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
