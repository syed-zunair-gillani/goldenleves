import { ReactNode } from "react";
const BrandIdentity = ({ title }: { title: string | ReactNode }) => {
  return (
    <div className="section-padding relative rounded-3xl overflow-hidden">
      <div
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 0, 80% 100%, 0% 100%)",
        }}
        className="absolute flex items-center -top-1 md:top-12 h-[60px] md:h-[100px] bg-[#080808ff] w-[90%] sm:w-[80%] lg:w-[70%]"
      >
        {title}
      </div>
      <div className="w-full h-[646px] bg-[red] rounded-3xl overflow-hidden"></div>
    </div>
  );
};

export default BrandIdentity;
