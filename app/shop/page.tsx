import api from "@/config/api";
import {
  BrandIdentity,
  GoldenLeavesCard,
  ShopHeader,
  ShopProduct,
  UserLove,
} from "../_components";
import { BottleImage, Product2Image } from "@/public/assets";
import { avatarList } from "../_components/ShopProduct/ShopProduct.data";

async function getData() {
  const dataForProducts = {
    per_page: 30,
  };

  const { data } = await api.get("products", dataForProducts);
  return {
    products: data,
  };
}

const Shop = async () => {
  // const { products } = await getData();

  return (
    <div className="text-gray-300">
      {/* {JSON.stringify(products, null, 2)} */}
      <ShopHeader />
      <UserLove />
      <ShopProduct
        direction="flex-row-reverse"
        title="Radiant Gold shampoo"
        text="Experience the luxury of Silk Elixir Conditioner, providing deep
          hydration, effortless detangling, and a captivating fragrance. Revel
          in irresistibly soft and smooth hair with every use."
        avatarData={{
          list: [...avatarList],
          label: "40000+",
          caption: "Reviews",
        }}
        productImage={BottleImage}
      />
      <div className="pt-[40px] xl:pt[100px]">
        <ShopProduct
          title="Silk elegance conditioner"
          text="Experience the luxury of Silk Elixir Conditioner, providing deep
          hydration, effortless detangling, and a captivating fragrance. Revel
          in irresistibly soft and smooth hair with every use."
          avatarData={{
            list: [...avatarList],
            label: "40000+",
            caption: "Reviews",
          }}
          productImage={Product2Image}
        />
      </div>
      <BrandIdentity
        title={
          <h2 className="section-heading-44 uppercase">
            Our Manufacturing{" "}
            <span className="golden-gradient-text font-[Glamore]">process</span>{" "}
          </h2>
        }
      />
      <GoldenLeavesCard />
    </div>
  );
};

export default Shop;
