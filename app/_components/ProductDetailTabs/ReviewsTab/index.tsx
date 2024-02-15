import { StarIcon } from "@/public/assets";
import Image from "next/image";
import { ButtonOutlined } from "../..";

const ReviewsTab = () => {
  return (
    <div>
      <h5 className="text-[32px] leading-[34px] golden-gradient-text pb-5">
        Customer reviews
      </h5>
      <div className="flex items-center justify-between gap-1 ">
        <div className="flex items-center gap-1">
          {new Array(5).fill("")?.map(() => (
            <Image src={StarIcon} alt="star" width={20} height={20} />
          ))}
          <p className="ml-1">23 Reviews</p>
        </div>
        <div>
          <ButtonOutlined>Write Review</ButtonOutlined>
        </div>
      </div>
    </div>
  );
};

export default ReviewsTab;
