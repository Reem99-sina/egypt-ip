"use client";

import { Settings } from "react-slick";
import Slider from "react-slick";

import { useTranslation } from "@/translations/clients";
import { Partners } from "@/utils/date.util";
import HeaderSection from "./headerSection";
import Card from "./card";

const Partner = () => {
  const { t } = useTranslation();
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // For devices with screen width <= 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // For devices with screen width <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center  container mx-auto items-center">
        <HeaderSection title={t("partner")} />
        <h3 className="head-gradient font-black text-[28px] text-center ">
          {t("partnerDesc")}
        </h3>
      </div>
      <div className="w-[65%] mx-auto">
        <Slider
          {...(settings as Settings)}
          className="mx-6 flex  justify-center py-12 text-center"
        >
          {Partners()?.map((ele, index) => (
            <Card
              title={ele.title}
              className="mx-4 min-h-[250px]  !bg-bodyColor"
              desc={ele.desc}
              img={ele.image}
              key={index}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
