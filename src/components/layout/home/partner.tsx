"use client";

import { Settings } from "react-slick";
import Slider from "react-slick";

import { useTranslation } from "@/translations/clients";
import { PopularService } from "@/utils/date.util";

const Partner = () => {
  const {t}=useTranslation()
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: "0",
    speed: 1500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the speed (3000ms = 3 seconds)
  };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center  container mx-auto">
        <h3 className="head-gradient font-black text-[36px] text-center py-6">
          {t("publicService")}
        </h3>
        <Slider
          {...(settings as Settings)}
          className="mx-6 flex items-center justify-center py-12 text-center"
        >
          {PopularService()?.map((ele, index) => (
            <div key={index}>
              <h3>{ele.title }</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partner;
