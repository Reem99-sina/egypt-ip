"use client";
import Hit from "@/components/market/hit";
import { Button } from "@/components/shared/button.component";
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
  RefinementList,
  Stats,
} from "react-instantsearch";

const MarketPlace = () => {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const client = AlgoliasearchConfig();

  useEffect(() => {
    client.saveObjects({ indexName: "item", objects: defaultData });
    client.setSettings({indexName:"item",indexSettings:{
      searchableAttributes: [
        'category',
        'title'
      ],
      attributesForFaceting:["searchable(category)"],
      renderingContent: {
        facetOrdering: {
          facets: {
            order: ['brand', 'size', 'color'],
          },
          values: {
            brand: {
              order: ['Uniqlo'],
              sortRemainingBy: 'alpha',
            },
            size: {
              order: ['S', 'M', 'L', 'XL'],
              sortRemainingBy: 'hidden',
            },
          },
        },
      },
    }})
  }, []);

  return (
    <div className="py-10 flex    container mx-auto gap-5">
      <InstantSearch indexName="item" searchClient={client}>
        <div className="flex-[0.2] flex flex-col gap-3">
          <h3 className="my-3 font-bold"> {t("filterBy")}</h3>
          <Line />
          {/* <DynamicWidgets> */}
            <RefinementList
              attribute="category"
              searchable={false}
              showMore={true}
            />
          {/* </DynamicWidgets> */}

          {/* <FilterSection
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
                  <p className="text-sm font-bold text-[#7B8080]">
                    {t("type")}
                  </p>
                </div>
              </div>
            }
          /> */}
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-full">
              <SearchBoxCustom
                placeholder={t("search")}
                onSubmit={() => {
                 
                }}
              />
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
          <Stats/>

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
      </InstantSearch>
    </div>
  );
};

export default MarketPlace;
