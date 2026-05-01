import Hero from "../components/Hero";
import BlogPreview from "../components/BlogPreview";
import Testimonials from "../components/Testimonials";

export default function Blog() {
  return (
    <>
      <Hero
        title={<>Blog</>}
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <BlogPreview />
      <Testimonials />
    </>
  );
}
