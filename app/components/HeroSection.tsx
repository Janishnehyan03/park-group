"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      id="home"
      className="relative min-h-screen bg-black overflow-hidden pt-16" 
      // 👆 pt-16 = push content down equal to navbar height (h-16 = 64px)
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full brightness-[0.9]"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 z-10" />
      </div>

      {/* Hero Content */}
      <section className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
        {/* Logo with subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Royal Key Logo"
            width={180}
            height={80}
            className="mx-auto drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-2xl"
        >
          Crafting Events <br className="hidden sm:block" /> with Elegance & Flavor
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-gray-200"
        >
          With a touch of elegance and a dash of flavor, we create unforgettable experiences.
        </motion.p>
      </section>
    </main>
  );
}
