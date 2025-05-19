import Hero from "@/components/Hero/HeroSection";
import About from "@/components/about/about";
import Stats from "@/components/services/stats";
import Testimonials from "@/components/Testimonials/Testimonials"
import Services from "@/components/services/service";
import FAQAccordion from "@/components/faq/faq"
import PaperFreeHero from "@/components/PaperFee/PaperFreeSection";
import Form from "@/components/ContactForm/Form";
export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Testimonials />
      <FAQAccordion />
      <PaperFreeHero />
      <Form />
    </div>
  );
}
