import { EffectCardSlider } from "..";
import { BottleImage } from "@/public/assets";

const OurProducts = () => {
  const slides = [
    {
      title: "Silk Elegence condtioner",
      image: BottleImage,
      price: 120.25,
    },
    {
      title: "Silk Elegence condtioner",
      image: BottleImage,
      price: 120.25,
    },
    {
      title: "Silk Elegence condtioner",
      image: BottleImage,
      price: 120.25,
    },
    {
      title: "Silk Elegence condtioner",
      image: BottleImage,
      price: 120.25,
    },
  ];

  return (
    <div className="flex items-center flex-col section-padding">
      <h2 className="section-heading-60 uppercase pb-4">Our product</h2>
      <div className="w-full flex justify-center items-center">
        <EffectCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default OurProducts;
