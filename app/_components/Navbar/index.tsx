"use client";
import { useState } from "react";
import { Logo } from "..";
import MenuItems from "./MenuItems";
import MenuIcons from "./MenuIcons";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isMobNav, setIsMobNav] = useState(false);
  
  const handleMobileNav = () => {
    setIsMobNav((prev) => !prev);
  };

  return (
    <>
      <div className="text-white text-sm py-[10px] xl:px-[80px] px-6 flex justify-between items-center">
        <div className="hidden md:block">
          <MenuItems />
        </div>
        <Logo className={"w-16 md:w-[120px]"} />
        <MenuIcons handleMobileNav={handleMobileNav} />
      </div>
      {isMobNav && <MobileNav handleMobileNav={handleMobileNav} />}
    </>
  );
};

export default Navbar;
