"use client";
import {
  Utensils,
  Sparkles,
  Camera,
  Video,
  Music,
  Users,
  Gift,
  CalendarCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Utensils, label: "Catering Services" },
  { icon: Sparkles, label: "Wedding Events" },
  { icon: Gift, label: "Birthday Parties" },
  { icon: CalendarCheck, label: "Inaugural Functions" },
  { icon: Users, label: "Event Execution" },
  { icon: Camera, label: "Photography" },
  { icon: Video, label: "Videography" },
  { icon: Music, label: "Entertainment" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-16 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-[#133427] via-[#19523d] to-[#133427]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our <span className="text-[#ffe869]">Services</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Complete event solutions tailored to make your special moments
            unforgettable
          </p>
        </motion.div>

        {/* Services Grid - exactly 8 items, clean alignment */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#ffe869] 
                  rounded-2xl p-6 text-center hover:scale-105 hover:-translate-y-1 
                  transition-all duration-300 group w-full  min-h-[170px] 
                  flex flex-col justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-[#ffe869]/90 group-hover:bg-[#ffe869] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#133427]" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {service.label}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
