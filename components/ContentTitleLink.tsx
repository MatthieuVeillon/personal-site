import React, { FC } from "react";
import Link from "next/link";

type ContentTitleLinkProps = {
  asPath: string;
  href: string;
  title: string;
};

const ContentTitleLink: FC<ContentTitleLinkProps> = ({
  asPath,
  href,
  title,
}) => {
  return (
    <div className="mb-sm">
      <Link as={asPath} href={href}>
        <a className="font-semibold text-lg text-green-400">{title}</a>
      </Link>
    </div>
  );
};

export default ContentTitleLink;
