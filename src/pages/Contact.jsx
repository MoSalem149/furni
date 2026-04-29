import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Hero
        title={<>Contact</>}
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
      />
      <ContactForm />
    </>
  );
}
