'use client'
import React, { useState } from "react";
import Image from "next/image";
import { BottleImage, Drop1Image, Drop2Image } from "@/public/assets";
import { GoldenBorderWrapper } from "..";


export default function GallerySlider({imagesList}:any) {
  const [activeSlide, setActiveSlide] = useState<any>(imagesList[0].src);

  return (
    <div className="w-full flex gap-6 h-full">
      <div className="flex flex-col gap-2">
        {imagesList?.slice(0,4)?.map((image:any, index:any) => (
          <div onClick={() => setActiveSlide(image?.src)} className={`flex-1 cursor-pointer`}>
            {image?.src === activeSlide ? (
              <GoldenBorderWrapper>
                <div className=" rounded-xl bg-[#111111] p-1 w-[100px] h-[120px]">
                  <Image
                    src={image?.src}
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
                  src={image?.src}
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
      <div className="flex-1 flex justify-center rounded-3xl bg-[#111111] px-6 py-8 ">
        <Image
          src={activeSlide}
          alt="product"
          width={380}
          height={386}
          className="h-full rounded-xl object-contain"
        />
      </div>
    </div>
  );
}
