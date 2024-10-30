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
import { StarRating } from "./ReviewCarousel";
import Image from "next/image";

const ProductReviewCarousel = () => {
  const projectReviews = [
    {
      name: "Alice Johnson",
      rating: 5,
      image: "https://example.com/images/alice.jpg",
      description:
        "This project was exceptional! The team exceeded all expectations and delivered on time.",
    },
    {
      name: "Bob Smith",
      rating: 4,
      image: "https://example.com/images/bob.jpg",
      description:
        "Great work overall! A few minor issues, but they were quick to resolve them.",
    },
    {
      name: "Charlie Brown",
      rating: 3,
      image: "https://example.com/images/charlie.jpg",
      description:
        "The project met basic requirements, but there was room for improvement in the final execution.",
    },
    {
      name: "Diana Clark",
      rating: 5,
      image: "https://example.com/images/diana.jpg",
      description:
        "Outstanding project! Highly professional team and excellent communication throughout.",
    },
    {
      name: "Evan Davis",
      rating: 4,
      image: "https://example.com/images/evan.jpg",
      description:
        "Impressive results! A solid outcome with only minor adjustments needed.",
    },
    {
      name: "Fiona Garcia",
      rating: 2,
      image: "https://example.com/images/fiona.jpg",
      description:
        "Unfortunately, the project didn't fully meet expectations, and there were delays in delivery.",
    },
    {
      name: "George Harris",
      rating: 5,
      image: "https://example.com/images/george.jpg",
      description:
        "Fantastic work! The team went above and beyond to ensure quality results.",
    },
    {
      name: "Helen Thompson",
      rating: 3,
      image: "https://example.com/images/helen.jpg",
      description:
        "It was a decent project overall but lacked some of the polish we had hoped for.",
    },
    {
      name: "Ian Roberts",
      rating: 4,
      image: "https://example.com/images/ian.jpg",
      description:
        "Great attention to detail, and they were very responsive to feedback.",
    },
    {
      name: "Jenna Martin",
      rating: 5,
      image: "https://example.com/images/jenna.jpg",
      description:
        "Exceptional work! The team handled all aspects with professionalism and creativity.",
    },
  ];

  return (
    <div>
      <Swiper
        className=""
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
            slidesPerView: 1,
          },

          480: {
            slidesPerView: 2,
          },
          // Tablet
          768: {
            slidesPerView: 3,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        // slidesPerView={2}
      >
        {projectReviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  shadow-[50px_50px_100px_0px_#00000025]    md:max-w-[306px] min-h-[400px] w-full flex flex-col items-start ">
              <div className="h-[210px]">
                <Image
                  src="https://ik.imagekit.io/0xy9wqmrh/Rectangle%206.png"
                  alt="product imag"
                  width={306}
                  height={210}
                />
              </div>
              <div className="p-4 space-y-3">
                <p className="text-[#4D533C] italic">{review.description}</p>
                <p className="flex flex-col ">
                  <span className="font-bold">{review.name}</span>
                  <StarRating rating={review.rating} />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductReviewCarousel;
