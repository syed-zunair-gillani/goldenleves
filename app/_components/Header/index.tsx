'use client'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from "next/image";
import { BottleImage } from "@/public/assets";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const h1Controls = useAnimation();
  const h2Controls = useAnimation();
  const imageControls = useAnimation();
  const pControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50 && !isScrolled) {
        setIsScrolled(true);
        h1Controls.start({ y: 0, visibility: 'visible', opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } });
      }
      if (window.scrollY >= 100) {
        h2Controls.start({ y: 0, visibility: 'visible', opacity: 1, transition: { duration: 0.3, ease: "easeInOut", delay: 0.05 } });
      }
      if (window.scrollY >= 160) {
        imageControls.start({ y: 0, visibility: 'visible', opacity: 1, transition: { duration: 0.3, ease: "easeInOut", delay: 0.08 } });
      }
      if (window.scrollY >= 240) {
        pControls.start({ y: 0, visibility: 'visible', opacity: 1, transition: { duration: 0.3, ease: "easeInOut", delay: 0.12 } });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <div className={`flex flex-col z-1 px-6 items-center bg-center md:bg-contain text-center gap-6 md:gap-16 pt-[120px] pb-10 md:pb-2 mt-6 md:mt-12 md:pt-[210px] bg-no-repeat relative h-screen md:h-auto`}>
      <div className="absolute bg-[#080808ff] opacity-25 top-0 bottom-0 left-0 right-0 z-0" />
      <motion.h1
        initial={{ y: 420, visibility: 'hidden', opacity: 0 }}
        animate={h1Controls}
        className="uppercase text-4xl sm:text-5xl md:text-[72px] md:leading-[80px] font-normal z-10"
      >
        elevate your haircare <br />
      </motion.h1>
      <motion.h2
        initial={{ y: 420, visibility: 'hidden', opacity: 0 }}
        animate={h2Controls}
        className="uppercase text-4xl -mt-8 sm:text-5xl md:text-[72px] md:leading-[80px] font-normal z-10"
      >
        routine with <span className="golden-gradient-text">golden leaves</span>
      </motion.h2>
      <motion.p
        initial={{ y: 420, visibility: 'hidden', opacity: 0 }}
        animate={pControls}
        className="max-w-[580px] leading-6  md:leading-[36px] z-10"
      >
        Transform your haircare routine with golden leaves-a premium collection
        designed to elevate your looks, combining opulence and nature's excellence for radiant, healthy strands
      </motion.p>
      <motion.figure
        initial={{ y: 420, visibility: 'hidden', opacity: 0 }}
        animate={imageControls}
        className="flex-1 -mt-[430px] md:-mt-[650px]"
      >
          <Image src={BottleImage} alt="product" width={456} height={420} />
      </motion.figure>
    </div>
  );
};

export default Header;