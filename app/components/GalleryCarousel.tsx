"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Utensils,
  Users,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  { src: "/images/1.jpg", alt: "Fine Dining Experience" },
  { src: "/images/2.jpg", alt: "Signature Dish" },
  { src: "/images/3.jpg", alt: "Luxury Catering Setup" },
  { src: "/images/4.jpg", alt: "Event Celebration" },
  { src: "/images/5.jpg", alt: "Exquisite Dessert" },
  { src: "/images/6.jpg", alt: "Corporate Event Dinner" },
  { src: "/images/7.jpg", alt: "Live Culinary Showcase" },
  { src: "/images/8.jpg", alt: "Award Winning Cuisine" },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchEnd - touchStart > 50) prevSlide();
  };

  const goToSlide = useCallback((index: number) => setCurrentIndex(index), []);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const handleInteraction = () => {
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 8000);
  };

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full py-16 px-4 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-t from-[#fdf7c3]/15"
      aria-label="Restaurant & Catering Gallery"
      onClick={handleInteraction}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Carousel */}
          <div
            ref={carouselRef}
            className="relative w-full overflow-hidden touch-pan-y select-none rounded-2xl shadow-xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex h-[80vw] lg:h-[480px] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="relative min-w-full flex-shrink-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col gap-6 lg:gap-8 px-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#133427] leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Top Restaurant & Event Management Excellence
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600/95 leading-relaxed lg:text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Proud winners of the{" "}
              <span className="font-semibold text-[#133427]">
                Business Award 2025
              </span>
              , we specialize in fine dining, catering, and world-class event
              experiences. Every plate tells a story of flavor, and every event
              is crafted with elegance and precision.
            </motion.p>

            <motion.ul
              className="space-y-3 lg:space-y-4 text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
            >
              {[
                { Icon: Award, text: "Recognized with Business Award 2025" },
                { Icon: Utensils, text: "Fine Dining & Gourmet Catering" },
                { Icon: CalendarCheck, text: "Corporate & Social Events" },
                { Icon: Users, text: "Dedicated Professional Team" },
                { Icon: Sparkles, text: "Luxury Experience, Every Time" },
              ].map(({ Icon, text }, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 lg:gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#133427]" />
                  <span className="lg:text-lg">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                href="/booking"
                className="inline-flex justify-center gap-2 items-center self-start lg:self-auto bg-[#133427] text-[#fdf7c3] px-6 py-3 lg:px-8 lg:py-4 rounded-lg shadow-lg hover:bg-[#145c3f] transition-all hover:shadow-xl"
              >
                <span className="font-medium tracking-wide">
                  Reserve Your Experience
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
