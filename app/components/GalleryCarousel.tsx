"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/item1.jpg", alt: "Dish 1" },
  { src: "/images/item2.jpg", alt: "Dish 2" },
  { src: "/images/item3.jpg", alt: "Dish 3" },
  { src: "/images/item4.jpg", alt: "Dish 4" },
  { src: "/images/item5.jpg", alt: "Dish 5" },
  { src: "/images/item6.jpg", alt: "Dish 6" },
];

export default function GalleryCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [itemWidth, setItemWidth] = useState(0);

  const extendedImages = [...images, ...images, ...images];

  const calculateItemWidth = useCallback(() => {
    if (containerRef.current) {
      const firstChild = containerRef.current.firstElementChild as HTMLElement | null;
      if (firstChild) {
        const gap = 24; // gap-6
        setItemWidth(firstChild.clientWidth + gap);
      }
    }
  }, []);

  useEffect(() => {
    calculateItemWidth();
    window.addEventListener("resize", calculateItemWidth);
    return () => window.removeEventListener("resize", calculateItemWidth);
  }, [calculateItemWidth]);

  useEffect(() => {
    if (containerRef.current && itemWidth > 0) {
      containerRef.current.scrollLeft = images.length * itemWidth;
    }
  }, [itemWidth]);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || itemWidth === 0) return;
    const container = containerRef.current;
    const scrollPos = container.scrollLeft;

    const loopStart = images.length * itemWidth;
    const loopEnd = images.length * 2 * itemWidth;

    if (scrollPos <= itemWidth) {
      container.scrollLeft = scrollPos + images.length * itemWidth;
    } else if (scrollPos >= loopEnd - itemWidth) {
      container.scrollLeft = scrollPos - images.length * itemWidth;
    }
  }, [itemWidth]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeft.current = containerRef.current?.scrollLeft || 0;
    containerRef.current?.classList.add("dragging");
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    containerRef.current?.classList.remove("dragging");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scrollByItem = (dir: "left" | "right") => {
    if (!containerRef.current || itemWidth === 0) return;
    containerRef.current.scrollBy({
      left: dir === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="gallery" className="w-full py-12 px-4 relative">
      <div className="max-w-[1600px] mx-auto relative">
        {/* Carousel */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing no-scrollbar"
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {extendedImages.map((img, idx) => (
            <div
              key={idx}
              className="
                min-w-[80%] sm:min-w-[50%] lg:min-w-[calc(33.3333%-16px)]
                aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg
              "
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                draggable={false}
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={() => scrollByItem("left")}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 hover:bg-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>

        {/* Right Button */}
        <button
          onClick={() => scrollByItem("right")}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 hover:bg-white w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </button>
      </div>
     
    </section>
  );
}
