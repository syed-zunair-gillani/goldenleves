"use client";
import { ButtonOutlined } from "..";
import Card from "./Card";
import { BottleImage } from "@/public/assets";

const RelatedProducts = () => {
  return (
    <div className="flex items-center flex-col section-padding">
      <div className="flex items-center justify-between w-full pb-[40px]">
        <h2 className="text-[40px] leading-[60px] uppercase">
          Related{" "}
          <span className="font-[Glamore] golden-gradient-text">product</span>
        </h2>
        <div className="w-[174px]">
          <ButtonOutlined onClick={() => {}}>View All</ButtonOutlined>
        </div>
      </div>
      <div className="flex items-center justify-between gap-[30px] flex-wrap">
        {new Array(4).fill("")?.map(() => (
          <Card
            title="Silk Elegance Conditioner"
            image={BottleImage}
            price={120.25}
            rating={5}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
