import { BottleImage } from "@/public/assets";
import { ProductCard } from "..";

const OurProducts = () => {
  return (
    <div className="flex items-center flex-col section-padding">
      <h2 className="section-heading-60 uppercase pb-4">Our product</h2>
      <ProductCard
        title="Silk Elegence condtioner"
        image={BottleImage}
        price={120.25}
      />
    </div>
  );
};

export default OurProducts;
