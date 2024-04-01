"use client";
import {
  BottleImage,
  LeftNavigationIcon,
  RightNavigationIcon,
} from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";
import { ProductCard } from "..";

export default (props: any) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index: any) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-130px) rotateY(0deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-130px) rotateY(0deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-220px) rotateY(0deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-220px) rotateY(0deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  return (
    <>
      <h2 className="section-heading-60 text-center mb-12">
        Our Products
      </h2>
      <div className="min-h-[200px] md:min-h-[742px] flex justify-center relative pt-4 mb-[100px] md:mb-0 scale-[0.4] md:scale-100">
        <div className="mt-[-220px] md:mt-0">
          <div className="slideC">
            {props.data.map((item: any, i: number) => (
              <React.Fragment key={item?.id}>
                <div
                  className="slide"
                  style={{
                    boxShadow: `0 5px 20px #000`,
                    ...getStyles(i),
                  }}
                >
                  <SliderContent {...item} />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="absolute bottom-[-360px] md:bottom-0 left-1/2 translate-x-[-50%] lg:mt-10 gap-2 lg:gap-4">
            <button onClick={prev} className="p-2">
              <Image
                src={LeftNavigationIcon}
                alt="left-navigation"
                style={{ width: "auto", height: "auto" }}
              />
            </button>
            <button onClick={next} className="p-2">
              <Image
                src={RightNavigationIcon}
                alt="right-navigation"
                style={{ width: "auto", height: "auto" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SliderContent = (props: any) => {
  return (
    <div className="sliderContent">
      <ProductCard
        title={props.name}
        image={props?.images[0]?.src}
        price={props?.price}
      />
    </div>
  );
};
