"use client";

import {useSwiper} from 'swiper/react';
import {PiCaretLeftBold,PiCaretRightBold} from 'react-icons/pi';

const WorkSliderBtn = ({containerStyles,btnStyles,iconStyles}) => {
    const swiper = useSwiper();
  return (
      <div className={containerStyles}>
          <button onClick={() => swiper.slidePrev()} className={btnStyles}>
              <PiCaretLeftBold className={iconStyles}></PiCaretLeftBold>
          </button>
          <button onClick={() => swiper.slideNext()} className={btnStyles}>
              <PiCaretRightBold className={iconStyles}></PiCaretRightBold>
          </button>
      </div>
  );
}

export default WorkSliderBtn
