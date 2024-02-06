const BrandIdentity = () => {
  return (
    <div className="section-padding relative rounded-3xl overflow-hidden">
      <div
        style={{
          clipPath: "polygon(0% 0%, 100% 0, 100% 0, 80% 100%, 0% 100%)",
        }}
        className="absolute flex items-center -top-1 md:top-12 h-[60px] md:h-[100px] bg-[#080808ff] w-[90%] sm:w-[70%] lg:w-[60%]"
      >
        <h2 className="section-heading-60 ">
          Our <span className="golden-gradient-text font-[Glamore]">Brand</span>{" "}
          Identity
        </h2>
      </div>
      <div className="w-full h-[646px] bg-[red] rounded-3xl overflow-hidden"></div>
    </div>
  );
};

export default BrandIdentity;
