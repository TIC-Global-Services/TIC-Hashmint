import Hero from "@/components/Hero/HeroSection";
import About from "@/components/about/about";
import Testimonials from "@/components/Testimonials/Testimonials"
import Services from "@/components/services/service";
import FAQAccordion from "@/components/faq/faq"
import PaperFreeHero from "@/components/PaperFee/PaperFreeSection";
import Form from "@/components/ContactForm/Form";
import Events from "@/components/Events/Events";
export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQAccordion />
      <Events/>
      <PaperFreeHero />
      <Form />
    </div>
  );
}
