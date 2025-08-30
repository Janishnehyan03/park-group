"use client";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Royal Key Catering has been a reliable partner for our large-scale operations. Their ability to consistently deliver high-quality meals, even in challenging environments, is truly impressive.",
    name: "Michael Lee",
    role: "Wedding Coordinator",
  },
  {
    text: "Royal Key Catering has consistently exceeded our expectations. From their impeccable service to the delicious food, they have been our go-to catering partner for corporate events.",
    name: "Aura Brooks",
    role: "Corporate Client",
  },
  {
    text: "Working with Royal Key Catering has been a game-changer for our events. The team is professional, responsive, and truly understands our needs.",
    name: "Sarah Ahmed",
    role: "Event Planner",
  },
  {
    text: "The attention to detail and the creativity in their menu design is second to none. Our guests were blown away by the presentation and taste.",
    name: "James Carter",
    role: "Hotel Manager",
  },
  {
    text: "From intimate gatherings to grand events, Royal Key Catering delivers the same level of passion, professionalism, and perfection every time.",
    name: "Emily Johnson",
    role: "Event Organizer",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(1); // start with second item centered

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prev = () => {
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 40; // min swipe distance in px
    if (Math.abs(distance) > threshold) {
      if (distance > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
    id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full bg-[#11493e] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#11493e]/95 to-black/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-16 md:py-20 text-center text-[#fffacd]">
        {/* Heading */}
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg text-[#fffacd]/80 mb-8 sm:mb-12 md:mb-14 max-w-3xl mx-auto">
          At Royal Key Catering, we take pride in delivering exceptional service and unforgettable culinary experiences. See why our clients trust us for their most important events.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div
            className="flex items-stretch justify-center gap-4 sm:gap-6 md:gap-8 overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {testimonials.map((t, idx) => {
              const position =
                idx === current
                  ? "center"
                  : idx === (current + 1) % testimonials.length
                  ? "right"
                  : idx === (current - 1 + testimonials.length) % testimonials.length
                  ? "left"
                  : "hidden";

              const baseCard =
                "w-full sm:w-[300px] md:w-[360px] lg:w-[380px] max-w-md px-5 sm:px-6 py-6 sm:py-8 rounded-2xl transition-all duration-500 ease-in-out backdrop-blur";

              const styleByPos =
                position === "center"
                  ? "bg-white/10 shadow-2xl sm:scale-105 md:scale-110 opacity-100 z-20"
                  : position === "left" || position === "right"
                  ? "hidden sm:block bg-white/5 opacity-60 sm:scale-95 z-10"
                  : "hidden";

              return (
                <div key={idx} className={`${baseCard} ${styleByPos}`}>
                  <p className="mb-5 sm:mb-6 leading-relaxed italic text-base sm:text-lg">
                    “{t.text}”
                  </p>
                  <div>
                    <p className="font-semibold text-lg sm:text-xl">{t.name}</p>
                    <p className="text-xs sm:text-sm opacity-80">{t.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile pagination dots */}
          <div className="mt-6 flex sm:hidden justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? "bg-[#fffacd]" : "bg-[#fffacd]/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-14">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/90 text-[#11493e] shadow-lg hover:bg-[#fffacd] hover:text-black transition"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/90 text-[#11493e] shadow-lg hover:bg-[#fffacd] hover:text-black transition"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}