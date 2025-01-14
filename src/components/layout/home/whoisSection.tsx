"use client";
import { useTranslation } from "@/translations/clients";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import CardBenefits from "./card-benefits";
import HeaderSection from "./headerSection";
import { ServiceShow } from "@/utils/date.util";

const WhoisSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className=" container mx-auto bg-bodyColor my-10 text-left flex flex-col items-center justify-center"
      id="who"
    >
      <HeaderSection title={t("WhoIsIt")} />
      {/* <h3 className="head-gradient font-black text-[28px] -mt-10">
       {t('EgyptDigitalServicesDesc')}
      </h3> */}
      <div className="flex flex-col my-10 gap-4 w-full">
        {ServiceShow().map((ele, index) => (
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
            key={index + 1 + ele.title}
          >
            {" "}
            <CardBenefits
              icon={<></>}
              title={ele?.title}
              className="bg-white shadow-custom rounded-xl px-6 py-4 "
              key={index + 1}
            />
          </ScrollAnimationExample>
        ))}
      </div>
    </section>
  );
};

export default WhoisSection;
