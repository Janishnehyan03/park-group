"use client";
import Image from "next/image";
import { Users, Globe, Award, Utensils, Clock, Building } from "lucide-react";

const highlights = [
  {
    text: "50,00,000+",
    label: "Happy Customers",
    icon: Users,
  },
  {
    text: "All India",
    label: "Services",
    icon: Globe,
  },
  {
    text: "20+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    text: "1000+",
    label: "Variety Dishes",
    icon: Utensils,
  },
  {
    text: "24/7",
    label: "Customer Support",
    icon: Clock,
  },
  {
    text: "10",
    label: "Restaurants in Kerala",
    icon: Building,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-[#11493e]">
      <div className="relative w-full flex items-center min-h-[480px]">
 
        <div className="absolute inset-0 bg-gradient-to-r from-[#11493e]/95 via-[#11493e]/85 to-[#11493e]/95" />

        {/* Glassmorphism Panel */}
        <div className="relative z-10 w-full flex flex-col items-center px-4 md:px-0">
          <div className="max-w-6xl w-full mx-auto mt-16 mb-10 rounded-3xl  shadow-2xl px-6 md:px-14 py-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-center mb-12 drop-shadow-lg">
              Why <span className="text-[#ffe869]">Choose</span> Us
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {highlights.map((point, i) => {
                const Icon = point.icon;
                return (
                  <li
                    key={i}
                    className="group bg-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 p-6 shadow-lg border border-white/10 hover:border-[#ffe869] transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffe869]/80 shadow-lg mb-2 group-hover:scale-105 group-hover:rotate-3 transition-transform">
                      <Icon className="w-8 h-8 text-[#11493e] animate-bounce-slow group-hover:animate-bounce group-hover:text-[#f8d800]" />
                    </span>
                    <span className="text-2xl md:text-3xl font-extrabold text-[#ffe869] drop-shadow">
                      {point.text}
                    </span>
                    <span className="text-base md:text-lg text-white/90 text-center font-medium">
                      {point.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </section>
  );
}
