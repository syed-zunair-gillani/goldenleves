'use client'
import Image from "next/image";
import { CartIcon, MenuIcon, SearchIcon, UserIcon } from "@/public/assets";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";

const MenuIcons = ({ handleMobileNav }: { handleMobileNav: () => void }) => {
  const {setCartOpen} = useContext(GlobalContext)

  const handleCartSideBar = () => {
    setCartOpen(true)
  }

  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      <span className="cursor-pointer hover:text-gray-400">
        <Image src={SearchIcon} alt="search" width={28} height={28} />
      </span>
      <span className="cursor-pointer hover:text-gray-400">
        <Image src={UserIcon} alt="user" width={28} height={28} />
      </span>
      <span className="cursor-pointer hover:text-gray-400" onClick={handleCartSideBar}>
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
