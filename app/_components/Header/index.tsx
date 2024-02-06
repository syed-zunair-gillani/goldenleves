const Header = () => {
  return (
    <div
      className={`flex flex-col px-6 items-center bg-center md:bg-contain text-center gap-6 md:gap-16 pt-[120px] pb-10 md:pb-2 mt-6 md:mt-12 md:pt-[280px] bg-[url('/assets/images/bottle.png')] bg-no-repeat relative`}
    >
      <div className="absolute bg-[#080808ff] opacity-25 top-0 bottom-0 left-0 right-0 z-0" />
      <h1 className="uppercase text-4xl sm:text-5xl md:text-[72px] md:leading-[80px] font-normal z-10">
        elevate your haircare <br />
        routine with <span className="golden-gradient-text">golden leaves</span>
      </h1>
      <p className="max-w-[580px] leading-6  md:leading-[36px] z-10">
        Transform your haircare routine with golden leaves-a premium collection
        designed to elevate your looks,combining opulence and nature's
        excellence for radiant, healthy strands
      </p>
    </div>
  );
};

export default Header;
