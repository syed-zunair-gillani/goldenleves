import Image from "next/image";
import MenuItems from "./MenuItems";
import { ArrowRightIcon } from "@/public/assets";

const MobileNav = ({ handleMobileNav }: { handleMobileNav: () => void }) => {
  return (
    <div className="bg-[#111111] z-50 absolute top-0 pt-[80px] right-0 w-[220px] h-full text-white">
      <span
        onClick={handleMobileNav}
        className="absolute top-4 left-4 bg-white p-1 rounded-full"
      >
        <Image src={ArrowRightIcon} alt="" width={18} height={18} />
      </span>
      <MenuItems />
    </div>
  );
};

export default MobileNav;
