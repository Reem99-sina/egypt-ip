import clsx from "clsx";
import { FC } from "react";

interface Props {
  color?: string;
}

export const Line: FC<Props> = ({ color }) => {
  return (
    <div
      className={clsx("h-[1px] w-full ", color ? "bg-" + color : "bg-borderInput")}
    />
  );
};
