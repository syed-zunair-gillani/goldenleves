import Image from "next/image";
import { BottleImage, StarIcon } from "@/public/assets";
import { ButtonOutlined } from "..";

const ViewProduct = () => {
  return (
    <div className="px-[100px] py-10">
      <div className="flex items-center justify-between gap-[30px] flex-wrap">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            {new Array(4).fill("")?.map(() => (
              <div className="flex-1 rounded-xl bg-[#111111] px-2 py-1">
                <Image
                  src={BottleImage}
                  alt="product"
                  width={80}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className="flex-1 rounded-3xl bg-[#111111] px-6 py-8 ">
            <Image src={BottleImage} alt="product" width={380} height={386} />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="section-heading-44">
            Peru golden leaves Black{""}
            <span className="golden-gradient-text font-[Glamore] block">
              Hair Oil
            </span>
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
              {new Array(5).fill("")?.map(() => (
                <Image src={StarIcon} alt="star" width={20} height={20} />
              ))}
              <p className="ml-1">{5}.0 (23 Reviews)</p>
            </div>
            <p className="text-[32px] leading-[34px] text-white">
              {"120.50"} USD
            </p>
            <div>
              <p className="pb-6 text-lg leading-7 whitespace-break-spaces max-w-[500px]">
                Unveil the brilliance of your hair with our Radiance Boost
                Shampoo. Infused with real gold extracts, this sulfate-free
                formula gently cleanses while imparting a lustrous shine
              </p>
              <ul className="text-[#AFAFAF] text-lg leading-7 list-disc list-inside">
                <li>Enriched with Gold Extracts for Ultimate Shine</li>
                <li>Sulfate-Free Formula for Gentle Cleansing</li>
                <li>Perfect for All Hair Types</li>
                <li>Invigorating Fragrance for a Luxurious Experience</li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-between gap-4 px-5 py-3 border border-solid rounded-lg min-w-[220px]">
                <p className="font-bold text-xl cursor-pointer">-</p>
                <p className="text-sm">01</p>
                <p className="font-bold text-xl cursor-pointer">+</p>
              </div>
              <ButtonOutlined style={{ width: "220px" }}>
                Add to Cart
              </ButtonOutlined>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
