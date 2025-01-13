"use client";
import {  FaUser } from "react-icons/fa";
import CardBenefits from "./card-benefits";
import HeaderSection from "./headerSection";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import { useTranslation } from "@/translations/clients";
import { RiAddLargeFill } from "react-icons/ri";

export const AboutData = () => {
  const {t}=useTranslation()

  return [
    { img:  <RiAddLargeFill/>, title: t("accountOpen"), desc: t("subscribeAccount") },
    { img: <FaUser/>, title: t("searchAllServices"), desc:t("searchAllServicesDes") },
  ];
};

const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className=" container mx-auto bg-bodyColor pb-10 text-left flex flex-col items-start justify-start"
      id="benefit"
    >
      <HeaderSection title={t("Benefits")} />
      <h3 className="head-gradient font-black text-[28px] -mt-10">
        {t("benefitsDesc")}
      </h3>
      <div className="flex items-center mt-8 gap-5">
        {AboutData()?.map((ele, index) =>
          index < AboutData().length - 1 ? (
            <ScrollAnimationExample
              objectStart={{
                opacity: 0,
                scale: 0.5,
              }}
              objectEnd={{
                opacity: 1,
                scale: 1,
              }}
              delay={index}
              key={index + ele.title}
            >
              <div className="flex items-center justify-center">
                <CardBenefits
                  icon={ele.img}
                  title={ele.title}
                  body={ele.desc.slice(0, 100)}
                />
                <span className="mx-4 hidden lg:block">|</span>
              </div>
            </ScrollAnimationExample>
          ) : (
            <ScrollAnimationExample
              objectStart={{
                opacity: 0,
                scale: 0.5,
              }}
              objectEnd={{
                opacity: 1,
                scale: 1,
              }}
              delay={index}
              key={index + ele.title}
            >
              <CardBenefits
                icon={ele.img}
                title={ele.title}
                body={ele.desc.slice(0, 100)}
              />
            </ScrollAnimationExample>
          )
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
