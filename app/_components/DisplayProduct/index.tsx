import Image from "next/image";
import { ButtonOutlined } from "..";
import { Product2Image } from "@/public/assets";

const DisplayProduct = () => {
  return (
    <div
      style={{ backgroundPosition: "right" }}
      className="flex items-center flex-col lg:flex-row section-padding gap-4 xl:gap-[185px] bg-[url('/assets/images/product_bg.png')] bg-no-repeat"
    >
      <div className="w-full lg:w-auto">
        <h2 className="section-heading-60 uppercase font-normal">
          Unlocking
          <br /> Beauty with <br />
          Exquisite
        </h2>
        <p className="pb-10">
          Experience a new level of radiance through
          <br /> carefully curated formulations.
        </p>
        <ButtonOutlined onClick={() => {}}>Shop Now</ButtonOutlined>
      </div>
      <div className="">
        <Image src={Product2Image} alt="product" width={456} height={420} />
      </div>
    </div>
  );
};

export default DisplayProduct;
