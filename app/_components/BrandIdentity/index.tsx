import { ReactNode } from "react";

const BrandIdentity = ({ title }: { title: string | ReactNode }) => {
  return (
    <div className="section-padding relative rounded-2xl overflow-hidden container mx-auto px-3 md:px-0">
      <div
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 0, 80% 100%, 0% 100%)",
        }}
        className="absolute flex items-center -top-1 md:top-12 h-[60px] md:h-[100px] bg-[#080808ff] w-[90%] sm:w-[80%] lg:w-[70%]"
      >
        {title}
      </div>
      <div className="w-full h-[300] md:h-[646px] rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube Video"
          allowFullScreen
          style={{ borderRadius: "12px", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default BrandIdentity;
