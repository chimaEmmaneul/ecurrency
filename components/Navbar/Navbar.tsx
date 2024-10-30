"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";

import Logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      id: 1,
      label: "Home",
      path: "/",
    },
    {
      id: 2,
      label: "About",
      path: "/about",
      icon: "about-icon",
    },
    {
      id: 3,
      label: "Shop",
      path: "/shop",
    },
    {
      id: 4,
      label: "FAQs",
      path: "/faqs",
    },
  ];

  return (
    <div className="absolute top-0  w-full z-10">
      <MaxWidthWrapper>
        <div>
          <div className=" flex  items-center justify-between md:gap-32 py-3 w-full md:w-[60%] ">
            <Image src={Logo} alt="logo" width={92} height={62} />
            <div className=" hidden md:flex items-center justify-between w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <div key={link.id}>
                    <Link
                      className={cn("text-[#12305B] text-lg", {
                        "font-bold": isActive,
                      })}
                      href={link.path}
                    >
                      {link.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </SheetTrigger>
                <SheetContent className="flex flex-col items-center pt-10">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.path;
                    return (
                      <div key={link.id}>
                        <Link
                          className={cn("text-[#12305B] text-lg", {
                            "font-bold": isActive,
                          })}
                          href={link.path}
                        >
                          {link.label}
                        </Link>
                      </div>
                    );
                  })}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
