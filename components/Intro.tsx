import React, { FC } from "react";
import Image from "next/image";

type IntroProps = {};

const Intro: FC<IntroProps> = ({}) => {
  return (
    <div className="flex space-x-3 items-center">
      <div className="flex-shrink-0">
        <Image
          className="rounded-full"
          src="/me.png"
          alt="Picture of the author"
          layout="fixed"
          width={100}
          height={100}
        />
      </div>
      <div>
        Hey I'm Matt, a web dev passionate about learning and growing. Here is
        my digital garden where I gather my learnings, thoughts and things I
        want to keep around digitally{" "}
      </div>
    </div>
  );
};

export default Intro;
