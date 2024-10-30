import Image from "next/image";
import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import ReviewCarousel from "@/components/Swiper/ReviewCarousel";

const shop = () => {
  return (
    <div>
      <div className="w-full mb-32 h-screen z-[-1]">
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/Slider%20(1).png?updatedAt=1730287700607"
          alt="home image"
          fill
          className="object-cover object-center h-screen w-full relative"
        />
      </div>

      <MaxWidthWrapper>
        <div className="absolute  top-[300px] md:top-52  text-center md:text-left">
          <p>We're here to help you</p>
          <h1 className=" text-[40px]  sm:text-[60px] font-bold">
            Relax & Rest
          </h1>
        </div>

        <div className="flex mt-20 flex-col md:flex-row items-center justify-between gap-10  ">
          <div className="relative w-full md:w-[477px] h-[519px] order-2 md:order-1">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/Image%20(2).png"
              alt="Image"
              // width={700}
              // height={500}
              fill
              className="w-[477px] h-[519px] aspect-square object-cover object-center"
            />
          </div>

          <div className="-mt-4 order-1 md:order-2">
            <h1 className="font-bold text-center md:text-left text-[36px] text-[#12305B] mb-[27px]">
              About Product
            </h1>
            <p className="max-w-[400px] text-[#21384299] mb-6">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>

            <p className="flex flex-col space-y-1 text-[#4D533C] italic">
              <span className="tracking-wide">
                😊 Promotes calm and relaxation.
              </span>
              <span className="tracking-wide">
                💤 Inhalation allows for a rapid effect.
              </span>
              <span className="tracking-wide">
                ✅ 100% drug-free, plant-based ingredients. ‍
              </span>
              <span className="pl-8">3rd-party lab tested.</span>
            </p>

            <div className="flex items-center gap-12 mt-8">
              <p className="flex flex-col gap-4">
                <span>Price</span>
                <span className="font-bold">USD</span>
              </p>
              <p className="flex flex-col gap-4">
                <span>Unit</span>
                <span>
                  <input
                    type="number"
                    className="inline-block w-[63px] h-[33px] border-2 rounded-md border-black placeholder:text-center px-2 text-center"
                  />
                </span>
              </p>
            </div>
            <button className="bg-[#FC5959] mt-6 w-[225px] h-[50px] mx-auto md:mx-0 flex items-center justify-center text-white rounded-md">
              Buy
            </button>
          </div>
        </div>

        <div className="mt-32 border-b-2 border-[#21384218] pb-10">
          <ReviewCarousel />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default shop;
