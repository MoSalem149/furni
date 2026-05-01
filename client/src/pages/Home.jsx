import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import ImageGrid from "../components/ImageGrid";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";

export default function Home({ posts, onAdd }) {
  return (
    <>
      <Hero
        title={
          <>
            Modern Interior <br /> Design Studio
          </>
        }
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <FeaturedProducts onAdd={onAdd} />
      <WhyChooseUs />
      <ImageGrid />
      <Testimonials />
      <BlogPreview posts={posts} />
    </>
  );
}
