"use client";
import Hit from "@/components/market/hit";
import { Line } from "@/components/shared/line.component";
import SearchBoxCustom from "@/components/market/search-box-custom";
import Pagination from "@/components/shared/pagination.component";
import AlgoliasearchConfig, { defaultData } from "@/hooks/algoliaSearch.hook";
import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import {
  Hits,
  InstantSearch,
  // Pagination,
  RefinementList,
  Stats,
} from "react-instantsearch";
import { IoMenu } from "react-icons/io5";
import { SlArrowRight, SlArrowLeft } from "@/icon";
import FilterCustom from "@/components/market/filter-custom";

const MarketPlace = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const client = AlgoliasearchConfig();
  useEffect(() => {
    client.saveObjects({ indexName: "item", objects: defaultData });
    client.setSettings({
      indexName: "item",
      indexSettings: {
        searchableAttributes: ["category", "title"],
        attributesForFaceting: ["searchable(category)"],
        renderingContent: {
          facetOrdering: {
            facets: {
              order: ["brand", "size", "color"],
            },
            values: {
              brand: {
                order: ["Uniqlo"],
                sortRemainingBy: "alpha",
              },
              size: {
                order: ["S", "M", "L", "XL"],
                sortRemainingBy: "hidden",
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="container mx-auto">
      <InstantSearch indexName="item" searchClient={client}>
        <div className="py-10 flex gap-5 justify-start items-start ">
          <div
            className=" border rounded flex items-center  gap-4  px-2 cursor-pointer flex-[0.2] bg-blueCustom1 text-white"
            onClick={() => setOpen(!open)}
          >
            <IoMenu />
            <h3 className="my-2 font-bold"> {t("filterBy")}</h3>
            <div className="ms-auto">
              {open ? <SlArrowRight /> : <SlArrowLeft />}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-full">
                <SearchBoxCustom
                  placeholder={t("search")}
                  onSubmit={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5 items-start  ">
          {open ? (
            <div className="flex items-center flex-[0.2]">
              <div className={clsx(" flex flex-col gap-3 w-full")}>
                <FilterCustom
                  title="Category"
                  styleHeader="text-sm font-black "
                >
                  <RefinementList
                    attribute="category"
                    searchable={false}
                    showMore={true}
                  />
                </FilterCustom>
              </div>
            </div>
          ) : null}
          <div className=" flex flex-col gap-4 pb-3 flex-1">
            <Line />
            <Stats />
            <Hits hitComponent={Hit} />
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
      </InstantSearch>
    </div>
  );
};

export default MarketPlace;
