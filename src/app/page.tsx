import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import ExpertiseImpact from "@/components/ExpertiseImpact";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import LocationCard from "@/components/LocationCard";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <Experience />
      <ExpertiseImpact />
      <Gallery />
      <ContactForm />
      <LocationCard />
      <Footer />
      <BackToTop />
    </main>
  );
}

