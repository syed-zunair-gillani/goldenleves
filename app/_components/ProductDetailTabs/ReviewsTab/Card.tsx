import { StarIcon } from "@/public/assets";
import Image from "next/image";

const Card = () => {
  return (
    <div>
      <div className="">
        <div className="w-[76px] h-[76px] rounded-full">
          <Image src={""} alt="" width={76} height={76} />
        </div>
        <div className="">
          <h4></h4>
          {new Array(5).fill("")?.map(() => (
            <Image src={StarIcon} alt="star" width={20} height={20} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
