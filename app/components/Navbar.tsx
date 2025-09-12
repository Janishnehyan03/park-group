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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
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
                href="tel:+919048012292"
                className="hidden sm:inline-flex items-center gap-2 border rounded-full px-4 py-2 text-[#fffacd] border-[#fffacd] text-[13px] font-semibold hover:bg-[#fffacd] hover:text-[#0f3026] transition duration-200"
              >
                <Phone className="w-4 h-4" />
                9048 012 292
              </a>

              {/* Mobile call button */}
              <a
                href="tel:+919048012292"
                className="sm:hidden inline-flex p-2 items-center justify-center rounded-full border border-[#fffacd] text-[#fffacd] hover:bg-[#fffacd] hover:text-[#0f3026] transition duration-200 h-9 w-9 flex-shrink-0"
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
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-[#fffacd] hover:bg-[#fffacd]/10 h-9 w-9 flex-shrink-0"
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

        {/* Mobile menu overlay */}
        {open && (
          <div 
            className="md:hidden fixed inset-0 top-[88px] bg-black/50 z-40"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          ref={panelRef}
          tabIndex={-1}
          className={`md:hidden fixed top-[88px] left-0 right-0 z-50 bg-[#0f3026] border-t border-[#fffacd]/20 ${
            open ? 'block' : 'hidden'
          }`}
          initial={shouldReduceMotion ? { opacity: 0 } : { y: -20, opacity: 0 }}
          animate={
            open
              ? shouldReduceMotion
                ? { opacity: 1 }
                : { y: 0, opacity: 1 }
              : shouldReduceMotion
              ? { opacity: 0 }
              : { y: -20, opacity: 0 }
          }
          transition={{
            type: shouldReduceMotion ? "tween" : "spring",
            stiffness: 260,
            damping: 28,
            duration: shouldReduceMotion ? 0.15 : undefined,
          }}
        >
          <div className="max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {/* Nav links */}
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-[16px] font-medium text-[#fffacd] hover:bg-[#fffacd]/10 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}

              {/* Call button */}
              <div className="pt-4 border-t border-[#fffacd]/20 mt-4">
                <a
                  href="tel:+919048012292"
                  className="flex items-center justify-center gap-2 w-full border rounded-full px-4 py-3 text-[#fffacd] border-[#fffacd] text-[16px] font-semibold hover:bg-[#fffacd] hover:text-[#0f3026] transition duration-200"
                >
                  <Phone className="w-5 h-5" />
                  Call: 9048 012 292
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}