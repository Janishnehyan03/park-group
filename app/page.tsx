import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LuxurySection from "./components/LuxurySection";
import OurMenuSection from "./components/OurMenuSection";
import OurServicesSection from "./components/OurServicesSection";
import ProudMomentsSection from "./components/ProudMomentSection";
import TestimonialsSection from "./components/TestimonialSection";
import VisionMissionExperience from "./components/VisionMision";

function page() {
  return (
    <div>
      <HeroSection />
      <LuxurySection />
      <OurServicesSection />
      <VisionMissionExperience />
      <OurMenuSection/>
      <TestimonialsSection />
      <ProudMomentsSection />
      <Footer/>
    </div>
  );
}

export default page;
