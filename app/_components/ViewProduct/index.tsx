'use client'
import Image from "next/image";
import { StarIcon } from "@/public/assets";
import { ButtonOutlined } from "..";
import GallerySlider from "../GallerySlider";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";

const ViewProduct = ({ data }: any) => {
  const wordsArray = data?.name?.split(" ") ?? "";
  const {quantity, setQuantity, handleAdtoCart} = useContext(GlobalContext)

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 justify-between gap-[40px] flex-wrap">
        <div className="basis-full xl:basis-[50%]">
          <GallerySlider imagesList={data?.images}/>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="section-heading-44">
            {wordsArray?.slice(0, -2)?.join?.(" ")}
            <span className="golden-gradient-text font-[Glamore] block">
              {wordsArray?.slice(-2)?.join?.(" ")}
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
              {data?.price} USD
            </p>
           <div className="content">
             <div
              dangerouslySetInnerHTML={{ __html: data?.short_description }}
            />
           </div>

            <div className="flex items-center gap-4 max-w-[460px]">
              <div className="flex items-center justify-between gap-4 px-5 py-3 border border-solid rounded-lg min-w-[220px]">
                <p className="font-bold text-xl cursor-pointer" onClick={()=>{
                  quantity <= 0 ? setQuantity(0) : setQuantity(quantity-1)
                }}>-</p>
                <p className="text-sm">{quantity}</p>
                <p className="font-bold text-xl cursor-pointer" onClick={()=>setQuantity(quantity+1)}>+</p>
              </div>
              <ButtonOutlined style={{ width: "220px" }} onClick={() => handleAdtoCart(data)} >
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
