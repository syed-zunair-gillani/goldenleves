import {
  Header,
  FeatureProduct,
  BrandIdentity,
  DisplayProduct,
  OurProducts,
  DetailProduct,
} from "./_components";
import data from "./_components/OurProducts/data";

export default function Home() {
  return (
    <main>
      <Header />
      <FeatureProduct />
      <OurProducts data={data} activeSlide={2}/>
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
