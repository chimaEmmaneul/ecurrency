import MaxWidthWrapper from "@/components/MaxWidthWrapper/MaxWidthWrapper";
import React from "react";
import { Search } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className=" min-h-screen ">
      <div className="h-fit bg-[#FBF9F2]">
        <MaxWidthWrapper>
          <div className="h-full py-40">
            <p className="mb-4">We're here to help you</p>
            <h1 className="font-bold text-2xl mb-8 min-[400px]:text-[40px] md:text-[60px] text-[#12305B]">
              How can we assist?
            </h1>

            <div className="bg-white mt-2 flex px-10 items-center rounded-[8px] w-full md:w-[700px]">
              <Search />
              <input
                type="text"
                placeholder="Search FAQs here "
                className="block w-full  border-none outline-none py-3 pl-3 placeholder:text-[#12305B]"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row my-16 gap-6 ">
          <div className="flex-[1] md:space-y-6 py-4 md:py-0 gap-4 md:gap-0 flex flex-row md:flex-col items-center md:items-start">
            <p className="font-bold whitespace-nowrap">Sleepstiq Product</p>
            <p>Order</p>
            <p>Melantonin</p>
          </div>

          <div className="w-full flex-[5]   border-t border-b">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg text-left md:text-center">
                  Q1: How does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.{" "}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg text-left md:text-center">
                  Q2: Why inhale melatonin?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg  text-left md:text-center">
                  Q3: How much melatonin is there per inhale?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg text-left md:text-center">
                  Q4: Is it an e-cigarette or tobacco product?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg text-left md:text-center">
                  Q5: What's in it?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg text-left md:text-center">
                  Q6: What's not in it?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="font-normal text-[#12305B] hover:no-underline text-lg text-left md:text-center">
                  Q7: How long does it last?
                </AccordionTrigger>
                <AccordionContent>
                  Inhaling on the diffuser will turn the inside liquids
                  (melatonin, lavender, chamomile) into a light mist which you
                  inhale, and then exhale out your nose. Inhaling the melatonin
                  allows for a near-instant effect, and also allows you to
                  experience the soothing aromatherapeutic effect of lavender
                  and chamomile.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Faqs;
