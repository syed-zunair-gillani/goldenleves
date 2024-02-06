import Link from "next/link";
import React from "react";
import { Logo } from "..";
import Image from "next/image";
import {
  AmericanExpressIcon,
  MastercardIcon,
  MasteroIcon,
  PaypalIcon,
  SkrillIcon,
  VisaElectronIcon,
  VisaIcon,
} from "@/public/assets";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0aff] !text-white px-6 md:px-[80px] pt-6 pb-4 md:pt-[60px] md:pb-[40px] ">
      {/* First Row */}
      <div className="flex justify-between flex-wrap gap-4">
        {/* Logo */}
        <div className="flex-[2] basis-full md:basis-0">
          <Logo className={"w-16 md:w-[120px]"} />
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-3 md:gap-6 flex-1">
          <p className="text-lg text-white font-semibold">Support</p>
          <ul className="text-sm leading-[26px] flex flex-col gap-3 md:gap-6">
            <li>
              <Link href="/faq">
                <span className="hover:text-gray-400">FAQ’s</span>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <span className="hover:text-gray-400">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy">
                <span className="hover:text-gray-400">Shipping Policy</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-3 md:gap-6 flex-1">
          <p className="text-lg text-white font-semibold">About</p>
          <ul className="text-sm leading-[26px] flex flex-col gap-3 md:gap-6">
            <li>
              <Link href="/mission-values">
                <span className="hover:text-gray-400">Mission & Values</span>
              </Link>
            </li>
            <li>
              <Link href="/high-active-ingredients">
                <span className="hover:text-gray-400">
                  High-Active Ingredients
                </span>
              </Link>
            </li>
            <li>
              <Link href="/usage-application">
                <span className="hover:text-gray-400">Usage & Application</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="flex flex-col gap-3 md:gap-6 flex-1">
          <p className="text-lg text-white font-semibold">Legal</p>
          <ul className="text-sm leading-[26px] flex flex-col gap-3 md:gap-6">
            <li>
              <Link href="/privacy-policy">
                <span className="hover:text-gray-400">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions">
                <span className="hover:text-gray-400">Terms & Conditions</span>
              </Link>
            </li>
            <li>
              <Link href="/return-refund-policy">
                <span className="hover:text-gray-400">
                  Return & Refund Policy
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Second Row */}
      <div className=" pt-4 md:pt-8 flex justify-between items-end gap-6 flex-wrap border-t border-solid border-gray-600 mt-6 md:mt-[60px]">
        <p className="text-xs">&copy; 2000-2021, All Rights Reserved</p>
        <div className="flex items-center gap-3 flex-wrap">
          <Image src={AmericanExpressIcon} alt="icon" width={50} height={34} />
          <Image src={VisaIcon} alt="icon" width={50} height={34} />
          <Image src={SkrillIcon} alt="icon" width={50} height={34} />
          <Image src={MastercardIcon} alt="icon" width={50} height={34} />
          <Image src={VisaElectronIcon} alt="icon" width={50} height={34} />
          <Image src={PaypalIcon} alt="icon" width={50} height={34} />
          <Image src={MasteroIcon} alt="icon" width={50} height={34} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
