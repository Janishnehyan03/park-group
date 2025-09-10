"use client";
import { Users, Globe, Award, Utensils, Clock, Building } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { text: "50,00,000+", label: "Happy Customers", icon: Users },
  { text: "All India", label: "Services", icon: Globe },
  { text: "20+", label: "Years of Excellence", icon: Award },
  { text: "1000+", label: "Variety Dishes", icon: Utensils },
  { text: "24/7", label: "Customer Support", icon: Clock },
  { text: "10", label: "Restaurants in Kerala", icon: Building },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-choose-us"
      className="w-full bg-[#11493e] px-4 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#11493e]/95 via-[#11493e]/85 to-[#11493e]/95 z-0" />

      <div className="max-w-6xl w-full mx-auto">
        {/* Section title */}
        <motion.h2
          className="text-3xl md:text-[2.75rem] font-bold text-white tracking-tight text-center mb-12 drop-shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          Why <span className="text-[#ffe869]">Choose</span> Us
        </motion.h2>

        {/* Highlights grid */}
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        >
          {highlights.map(({ icon: Icon, text, label }, i) => (
            <motion.li
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center gap-4 p-6 border border-white/10 hover:border-[#ffe869] transition-colors duration-200 group"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffe869]/80 shadow-lg mb-2"
                whileHover={{ scale: 1.05, rotate: 3 }}
                animate={{
                  y: [0, -8, 0],
                  transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                }}
              >
                <Icon className="w-8 h-8 text-[#11493e] group-hover:text-[#f8d800] transition-colors" />
              </motion.div>
              <span className="text-2xl md:text-3xl font-extrabold text-[#ffe869] drop-shadow">{text}</span>
              <span className="text-base md:text-lg text-white/90 text-center font-medium">{label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
