'use client'
import Image from "next/image";
import { ButtonOutlined } from "..";
import { BottleImage } from "@/public/assets";
import { useRouter } from "next/navigation";

const FeatureProductCard = ({data}:any) => {
  const router = useRouter()
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-[40px] flex-wrap">
      <h2 className="flex-1 font-medium text-lg md:text-3xl md:leading-[46px]">
        {data?.acf?.excerpt}
      </h2>
      <div className="flex-1 min-h-[650px] flex justify-center items-center">
        <Image src={data?.images[0]?.src} alt="product" width={456} height={420} />
      </div>
      <div className="flex-1">
        <p className="golden-gradient-text text-3xl pb-4">
          {data?.name}
        </p>
        <div className="pb-10 content" dangerouslySetInnerHTML={{ __html: data?.short_description }}/>
        <ButtonOutlined onClick={() => router.push(`/shop/${data?.slug}`)} style={{ padding: "0.75rem 4rem" }}>
          Shop Now
        </ButtonOutlined>
      </div>
    </div>
  );
};

export default FeatureProductCard;
