import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>👈 Go back home</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
