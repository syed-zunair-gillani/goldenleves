const GoldenLeavesCard = () => {
  return (
    <div className="section-margin rounded-3xl text-center p-4 md:px-[80px] xl:px-[165px] md:py-[60px] xl:py-[135px] bg-[url('/assets/images//golden-leaves-card-bg.png')] bg-no-repeat bg-cover relative">
      <div className="absolute bg-[#080808ff] opacity-[35%] top-0 bottom-0 left-0 right-0 !z-0" />
      <div className="relative z-20">
        <h3 className="section-heading-44">
          Elevate Your Glow with{" "}
          <span className="golden-gradient-text">Golden Leaves</span>
        </h3>
        <p className="text-lg">
          Indulge in Radiant Skincare, Crafted for Your Natural Beauty. Discover
          Our Luxurious Collection and Illuminate Your Skin Journey
        </p>
      </div>
    </div>
  );
};

export default GoldenLeavesCard;
