"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import slide1 from "@/assets/slide-1.jpg";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";

const Swipers = () => {
  return (
    <Swiper
      pagination={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={slide1} alt="slide1" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide2} alt="slide1" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide3} alt="slide1" className="rounded-lg" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide4} alt="slide1" className="rounded-lg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
