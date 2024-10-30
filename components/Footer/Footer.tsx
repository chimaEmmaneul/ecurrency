import React from "react";

import FooterLogo from "@/assets/footerlogo.svg";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";

import Facebook from "@/assets/facebook.svg";
import Google from "@/assets/Googlefooter.svg";
import Linkedin from "@/assets/linkedin.svg";
import Twitter from "@/assets/twitter.svg";

const Footer = () => {
  return (
    <div className="relative w-full bg-[#12305B] md:bg-transparent mt-32  mx-auto  ">
      <div className=" w-full h-full md: md:h-[500px] overflow-hidden   flex items-center justify-center">
        <Image
          src="https://ik.imagekit.io/0xy9wqmrh/Footer%20(3).png"
          width={1440}
          height={700}
          //   fill
          alt="footerimage"
          className=" hidden md:block w-[1440px] h-[500px]  mx-auto aspect-square "
        />
      </div>

      <div className="md:absolute  w-full top-6 z-10">
        <MaxWidthWrapper>
          <div className="flex items-center justify-start md:justify-center py-10">
            <Image src={FooterLogo} alt="footerlogo" />
          </div>

          <section className="flex flex-col md:flex-row gap-8 md:gap-2 pb-8 lg:gap-0  items-start justify-between">
            <div>
              <h1 className="text-white mb-4">COMPANY</h1>
              <p className="flex flex-col space-y-2 text-[#ABABAB]">
                <span>Account</span>
                <span>Blog</span>
                <span>Contact</span>
                <span>Jobs</span>
              </p>
            </div>

            <div>
              <h1 className="text-white mb-4">CONTACT</h1>
              <p className="flex flex-col space-y-2 ">
                <span className="text-[#ABABAB]">Phone</span>
                <span className="text-white font-bold">+234 708 507 3128</span>
                <span className="text-[#ABABAB]">Address</span>
                <span className="text-white font-bold">
                  16, Ogindipe Close, Upston Close
                </span>
              </p>
            </div>

            <div>
              <h1 className="text-white mb-4">CONSUMER ADVISORY</h1>
              <div className="max-w-[463px] text-white space-y-4 ">
                <p className="flex flex-col">
                  These statements have not been evaluated by the Food and Drug
                  Administration. This product is not intended to diagnose,
                  treat, cure, or prevent any disease. This product should be
                  used only as directed on the label. All trademarks and
                  copyrights are property of their respective owners and not
                  affiliated with nor do they endorse this product. Results may
                  vary.
                </p>
                <p>
                  By using our website or product, you agree to follow our terms
                  of service.
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-white mb-4">CONSUMER ADVISORY</h1>

              <div className="space-y-4 text-white">
                <p className="text-[#ABABAB] max-w-[270px] mb-[23px]">
                  Feel free to get in touch with us vai email
                </p>
                <p className="mb-[24px] font-bold">hello@sleepstiq.com</p>

                <p className="flex items-center gap-[10px]">
                  <Link href="">
                    <Image src={Facebook} alt="facebook" />
                  </Link>
                  <Link href="">
                    <Image src={Twitter} alt="Twitter" />
                  </Link>
                  <Link href="">
                    <Image src={Google} alt="Google" />
                  </Link>
                  <Link href="">
                    <Image src={Linkedin} alt="Linkedin" />
                  </Link>
                </p>
                <p className="text-[#ABABAB]">
                  © 2020@sleepstiq. All Rights Reserved.
                </p>
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Footer;
