"use client";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import Card from "./card";
import HeaderSection from "./headerSection";
import { useTranslation } from "@/translations/clients";

const AboutSection = () => {
  const { t } = useTranslation();
  const arrayAbout = [
    {
      title: t("fosteringInnovation"),
      desc: t("fosteringInnovationDesc"),
      image:"/FosteringInnovation.png"
    },
    {
      title: t("BuildingBridges"),
      desc: t("BuildingBridgesDesc"),
      image:"/BuildingBridges.jpg"
    },
    {
      title: t("EnhancingImpact"),
      desc: t("EnhancingImpactDesc"),
      image:"/enhancingImpact.jpg"
    },
    {
      title: t("PromotingSustainability"),
      desc: t("PromotingSustainabilityDesc"),
      image:"/PromotingSustainability.jpg"
    },
  ];

  return (
    <section
      className="text-center container mx-auto bg-bodyColor pb-5 flex flex-col justify-center items-center"
      id="about"
    >
      <HeaderSection title={t("About")} />
      <p className="head-gradient font-black text-[28px]">{t("AboutDesc")}</p>
      <div className="my-8 grid sm:grid-cols-4 gap-6 grid-cols-1">
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
            <Card {...ele} className="gap-4 min-h-[130px] justify-between" img={ele.image}/>
          </ScrollAnimationExample>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
