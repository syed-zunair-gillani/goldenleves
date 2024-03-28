import { StarIcon } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  image,
  price,
  rating,
  slug
}: Readonly<{
  title: string;
  image: any;
  price: string | number;
  rating: number | string;
  slug: string
}>) => {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex-1 rounded-3xl flex justify-center cursor-pointer bg-[#111111] px-6 py-8 " style={{ minHeight: '420px' }}>
        <Image src={image} alt="product" width={220} height={253} className="object-contain"/>
      </div>
      <div className="">
        <div className="flex items-center gap-1">
          {new Array(rating).fill("")?.map(() => (
            <Link href={'/shop/' + slug}>
              <Image src={StarIcon} alt="star" width={20} height={20} />
            </Link>
          ))}
          <p className="ml-1">{rating}.0</p>
        </div>
        <Link href={'/shop/' + slug}>
          <p className="golden-gradient-text text-[24px] leading-[34px] my-[6px]">
            {title}
          </p>
        </Link>
        <p className="text-lg leading-[34px] text-white">{price} USD</p>
      </div>
    </div >
  );
};

export default Card;
