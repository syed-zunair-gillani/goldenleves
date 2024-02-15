import Image from "next/image";

const ProductCard = ({
  title,
  image,
  price,
}: Readonly<{ title: string; image: any; price: string | number }>) => {
  return (
    <div className="w-full h-[586px] flex flex-col items-center gap-5 bg-[#111111] px-6 md:px-[62px] py-10 rounded-3xl max-w-[472px] product-card">
      <p className="golden-gradient-text text-xl md:text-[40px] md:leading-[50px] text-center">
        {title}
      </p>
      <div className="flex-1 max-h-[486px] ">
        <Image
          src={image}
          alt="product"
          width={256}
          height={420}
          className="w-full h-full"
        />
      </div>
      <div className="text-center">
        <p className="text-ase md:text-xl">Start From</p>
        <p className="text-lg md:text-[32px] md:leading-[34px] text-white">
          {price} USD
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
