"use client";
import { easeOut, motion } from "framer-motion";
import {
  Award,
  Building,
  Cake,
  Heart,
  Quote,
  Sparkles,
  Star
} from "lucide-react";

interface Testimonial {
  name: string;
  title: string;
  message: string;
  rating: number;
  eventType: "wedding" | "corporate" | "birthday";
  location: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Anjali Menon",
    title: "Bride, Wedding Event",
    message:
      "Our wedding was truly magical thanks to the Park Events team! The venue was gorgeous, and every detail was perfectly planned. Our guests are still talking about the food and service. The attention to detail was extraordinary.",
    rating: 5,
    eventType: "wedding",
    location: "Vagamon Hills Resort",
    date: "March 2024",
  },
  {
    name: "Rajesh Kumar",
    title: "Corporate Client",
    message:
      "Flawless execution and attention to detail! Our annual corporate retreat went smoothly, and everyone was impressed with the professionalism and hospitality. The team exceeded all our expectations.",
    rating: 5,
    eventType: "corporate",
    location: "Conference Hall",
    date: "February 2024",
  },
  {
    name: "Priya Varma",
    title: "Birthday Celebration",
    message:
      "From decor to catering, everything exceeded our expectations. The team went above and beyond to make my daughter's birthday truly unforgettable. The kids had an amazing time!",
    rating: 5,
    eventType: "birthday",
    location: "Garden Pavilion",
    date: "January 2024",
  },
  {
    name: "Arjun Nair",
    title: "Anniversary Celebration",
    message:
      "Celebrating our 25th anniversary here was perfect! The romantic setup, delicious food, and exceptional service made it a night to remember. Highly recommended for special occasions.",
    rating: 5,
    eventType: "wedding",
    location: "Poolside Terrace",
    date: "December 2023",
  },
  {
    name: "Meera Krishnan",
    title: "Product Launch Event",
    message:
      "Our product launch was a huge success! The modern facilities, professional staff, and seamless coordination helped us create the perfect impression for our clients and stakeholders.",
    rating: 5,
    eventType: "corporate",
    location: "Executive Lounge",
    date: "November 2023",
  },
  {
    name: "Lakshmi Pillai",
    title: "Golden Jubilee Celebration",
    message:
      "What a wonderful experience celebrating our 50th wedding anniversary! The team made it so special with beautiful decorations and excellent service. Our family was thoroughly impressed with the hospitality.",
    rating: 5,
    eventType: "wedding",
    location: "Heritage Banquet Hall",
    date: "October 2023",
  },
];

const eventIcons = {
  wedding: Heart,
  corporate: Building,
  birthday: Cake,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: easeOut },
    },
};

const headerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
      >
        <Star
          className={`w-4 h-4 ${
            i < rating ? "text-gold fill-gold" : "text-gray-300"
          }`}
        />
      </motion.div>
    ))}
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  const EventIcon = eventIcons[testimonial.eventType];

  return (
    <motion.div
      className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl border border-gray-200 p-8 flex flex-col h-full transition-all duration-500 hover:scale-105 hover:-translate-y-2"
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-light/20 via-transparent to-gold/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Quote icon */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-lg"
        initial={{ scale: 0, rotate: -90 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
        viewport={{ once: true }}
      >
        <Quote className="w-4 h-4 text-white" />
      </motion.div>

      {/* Event type badge */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gold-light/30 rounded-full border border-gold-light/40">
          <EventIcon className="w-4 h-4 text-gold-dark" />
          <span className="text-xs font-semibold text-gold-dark uppercase tracking-wide font-body">
            {testimonial.eventType}
          </span>
        </div>
        <div className="text-xs text-gray-500 font-body">
          {testimonial.location} • {testimonial.date}
        </div>
      </div>

      {/* Profile section without image */}
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          className="relative w-16 h-16 flex-shrink-0 bg-gradient-to-br from-gold-light to-gold rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-2xl font-bold text-white font-display">
            {testimonial.name.charAt(0)}
          </span>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </motion.div>

        <div className="flex-1">
          <h4 className="font-bold text-gray-900 text-lg group-hover:text-gold-dark transition-colors duration-300 font-display">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm font-medium font-body mb-2">
            {testimonial.title}
          </p>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Message */}
      <motion.blockquote
        className="text-gray-700 leading-relaxed flex-1 mb-6 relative font-body"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-4xl text-gold-light absolute -top-2 -left-2 font-serif leading-none">
          "
        </span>
        <span className="relative z-10 italic text-base">
          {testimonial.message}
        </span>
        <span className="text-4xl text-gold-light absolute -bottom-6 -right-2 font-serif leading-none">
          "
        </span>
      </motion.blockquote>

      {/* Hover effect sparkles */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-5 h-5 text-gold" />
      </motion.div>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-gray-50/50 to-gold-light/10 py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gold to-gold-dark rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-gold-light to-gold rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-br from-gold-dark to-gold rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold tracking-wider text-gold-dark uppercase text-sm font-body">
              CLIENT TESTIMONIALS
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-light text-gray-900 font-display leading-tight mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent font-medium">
              Guests Say
            </span>
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-body">
            Real stories from clients who celebrated their special moments with
            us. Discover why we're trusted for life's most important occasions.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 font-display">
                500+
              </div>
              <div className="text-sm text-gray-600 font-body">
                Happy Events
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 font-display">
                5.0
              </div>
              <div className="text-sm text-gray-600 font-body">
                Average Rating
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 font-display">
                100%
              </div>
              <div className="text-sm text-gray-600 font-body">
                Satisfaction
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid - All 6 testimonials displayed */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}