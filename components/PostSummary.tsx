import React, { FC, useEffect, useState } from "react";
import { isInViewport } from "../utils/isInViewPort";
import debounce from "lodash/debounce";
import { AnchorTitle } from "./PostLayout";

type PostSummaryProps = {
  anchorTitles: AnchorTitle[];
};

/*
  todo feature / bonus :
     - selected/active should be colored
     - should highlight which portion you're on
 */

const PostSummary: FC<PostSummaryProps> = ({ anchorTitles }) => {
  const [loadedDocument, setLoadedDocument] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(anchorTitles[0].href);

  useEffect(function setDocumentWhenLoaded() {
    setLoadedDocument(document);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentAnchor = anchorTitles.find(({ href }) => {
        const element = document.getElementById(href);
        return element ? isInViewport(element) : null;
      });
      if (currentAnchor) {
        setCurrentTitle(currentAnchor.href);
      }
    };

    window.addEventListener("scroll", debounce(handleScroll, 100), {
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
            <div key={label}>
              <a
                className={`text-sm ${isActive && "text-blue-700"}`}
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
