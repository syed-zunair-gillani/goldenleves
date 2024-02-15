import React, { useState } from "react";
import Image from "next/image";
import { BottleImage, Drop1Image, Drop2Image } from "@/public/assets";
import { GoldenBorderWrapper } from "..";
export default function GallerySlider() {
  const images = [BottleImage, Drop1Image, Drop2Image];
  const [activeSlide, setActiveSlide] = useState<any>(0);

  return (
    <div className="w-full flex gap-6">
      <div className="flex flex-col gap-4">
        {images?.map((image, index) => (
          <div onClick={() => setActiveSlide(index)} className={`flex-1`}>
            {index === activeSlide ? (
              <GoldenBorderWrapper>
                <div className=" rounded-xl bg-[#111111] p-1 w-[100px] h-[120px]">
                  <Image
                    src={image}
                    alt="product"
                    width={80}
                    height={100}
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </GoldenBorderWrapper>
            ) : (
              <div className=" rounded-xl bg-[#111111]  p-1 w-[100px] h-[120px]">
                <Image
                  src={image}
                  alt="product"
                  width={80}
                  height={100}
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-3xl bg-[#111111] px-6 py-8 ">
        <Image
          src={images[activeSlide]}
          alt="product"
          width={380}
          height={386}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}
