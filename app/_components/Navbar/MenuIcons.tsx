import Image from "next/image";
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from "@/public/assets";

const MenuIcons = ({ handleMobileNav }: { handleMobileNav: () => void }) => {
  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      <span className="cursor-pointer hover:text-gray-400">
        <Image src={SearchIcon} alt="search" width={28} height={28} />
      </span>
      <span className="cursor-pointer hover:text-gray-400">
        <Image src={UserIcon} alt="user" width={28} height={28} />
      </span>
      <span className="cursor-pointer hover:text-gray-400">
        <Image src={CartIcon} alt="cart" width={28} height={28} />
      </span>
      <span
        className="menu-icon cursor-pointer md:hidden"
        onClick={handleMobileNav}
      >
        <Image src={MenuIcon} alt="" width={24} height={24} />
      </span>
    </div>
  );
};

export default MenuIcons;
