
import clsx from "clsx";
import React from "react";
import { Highlight } from "react-instantsearch";
import type { Hit } from "instantsearch.js";

type CustomHit = Hit<{
  title: string;
  desc: string;
  __position: number;
  __queryID?: string;
}>;

const Hit = ({ hit }: { hit: CustomHit }) => {
  return (
    <div
      className={clsx(
        "bg-bodyColor rounded-xl p-4 flex flex-col justify-start mb-4 items-start gap-4"
      )}
    >
      <div className=" flex flex-col items-start justify-start min-h-[100px] gap-4">
        {hit.title && (
          <Highlight
            className="text-blueCustom2 text-base font-black"
            hit={hit}
            color="red"
            attribute={"title"}
          />
        )}
        {hit.desc && <p className="text-descText text-sm">{hit.desc}</p>}
      </div>
    </div>
  );
};

export default Hit;
