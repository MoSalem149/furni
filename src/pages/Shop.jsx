import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Shop({ onAdd }) {
  return (
    <>
      <Hero
        title={<>Shop</>}
        description=""
        showButtons={false}
        showImage={false}
        showDot={false}
      />
      <FeaturedProducts leftText={false} onAdd={onAdd} />
    </>
  );
}
