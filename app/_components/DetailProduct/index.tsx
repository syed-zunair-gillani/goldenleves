import {
  BottlesImage,
  SolarLeaveIcon,
  SolarMedalIcon,
  SolarUserIcon,
} from "@/public/assets";
import { GoldenCard } from "..";
import Image from "next/image";

const DetailProduct = () => {
  return (
    <div className="flex items-center flex-col section-padding container mx-auto px-3 md:px-0">
      <h2 className="section-heading-60">
        Essence of{" "}
        <span className="golden-gradient-text"> Opulence, Infused</span> in
        Every Drop
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-4 xl:gap-[35px] pt-9 pb-9">
        <div className="lg:-mt-[60px] xl:-mt-[120px]">
          <GoldenCard
            icon={SolarMedalIcon}
            title="Unparalleled Quality"
            text="Our products are crafted with the finest ingredients to ensure optimal results."
          />
        </div>
        <Image src={BottlesImage} alt="bottles" width={410} height={378} />
        <div className="lg:-mb-[60px] xl:-mb-[120px]">
          <GoldenCard
            icon={SolarLeaveIcon}
            title="Cruelty-Free"
            text="We are committed to cruelty-free beauty, promoting a compassionate approach to self-care."
          />
        </div>
      </div>
      <GoldenCard
        icon={SolarUserIcon}
        title="Expertly Curated"
        text="Our beauty experts meticulously select products to suit every skin type and style preference."
      />
    </div>
  );
};

export default DetailProduct;
