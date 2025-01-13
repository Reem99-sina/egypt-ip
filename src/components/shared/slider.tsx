import React, { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';

const SliderCustom = ({settings,children}:{settings:Settings,children:ReactNode}) => {
    return (
        <Slider {...settings as Settings}>
            {children}
        </Slider>
    );
}

export default SliderCustom;
