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
        <a className="font-Galdeano text-2xl text-blue-900 group-hover:text-blue-700">
          {title}
        </a>
      </Link>
    </div>
  );
};

export default ContentTitleLink;
