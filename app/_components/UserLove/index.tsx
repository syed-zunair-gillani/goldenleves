import { Card } from "..";
import RevelText from "../animations/revelText";
import { cardData } from "./UserLove.data";

const UserLove = () => {
  return (
    <div className="flex items-center px-4 lg:px-0 lg:container mx-auto flex-col section-padding mt-20 md:mt-0">
      <div>
        <h2 className="section-heading-44 relative text-center uppercase">
          Why User Loves Us
          <RevelText/>
        </h2>
        <p className="text-center relative">
          Experience leadership that propels us toward Unparalleled success.
          <RevelText delay='1.1'/>
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
