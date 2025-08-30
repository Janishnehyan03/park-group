import Image from "next/image";
import {
  CheckCircle,
  Star,
  Sparkles,
  HeartHandshake,
  Gem,
  Wand2,
  Users,
  Globe,
} from "lucide-react";

const whyUsPoints = [
  {
    text: "One stop solution for all wedding needs",
    icon: CheckCircle,
  },
  {
    text: "Professional & highly experienced planners",
    icon: Star,
  },
  {
    text: "Attention to detail",
    icon: Sparkles,
  },
  {
    text: "Personalized wedding style",
    icon: HeartHandshake,
  },
  {
    text: "Bespoke event design",
    icon: Gem,
  },
  {
    text: "Flawless operations",
    icon: Wand2,
  },
  {
    text: "Extensive guest handling",
    icon: Users,
  },
  {
    text: "Destination Wedding Planning Company",
    icon: Globe,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-choose-us" className="w-full bg-[#11493e]">
      {/* Hero with overlay */}
      <div className="relative w-full flex items-center min-h-[480px]">
        <Image
          src="/images/wedding-bg.jpg"
          alt="Wedding Decoration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11493e]/95 via-[#11493e]/85 to-[#11493e]/95" />
        <div className="relative z-10 px-8 md:px-20 py-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Why Us..!
          </h2>

          <ul className="grid sm:grid-cols-2 gap-y-5 gap-x-10 text-white/90 text-lg md:text-xl max-w-5xl">
            {whyUsPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <li
                  key={index}
                  className="flex items-start gap-3 group hover:text-white transition"
                >
                  <Icon className="w-7 h-7 text-[#ffe869] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span>{point.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
