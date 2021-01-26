import React, { FC } from "react";
import { PostMetaData } from "./PostLayout";

type HeadPostProps = {
  meta: PostMetaData;
};

const PostHeader: FC<HeadPostProps> = ({ meta }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold mt-md text-green-400 mb-sm">
        {meta.title}
      </h1>
      <div className="text-gray-500 flex space-x-4 mb-lg">
        <span>{meta.date}</span>
        <span role="img" aria-label="one coffee">
          ☕ {meta.readTime + " min read"}
        </span>
      </div>
    </>
  );
};

export default PostHeader;
