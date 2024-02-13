import Image, { StaticImageData } from "next/image";

const Avatar = ({
  src,
  width,
  height,
  alt,
  name,
  className,
  ...rest
}: {
  src: string | StaticImageData;
  width: number;
  height: number;
  name?: string;
  alt?: string;
  className?: any;
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
      className={className}
      {...rest}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt || 'altText'}
        className="absolute overflow-hidden rounded-[50%] object-cover w-full h-full"
      />
    </div>
  );
};

export default Avatar;
