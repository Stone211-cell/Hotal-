"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import {  CarouselStandardroom,CarouselSeaviewroom } from "../Animation/CarouselDemo";

type tdcardlist = {
  title: string;
  des: string;
  link?: string;
  
};

export function ThreeDCardStandardroom({title,des,link}:tdcardlist) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

        <CardItem translateZ="100" className="w-full mt-4">

            <CarouselStandardroom />
          
        </CardItem>

                <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 mt-2 dark:text-white"
        >
        {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
{des}
        </CardItem>
        <div className="flex justify-between items-center mt-20">

          <CardItem
            translateZ={20}
            as="a"
             href= {link || "https://twitter.com/mannupaaji"}
             target="_blank"
            className="px-4 py-2 rounded-xl bg-red-900  transition-transform duration-200 ease-in-out hover:scale-115 pointer-coarse:  text-white text-xs font-bold"
          >
            Book Now!
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}


export function ThreeDCardSeaviewroom({title,des,link}:tdcardlist) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">

        <CardItem translateZ="100" className="w-full mt-4">

            <CarouselSeaviewroom />
          
        </CardItem>

                <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 mt-2 dark:text-white"
        >
        {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
{des}
        </CardItem>
        <div className="flex justify-between items-center mt-20">

          <CardItem
            translateZ={20}
            as="a"
             href= {link || "https://twitter.com/mannupaaji"}
             target="_blank"
            className="px-4 py-2 rounded-xl bg-red-900  transition-transform duration-200 ease-in-out hover:scale-115 pointer-coarse:  text-white text-xs font-bold"
          >
            Book Now!
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}