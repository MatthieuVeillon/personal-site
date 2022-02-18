import Link from "next/link";
import React, { FC } from "react";
import { Snippet } from "../pages/snippet/[slug]";
import ContentTitle from "./ContentTitle";

type SnipetPreviewProps = {
  snippet: Snippet;
};

const SnippetPreview: FC<SnipetPreviewProps> = ({ snippet }) => {
  const href = `/snippet/${snippet.filePath.replace(/\.mdx?$/, "")}`;
  return (
    <li className="p-6 max-w-full rounded-md shadow-md h-30">
      <Link href={href}>
        <a>
          <ContentTitle title={snippet.data.title} />
          <p>{snippet.data.description}</p>
        </a>
      </Link>
    </li>
  );
};

export default SnippetPreview;
