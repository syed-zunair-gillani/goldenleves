import api from "@/config/api";
import { ShopHeader, ShopProduct, UserLove } from "../_components";

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
      <ShopProduct />
    </div>
  );
};

export default Shop;
