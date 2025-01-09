import clsx from "clsx";
import React from "react";
import { Column } from ".";

interface Props {
  columns: Column[];
}

export const HeadRow = ({ columns }: Props) => {
  return (
    <tr>
      {columns.map((column, index) => (
        <th
          key={column.title}
          className={clsx(
            " bg-beige p-2 text-xs font-bold text-black ",
            index === 0 && "border-r-0",
            index === columns.length - 1 && "border-l-0"
          )}
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
};
