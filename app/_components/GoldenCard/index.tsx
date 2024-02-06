import Image from "next/image";
import { GoldenBorderWrapper } from "..";

const GoldenCard = ({
  icon,
  title,
  text,
}: Readonly<{ icon: any; title: string; text: string }>) => {
  return (
    <GoldenBorderWrapper>
      <div className="px-4 py-6">
        <div className="flex items-center mb-3">
          <div className="mr-4 w-8 h-8 bg-[url('/assets/icons/ellipse.svg')] flex items-center justify-center">
            <Image src={icon} alt={title} width={20} height={20} />
          </div>
          <h2 className="text-xl leading-[34px] font-medium golden-gradient-text">
            {title}
          </h2>
        </div>
        <p>{text}</p>
      </div>
    </GoldenBorderWrapper>
  );
};

export default GoldenCard;
