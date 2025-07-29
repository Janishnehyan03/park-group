"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeOut,
  AnimatePresence,
} from "framer-motion";
import {
  Phone,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar";

// Carousel slides data
const heroSlides = [
  {
    image: "/images/hero1.jpg",
    alt: "Elegant banquet event",
    headline: (
      <>
        Events Crafted<br />
        <span className="bg-gradient-to-r text-white bg-clip-text relative">
          For Every Occasion
          <motion.div
            className="absolute -right-4 -top-2"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Sparkles className="w-6 h-6 text-gold opacity-80" />
          </motion.div>
        </span>
      </>
    ),
    tagline: "Celebrate, Gather, Indulge",
  },
  {
    image: "/images/hero2.jpg",
    alt: "Outdoor event setup",
    headline: (
      <>
        Celebrate<br />
        <span className="bg-gradient-to-r text-white bg-clip-text relative">
          Under The Open Sky
        </span>
      </>
    ),
    tagline: "Nature, Elegance, Joy",
  },
  {
    image: "/images/hero3.jpg",
    alt: "Luxury dining table",
    headline: (
      <>
        Gourmet Moments<br />
        <span className="bg-gradient-to-r text-white bg-clip-text relative">
          Taste The Luxury
        </span>
      </>
    ),
    tagline: "Savor Every Detail",
  },
];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  const { scrollY } = useScroll();

  // Smooth parallax with spring physics
  const parallaxY = useSpring(useTransform(scrollY, [0, 1000], [0, 400]), {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    setIsLoaded(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance carousel every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <main className="relative h-screen bg-background overflow-hidden">
      {/* Carousel Images with Parallax */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          style={{ y: isMobile ? 0 : parallaxY }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={heroSlides[current].image}
            alt={heroSlides[current].alt}
            fill
            priority
            className="object-cover scale-110"
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]" />
        </motion.div>
      </AnimatePresence>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <section className="relative z-10 h-full flex items-center justify-center text-center pt-20">
        <motion.div
          className="max-w-4xl mx-auto px-6 lg:px-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          key={current}
        >
          <div className="flex flex-col items-center space-y-8">
            {/* Tagline */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p
                className="font-body font-medium tracking-[0.2em] uppercase text-neutral-300 drop-shadow-sm flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-4 h-4 text-gold" />
                {heroSlides[current].tagline}
                <Sparkles className="w-4 h-4 text-gold" />
              </motion.p>
              <motion.div
                className="mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-display text-5xl md:text-7xl font-light text-white drop-shadow-lg"
              variants={itemVariants}
            >
              {heroSlides[current].headline}
            </motion.h1>

            {/* CTA Button */}
            <motion.div className="pt-4" variants={itemVariants}>
              <motion.button
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 group font-body text-base flex items-center gap-3"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-5 h-5" />
                CALL NOW
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Carousel Controls */}
            <motion.div className="flex items-center gap-2 mt-4" variants={itemVariants}>
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 w-6 rounded-full transition-all duration-300 ease-in-out ${
                    idx === current
                      ? "bg-gold"
                      : "bg-white/50 hover:bg-gold-light"
                  }`}
                  style={{ outline: "none" }}
                />
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/60 cursor-pointer hover:text-white transition-colors"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Floating Sparkles */}
      <motion.div
        className="absolute top-1/4 left-10 opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-8 h-8 text-gold" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-16 opacity-20"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-6 h-6 text-white" />
      </motion.div>
    </main>
  );
}