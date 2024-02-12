import { AvatarGroup } from "..";
import { StaticImageData } from "next/image";

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
    <div className="flex items-center gap-2">
      <AvatarGroup width={width} height={height} list={list} />
      {label && <p className="text-xl font-semibold">{label}</p>}
      {caption && <p className="text-xs">{caption}</p>}
    </div>
  );
};

export default LabeledAvatarGroup;
