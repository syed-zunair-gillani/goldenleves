"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { ProductCard } from "..";

export default function EffectCardSlider({ slides = [] }: { slides: any[] }) {
  return (
    <div className="w-[35%]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        pagination
        modules={[EffectCards]}
        className=""
      >
        {slides?.map((slide) => (
          <SwiperSlide className="">
            <ProductCard
              title={slide?.title}
              image={slide?.image}
              price={slide?.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
