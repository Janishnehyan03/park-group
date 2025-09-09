"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  easeOut,
  useReducedMotion,
} from "framer-motion";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  // Background and border color on scroll (desktop only)
  const navbarBg = useTransform(scrollY, [0, 60], ["rgba(0,0,0,0)", "#0f3026"]);
  const borderColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(255,221,81,0)", "rgba(255,221,81,0.18)"]
  );

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Mission", href: "#mission" },
    { name: "Vision", href: "#vision" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Booking", href: "/booking" },
  ];

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus the panel when opened
  useEffect(() => {
    if (open && panelRef.current) panelRef.current.focus();
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-sans">
      <motion.div
        className="w-full border-b bg-[#0f3026] md:backdrop-blur-sm md:bg-transparent"
        style={{ background: navbarBg, borderColor }}
        initial={shouldReduceMotion ? { opacity: 0 } : { y: -100, opacity: 0 }}
        animate={
          mounted
            ? shouldReduceMotion
              ? { opacity: 1 }
              : { y: 0, opacity: 1 }
            : {}
        }
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffacd]/70 rounded-md"
            >
              <Image
                src="/images/logo.png"
                alt="Royal Key Logo"
                width={70}
                height={42}
                className="object-contain"
                priority
              />
            </a>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-6">
              {navLinks.map((item) => (
                <li key={item.name} className="relative">
                  <a
                    href={item.href}
                    className="px-3 py-2 text-[13px] font-medium tracking-tight text-[#fffacd] hover:text-[#eae3a7] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fffacd]/70 rounded-md"
                  >
                    {item.name.toUpperCase()}
                  </a>
                  {item.name === "Home" && (
                    <span className="pointer-events-none absolute -bottom-1 left-2 right-2 h-[2px] bg-[#fffacd]/90 rounded-full" />
                  )}
                </li>
              ))}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Desktop call button */}
              <a
                href="tel:+971563631487"
                className="hidden sm:inline-flex items-center gap-2 border rounded-full px-4 py-2 text-[#fffacd] border-[#fffacd] text-[13px] font-semibold hover:bg-[#fffacd] hover:text-[#0f3026] transition duration-200"
              >
                <Phone className="w-4 h-4" />
                9048 012 292
              </a>

              {/* Mobile call button */}
              <a
                href="tel:+971563631487"
                className="md:hidden inline-flex p-2 items-center justify-center rounded-full border border-[#fffacd] text-[#fffacd] hover:bg-[#fffacd] hover:text-[#0f3026] transition duration-200 h-9 w-9"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Close menu" : "Open menu"}
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#fffacd] hover:bg-[#fffacd]/10 h-9 w-9"
              >
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile full-screen menu */}
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          ref={panelRef}
          tabIndex={-1}
          className="md:hidden fixed inset-0 z-50 bg-[#0f3026] flex flex-col px-6 py-6"
          initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
          animate={
            open
              ? shouldReduceMotion
                ? { opacity: 1 }
                : { x: 0 }
              : shouldReduceMotion
              ? { opacity: 0 }
              : { x: "100%" }
          }
          transition={{
            type: shouldReduceMotion ? "tween" : "spring",
            stiffness: 260,
            damping: 28,
            duration: shouldReduceMotion ? 0.15 : undefined,
          }}
        >
          {/* Header inside menu */}
          <div className="flex items-center justify-between mb-6">
            <Image
              src="/images/logo.png"
              alt="Royal Key Logo"
              width={60}
              height={36}
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-[#fffacd] hover:bg-[#fffacd]/10"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col gap-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[15px] font-medium tracking-tight text-[#fffacd] hover:bg-[#fffacd]/10 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call button at bottom */}
          <a
            href="tel:+971563631487"
            className="mt-auto inline-flex items-center gap-2 border rounded-full px-4 py-2 text-[#fffacd] border-[#fffacd] text-[15px] font-semibold hover:bg-[#fffacd] hover:text-[#0f3026] transition duration-200"
          >
            <Phone className="w-4 h-4" />
            9048 012 292
          </a>
        </motion.div>
      </motion.div>
    </nav>
  );
}
