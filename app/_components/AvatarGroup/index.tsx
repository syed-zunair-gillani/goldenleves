import { Avatar } from "..";
import { StaticImageData } from "next/image";

interface IAvatarGroup {
  width: number;
  height?: number;
  list: {
    src: string | StaticImageData;
    alt?: string;
  }[];
}

const AvatarGroup = (props: IAvatarGroup) => {
  const { width = 32, list = [], height } = props;
  return (
    <div className="flex items-center ">
      {list?.map(({ src, alt = "image" }, index) => (
        <div
          style={{
            width: `${width}px`,
            marginLeft: index === 0 ? 0 : `-${width / 1.75}px`,
          }}
        >
          <Avatar
            src={src}
            alt={alt}
            width={width}
            height={height ?? width}
            className={`${
              !(index === 0 || index === list?.length - 1) && "border-2"
            } border-solid border-[#080808ff]`}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
