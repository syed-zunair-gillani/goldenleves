import api from "@/config/api";
import {
  Header,
  FeatureProduct,
  BrandIdentity,
  DisplayProduct,
  OurProducts,
  DetailProduct,
} from "./_components";
import data from "./_components/OurProducts/data";

async function getData() {
  const dataForProducts = {
    per_page: 30,
  };

  const { data } = await api.get("products", dataForProducts);
  return {
    products: data,
  };
}


export default async function Home() {
  const { products } = await getData();
  console.log("🚀 ~ Home ~ products:", products)
  
  return (
    <main>
      <Header />
      <FeatureProduct data={products}/>
      <OurProducts data={products} activeSlide={2}/>
      <DetailProduct />
      <BrandIdentity
        title={
          <h2 className="section-heading-60 ">
            Our <span className="golden-gradient-text font-[Glamore]">Brand</span> Identity
          </h2>
        }
      />
      <DisplayProduct />
    </main>
  );
}
