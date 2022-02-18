import Link from "next/link";
import React, { FC } from "react";
import { Post } from "../pages";
import ArrowLabel from "./ArrowLabel";
import ContentTitle from "./ContentTitle";

type PostPreviewProps = {
  post: Post;
};

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  const href = `/${post.filePath.replace(/\.mdx?$/, "")}`;

  return (
    <li className="p-6 max-w-full rounded-md shadow-md h-30 group hover:cursor-pointer">
      <Link href={href}>
        <a>
          <ContentTitle title={post.data.title} />
          <p className="font-Hindi">{post.data.description}</p>
          <div className="mt-sm">
            <ArrowLabel label="read" />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostPreview;
