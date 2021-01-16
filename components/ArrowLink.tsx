import React, { FC } from "react";
import Link from "next/link";

type ArrowLinkProps = {
  as?: string;
  href: string;
  label: string;
  target?: string;
};

const ArrowLink: FC<ArrowLinkProps> = ({ as, href, label, target }) => {
  return (
    <>
      <Link as={as} href={href}>
        <a className="text-md text-green-400 flex items-center" target={target}>
          {label}
          &nbsp;
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </Link>
    </>
  );
};

export default ArrowLink;
