import React, { FC } from "react";

type HeadPostProps = {
  meta: { [p: string]: any };
};

const PostHeader: FC<HeadPostProps> = ({ meta }) => {
  return (
    <>
      <h1>{meta.title}</h1>
      <div className="details">
        <span>{meta.date}</span>
        <span role="img" aria-label="one coffee">
          ☕ {meta.readTime + " min read"}
        </span>
      </div>
    </>
  );
};

export default PostHeader;
