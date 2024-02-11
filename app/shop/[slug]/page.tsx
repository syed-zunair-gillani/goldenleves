import { notFound } from "next/navigation";
import {
  ProductDetailTabs,
  RelatedProducts,
  ViewProduct,
} from "../../_components";
import api from "@/config/api";

async function getData(slug:any) {
  const dataForProducts = {
    slug,
  };

  const { data } = await api.get('products', dataForProducts);
  if (!data) {
		return notFound()
	}
  return {
    products: data[0]
  }
}

const SingleProduct = async (props:any) => {
  const { products } = await getData(props?.params?.slug)

  return (
    <div>
      <pre className="text-gray-400">{JSON.stringify(products, null, 2)}</pre>
      <ViewProduct data={products}/>
      <ProductDetailTabs data={products}/>
      <RelatedProducts />
    </div>
  );
};

export default SingleProduct;
