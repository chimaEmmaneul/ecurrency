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

const ReviewCarousel = () => {
  const reviews = [
    {
      description:
        "Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.",
      name: "Alice Johnson",
      rating: 5,
    },
    {
      description:
        "I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.",
      name: "Bob Smith",
      rating: 5,
    },
    {
      description:
        "It’s a really good product and helps me sleep better at night!",
      name: "Charlie Brown",
      rating: 5,
    },
    {
      description:
        "Helps me relax and remember to breathe. Stress level definitely goes down",
      name: "Diana Clark",
      rating: 5,
    },
    {
      description:
        "Decent product for the price, but could use some improvements.",
      name: "Evan Davis",
      rating: 3,
    },
    {
      description: "Highly disappointed. It broke after just a week of use.",
      name: "Fiona Garcia",
      rating: 1,
    },
    {
      description: "Perfect for my needs. Would definitely buy again!",
      name: "George Harris",
      rating: 5,
    },
    {
      description: "Average product, nothing special.",
      name: "Helen Thompson",
      rating: 3,
    },
    {
      description: "Excellent build quality and great customer service!",
      name: "Ian Roberts",
      rating: 5,
    },
    {
      description: "It’s okay, does the job but not very durable.",
      name: "Jenna Martin",
      rating: 3,
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
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        // slidesPerView={2}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#FBF9F2] p-4  md:max-w-[306px] min-h-[170px] w-full flex flex-col items-start justify-between">
              <p className="text-[#4D533C] italic">{review.description}</p>
              <p className="flex flex-col ">
                <span className="font-bold">{review.name}</span>
                <StarRating rating={review.rating} />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;

export const FullStar = () => <span className="text-green-500">★</span>;
export const EmptyStar = () => <span className="text-green-500">☆</span>;

export const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <span className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FullStar key={index} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <EmptyStar key={index} />
      ))}
    </span>
  );
};
