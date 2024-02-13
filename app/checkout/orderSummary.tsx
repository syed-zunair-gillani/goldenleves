import { BottleImage } from "@/public/assets";
import Image from "next/image";
import React from "react";
import Textfield from "../_components/Textfield";

const OrderSummary = () => {
  return (
    <div className="lg:max-w-[424px] w-full bg-[#111111] p-6 rounded-xl">
      <h3 className="golden-gradient-text font-normal text-[32px] leading-[42px] pb-6">
        Order Summary
      </h3>
      <div className="flex gap-4 border-b-[.5px] mb-5 border-[#464554] py-4 items-center">
        <figure className="bg-[#070707] p-2 rounded-lg w-[65px] flex items-center relative justify-center">
          <Image src={BottleImage} alt="BottleImage" width={30} height={30} />
          <div className="bg-white absolute flex items-center justify-center -top-2 -right-2 w-5 h-5 rounded-full text-[12px]">
            2
          </div>
        </figure>
        <div className="flex justify-between gap-4">
          <p className="text-[#AFAFAF] text-sm">
            Peru Vera May Black Overnight Travel Bag
          </p>
          <p className="text-white">$200.00</p>
        </div>
      </div>
      <div className="flex justify-between gap-2 ">
        <Textfield
          name="discount"
          label=""
          placeholder="Apply discount"
          className="w-full flex-1"
        />
        <button className="bg-white py-[10px] px-5 hover:bg-[#DEA064] rounded-[8px]">
          Apply
        </button>
      </div>
      <div className="mb-3 rounded-lg mt-2">
        <p className="flex justify-between items-center py-4 gap-5 border-b-[.5px] border-[#464554]">
          <span>Subtotal</span>
          <span>$200.00</span>
        </p>
        <p className="flex justify-between items-center py-4 gap-5 border-b-[.5px] border-[#464554]">
          <span>Shipping</span>
          <span>Free</span>
        </p>
        <p className="flex justify-between items-center pt-4 gap-5">
          <span>Total</span>
          <span>$200.00</span>
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
