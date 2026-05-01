import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";

export default function Services() {
  return (
    <>
      <Hero
        title={<>Services</>}
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <WhyChooseUs rightSide={false} headerText={false} />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
