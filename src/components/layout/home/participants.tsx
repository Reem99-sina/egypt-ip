"use client";

import { Settings } from "react-slick";
import { useTranslation } from "@/translations/clients";
import { participants } from "@/utils/date.util";
import HeaderSection from "./headerSection";
import Card from "./card";

import SliderCustom from "@/components/shared/slider";

const Participants = () => {
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
        <HeaderSection title={t("participantHeader")} />
        {/* <h3 className="head-gradient font-black text-[28px] text-center ">
          {t("partnerDesc")}
        </h3> */}
      </div>
      <div className="w-full mx-auto sm:w-[65%]">
        <SliderCustom
          settings={settings}
          className="mx-6 flex  justify-center py-12 text-center"
        >
          {participants?.map((ele, index) => (
            <Card className="mx-4 !bg-white" img={ele} key={index} />
          ))}
        </SliderCustom>
      </div>
    </div>
  );
}

export default Participants;
