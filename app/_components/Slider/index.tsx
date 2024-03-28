"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import FeatureProductCard from "../FeatureProductCard";
import { LeftNavigationIcon, RightNavigationIcon } from "@/public/assets";
import "swiper/css";
import "swiper/css/navigation";

export default function Slider({ slides = [] }: { slides: any[] }) {
  const [swiper, setSwiper] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState<any>(1);

  const goNext = () => {
    if (swiper) {
      swiper?.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper?.slidePrev();
    }
  };

  const handleSlideChange = () => {
    if (swiper) {
      setCurrentSlide(swiper.activeIndex + 1);
    }
  };

  return (
    <div className="w-full relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={false}
        modules={[EffectFade, Navigation]}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <FeatureProductCard data={slide}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[0%] z-50 right-[17%] lg:mt-10 gap-2 lg:gap-4">
        <button
          onClick={goPrev}
          className={`p-2 ${currentSlide === 1 && "cursor-not-allowed"}`}
        >
          <p className="text-white">
            {currentSlide === 1 ? "---" : currentSlide - 1}
          </p>
          <Image
            src={LeftNavigationIcon}
            alt="left-navigation"
            style={{ width: "auto", height: "auto" }}
          />
        </button>
        <button
          onClick={goNext}
          className={`p-2 ${
            currentSlide === slides?.length && "cursor-not-allowed"
          }`}
        >
          <p className="text-white">
            {currentSlide === slides?.length ? "---" : currentSlide + 1}
          </p>
          <Image
            src={RightNavigationIcon}
            alt="right-navigation"
            style={{ width: "auto", height: "auto" }}
          />
        </button>
      </div>
    </div>
  );
}
