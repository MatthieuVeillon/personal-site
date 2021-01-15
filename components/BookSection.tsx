import React, { FC } from "react";

type BookSectionProps = {};

const BookSection: FC<BookSectionProps> = ({}) => {
  return (
    <a target="_blank" rel="noreferrer" href={`/bookshelf`}>
      Bookshelf
    </a>
  );
};

export default BookSection;
