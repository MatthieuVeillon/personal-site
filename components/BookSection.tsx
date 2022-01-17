import Link from "next/link";
import React, { FC } from "react";
import ArrowLink from "./ArrowLink";

type BookSectionProps = {};

const BookSection: FC<BookSectionProps> = ({}) => {
  return (
    <>
      <h2 className="text-3xl mb-sm font-Arima">Books</h2>
      <div className="p-6 max-w-full rounded-md shadow-md h-30 group">
        <div className="mb-sm">
          <Link href={`/bookshelf`}>
            <a
              className="font-Galdeano text-2xl text-blue-900 group-hover:text-blue-700"
              target="_blank"
            >
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
