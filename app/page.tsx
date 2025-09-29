import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import GalleryCarousel from "./components/GalleryCarousel";
import HeroSection from "./components/HeroSection";
import InstagramReels from "./components/InstagramReels";
import LuxurySection from "./components/LuxurySection";
import Navbar from "./components/Navbar";
import OurServicesSection from "./components/OurServicesSection";
import TestimonialsSection from "./components/TestimonialSection";
import TheManBehindSection from "./components/TheManBehind";
import VisionSection from "./components/Vision";
import VisionMissionExperience from "./components/VisionMision";

function page() {
  return (
    <div className="bg-gradient-to-b from-[#fdf7c3] via-[#fbe7a2] to-[#edd58b] relative min-h-screen">
      <Navbar />
      <HeroSection />
      <LuxurySection />
      <GalleryCarousel />
      <InstagramReels/>
      <OurServicesSection />
      <VisionMissionExperience />
      <VisionSection />
      <TestimonialsSection />
      <TheManBehindSection />
      <Achievements />
      <Footer />
    </div>
  );
}

export default page;
