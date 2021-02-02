import React, { FC } from "react";
import { Snippet } from "../pages/snippet/[slug]";
import SnippetPreviews from "./SnipetPreview";

type MyComponentProps = {
  snippets: Snippet[];
};

const SnippetSection: FC<MyComponentProps> = ({ snippets }) => {
  return (
    <>
      <h2 className="text-3xl mb-sm">Snippets</h2>
      <ul className="mx-auto flex flex-col space-y-2">
        {snippets.map((snippet) => (
          <SnippetPreviews key={snippet.data.title} snippet={snippet} />
        ))}
      </ul>
    </>
  );
};

export default SnippetSection;
