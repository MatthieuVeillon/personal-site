import React, { FC } from "react";
import Link from "next/link";

interface ArrowLinkProps {
  as?: string;
  href: string;
  label: string;
  target?: string;
}

const ArrowLink: FC<ArrowLinkProps> = ({ as, href, label, target }) => {
  return (
    <>
      <Link as={as} href={href}>
        <a
          className="text-md text-blue-900 flex items-center group-hover:text-blue-700"
          target={target}
        >
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </Link>
    </>
  );
};

export default ArrowLink;
