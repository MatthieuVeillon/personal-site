import React, { FC } from "react";
import Link from "next/link";

type BookSectionProps = {};

const BookSection: FC<BookSectionProps> = ({}) => {
  return <Link href={`/bookshelf`}>Bookshelf</Link>;
};

export default BookSection;
