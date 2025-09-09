import { MapPin, Phone } from "lucide-react";

// Placeholder: Replace with your actual navigation links, optimized for reusability
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#why-choose-us" },
  { name: "Mission", href: "#mission" },
  { name: "Vision", href: "#vision" },
  { name: "Booking", href: "/booking" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b423b] border-t border-[#fdf7c3]/30 text-[#fdf7c3]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-medium text-[#ffe687] leading-tight">
            Crafting Events with Elegance & Flavor
          </h3>
          <p className="text-lg text-[#ffe687]/90 leading-relaxed">
            From exquisite catering to elegant stage decorations, engaging
            entertainment, media coverage, and personalized invitation cards,
            our team is dedicated to making your event unforgettable.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-medium text-[#ffe687] leading-tight">
            Quick Links
          </h3>
          <ul className="space-y-2 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:underline hover:text-[#ffebac] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-medium text-[#ffe687] leading-tight">
            Get In Touch
          </h3>

          <div className="flex flex-col gap-4">
            {/* Address */}
            <div className="flex gap-3">
              <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-lg">
                  H.O: Kottakkal Road, <b>PUTHANATHANI</b> (Malappuram)
                </span>
                <span className="text-sm text-[#ffe687]/80 mt-1">
                  OTHER BRANCHES: <br />
                  <span className="text-[#ffffff]">
                    KOLLAM • CHAMRAVATTAM • KADUNGATHUKUNDU • KASARAGOD •
                    ANCHAL
                  </span>
                </span>
              </div>
            </div>

            {/* Phones */}
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/919048012292"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#ffebac] transition-colors"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-semibold">Latheef:</span>
                <span className="text-lg underline">9048 012 292</span>
              </a>
              <a
                href="https://wa.me/919746701099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#ffebac] transition-colors"
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-semibold">Office:</span>
                <span className="text-lg underline">9746 701 099</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-[#ffe687]/40 my-8 max-w-7xl mx-auto px-4" />

      {/* Socials + FSSAI + Rights */}
      <div className="max-w-7xl mx-auto px-4 pb-4 pt-2 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/919048012292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="w-7 h-7 flex-shrink-0"
            />
          </a>
          <a
            href="https://instagram.com/parkeventscatering"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-7 h-7 flex-shrink-0"
            />
          </a>
        </div>

        {/* FSSAI */}
        <div className="flex items-center gap-2">
          <img
            src="/images/fssai.png"
            alt="FSSAI"
            className="w-20 flex-shrink-0 invert brightness-0 saturate-0"
          />
          <span className="font-bold text-lg">11323010001394</span>
        </div>
      </div>

      {/* Rights */}
      <div className="text-center py-6 text-lg text-[#ffe687]">
        All Rights Reserved | Park Group {new Date().getFullYear()}
      </div>

      {/* WhatsApp Float Button - use fixed positioning, but consider "lg:hidden" if it appears on desktop */}
      <a
        href="https://wa.me/919048012292"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center bg-[#128c7e] shadow-xl transition hover:scale-110 z-40"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </footer>
  );
}
