import Link from "next/link";
import Image from "next/image";
import { LogoIcon } from "@/public/assets";

const Logo = ({
  width = 120,
  height = 120,
  className,
}: Readonly<{ width?: number; height?: number; className?: any }>) => {
  return (
    <Link href="/">
      <Image
        src={LogoIcon}
        alt="Golden Leaves"
        width={width}
        height={height}
        className={className}
      />
    </Link>
  );
};

export default Logo;
