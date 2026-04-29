import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <>
      <Hero
        title={<>About Us</>}
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <WhyChooseUs />
      <OurTeam />
      <Testimonials />
    </>
  );
}
