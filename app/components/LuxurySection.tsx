"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import { Calendar, Leaf, Phone, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- Interfaces for type safety ---
interface Slide {
  image: string;
  alt: string;
  title: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
}

// --- Data Arrays ---
const slides: Slide[] = [
  {
    image: "/images/hero1.jpg",
    alt: "Elegantly furnished luxury room with premium amenities",
    title: "Luxury Accommodation",
  },
  {
    image: "/images/hero2.jpg",
    alt: "Infinity pool with a stunning view of the Vagamon mountains",
    title: "Infinity Pool View",
  },
  {
    image: "/images/hero3.jpg",
    alt: "Exquisite fine dining setup at the resort",
    title: "Fine Dining Experience",
  },
];

const features: Feature[] = [
  {
    icon: Calendar,
    title: "Personalized Event Planning",
  },
  {
    icon: Phone,
    title: "Full-Service Support",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering",
  },
  {
    icon: Leaf,
    title: "Elegant Venues",
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

// --- Image Carousel Component ---
const ImageCarousel = ({
  currentSlide,
  setCurrentSlide,
}: {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}) => (
  <motion.div
    className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl shadow-lg overflow-hidden bg-foreground"
    variants={itemVariants}
  >
    <AnimatePresence initial={false}>
      <motion.div
        key={currentSlide}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Slide Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-800/80 to-transparent px-6 py-4">
          <h3 className="text-lg md:text-xl font-semibold font-display text-white text-left">
            {slides[currentSlide].title}
          </h3>
        </div>
      </motion.div>
    </AnimatePresence>
  </motion.div>
);

export default function LuxurySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="bg-foreground text-background font-body">
      <motion.div
        className="container mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="flex flex-col items-start text-left">
          <motion.div variants={itemVariants}>
            <span className="font-semibold tracking-widest text-gold uppercase">
              PARK EVENTS & CATERING
            </span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold  leading-tight">
              Celebrate Life’s Special Moments
            </h1>
          </motion.div>
          <motion.p
            className="mt-5 max-w-xl text-base md:text-lg text-neutral-600 leading-relaxed"
            variants={itemVariants}
          >
            Unforgettable events start here. From grand celebrations to intimate
            gatherings, our expert planners and chefs craft experiences tailored
            to you—so you can enjoy every moment while we take care of the rest.
          </motion.p>
          {/* Action Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            variants={itemVariants}
          >
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-gold text-white font-bold tracking-wide rounded-full shadow-lg hover:bg-gold-dark transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold-light">
              <Calendar className="w-5 h-5" />
              <span>BOOK AN EVENT</span>
            </button>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-gold font-semibold tracking-wide border-2 border-gold rounded-full bg-foreground hover:bg-gold-light/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-light">
              <Phone className="w-5 h-5" />
              <span>CALL FOR CATERING</span>
            </button>
          </motion.div>
          {/* Features List */}
          <motion.div
            className="mt-12 w-full space-y-6"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-5  rounded-xl p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gold text-white rounded-full shadow-lg">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className=" text-lg md:text-xl text-background font-display">
                      {feature.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE CAROUSEL --- */}
        <div className="w-full lg:order-last order-first">
          <ImageCarousel
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      </motion.div>
    </section>
  );
}
