import { EffectCardSlider } from "..";
import {
  BottleImage,
  BottlesImage,
  Drop1Image,
  Drop2Image,
} from "@/public/assets";

const OurProducts = () => {
  const slides = [
    {
      title: "Silk Elegence condtioner",
      image: BottleImage,
      price: 120.25,
    },
    {
      title: "Silk Elegence condtioner",
      image: Drop1Image,
      price: 125.25,
    },
    {
      title: "Silk Elegence condtioner",
      image: Drop2Image,
      price: 130.25,
    },
    {
      title: "Silk Elegence condtioner",
      image: BottlesImage,
      price: 135.25,
    },
  ];

  return (
    <div className="flex items-center flex-col section-padding">
      <h2 className="section-heading-60 uppercase -mb-[20px]">Our product</h2>
      <div className="w-full flex justify-center items-center">
        <EffectCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default OurProducts;
