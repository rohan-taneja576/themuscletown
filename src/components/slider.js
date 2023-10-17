import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Banner1 from "../assets/banner_1.webp";
import Banner2 from "../assets/banner_2.webp";
import Link from "next/link";

const Slider = () => {
  return (
    <Swiper modules={[Autoplay]} autoplay={true} loop={true} slidesPerView={1}>
      <SwiperSlide>
        <Link href="https://xtremenutrition.in/" target="_blank">
          <img src={Banner1.src} alt="banner_1" style={{ width: "100%" }} />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="https://xtremenutrition.in/" target="_blank">
          <img src={Banner2.src} alt="banner_1" style={{ width: "100%" }} />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
