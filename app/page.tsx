import Hero from "@/components/Hero/HeroSection";
import About from "@/components/about/about";
import Stats from "@/components/services/stats";
import Testimonials from "@/components/Testimonials/Testimonials"
import Services from "@/components/services/service";
import FAQAccordion from "@/components/faq/faq"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Stats />
        <Testimonials />
        <FAQAccordion />
      </main>
    </div>
  );
}
