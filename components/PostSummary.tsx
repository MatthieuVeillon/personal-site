import React, { FC, useEffect, useState } from "react";
import { isInViewport } from "../utils/isInViewPort";
import debounce from "lodash/debounce";

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

/*
  todo feature / bonus :
     - selected/active should be colored
     - should highlight which portion you're on
 */

const PostSummary: FC<PostSummaryProps> = ({ mdxText }) => {
  const anchorTitles = getAnchorTitles(mdxText);
  const [loadedDocument, setLoadedDocument] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(anchorTitles[0].href);

  useEffect(() => {
    setLoadedDocument(document);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentAnchor = anchorTitles.find(({ href }) =>
        isInViewport(document.getElementById(href))
      );

      if (currentAnchor) {
        setCurrentTitle(currentAnchor.href);
      } else {
        setCurrentTitle((currentTitle) => currentTitle);
      }
    };

    window.addEventListener("scroll", debounce(handleScroll, 300), {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    anchorTitles.length && (
      <div className="sticky top-5">
        {anchorTitles.map(({ href, label }) => {
          let onClick = () => false;
          const isActive = currentTitle === href;
          if (loadedDocument) {
            const anchorElement = loadedDocument.getElementById(href);
            onClick = () =>
              anchorElement.scrollIntoView({
                behavior: "smooth",
                inline: "nearest",
              });
          }

          return (
            <div>
              <a
                className={`text-gray-500 text-sm ${
                  isActive && "text-green-400"
                }`}
                onClick={onClick}
                href="javascript:"
              >
                {label}
              </a>
            </div>
          );
        })}
      </div>
    )
  );
};

export default PostSummary;
