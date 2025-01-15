import React, { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

const SliderCustom = ({
  settings,
  className,
  children,
}: {
  settings: Settings;
  className:string
  children: ReactNode;
}) => {
  return (
    <>
      {/* @ts-expect-error */}
      <Slider {...(settings as Settings)} className={className}>
        {/* @ts-expect-error unknown error */}
        {children}
      </Slider>
    </>
  );
};

export default SliderCustom;
