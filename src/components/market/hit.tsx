
import clsx from "clsx";
import React from "react";
import { Highlight } from "react-instantsearch";
import type { Hit } from "instantsearch.js";

type CustomHit = Hit<{
  title: string;
  desc: string;
  img:string;
  __position: number;
  __queryID?: string;
}>;

const Hit = ({ hit }: { hit: CustomHit }) => {
  return (
    <div
      className={clsx(
        "bg-bodyColor rounded-xl  flex flex-col justify-start mb-4 items-start gap-5"
      )}
    >
      <div className={clsx("w-full h-[200px]  bg-[url('/ip.png')] rounded-t-xl ")}>
      </div>
      <div className=" flex flex-col items-start justify-start min-h-[100px] gap-4 px-4 pb-4">
        {hit.title && (
          <Highlight
            className="text-blueCustom3 text-base font-black"
            hit={hit}
            color="red"
            attribute={"title"}
          />
        )}
        {hit.desc && <p className="text-gray-600 text-sm">{hit.desc}</p>}
      </div>
    </div>
  );
};

export default Hit;
