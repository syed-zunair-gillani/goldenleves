'use client'
import Image from "next/image";
import { motion } from 'framer-motion';
import RevelText from "../animations/revelText";

const Card = ({
  icon,
  title,
  text,
}: Readonly<{ icon: any; title: string; text: string }>) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.1 }}
      className="px-4 py-6 bg-[#111] rounded-lg">
      <div className="flex items-center mb-3 relative">
        <div className="mr-4 w-11 h-11 bg-[url('/assets/icons/ellipse.svg')] flex items-center justify-center bg-no-repeat bg-contain">
          <Image src={icon} alt={title} width={32} height={32} />
        </div>
        <h2 className="text-xl leading-[34px] font-medium">{title}</h2>
        <RevelText color="#111"/>
      </div>
      <motion.p className="relative" >
        {text}
        <RevelText color="#111" position='-' duration="1.2" delay='1.1'/>
      </motion.p>
    </motion.div>
  );
};

export default Card;
