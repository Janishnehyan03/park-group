import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LuxurySection from "./components/LuxurySection";
import VisionSection from "./components/Vision";
import OurServicesSection from "./components/OurServicesSection";
import GalleryCarousel from "./components/GalleryCarousel";
import TestimonialsSection from "./components/TestimonialSection";
import TheManBehindSection from "./components/TheManBehind";
import VisionMissionExperience from "./components/VisionMision";
import Navbar from "./components/Navbar";

function page() {
  return (
    <div className="bg-gradient-to-b from-[#fdf7c3] via-[#fbe7a2] to-[#edd58b]">
      <Navbar />
      <HeroSection />
      <LuxurySection />
      <OurServicesSection />
      <VisionMissionExperience />
      <VisionSection />
      <GalleryCarousel />
      <TestimonialsSection />
      <TheManBehindSection />
      <Footer />
    </div>
  );
}

export default page;
