"use client";
import {
  RiVoiceRecognitionLine,
  FaMoneyBill,
  MdOutlineConnectWithoutContact,
  CgMediaPodcast,
} from "@/icon";
import CardBenefits from "./card-benefits";
import HeaderSection from "./headerSection";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import { useTranslation } from "@/translations/clients";

export const AboutData = () => {
  const { t } = useTranslation();

  return [
    {
      img: <RiVoiceRecognitionLine />,
      title: t("Recognition"),
    },
    {
      img: <FaMoneyBill />,
      title: t("Substantial"),
    },
    {
      img: <MdOutlineConnectWithoutContact />,
      title: t("Opportunities"),
    },
    {
      img: <CgMediaPodcast />,
      title: t("Media"),
    },
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
      <p className="head-gradient font-black text-[28px] -mt-5">
        {t("benefitsDesc")}
      </p>

      <div className="grid grid-cols-1 mt-8 gap-5 sm:grid-cols-4">
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
              <div className="flex items-center justify-center ">
                <CardBenefits
                  icon={ele.img}
                  title={ele.title}
                  className="text-blueCustom2"
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
                className="text-blueCustom2"
              />
            </ScrollAnimationExample>
          )
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
