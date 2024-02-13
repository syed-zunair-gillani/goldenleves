import { Card } from "..";
import { cardData } from "./UserLove.data";

const UserLove = () => {
  return (
    <div className="flex items-center flex-col section-padding mt-20 md:mt-0">
      <div>
        <h2 className="section-heading-44 uppercase">Why User Loves Us</h2>
        <p className="">
          Experience leadership that propels us toward Unparalleled success.
        </p>
      </div>
      <div className="flex items-center gap-4 xl:gap-[35px] pt-9 pb-9">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {cardData?.map((data, index) => (
            <div
              key={index}
              className="flex-1 w-full basis-full md:basis-[45%] xl:basis-[30%]"
            >
              <Card {...data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserLove;
