import { Avatar } from "..";
import { Product2Image } from "@/public/assets";

const AvatarGroup = ({ width = 32, height }) => {
  const arr = ["", "", "", ""];
  return (
    <div className="flex items-center ">
      {arr?.map((_, index) => (
        <div style={{ width: `${width}px`, marginLeft: `-${width / 2}px` }}>
          <Avatar
            src={Product2Image}
            width={width}
            height={height ?? width}
            className={`${
              !(index === 0 || index === arr?.length - 1) && "border-2"
            } border-solid border-[#080808ff]`}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
