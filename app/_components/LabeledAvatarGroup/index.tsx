'use client'
import { AvatarGroup } from "..";
import { StaticImageData } from "next/image";
import { motion } from 'framer-motion';

interface ILabeledAvatarGroup {
  width: number;
  height?: number;
  label: string;
  caption?: string;
  list: {
    src: string | StaticImageData;
    alt?: string;
  }[];
}

const LabeledAvatarGroup = (props: ILabeledAvatarGroup) => {
  const { width, height, label, list, caption } = props;
  return (
    <div 
    className="relative flex items-center gap-2"
    >
      <AvatarGroup width={width} height={height} list={list} />
      {label && <p className="text-xl font-semibold">{label}</p>}
      {caption && <p className="text-xs">{caption}</p>}
      <motion.span
            initial={{ height: `100%` }}
            whileInView={{ height: '0px' }}
            transition={{ duration: 2, delay: 0.6 }}
            className={`absolute bg-[#111111] inset-0`}></motion.span>
    </div>
  );
};

export default LabeledAvatarGroup;
