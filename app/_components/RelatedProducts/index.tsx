"use client";
import { useRouter } from "next/navigation";
import { ButtonOutlined } from "..";
import Card from "./Card";
import { BottleImage } from "@/public/assets";

const RelatedProducts = ({data}:any) => {
  const router = useRouter()

  return (
    <div className="flex items-center flex-col container mx-auto px-4 pb-20">
      <div className="flex items-center justify-between w-full pb-[40px]">
        <h2 className="text-[40px] leading-[60px] uppercase">
          Related <span className="font-[Glamore] golden-gradient-text">product</span>
        </h2>
        <div className="w-[174px]">
          <ButtonOutlined onClick={() => router.push('/shop')}>View All</ButtonOutlined>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]  w-full">
        {data?.map((item:any,idx:number) => (
          <Card
            title={item.name}
            slug={item.slug}
            image={item?.images[0]?.src}
            price={item?.price}
            rating={5}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
