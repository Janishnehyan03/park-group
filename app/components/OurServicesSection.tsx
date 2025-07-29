"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  UtensilsCrossed,
  Leaf,
  Home,
  Users,
  Wine,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Type Definition
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  highlight?: string;
}

// Enhanced data with highlights
const services: Service[] = [
  {
    icon: Calendar,
    title: "Event Planning & Management",
    description:
      "From concept to execution, we handle every detail of your event—weddings, corporate meets, or private parties—for a seamless, memorable experience.",
    highlight: "End-to-end planning",
  },
  {
    icon: UtensilsCrossed,
    title: "Signature Catering",
    description:
      "Delight your guests with a curated culinary journey. Our chefs craft gourmet menus with local and international flair, tailored to your tastes and dietary needs.",
    highlight: "Gourmet cuisine",
  },
  {
    icon: Leaf,
    title: "Scenic Venues",
    description:
      "Choose from our stunning indoor halls or lush outdoor gardens. Our versatile spaces provide the perfect, well-equipped backdrop for any occasion.",
    highlight: "Versatile spaces",
  },
  {
    icon: Users,
    title: "Exceptional Hospitality",
    description:
      "We pride ourselves on warm, attentive service. From arrival to departure, your guests will experience professional hospitality and thoughtful care.",
    highlight: "Premium service",
  },
  {
    icon: Wine,
    title: "Bespoke Decor & Ambiance",
    description:
      "Personalize your event with custom décor, florals, and entertainment. We transform our spaces to bring your unique theme and vision to life.",
    highlight: "Custom designs",
  },
  {
    icon: Home,
    title: "Luxury Stays & Leisure",
    description:
      "Extend your celebration with our premium rooms, spa services, and curated activities for a truly relaxing and rejuvenating retreat for you and your guests.",
    highlight: "Complete experience",
  },
];

// Enhanced Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

const iconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

// Enhanced ServiceCard Component
function ServiceCard({ icon: Icon, title, description, highlight }: Service) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      className="group relative flex flex-col h-full bg-white rounded-2xl shadow-lg border border-neutral-200 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-light/10 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-8 flex flex-col h-full">
        {/* Icon with enhanced styling */}
        <div className="flex items-center justify-between mb-6">
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
            className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-gold-dark text-white rounded-xl shadow-lg group-hover:shadow-gold/30 transition-shadow duration-300"
          >
            <Icon className="w-8 h-8" />
          </motion.div>

          {highlight && (
            <div className="flex items-center gap-1 px-3 py-1 bg-gold-light/20 text-gold-dark text-xs font-medium font-body rounded-full border border-gold-light/30">
              <Sparkles className="w-3 h-3" />
              {highlight}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-gold-dark transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 font-body leading-relaxed mb-6 flex-1">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration with gold tones */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(192,154,105,0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(225,193,155,0.06),transparent_70%)]" />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/20 text-gold-dark text-sm font-medium font-body rounded-full border border-gold-light/40 mb-6">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl  font-display tracking-tight text-gray-900 mb-6">
            Everything You Need for an{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
              Unforgettable Event
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-body leading-8 text-gray-600 max-w-3xl mx-auto">
            We blend creativity, meticulous planning, and warm hospitality to
            transform your vision into reality. Let us make your special moments
            truly extraordinary.
          </p>
        </motion.div>

        {/* Enhanced Grid Layout */}
        <motion.div
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-8 sm:mt-24 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                highlight={service.highlight}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
