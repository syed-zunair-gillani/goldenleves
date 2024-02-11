import Image from "next/image";

import { ButtonOutlined } from "..";
import { BottleImage } from "@/public/assets";

const FeatureProduct = () => {
  return (
    <div className="flex items-center flex-col section-padding bg-[#080808ff] z-10 relative">
      <h2 className="section-heading-60 uppercase pb-4">Feature product</h2>
      <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-[40px] flex-wrap">
        <h2 className="flex-1 font-medium text-lg md:text-3xl md:leading-[46px]">
          Discover the luxury of healty, radiant hair. Gold Leaves provides
          premium products that nourish, strengthen, and elevate your haircare
          experience to a new level of luxury.
        </h2>
        <div className="flex-1">
          <Image src={BottleImage} alt="product" width={456} height={420} />
        </div>
        <div className="flex-1">
          <p className="golden-gradient-text text-3xl pb-4">
            Silk Elegence condtioner
          </p>
          <p className="pb-10">
            Indulge your hair in pure luxaury with our Silk Elegance
            Conditioner. This rich, hydrating formula, blend with gold extracts,
            leaves your hair silky-smooth and beautifully conditioned.
          </p>
          <ButtonOutlined
            onClick={() => {}}
            style={{ padding: "0.75rem 4rem" }}
          >
            Shop Now
          </ButtonOutlined>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
