"use client";
import { easeOut, motion } from "framer-motion";
import { Sparkles, Trophy } from "lucide-react";
import Image from "next/image";

// Example proud moments data
const proudMoments = [
  {
    src: "/images/event1.jpg",
    alt: "Award Ceremony",
    title: "Best Event Venue Award 2024",
  },
  {
    src: "/images/event2.jpg",
    alt: "Celebrity Visit",
    title: "Celebrity Guest Experience",
  },
  {
    src: "/images/event3.jpg",
    alt: "Community Charity Event",
    title: "Community Charity Gala",
  },
  {
    src: "/images/event4.jpg",
    alt: "Featured in Magazine",
    title: "Featured in Elite Magazine",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export default function ProudMomentsSection() {
  return (
    <section className=" text-gray-800 py-16 lg:py-24 px-4 relative overflow-hidden font-body">
      {/* Decorative floating sparkles */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-10"
        animate={{
          y: [0, 24, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-32 h-32 text-yellow-300" />
      </motion.div>
      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="w-7 h-7 text-yellow-500 animate-bounce" />
            <span className="font-semibold text-yellow-600 uppercase tracking-[0.25em] font-body text-lg">
              Proud Moments
            </span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-3 text-gray-800  tracking-tight">
            Achievements
            <span className="text-yellow-600"> & Recognition</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-body">
            We cherish the milestones and recognition that inspire us to elevate
            every event. Here are some moments we’re proud of.
          </p>
        </motion.div>
        {/* Proud Moments Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18, delayChildren: 0.2 },
            },
          }}
        >
          {proudMoments.map((item) => (
            <motion.div
              key={item.src}
              className="relative group overflow-hidden shadow-xl bg-gradient-to-br from-yellow-100 via-white to-yellow-50 border border-yellow-200"
              variants={fadeUp}
              whileHover="hovered"
              initial="initial"
              animate="initial"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-2"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-16px);
          }
        }
      `}</style>
    </section>
  );
}
