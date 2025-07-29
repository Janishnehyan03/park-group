"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Heart,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Catering", href: "/catering" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
];

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-neutral-200 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d97706\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative px-6 md:px-16 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
              {/* Brand Section - Enhanced */}
              <div className="lg:col-span-2 space-y-6">
                <div className="group">
                  <h2 className="text-4xl font-display text-transparent bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text drop-shadow-lg mb-4">
                    Park Events
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full group-hover:w-24 transition-all duration-300"></div>
                </div>

                <p className="text-neutral-300 max-w-md text-lg leading-relaxed">
                  Crafting extraordinary moments through premium event
                  experiences, exquisite catering, and elegant venues tailored
                  to your vision.
                </p>

                {/* Newsletter Signup */}
                <div className="space-y-3">
                  <p className="text-sm text-amber-400 font-medium">
                    Stay updated with our latest events
                  </p>
                  <div className="flex gap-2 max-w-sm">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Logo */}
                <div className="pt-4">
                  <Image
                    src="/images/logo.png"
                    alt="Park Events Logo"
                    width={140}
                    height={48}
                    className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Navigation Links - Enhanced */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-amber-400 mb-4 relative">
                  Quick Links
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full"></div>
                </h3>
                <nav className="space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-neutral-300 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 group"
                    >
                      <span className="flex items-center gap-2">
                        {link.name}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm text-neutral-400 mb-3">Follow us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          className="w-10 h-10 bg-slate-800/50 hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 border border-slate-700 hover:border-amber-500 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25"
                          aria-label={social.name}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Contact Info - Enhanced */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-amber-400 mb-4 relative">
                  Get in Touch
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-400 rounded-full"></div>
                </h3>

                <div className="space-y-4">
                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:info@parkevents.com"
                          className="text-neutral-200 hover:text-amber-400 transition-colors font-medium"
                        >
                          info@parkevents.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">
                          Phone
                        </p>
                        <a
                          href="tel:+919876543210"
                          className="text-neutral-200 hover:text-amber-400 transition-colors font-medium"
                        >
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/50 hover:border-amber-500/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-400 uppercase tracking-wide mb-1">
                          Address
                        </p>
                        <p className="text-neutral-200 text-sm leading-relaxed">
                          Park Events HQ
                          <br />
                          Near Riverside
                          <br />
                          Kochi, Kerala 682001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom - Enhanced */}
            <div className="border-t border-gradient-to-r from-transparent via-slate-700 to-transparent pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-neutral-400">
                  <span>
                    © {new Date().getFullYear()} Park Events. Crafted with
                  </span>
                  <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                  <span>in Kerala</span>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <Link
                    href="/privacy"
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/sitemap"
                    className="text-neutral-400 hover:text-amber-400 transition-colors"
                  >
                    Sitemap
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
