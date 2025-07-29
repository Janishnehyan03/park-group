"use client";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Eye,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Example gallery image data
const galleryImages = [
  {
    src: "/images/event1.jpg",
    alt: "Wedding reception",
    category: "Wedding",
    views: "2.1k",
  },
  {
    src: "/images/event2.jpg",
    alt: "Corporate banquet",
    category: "Corporate",
    views: "1.8k",
  },
  {
    src: "/images/event3.jpg",
    alt: "Outdoor party",
    category: "Celebration",
    views: "3.2k",
  },
  {
    src: "/images/event4.jpg",
    alt: "Buffet spread",
    category: "Catering",
    views: "1.5k",
  },
  {
    src: "/images/event5.jpg",
    alt: "Birthday celebration",
    category: "Birthday",
    views: "2.7k",
  },
  {
    src: "/images/event6.jpg",
    alt: "Cocktail hour",
    category: "Reception",
    views: "1.9k",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Masonry grid columns responsive
  const gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gold-light/5 py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-gold to-gold-dark rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-gold-light to-gold rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-gold-dark to-gold rounded-full blur-3xl" />
      </div>

      {/* Floating sparkles with improved animation */}
      <motion.div
        className="absolute top-20 right-1/4 z-0 opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-24 h-24 text-gold" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 z-0 opacity-8"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Camera className="w-20 h-20 text-gold-light" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gold uppercase tracking-[0.3em] text-sm font-body">
              Gallery
            </span>
            <div className="flex gap-1">
              <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              <Sparkles className="w-4 h-4 text-gold-light animate-pulse delay-100" />
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-6 text-gray-900 tracking-tight">
            Unforgettable{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent font-medium">
              Moments
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />

          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-body leading-relaxed">
            Experience the artistry of our events and catering through a curated
            collection of vibrant memories that showcase our dedication to
            excellence.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 font-display">
                500+
              </div>
              <div className="text-sm text-gray-600 font-body">
                Events Captured
              </div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 font-display">
                50k+
              </div>
              <div className="text-sm text-gray-600 font-body">
                Happy Moments
              </div>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 font-display">
                100%
              </div>
              <div className="text-sm text-gray-600 font-body">
                Memories Made
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Gallery Grid */}
        <motion.div
          className={`grid ${gridCols} gap-6 lg:gap-2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {galleryImages.map((img, idx: any) => (
            <motion.div
              key={img.src}
              className="group relative rounded overflow-hidden  hover:shadow-2xl bg-white border border-gray-200 transition-all duration-500"
              variants={imageVariants}
              onHoverStart={() => setHoveredImage(idx)}
              onHoverEnd={() => setHoveredImage(null)}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              {/* Enhanced Image with overlay */}
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="object-cover w-full h-72 md:h-80 xl:h-72 transition-all duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Enhanced Caption with category and stats */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-gold-light/20 to-gold/10 text-gold-dark text-xs font-semibold rounded-full border border-gold-light/30">
                    {img.category}
                  </span>
             
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 group-hover:text-gold-dark transition-colors duration-300">
                  {img.alt}
                </h3>
                <p className="text-gray-600 text-sm mt-1 font-body">
                  A beautiful moment captured in time
                </p>
              </div>

              {/* Hover effect sparkles */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                animate={{ rotate: hoveredImage === idx ? [0, 15, -15, 0] : 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-gold" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Mobile Carousel */}
        <div className="sm:hidden mt-12">
          <div className="flex items-center justify-center gap-4">
            <motion.button
              className="p-3 bg-white border-2 border-gray-200 rounded-full text-gray-600 hover:bg-gold-light/20 hover:border-gold-light hover:text-gold-dark transition-all duration-300 shadow-lg"
              onClick={() =>
                setCurrent((c) => (c === 0 ? galleryImages.length - 1 : c - 1))
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="relative w-80 h-56 rounded-3xl shadow-2xl overflow-hidden border-3 border-gold-light/40 bg-white">
              <AnimatePresence initial={false}>
                <motion.div
                  key={galleryImages[current].src}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={galleryImages[current].src}
                    alt={galleryImages[current].alt}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute left-0 bottom-0 p-4 w-full bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-display text-white font-semibold text-base drop-shadow-lg">
                          {galleryImages[current].alt}
                        </span>
                        <p className="text-gold-light text-sm">
                          {galleryImages[current].category}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-white/80 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{galleryImages[current].views}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className="p-3 bg-white border-2 border-gray-200 rounded-full text-gray-600 hover:bg-gold-light/20 hover:border-gold-light hover:text-gold-dark transition-all duration-300 shadow-lg"
              onClick={() => setCurrent((c) => (c + 1) % galleryImages.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-gradient-to-r from-gold to-gold-dark scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
