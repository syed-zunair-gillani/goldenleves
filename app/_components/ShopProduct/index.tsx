import Image from "next/image";
import { Avatar, AvatarGroup, ButtonOutlined } from "..";
import { Product2Image } from "@/public/assets";

const ShopProduct = ({ direction = "row" }: { direction?: string }) => {
  return (
    <div
      className={`flex items-center section-padding bg-[#111] gap-4 xl:gap-[185px]`}
    >
      <div className="w-full lg:w-auto">
        <h2 className="section-heading-60 uppercase font-normal golden-gradient-text">
          Unlocking Beauty with Exquisite
        </h2>
        <p className="pb-10">
          Experience a new level of radiance through
          <br /> carefully curated formulations.
        </p>
        <Avatar src={Product2Image} width={32} height={32} />
        <AvatarGroup />
        <ButtonOutlined onClick={() => {}}>Shop Now</ButtonOutlined>
      </div>
      <div className="">
        <Image src={Product2Image} alt="product" width={456} height={420} />
      </div>
    </div>
  );
};

export default ShopProduct;
