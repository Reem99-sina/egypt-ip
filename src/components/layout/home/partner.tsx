"use client";

// import  { Settings } from "react-slick";
// import Slider from "react-slick";
// import { arrayAbout } from "./aboutSection";

const Partner = () => {
  // const settings: Settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   arrows: false,
  //   centerPadding: "0",
  //   speed: 500,
  // };

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col justify-center  container mx-auto">
        <h3 className="head-gradient font-black text-[36px] text-center py-6">
          Partners
        </h3>
        {/* <Slider {...settings} className="mx-6 flex items-center">
          @ts-expect-error unknown error
          {arrayAbout?.map((ele, index) => (
            <div key={index}>
              <h3>{ele.title}</h3>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};

export default Partner;
