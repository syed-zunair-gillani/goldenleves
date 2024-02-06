import { StarIcon } from "@/public/assets";
import Image from "next/image";

const Card = ({
  title,
  image,
  price,
  rating,
}: Readonly<{
  title: string;
  image: any;
  price: string | number;
  rating: number | string;
}>) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-1 rounded-3xl bg-[#111111] px-6 py-8 ">
        <Image src={image} alt="product" width={220} height={253} />
      </div>
      <div className="">
        <div className="flex items-center gap-1">
          {new Array(rating).fill("")?.map(() => (
            <Image src={StarIcon} alt="star" width={20} height={20} />
          ))}
          <p className="ml-1">{rating}.0</p>
        </div>
        <p className="golden-gradient-text text-[24px] leading-[34px] my-[6px]">
          {title}
        </p>
        <p className="text-lg leading-[34px] text-white">{price} USD</p>
      </div>
    </div>
  );
};

export default Card;
