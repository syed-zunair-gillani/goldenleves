import Image, { StaticImageData } from "next/image";
import { ButtonContained, ButtonOutlined, LabeledAvatarGroup } from "..";

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
    direction = "flex-row",
    avatarData,
    productImage,
  } = props;
  return (
    <div
      className={`${direction} flex items-center flex-col-reverse lg:flex-row gap-10  xl:gap-[80px] bg-[#111] rounded-2xl px-8 lg:px-[60px] m-[80px] section-margin pb-8 lg:pb-0`}
    >
      <div className="md:pb-10 md:pt-7 lg:pt-10 lg:pb-14 basis-full xl:basis-[55%]">
        <h2 className="section-heading-44 uppercase font-normal golden-gradient-text">
          {title}
        </h2>
        <p className="pb-6 pt-4">{text}</p>
        <LabeledAvatarGroup
          width={34}
          list={avatarData?.list}
          label={avatarData?.label}
          caption={avatarData?.caption}
        />
        <div className="flex items-center flex-col md:flex-row gap-8 pt-8">
          <ButtonContained onClick={() => {}}>Buy Now!</ButtonContained>
          <ButtonOutlined onClick={() => {}}>Shop Now</ButtonOutlined>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full basis-full xl:basis-[40%]">
        <div className="scale-[1.25]">
          <Image
            src={productImage}
            alt="product"
            width={456}
            height={420}
            className="w-full h-full object-fill overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
