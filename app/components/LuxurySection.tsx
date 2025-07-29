"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import {
  Calendar,
  Leaf,
  Phone,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// --- Interfaces for type safety ---
interface Slide {
  image: string;
  alt: string;
}

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Data Arrays ---
const slides: Slide[] = [
  {
    image: "/images/hero1.jpg",
    alt: "Elegantly furnished luxury room with premium amenities",
  },
  {
    image: "/images/hero2.jpg",
    alt: "Infinity pool with a stunning view of the Vagamon mountains",
  },
  {
    image: "/images/hero3.jpg",
    alt: "Exquisite fine dining setup at the resort",
  },
];

// Features for event & catering service
const features: Feature[] = [
  {
    icon: Calendar,
    title: "Personalized Event Planning",
    description: "Tailored solutions for every celebration—weddings, birthdays, and corporate events.",
  },
  {
    icon: UtensilsCrossed,
    title: "Premium Catering",
    description: "Gourmet menus and exquisite presentations to delight every guest.",
  },
  {
    icon: Leaf,
    title: "Elegant Venues",
    description: "Host your event in stylish indoor halls or lush outdoor settings.",
  },
  {
    icon: Phone,
    title: "Full-Service Support",
    description: "Our dedicated team ensures seamless execution from start to finish.",
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
    className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl shadow-lg overflow-hidden bg-white"
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
      </motion.div>
    </AnimatePresence>

    {/* Slide Indicators */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
      <div className="flex gap-2 p-1.5 bg-white/70 backdrop-blur-sm rounded-full shadow">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
              index === currentSlide
                ? "w-6 bg-yellow-500"
                : "w-2 bg-gray-300 hover:bg-yellow-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
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
    <section className="bg-gradient-to-b from-white via-yellow-50 to-white text-gray-800 font-sans">
      <motion.div
        className="container mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* --- LEFT COLUMN: CONTENT --- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div variants={itemVariants}>
            <span className="font-semibold tracking-widest text-yellow-600 uppercase">
              PARK EVENTS & CATERING
            </span>
            <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold text-gray-800 leading-tight drop-shadow-md">
              Celebrate Life’s Special Moments
            </h1>
          </motion.div>

          <motion.p
            className="mt-5 max-w-xl text-base md:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            Unforgettable events start here. From grand celebrations to intimate gatherings, our expert planners and chefs craft experiences tailored to you—so you can enjoy every moment while we take care of the rest.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            variants={itemVariants}
          >
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-yellow-500 text-white font-bold tracking-wide rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400">
              <Calendar className="w-5 h-5" />
              <span>BOOK AN EVENT</span>
            </button>
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-yellow-700 font-semibold tracking-wide border-2 border-yellow-400 rounded-full bg-white hover:bg-yellow-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-200">
              <Phone className="w-5 h-5" />
              <span>CALL FOR CATERING</span>
            </button>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="mt-12 w-full space-y-6"
            variants={itemVariants}
          >
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full shadow">
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
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