"use client";

import React, { Children } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  children: React.ReactNode;
  spaceBetween: number;
  swiperClassName?: string;
  swiperSlideClassName?: string;
  hasPagination?: boolean;
};

function Slider({
  children,
  spaceBetween,
  swiperClassName,
  swiperSlideClassName,
  hasPagination,
}: Props) {
  const modules = [Navigation, A11y];
  if (!!hasPagination) {
    modules.push(Pagination);
  }
  return (
    <Swiper
      loop={true}
      slidesPerView="auto"
      spaceBetween={spaceBetween}
      modules={modules}
      className={swiperClassName}
      maxBackfaceHiddenSlides={10}
      pagination={
        hasPagination
          ? {
              clickable: true,
            }
          : false
      }
    >
      {Children.toArray(children).map((slide: any) => {
        return (
          <SwiperSlide className={swiperSlideClassName} key={slide.key}>
            {slide}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
