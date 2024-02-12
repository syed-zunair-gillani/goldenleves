import Image from "next/image";
import { ButtonOutlined } from "..";
import {
  Drop1Image,
  Drop2Image,
  Drop3Image,
  Product2Image,
} from "@/public/assets";

const ShopHeader = () => {
  return (
    <div className="flex items-end justify-between flex-col lg:flex-row section-padding gap-4 xl:gap-[85px]">
      <div className="w-full basis-full lg:basis-[60%] lg:w-auto">
        <h2 className="section-heading-60 uppercase font-normal golden-gradient-text">
          Shine bright with gold leaves your hair, your crown
        </h2>
        <p className="pt-5 text-xl leading-[32px]">
          Experience the brilliance of Gold Leaves, where each product is a
          radiant crown for your hair. Illuminate your locks and shine bright
          with the essence of luxury and care.
        </p>
      </div>
      <div className="basis-full lg:basis-[40%] relative">
        <div className="w-full h-full flex">
          <div className="h-[125px] w-[130px] p-2 rounded-2xl mt-[100px]">
            <Image
              src={Drop1Image}
              alt="product"
              width={100}
              height={110}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="p-2 rounded-2xl min-h-[380px] -mb-3">
            <Image
              src={Drop2Image}
              alt="product"
              width={330}
              height={620}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="absolute w-[180px] h-[220px] bg-[#080808ff] p-2 rounded-2xl -bottom-[80px] left-0">
          <Image
            src={Drop3Image}
            alt="product"
            width={456}
            height={420}
            className="w-full h-full object-cover rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
