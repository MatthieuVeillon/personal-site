import Link from "next/link";
import React, { FC } from "react";
import ArrowLink from "./ArrowLink";

type BookSectionProps = {};

const BookSection: FC<BookSectionProps> = ({}) => {
  return (
    <>
      <h2 className="text-3xl mb-sm">Books</h2>
      <div className="p-6 max-w-full rounded-md shadow-md h-30">
        <div className="mb-sm">
          <Link href={`/bookshelf`}>
            <a className="font-semibold text-lg text-green-400" target="_blank">
              My personal bookshelf
            </a>
          </Link>
        </div>
        <p>
          A list of books I have/ want to read with notes for each. This is
          intended as a tool to support my learning in public{" "}
        </p>
        <div className="mt-sm">
          <ArrowLink href="/bookshelf" label="visit" target="_blank" />
        </div>
      </div>
    </>
  );
};

export default BookSection;
