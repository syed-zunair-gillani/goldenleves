"use client";
import { ProductCard } from "..";
import { useState } from "react";
import { NavigationLeftImage, NavigationRightImage } from "@/public/assets";
import Image from "next/image";

const handleZIndex = (mid: number, index: number) => {
  if (index < mid) {
    return index;
  } else {
    return 2 * mid - index;
  }
};

export default function EffectCardSlider({ slides = [] }: { slides: any[] }) {
  const [activeSlide, setActiveSlide] = useState<any>(
    Math.ceil(slides?.length / 2)
  );

  const handlPrev = () => {
    setActiveSlide((prev: number) => (prev <= 0 ? 0 : prev - 1));
  };
  const handlNext = () => {
    setActiveSlide((prev: number) =>
      prev >= slides?.length - 1 ? slides?.length - 1 : prev + 1
    );
  };

  return (
    <div className="relative section-margin">
      <div className="flex items-center justify-between relative bg-[#080808ff] opacity-[50%]">
        {slides?.map((slide, index) => (
          <div
            style={{ zIndex: handleZIndex(slides?.length / 2, index) }}
            className={`flex-1 px-4 bg-[#080808ff] border-solid ${
              (!(index === 0) || !(index === slides?.length - 1)) &&
              "-mx-[120px]"
            }`}
          >
            <ProductCard
              key={index}
              title={slide?.title}
              image={slide?.image}
              price={slide?.price}
            />
          </div>
        ))}
      </div>
      <div
        style={{ zIndex: 100 }}
        className="w-full  absolute top-0 bottom-0 right-0 left-0 "
      >
        <div className="flex justify-center scale-[1.1] ">
          <div className="max-w-[380px]">
            <ProductCard
              title={slides?.[activeSlide]?.title}
              image={slides?.[activeSlide]?.image}
              price={slides?.[activeSlide]?.price}
            />
          </div>
        </div>
      </div>
      <div
        style={{ zIndex: 110 }}
        className="w-full relative flex justify-center mt-14 items-center gap-8"
      >
        <Image
          src={NavigationRightImage}
          width={72}
          height={12}
          alt={"navigaion"}
          onClick={handlPrev}
          className="cursor-pointer py-2"
        />
        <Image
          onClick={handlNext}
          src={NavigationLeftImage}
          width={72}
          height={12}
          alt={"navigaion"}
          className="cursor-pointer py-2"
        />
      </div>
    </div>
  );
}
