import React, { FC } from "react";
import Link from "next/link";
import { Post } from "../pages";

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
      <p className="truncate ...">{post.content}</p>
    </li>
  );
};

export default PostPreview;
