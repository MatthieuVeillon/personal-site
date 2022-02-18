import Link from "next/link";
import React, { FC } from "react";
import ArrowLabel from "./ArrowLabel";

type BookSectionProps = {};

const BookSection: FC<BookSectionProps> = ({}) => {
  return (
    <>
      <h2 className="text-3xl mb-sm font-Arima">Books</h2>
      <Link href={`/bookshelf`}>
        <a target="_blank">
          <div className="p-6 max-w-full rounded-md shadow-md h-30 group">
            <div className="mb-sm">
              <span className="font-Galdeano text-2xl text-blue-900 group-hover:text-blue-700">
                My personal bookshelf
              </span>
            </div>
            <p>
              A list of books I have/ want to read with notes for each. This is
              intended as a tool to support my learning in public{" "}
            </p>
            <div className="mt-sm">
              <ArrowLabel label="visit" />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default BookSection;
