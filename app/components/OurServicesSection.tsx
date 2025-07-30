"use client";

import { easeInOut, easeOut, motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Camera,
  Home,
  Leaf,
  Sparkles,
  Users,
  UtensilsCrossed,
  Video,
  Wine,
} from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

// Type Definition
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: string;
  image: string;
  gradient: string;
}

// Brown color tailwind helpers (customize as needed)
// bg-brown-600: #7c4a03
// bg-brown-800: #5a3201
// text-brown-700: #7c4a03

const services: Service[] = [
  {
    icon: Calendar,
    title: "Wedding Events",
    description:
      "Comprehensive planning and flawless execution for your special day, ensuring every moment is memorable and stress-free.",
    highlight: "Personalized weddings",
    image: "/images/event1.jpg",
    gradient: "from-rose-400 to-pink-600",
  },
  {
    icon: Sparkles,
    title: "Inaugural Functions",
    description:
      "Professional management of opening ceremonies and inaugural events, tailored to your brand and audience.",
    highlight: "Grand openings",
    image: "/images/event2.jpg",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    icon: Users,
    title: "Birthday Party",
    description:
      "Fun-filled, creative birthday celebrations for all ages, with custom themes, entertainment, and activities.",
    highlight: "Unique celebrations",
    image: "/images/event3.jpg",
    gradient: "from-purple-400 to-violet-600",
  },
  {
    icon: Home,
    title: "Stage Decorations",
    description:
      "Elegant and creative stage setups to match your event's theme, making every occasion visually stunning.",
    highlight: "Custom decor",
    image: "/images/event4.jpg",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Services",
    description:
      "Delicious, diverse menus crafted by expert chefs, catering to all tastes and dietary preferences.",
    highlight: "Gourmet cuisine",
    image: "/images/event5.jpg",
    gradient: "from-orange-400 to-red-600",
  },
  {
    icon: Leaf,
    title: "Floral Arrangements",
    description:
      "Fresh, artistic floral designs to enhance the beauty and ambiance of your event.",
    highlight: "Fresh florals",
    image: "/images/event6.jpg",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    icon: Wine,
    title: "Hall Arrangements",
    description:
      "Versatile and well-equipped halls arranged to suit your event's requirements and guest comfort.",
    highlight: "Flexible spaces",
    image: "/images/event2.jpg",
    gradient: "from-amber-400 to-orange-600",
  },
  {
    icon: ArrowRight,
    title: "Stage Program",
    description:
      "Coordinated stage programs including entertainment, speeches, and performances for a lively event flow.",
    highlight: "Seamless flow",
    image: "/images/event3.jpg",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Events Execution",
    description:
      "End-to-end event execution with attention to detail, ensuring everything runs smoothly from start to finish.",
    highlight: "Flawless delivery",
    image: "/images/event4.jpg",
    gradient: "from-fuchsia-400 to-purple-600",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Professional photography services to capture every special moment with creativity and clarity.",
    highlight: "Memorable shots",
    image: "/images/event5.jpg",
    gradient: "from-slate-400 to-gray-600",
  },
  {
    icon: Video,
    title: "Videography",
    description:
      "High-quality videography to document your event, preserving memories in cinematic style.",
    highlight: "Cinematic memories",
    image: "/images/event6.jpg",
    gradient: "from-teal-400 to-cyan-600",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const imageVariants = {
  initial: { scale: 1.1, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
  hover: { scale: 1.07, transition: { duration: 0.4, ease: easeOut } },
};

const overlayVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3 } },
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
}: Service) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="group relative flex flex-col h-full bg-white rounded-3xl border border-neutral-100 transition-all duration-500 ease-out overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden rounded-t-3xl">
        <motion.div
          variants={imageVariants}
          initial="initial"
          animate="visible"
          whileHover="hover"
          className="relative w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Brown overlay on hover */}
          <motion.div
            variants={overlayVariants}
            className="absolute inset-0 bg-gradient-to-br from-[#7c4a03e6] via-[#5a3201d9] to-[#7c4a0399] opacity-0 group-hover:opacity-80 transition-opacity duration-500"
          />
          {/* Subtle dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-60 pointer-events-none" />
        </motion.div>

        {/* Icon overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 bg-white/95 backdrop-blur-md text-[#7c4a03] rounded-xl shadow border border-white/20"
        >
          <Icon className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 flex flex-col flex-grow">
        {/* Brown glassmorphism effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c4a0333] via-[#7c4a031a] to-white/60 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="relative z-10 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-[#7c4a03] transition-colors duration-300">
            {title}
          </h3>
          {/* Description */}
          <p className="text-gray-600 font-body leading-relaxed text-sm flex-grow group-hover:text-gray-800 transition-colors duration-300">
            {description}
          </p>
          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 mt-4 text-[#7c4a03] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ x: -10 }}
            whileHover={{ x: 8 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Fix: useMemo for positions of particles (no Math.random during render!)
function useRandomizedParticles(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
      })),
    [count]
  );
}

export default function OurServicesSection() {
  const particles = useRandomizedParticles(6);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradients and particles */}
     
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7c4a03]/10 to-[#5a3201]/5 text-[#7c4a03] text-sm font-semibold rounded-full border border-[#7c4a03]/20 mb-8 backdrop-blur-sm"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Our Premium Services
          </motion.div>
          {/* Main heading */}
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-gray-900 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block"
            >
              Everything You Need for an
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block bg-gradient-to-r from-[#7c4a03] via-[#a87845] to-[#5a3201] bg-clip-text text-transparent"
            >
              Unforgettable Event
            </motion.span>
          </motion.h2>
          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl font-body leading-8 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            We blend creativity, meticulous planning, and warm hospitality to
            transform your vision into reality. Let us make your special moments
            truly extraordinary with our comprehensive event solutions.
          </motion.p>
        </motion.div>
        {/* Grid Layout */}
        <motion.div
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={itemVariants}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}