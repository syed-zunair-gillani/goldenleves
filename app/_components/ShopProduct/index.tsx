'use client'
import Image, { StaticImageData } from "next/image";
import { ButtonContained, ButtonOutlined, LabeledAvatarGroup } from "..";
import { motion } from 'framer-motion';

interface IShopProduct {
  direction?: string;
  title: string;
  text: string;
  productImage: string | StaticImageData;
  avatarData: {
    label: string;
    caption?: string;
    list: {
      src: string | StaticImageData;
      alt?: string;
    }[];
  };
}

const ShopProduct = (props: IShopProduct) => {
  const {
    title,
    text,
    direction,
    avatarData,
    productImage,
  } = props;
  return (
    <div
      className={` flex items-center flex-col-reverse lg:flex-row gap-10 xl:gap-[80px] bg-[#111] rounded-2xl px-8 lg:px-[60px] m-[80px] section-margin pb-8 lg:pb-0 ${direction === "reverse" ? 'lg:!flex-row-reverse' : 'flex-col'}`}
    >
      <div className="md:pb-10 md:pt-7 lg:pt-10 lg:pb-14 basis-full xl:basis-[55%]">
        <h2 className="relative section-heading-44 uppercase font-normal golden-gradient-text">
          {title}
          <motion.span
            initial={{ height: `100%` }}
            whileInView={{ height: '0px' }}
            transition={{ duration: 2, delay: 0.4 }}
            className={`absolute bg-[#111111] inset-0`}></motion.span>
        </h2>
        <p className="pb-6 pt-4 relative">
          {text}
        <motion.span
            initial={{ height: `100%` }}
            whileInView={{ height: '0px' }}
            transition={{ duration: 2, delay: 0.5 }}
            className={`absolute bg-[#111111] inset-0`}></motion.span>
        </p>
        <LabeledAvatarGroup
          width={34}
          list={avatarData?.list}
          label={avatarData?.label}
          caption={avatarData?.caption}
        />
        <div className="flex relative items-center flex-col md:flex-row gap-8 pt-8 xl:w-[70%]">
          <ButtonContained onClick={() => { }}>Buy Now!</ButtonContained>
          <ButtonOutlined onClick={() => { }}>Shop Now</ButtonOutlined>
          <motion.span
            initial={{ height: `100%` }}
            whileInView={{ height: '0px' }}
            transition={{ duration: 2, delay: 0.7 }}
            className={`absolute bg-[#111111] inset-0`}></motion.span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full basis-full xl:basis-[40%]">
        <div
          className="scale-[1.2] lg:scale-[1.9] xl:scale-[2.7] ">
          <motion.figure
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <Image
              src={productImage}
              alt="product"
              width={456}
              height={420}
              className="w-full h-full object-fill overflow-hidden"
            />
          </motion.figure>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
