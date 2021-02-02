import React, { FC } from "react";

type PostSummaryProps = {
  mdxText: any;
};

type AnchorTitle = {
  href: string;
  label: string;
};

export const getAnchorTitles = (text: string): AnchorTitle[] => {
  const regex = /(?<=<AnchorTitle)(.*?)(?=<\/AnchorTitle>)/g;
  return (text.match(regex) || []).map((title) => {
    const result = {} as AnchorTitle;
    const hrefRegex = /(?<=id=")(.*?)(?=")/g;
    const labelRegex = /(?<=>)(.*)/g;
    result.href = title.match(hrefRegex)[0];
    result.label = title.match(labelRegex)[0];
    return result;
  });
};

const PostSummary: FC<PostSummaryProps> = ({ mdxText }) => {
  //get the id of all anchorTitles

  /*
  
      css constraint
      should be absolute and sticky which will constraint the last css point (remove globalLayout ?)
      only appear on tablet or bigger
      should be sticky
      always at X px left from content regardless of width of content
  
  
      feature :
      should highlight which portion you're on
  
      * */

  const anchorTitles = getAnchorTitles(mdxText);
  return (
    anchorTitles.length && (
      <div className="absolute top-20 -left-60 max-w-xs">
        {anchorTitles.map(({ href, label }) => (
          <div>
            <a className="text-gray-500 text-sm" href={`#${href}`}>
              {label}
            </a>
          </div>
        ))}
      </div>
    )
  );
};

export default PostSummary;
