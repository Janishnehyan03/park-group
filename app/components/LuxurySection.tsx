"use client";
import Image from "next/image";
import {
  UtensilsCrossed,
  Sparkles,
  Camera,
  Music,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: UtensilsCrossed, label: "Food Catering" },
  { icon: Sparkles, label: "Stage Decoration" },
  { icon: Camera, label: "Media" },
  { icon: Music, label: "Entertainment" },
  { icon: Mail, label: "Invitation Card" },
];

export default function LuxurySection() {
  return (
    <section id="services" className="w-full flex flex-col md:flex-row my-12 md:my-16 overflow-hidden">
      {/* Left: Food Image */}
      <div className="relative w-full md:w-1/2 h-[260px] sm:h-[400px] md:h-auto min-h-[320px] md:min-h-[620px]">
        <Image
          src="/images/luxury.jpg"
          alt="Catering Food Platter"
          fill
          className="object-cover brightness-90"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-14 py-12 lg:py-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#133427] mb-8 leading-snug sm:leading-tight"
        >
          Premium Event & Catering Services
        </motion.h2>

        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5 text-[#1e3624] text-base sm:text-lg leading-relaxed mb-12"
        >
          <p>
            We provide end-to-end event solutions, ensuring every detail is
            handled with excellence and creativity.
          </p>
          <p>
            From exquisite catering to elegant stage decorations, engaging
            entertainment, media coverage, and personalized invitation cards,
            our team is dedicated to making your event unforgettable.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-[#19523d] to-[#133427] text-[#fffacd] shadow-md hover:shadow-xl hover:scale-[1.07] transition-transform duration-300 ease-out text-center"
              >
                <Icon className="w-9 h-9 mb-3 sm:w-10 sm:h-10" />
                <span className="text-sm sm:text-base font-semibold leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
