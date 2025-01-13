"use client";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import Card from "./card";
import HeaderSection from "./headerSection";
import { useTranslation } from "@/translations/clients";

const AboutSection = () => {
  const { t } = useTranslation();
  const arrayAbout = [
    {
      title: "45301132",
      desc: t("totalNumberOfRequest"),
    },
    {
      title: "5707",
      desc: t("numberOfRequest"),
    },
    {
      title: "7981913",
      desc: t("totalNumberOfUser"),
    },
    {
      title: "3943",
      desc: t("numberNewUser"),
    },
  ];
  
  return (
    <section
      className="text-center container mx-auto bg-bodyColor pb-5 flex flex-col justify-center items-center"
      id="about"
    >
      <HeaderSection title={t("About")} />
      <p className="head-gradient font-black text-[28px]">{t("AboutDesc")}</p>
      <div className="my-8 flex justify-between items-center gap-6">
        {arrayAbout?.map((ele, index) => (
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
            key={index}
          >
            <Card {...ele} />
          </ScrollAnimationExample>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
