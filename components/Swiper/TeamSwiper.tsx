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
import Image from "next/image";

const TeamSwiper = () => {
  return (
    <Swiper
      className="w-full  flex flex-col items-stretch justify-center"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        el: ".custom-pagination", // Custom class
        clickable: true, // Enables clicking
        bulletClass: "custom-bullet", // Class for custom bullets
        bulletActiveClass: "custom-bullet-active", // Active state for bullet
      }}
      // scrollbar={{ draggable: true }}
    >
      <div className="">
        <SwiperSlide className=" ">
          <div className=" space-y-10">
            <p className="text-2xl text-[#4D533C] italic">
              I’m a very anxious person but use this and feel so relaxed and
              sleep way better now with the aid of sleepstiq.{" "}
            </p>

            <div className="flex items-center  gap-4">
              <div className="h-[84px] w-[84px] relative">
                <Image
                  src="https://ik.imagekit.io/0xy9wqmrh/749b0a25645533031bc51d31b04e30c7_Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piTzbG8vtmDMTxxkLquucNCwVqtFolWHy4KsM991~jm7oXH24USgwTrWdQHMuZSqjXXRWg0Dfc1EvnNSmn5hsZN5GJxvGS1xM1snOQ~mNkLa8Vt5XsU054h7zEmPD3glptHBiNoj0LJ~F0Z07sfdE2J1SIuH9FQwgB6vrU9VBTiT1~A9svaFCtKuJ2xsj3buGe8cbfrtaZlculwjTdiE5MBKpnwWQmRHLMa5s7izSVhTqfJBQiROsHcpEbdyJ6WJ~G~RnutnKOCGZS6lUNTu0WfJdQl7DLdpt3teTSerLAC8kJR9YoWwvLYlEUcQR9Bmz-~BKWxMFVw6jeYwtkrwJQ__"
                  alt="user"
                  fill
                  className="rounded-[50%] aspect-square object-cover object-center"
                />
              </div>

              <p className="flex flex-col gap-1">
                <span className="font-bold">James Miller</span>
                <span>CEO, Techbias</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" space-y-10">
            <p className="text-2xl text-[#4D533C] italic">
              I’m a very anxious person but use this and feel so relaxed and
              sleep way better now with the aid of sleepstiq.{" "}
            </p>

            <div className="flex items-center  gap-4">
              <div className="h-[84px] w-[84px] relative">
                <Image
                  src="https://ik.imagekit.io/0xy9wqmrh/749b0a25645533031bc51d31b04e30c7_Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=piTzbG8vtmDMTxxkLquucNCwVqtFolWHy4KsM991~jm7oXH24USgwTrWdQHMuZSqjXXRWg0Dfc1EvnNSmn5hsZN5GJxvGS1xM1snOQ~mNkLa8Vt5XsU054h7zEmPD3glptHBiNoj0LJ~F0Z07sfdE2J1SIuH9FQwgB6vrU9VBTiT1~A9svaFCtKuJ2xsj3buGe8cbfrtaZlculwjTdiE5MBKpnwWQmRHLMa5s7izSVhTqfJBQiROsHcpEbdyJ6WJ~G~RnutnKOCGZS6lUNTu0WfJdQl7DLdpt3teTSerLAC8kJR9YoWwvLYlEUcQR9Bmz-~BKWxMFVw6jeYwtkrwJQ__"
                  alt="user"
                  fill
                  className="rounded-[50%] aspect-square object-cover object-center"
                />
              </div>

              <p className="flex flex-col gap-1">
                <span className="font-bold">James Miller</span>
                <span>CEO, Techbias</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </div>

      <div className="custom-pagination w-full h-full mt-10"></div>
    </Swiper>
  );
};

export default TeamSwiper;
