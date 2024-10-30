import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";

import Google from "@/assets/Google.svg";
import Forbes from "@/assets/forbes.svg";
import Bloomberg from "@/assets/bloomberg.svg";
import Sleepview from "@/assets/sleepview.svg";
import Influensa from "@/assets/influenca.svg";
import HeroSwiper from "@/components/Swiper/HeroSwiper";
import TeamSwiper from "@/components/Swiper/TeamSwiper";
import ReviewCarousel, { StarRating } from "@/components/Swiper/ReviewCarousel";
import ProductReviewCarousel from "@/components/Swiper/ProductReviewCarousel";

export default function Home() {
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
  ];

  return (
    <div className="w-full ">
      <div className="w-full h-screen z-[-1]">
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/Slider.png"
          alt="home image"
          fill
          className="object-cover object-center h-screen w-full relative"
        />
      </div>

      <MaxWidthWrapper>
        <div className="absolute top-40  text-center md:text-left">
          <p>We're here to help you</p>
          <h1 className=" text-[40px]  sm:text-[60px] font-bold">
            Relax & Rest
          </h1>
          <p className="max-w-[581px]">
            With the aid of our Melatonin Sleepstiq, we can assure you that you
            can get quality sleep.
          </p>

          <button className="bg-[#FC5959] mt-6 w-[225px] h-[50px] mx-auto md:mx-0 flex items-center justify-center text-white rounded-md">
            Visit Shop
          </button>
        </div>
      </MaxWidthWrapper>

      <div className="absolute h-[100px] -bottom-16 right-0">
        <div className="bg-white  hidden min-[1040px]:flex h-full px-10 justify-center items-center gap-4 shadow-[50px_50px_100px_0px_#00000025]">
          <Image src={Google} alt="google" />
          <Image src={Forbes} alt="Forbes" />
          <Image src={Bloomberg} alt="Bloomberg" />
          <Image src={Sleepview} alt="google" />
          <Image src={Influensa} alt="google" />
        </div>
      </div>

      <HeroSwiper />

      <MaxWidthWrapper>
        <div className=" mt-24 md:mt-36 flex flex-col md:flex-row  gap-8 md:gap-0 items-center  justify-between">
          <div className="flex flex-col items-start ">
            <p className="text-sm text-[#12305B] font-normal mb-[29px]">
              Our Amazing Story
            </p>
            <h1 className="font-bold text-4xl mb-[56px]">
              10k+Happy Customers
            </h1>
            <p className="text-[#21384299] max-w-[475px] mb-[29px]">
              There’s no secret sauce, no wizard behind the curtain. What makes
              Aerolab tick is an interdisciplinary team with a framework that
              fosters candid collaboration.
            </p>
            <p className="font-bold text-[#12305B] underline">
               More know About us
            </p>
          </div>

          <div className="max-w-[474px] w-full  flex items-center justify-end bg-[#FBF9F2] p-6 md:p-12 shadow-[0px_100px_100px_0px_#00000025]">
            <TeamSwiper />
          </div>
        </div>

        <div className="mt-32 border-b-2 border-[#21384218] pb-10">
          <ReviewCarousel />
        </div>

        <div className="flex flex-col md:flex-row items-center  gap-10 md:gap-0 ">
          <div className="relative w-full md:w-[700px] h-[500px]">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/Group%203%20(1).png"
              alt="Image"
              // width={700}
              // height={500}
              fill
              className="w-[700px] h-[500px] aspect-square mt-8 object-cover object-center"
            />
          </div>

          <div className="-mt-4">
            <h1 className="font-bold text-center md:text-left text-[36px] text-[#12305B] mb-[27px]">
              Shop Now
            </h1>
            <p className="max-w-[400px] text-[#21384299] mb-6">
              Our Personal Diffuser is an aromatherapy device that contains a
              blend of melatonin, lavender, and chamomile. A few breaths of our
              plant-based essential oil mist will mellow you out, quiet the
              mind, and lull you to bed.
            </p>
            <button className="bg-[#FC5959] w-[225px] h-[50px] mx-auto md:mx-0 flex items-center justify-center text-white rounded-md">
              Visit shop
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-between mt-10">
          <div className="max-w-[475px]">
            <h1 className="font-bold text-center mb-[28px] md:text-left text-[36px] text-[#12305B]">
              Our mission
            </h1>
            <p className="text-[#21384299]">
              We started Sleepstiq with 1 simple goal: to be your best friend at
              bedtime. We, just like you, deal with stress, unease, and trouble
              sleeping from a number of silly things like school, work, screens,
              numbers, and people. That's why we created products that aim to
            </p>
            <p className="flex flex-col  text-[#21384299] mt-6 ">
              <span>✓ Promote Calm </span>
              <span>✓ Support Sleep </span>
              <span>✓ Reduce Stress </span>
              <span>✓ Aid Relaxation</span>
            </p>
          </div>

          <div className=" w-full ">
            <Image
              src="https://ik.imagekit.io/0xy9wqmrh/Image%20(1).png"
              alt="image"
              width={700}
              height={500}
            />
          </div>
        </div>

        <div className="mt-20 mb-24 text-center">
          <h1 className="font-bold  text-[36px] text-[#12305B] mb-[20px]">
            Visit Our Shop
          </h1>

          <p className="max-w-[915px] mx-auto text-[#21384299] mb-[30px]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <button className="bg-[#FC5959] w-[225px] h-[50px] mx-auto  flex items-center justify-center text-white rounded-md">
            Visit shop
          </button>
        </div>

        <div className="mt-20 mb-24 pt-16 border-t">
          <h1 className="font-bold text-[#4D533C] text-[36px] mb-[52px]">
            Product Reviews
          </h1>

          <div className=" border-[#21384218] place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectReviews.map((review, index) => (
              <div
                key={index}
                className="bg-white  shadow-[50px_50px_100px_0px_#00000025]    md:max-w-[306px] min-h-[400px] w-full flex flex-col items-start "
              >
                <div className="relative w-full   h-[210px]">
                  <Image
                    src="https://ik.imagekit.io/0xy9wqmrh/Rectangle%206.png"
                    alt="product imag"
                    // width={306}
                    // height={210}
                    fill
                    className="w-full  h-[210px] aspect-square"
                  />
                </div>
                <div className="px-4 py-2 space-y-3">
                  <p className="text-[#4D533C] italic">{review.description}</p>
                  <p className="flex flex-col ">
                    <span className="font-bold">{review.name}</span>
                    <StarRating rating={review.rating} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
