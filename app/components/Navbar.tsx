"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  easeOut,
} from "framer-motion";
import {
  Menu,
  X,
  Calendar,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform scroll position to navbar background opacity
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.2)", "rgba(0, 0, 0, 0.95)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0.1, 0.3]
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="backdrop-blur-md border-b transition-all duration-300"
        style={{ 
          backgroundColor: navbarBg,
          borderColor: `rgba(255, 255, 255, ${borderOpacity.get()})`,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              variants={slideInLeft}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/logo.png"
                    alt="Park Events Logo"
                    width={60}
                    height={60}
                    className="object-cover rounded-full border-2 border-white/20 shadow-lg"
                  />
                </motion.div>
                <span className="flex flex-col">
                  <span className="font-display text-2xl md:text-3xl font-bold text-white tracking-wide leading-tight">
                    Park
                  </span>
                  <span className="font-body text-gold text-sm md:text-base font-medium tracking-wide mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Events & Catering
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {[
                { name: "Home", href: "/#home" },
                { name: "Events", href: "/#events" },
                { name: "Catering", href: "/#catering" },
                { name: "Gallery", href: "/#gallery" },
                { name: "Contact", href: "/#contact" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-200 hover:text-white font-medium transition-all duration-300 relative group font-body tracking-wide text-sm"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index + 0.3, duration: 0.6 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name.toUpperCase()}
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-dark rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Glow effect on hover */}
                  <motion.span
                    className="absolute inset-0 rounded-md bg-white/5 -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
                whileTap={{ scale: 0.95 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>

            {/* Reserve Button */}
            <motion.div
              className="hidden lg:block"
              variants={slideInRight}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <motion.button
                className="bg-gradient-to-r from-gold to-gold-dark text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-body flex items-center gap-2 group text-sm tracking-wide"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="w-4 h-4" />
                BOOK AN EVENT
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden bg-black/40 backdrop-blur-lg border-t border-white/10"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-6 py-6 space-y-4">
            {[
              { name: "Home", href: "/#home" },
              { name: "Events", href: "/#events" },
              { name: "Catering", href: "/#catering" },
              { name: "Gallery", href: "/#gallery" },
              { name: "Contact", href: "/#contact" },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-neutral-200 hover:text-white font-body tracking-wide py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 4 }}
              >
                {item.name.toUpperCase()}
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-gold to-gold-dark text-black font-semibold px-6 py-3 rounded-full w-full flex items-center justify-center gap-2 mt-4 hover:shadow-lg transition-all duration-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-4 h-4" />
              BOOK AN EVENT
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
