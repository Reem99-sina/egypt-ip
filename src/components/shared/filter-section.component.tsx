"use client";

import { GrSubtractCircle,FiPlusCircle } from "@/icon";
import { Collapse, Checkbox, Radio } from "@material-tailwind/react";
import React, { FC, ReactNode, useState } from "react";
import { useTranslation } from "@/translations/clients";
import { Line } from "../shared/line.component";

interface Props {
  title: string;
  optionKey: string;
  options: {title:string,id:number}[];

  onItemCheck: (
    optionKey: string,
    item: { value: string; checked: boolean }
  ) => void;

  selectedOptions: string[];
  index: number;
  singleSelection?: boolean;
  renderOptionsSection?: ReactNode;
}

export const FilterSection: FC<Props> = ({
  title,
  options,
  optionKey,
  onItemCheck,
  selectedOptions,
  index,
  singleSelection,
  renderOptionsSection,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const { t } = useTranslation();

  const handleChange = (value: {
    keyValue: number | string;
    selected: boolean;
  }) => {
    onItemCheck(optionKey, {
      value: value.keyValue.toString(),
      checked: value.selected,
    });
  };

  const toggleExpand = () => setIsExpanded((ex) => !ex);

  return (
    <div className="w-full">
      {index > 0 && <div className="mb-4 flex h-[1px] flex-1 bg-divider" />}

      {index === 0 && (
        <>
          <p className="mb-4 text-xs font-bold text-[#58595B]">
            {t("filterBy")}
          </p>
          <Line />
        </>
      )}

      <div
        onClick={toggleExpand}
        className="flex cursor-pointer items-center justify-between   pb-2 pt-4 "
      >
        <h6 className="text-sm font-bold text-[#58595B]">{title}</h6>

        {isExpanded ? <GrSubtractCircle /> : <FiPlusCircle />}
      </div>

      <Collapse open={isExpanded}>
        <div>
          {renderOptionsSection ||
            options.map((opt) => (
              <div
                className=" flex cursor-pointer items-center text-secondary3"
                key={opt.id}
                onClick={() =>
                  handleChange({
                    selected:
                      selectedOptions.indexOf(opt.id.toString()) > -1
                        ? false
                        : true,
                    keyValue: opt.id,
                  })
                }
              >
                {singleSelection ? (
                  <Radio
                    crossOrigin={undefined}
                    onChange={(e) =>
                      handleChange({
                        selected: e.target.checked,
                        keyValue: opt.id,
                      })
                    }
                    checked={selectedOptions.indexOf(opt.id.toString()) > -1}
                    color="blue-gray"
                  />
                ) : (
                  <Checkbox
                    defaultChecked={true}
                    crossOrigin={undefined}
                    color={"blue-gray"}
                    onChange={(e) =>
                      handleChange({
                        selected: e.target.checked,
                        keyValue: opt.id,
                      })
                    }
                    checked={selectedOptions.indexOf(opt.id.toString()) > -1}
                  />
                )}
                <span
                  className={
                    selectedOptions.indexOf(opt.id.toString()) > -1
                      ? "font-bold text-head"
                      : "text-[rgba(123,128,128,.6)]"
                  }
                >
                  {opt.title}
                </span>
              </div>
            ))}
        </div>
      </Collapse>
    </div>
  );
};
