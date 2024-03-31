import { BottleImage, Drop1Image, StarIcon } from "@/public/assets";
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
      <div className="pt-[1px] bg-[#A1A1A1] mt-6" />
      <div className="mt-5">
        {
          reviewData?.map((review, idx) => (
            <div key={idx} className="border border-[#242424] mb-5 md:flex">
              <div className="flex items-center gap-3 md:border-r-[1px] border-[#242424] p-4 pr-8 min-w-[222px]">
                <Image src={review?.user?.image} alt={review.user?.name} width={60} height={60} className="rounded-full h-[60px] object-cover" />
                <div>
                  <strong className="text-white text-sm">{review?.user?.name}</strong>
                  <div className="flex items-center gap-1 mt-1">
                    {new Array(5).fill("")?.map(() => (
                      <Image src={StarIcon} alt="star" width={20} height={20} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 px-5">
                <p className="flex justify-between items-center">
                  <span className="text-white">“{review.title}”</span>
                  <span>{review.date}</span>
                </p>
                <p className="mt-2">{review.review}</p>
                <div className="flex gap-2 mt-3">
                  {
                    review?.images?.map((i: any, id: number) => (
                      <figure className="bg-[#111111] w-[98px] h-[98px] flex items-center justify-center rounded-xl">
                        <Image src={i} alt={review.title} width={60} height={60} />
                      </figure>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ReviewsTab;


const reviewData = [
  {
    title: "A Luxurious Transformation for My Hair",
    review: "I've been on a quest for the perfect shampoo that not only cleanses but truly transforms my hair, and Gold Leaves' Radiance Boost Shampoo has exceeded my expectations in every way possible.",
    date: "Jan 12, 2088",
    images: [BottleImage, BottleImage],
    user: {
      image: Drop1Image,
      name: "Jaxson Aminoff",
      rating: 5
    }
  },
  {
    title: "A Luxurious Transformation for My Hair",
    review: "I've been on a quest for the perfect shampoo that not only cleanses but truly transforms my hair, and Gold Leaves' Radiance Boost Shampoo has exceeded my expectations in every way possible.",
    date: "Jan 12, 2088",
    images: [],
    user: {
      image: Drop1Image,
      name: "Aminoff Jaxson",
      rating: 5
    }
  },
  {
    title: "A Luxurious Transformation for My Hair",
    review: "I've been on a quest for the perfect shampoo that not only cleanses but truly transforms my hair, and Gold Leaves' Radiance Boost Shampoo has exceeded my expectations in every way possible.",
    date: "Jan 12, 2088",
    images: [BottleImage, BottleImage],
    user: {
      image: Drop1Image,
      name: "Jaxson Aminoff",
      rating: 5
    }
  },
  {
    title: "A Luxurious Transformation for My Hair",
    review: "I've been on a quest for the perfect shampoo that not only cleanses but truly transforms my hair, and Gold Leaves' Radiance Boost Shampoo has exceeded my expectations in every way possible.",
    date: "Jan 12, 2088",
    images: [],
    user: {
      image: Drop1Image,
      name: "Jaxson Aminoff",
      rating: 5
    }
  },

]