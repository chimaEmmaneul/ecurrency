"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Google from "@/assets/Google.svg";
import Forbes from "@/assets/forbes.svg";
import Bloomberg from "@/assets/bloomberg.svg";
import Sleepview from "@/assets/sleepview.svg";
import Influensa from "@/assets/influenca.svg";
import Image from "next/image";

const HeroSwiper = () => {
  return (
    <div className="!bg-white z-20 -mt-16 relative h-[131px]  min-[1040px]:hidden flex items-center shadow-[50px_50px_100px_0px_#00000025]">
      <Swiper
        className="z-10"
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2000}
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 2,
          },
          // Tablet
          768: {
            slidesPerView: 3,
          },
          // Desktop
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        // slidesPerView={2}
      >
        <SwiperSlide>
          <Image src={Google} alt="google" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={Forbes} alt="Forbes" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={Bloomberg} alt="Bloomberg" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={Sleepview} alt="google" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={Influensa} alt="google" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
