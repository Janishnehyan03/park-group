import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import LuxurySection from "./components/LuxurySection";
import OurMenuSection from "./components/OurMenuSection";
import OurServicesSection from "./components/OurServicesSection";
import ProudMomentsSection from "./components/ProudMomentSection";
import TestimonialsSection from "./components/TestimonialSection";

function page() {
  return (
    <div>
      <HeroSection />
      <LuxurySection />
      <OurServicesSection />
      <GallerySection />
      <OurMenuSection/>
      <TestimonialsSection />
      <ProudMomentsSection />
      <Footer/>
    </div>
  );
}

export default page;
