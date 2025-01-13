"use client";
import { FaUser, Line } from "@/icon";
import CardBenefits from "./card-benefits";
import HeaderSection from "./headerSection";
import { useTranslation } from "@/translations/clients";
import { Services } from "@/utils/date.util";

const HowToParticipate = () => {
  const { t } = useTranslation();
  
  return (
    <section className=" bg-blueCustom1 pb-10" id="how">
      <div className="mt-10 text-left flex flex-col items-start justify-start container mx-auto h-max">
        <HeaderSection title={t("allGovernment")} light={true} />
        <h3 className="text-white font-black text-[28px] -mt-5">
          {t('knowMore')}
        </h3>
        <div className="w-full hidden lg:grid grid-cols-[1fr_0.2fr_1fr] gap-4 h-full mt-10">
          <div className="h-full w-full grid grid-rows-9 ">
            {Services().map((ele, index) =>
              index % 2 != 0 ? (
                <CardBenefits
                  icon={<></>}
                  title={ele?.title}
                  body={ele.desc}
                  className="border rounded-lg px-6 py-4 border-white text-white"
                  key={index + 1}
                />
              ) : (
                <div key={index + 1} className="min-h-[131px]"></div>
              )
            )}
          </div>
          <div className="h-full w-full grid grid-rows-9 ">
            {Services().map((_ele, index) => (
              <div
                className="flex flex-col items-center justify-center gap-3  border-white text-white"
                key={index}
              >
                <FaUser />
                <Line />
              </div>
            ))}
          </div>
          <div className="h-full w-full grid grid-rows-9 ">
            {Services().map((ele, index) =>
              index % 2 == 0 ? (
                <CardBenefits
                  icon={<></>}
                  title={ele?.title}
                  body={ele.desc}
                  className="border rounded-lg px-6 py-4  border-white text-white"
                  key={index + 1}
                />
              ) : (
                <div key={index + 1} className="min-h-[131px]"></div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToParticipate;
