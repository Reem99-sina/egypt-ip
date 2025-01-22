"use client";
import { PiPlantFill, IoWaterOutline, IoEarthOutline } from "@/icon";
import HeaderSection from "./headerSection";
import { useTranslation } from "@/translations/clients";
import CardBenefits from "./card-benefits";
import clsx from "clsx";

const CompetionCustom = () => {
  const { t } = useTranslation();

  const data = [
    {
      icon: <PiPlantFill color="#60baa7" className="text-[40px]" />,
      title: "Agriculture",
      color: "text-greenCustom text-xl",
      desc: "Develop innovative techniques for sustainable agriculture, focusing on crop yield improvement, soil health, or pest management.",
    },
    {
      icon: <IoWaterOutline className="text-[40px]" />,
      color: "text-blueCustom text-xl",
      title: "Irrigation",
      desc: "Create cutting-edge irrigation solutions that conserve water while maximizing crop growth in various climatic conditions.",
    },
    {
      icon: <IoEarthOutline color="#000" className="text-[40px]" />,
      color: "text-black text-xl",
      title: "Culture",
      desc: "Propose methods to integrate traditional farming practices with modern technology, preserving cultural heritage in agriculture.",
    },
  ];

  return (
    <section
      className=" container mx-auto bg-bodyColor pb-10 text-left flex flex-col items-center justify-center gap-4"
      id="competion"
    >
      <HeaderSection title={t("Competion")} />
      <p className="head-gradient font-black text-[28px] -mt-5">
        Showcase your innovative ideas in agriculture, irrigation, and cultural
        preservation. Join us in shaping a sustainable and culturally rich
        future!
      </p>
      <div className="flex items-center mt-8 gap-5">
        {data.map((ele, index) => {
          return index % 2 == 0 ? (
            <CardBenefits
              icon={ele.icon}
              title={ele.title}
              body={ele.desc}
              color={ele.color}
              key={index}
              className={clsx(" bg-white p-4 rounded-xl  min-h-[164px] text-gray-600 gap-3")}
            />
          ) : (
            <CardBenefits
              icon={ele.icon}
              title={ele.title}
              body={ele.desc}
              key={index}
              color={ele.color}
              className="bg-blueCustom1 text-white p-4 rounded-xl  min-h-[250px]   justify-center gap-3"
            />
          );
        })}
      </div>
    </section>
  );
};

export default CompetionCustom;
