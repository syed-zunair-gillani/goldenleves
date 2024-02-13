import Image, { StaticImageData } from "next/image";

const Avatar = ({
  src,
  width,
  height,
  alt,
  name,
  ...rest
}: {
  src: string | StaticImageData;
  width: number;
  height: number;
  name?: string;
  alt?: string;
  rest?: any;
}) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: "50%",
        background: "grey",
        position: "relative",
      }}
      {...rest}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="absolute overflow-hidden rounded-[50%] object-cover w-full h-full"
      />
    </div>
  );
};

export default Avatar;
