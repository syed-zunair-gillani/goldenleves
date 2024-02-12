import Image from "next/image";

const Card = ({
  icon,
  title,
  text,
}: Readonly<{ icon: any; title: string; text: string }>) => {
  return (
    <div className="px-4 py-6 bg-[#111] rounded-lg">
      <div className="flex items-center mb-3">
        <div className="mr-4 w-8 h-8 bg-[url('/assets/icons/ellipse.svg')] flex items-center justify-center">
          <Image src={icon} alt={title} width={20} height={20} />
        </div>
        <h2 className="text-xl leading-[34px] font-medium">{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Card;