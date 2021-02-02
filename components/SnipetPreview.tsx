import React, { FC } from "react";
import { Snippet } from "../pages/snippet/[slug]";
import ContentTitleLink from "./ContentTitleLink";

type SnipetPreviewProps = {
  snippet: Snippet;
};

const SnippetPreview: FC<SnipetPreviewProps> = ({ snippet }) => {
  const asPath = `/snippet/${snippet.filePath.replace(/\.mdx?$/, "")}`;
  return (
    <li className="p-6 max-w-full rounded-md shadow-md h-30">
      <ContentTitleLink
        asPath={asPath}
        href="/snippet/[slug]"
        title={snippet.data.title}
      />
      <p>{snippet.data.description}</p>
    </li>
  );
};

export default SnippetPreview;
