'use client'
import Image from "next/image";
import {
  Drop1Image,
  Drop2Image,
  Drop3Image,
} from "@/public/assets";
import { motion } from 'framer-motion';

const ShopHeader = () => {
  return (
    <div className="flex items-end justify-between px-4 lg:px-0 lg:container w-full mx-auto flex-col lg:flex-row section-padding gap-4 xl:gap-[85px] overflow-hidden">
      <div className="w-full basis-full lg:basis-[60%] lg:w-auto">
        <motion.h2
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }} 
          className="section-heading-60 uppercase font-normal golden-gradient-text">
          Shine bright with gold leaves your hair, your crown
        </motion.h2>
        <motion.p 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, delay:0.2 }}
          className="pt-5 text-xl leading-[32px]">
          Experience the brilliance of Gold Leaves, where each product is a
          radiant crown for your hair. Illuminate your locks and shine bright
          with the essence of luxury and care.
        </motion.p>
      </div>
      <div className="basis-full lg:basis-[40%] relative">
        <div className="w-full h-full flex">
          <motion.div 
            initial={{ y: '-10%', opacity: 0 }}
            animate={{ y: 0, opacity : 1 }}
            transition={{ duration: 1.2, delay:0.2 }}
            className="h-[150px] w-[140px] p-2 rounded-2xl mt-[100px]">
            <Image
              src={Drop1Image}
              alt="product"
              width={100}
              height={110}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 1.2, delay:0.2 }}
            className="p-2 rounded-2xl min-h-[450px] -mb-3">
            <Image
              src={Drop2Image}
              alt="product"
              width={330}
              height={620}
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.2, delay:0.2 }}
          className="absolute w-[210px] h-[250px] bg-[#080808ff] p-2 rounded-2xl -bottom-[80px] left-0">
          <Image
            src={Drop3Image}
            alt="product"
            width={456}
            height={420}
            className="w-full h-full object-cover rounded-xl "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ShopHeader;
