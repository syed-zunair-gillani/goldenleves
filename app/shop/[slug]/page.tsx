import { notFound } from "next/navigation";
import {
  ProductDetailTabs,
  RelatedProducts,
  ViewProduct,
} from "../../_components";
import api from "@/config/api";

async function getData(slug: any) {
  const dataForProducts = {
    slug,
  };

  const { data } = await api.get("products", dataForProducts);
  const productsRes = await api.get("products");

  if (!data) {
    return notFound();
  }
  return {
    products: data[0],
    productslist : productsRes
  };
}

const SingleProduct = async (props: any) => {
  const { products, productslist } = await getData(props?.params?.slug);

  return (
    <div>
      {/* <pre className="text-gray-400">{JSON.stringify(productslist, null, 2)}</pre> */}
      <ViewProduct data={products} />
      <ProductDetailTabs data={products} />
      <RelatedProducts data={productslist?.data?.slice(0,4)}/>
    </div>
  );
};

export default SingleProduct;
