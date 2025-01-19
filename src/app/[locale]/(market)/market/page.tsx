"use client";
import Card from "@/components/layout/home/card";
import { Button } from "@/components/shared/button.component";
import FilterComponent from "@/components/shared/filter-component";
import { FilterSection } from "@/components/shared/filter-section.component";
import { Line } from "@/components/shared/line.component";
import Pagination from "@/components/shared/pagination.component";
import SearchComponent from "@/components/shared/search-component";
import { useTranslation } from "@/translations/clients";
import { Checkbox } from "@material-tailwind/react";
import clsx from "clsx";
import React, { useState } from "react";

const MarketPlace = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();

  return (
    <div className="py-10 flex    container mx-auto gap-5">
      <div className="flex-[0.2] flex flex-col gap-3">
        <h3 className="my-3 font-bold"> {t("filterBy")}</h3>
        <Line />
        <FilterSection
          title={t("type")}
          optionKey={"_"}
          options={[]}
          onItemCheck={() => null}
          selectedOptions={[]}
          index={1}
          renderOptionsSection={
            <div className="my-4 flex flex-col items-start gap-4">
              <div
                className="flex cursor-pointer flex-row items-center gap-2"
                onClick={() => {}}
              >
                <Checkbox
                  crossOrigin={undefined}
                  className="accent-greenCustom"
                  //   color="green"
                  onChange={() => {}}
                  checked={true}
                />
                <p className="text-sm font-bold text-[#7B8080]">{t("type")}</p>
              </div>
            </div>
          }
        />
        <Line />

        <div className="w-full">
          <Button
            text={t("applyFilter")}
            className="bg-blueCustom1 !py-3 !text-sm !px-4 !w-full"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="w-full">
            <SearchComponent />
          </div>
          <div className="flex max-w-auto justify-end ">
            <Button
              className={clsx(
                "!ml-0 h-10 !w-auto flex-none gap-2 rounded-[4px] bg-blueCustom1 text-white !text-sm !px-4 !py-3 !font-black"
              )}
              type="submit"
              text={t("search")}
              onClick={() => {
                // router?.push("/account/personal-loan/add");
              }}
            />
          </div>
        </div>
        <Line />
        <FilterComponent title={t("filterBy")} options={[]} type="select" />
        <Card
          title="WIPO Lex"
          className="!bg-bodyColor"
          desc="WIPO Lex
... battery jars 9 battery boxes 9 battery chargers 9 batting gloves [accessories ... photovoltaic cells 9 chemical preparations for treating phylloxera 5 ..."
        />
        <div>
          <Pagination
            pageCount={Math.ceil(10 / 5)}
            initialPage={page}
            className=""
            onPageChange={(page) => setPage(page)}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
