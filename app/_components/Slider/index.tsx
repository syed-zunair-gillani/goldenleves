"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import FeatureProductCard from "../FeatureProductCard";

export default function Slider({ slides = [] }: { slides: any[] }) {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        modules={[EffectFade, Navigation]}
        className=""
      >
        {slides?.map((slide) => (
          <SwiperSlide className="">
            <FeatureProductCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
