"use client";
import React from "react";

import campaign1 from "@/assets/happyhour.png";
import campaign2 from "@/assets/fashion.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Swipers from "../Swiper/Swipers";
import Image from "next/image";
import useCountdown from "@/hook/useCountdown";

const Slider = () => {
  const [days, hours, minutes, seconds] = useCountdown();
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm mx-auto px-4">
      <div className="grid grid-cols-3 gap-5 py-5">
        <div className="col-span-2">
          <Swipers />
        </div>
        <div className="col-span-1 bg-[#F5F5F5] p-5 space-y-6 rounded-lg">
          <p className="font-semibold">Upcoming Campaigns</p>
          <div className="flex items-center justify-between bg-white p-4 rounded-md">
            <div>
              <Image src={campaign1} alt="campaign image" width={150} />
              <p className="text-sm text-orange-600 font-semibold">
                Campaign starts in
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {days}d
              </p>
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {hours}h
              </p>
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {minutes}m
              </p>
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {seconds}s
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-4 rounded-md">
            <div>
              <Image src={campaign2} alt="campaign image" width={150} />
              <p className="text-sm text-orange-600 font-semibold">
                Campaign starts in
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {days}d
              </p>
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {hours}h
              </p>
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {minutes}m
              </p>
              <p className="bg-[#3D444E] px-4 py-2 text-lg font-bold text-white text-center rounded-md">
                {seconds}s
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
