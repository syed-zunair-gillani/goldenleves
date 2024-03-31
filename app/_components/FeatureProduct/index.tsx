import Slider from "../Slider";

const FeatureProduct = ({data}:any) => {
  return (
    <div className="flex container mx-auto px-3 md:px-0 items-center flex-col section-padding bg-[#080808ff] z-10 relative">
      <h2 className="section-heading-60 uppercase pb-4">Feature product</h2>
      <Slider slides={data} />
    </div>
  );
};

export default FeatureProduct;
