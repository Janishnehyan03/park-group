import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b423b] border-t border-[#fdf7c3] text-[#fdf7c3] pt-14 pb-3 px-8 md:px-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between">
        {/* Left: About */}
        <div className="flex-1 min-w-[270px]">
          <h3 className="text-2xl font-medium mb-4 text-[#ffe687]">
            Crafting Events with Elegance & Flavor
          </h3>
          <p className="text-lg leading-relaxed text-[#ffe687]/90">
            From exquisite catering to elegant stage decorations, engaging
            entertainment, media coverage, and personalized invitation cards,
            our team is dedicated to making your event unforgettable.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex-1 min-w-[170px]">
          <h3 className="text-2xl font-medium mb-4 text-[#ffe687]">
            Quick Links
          </h3>
          {/*
            Replace static links with dynamic navLinks array
            */}
          {(() => {
            const navLinks = [
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "Why Choose Us", href: "#why-choose-us" },
              { name: "Mission", href: "#mission" },
              { name: "Vision", href: "#vision" },
            ];
            return (
              <ul className="space-y-2 text-lg text-[#ffe687]/90">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            );
          })()}
        </div>

        {/* Right: Contact */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="text-2xl font-medium mb-4 text-[#ffe687]">
            Get In Touch
          </h3>

          {/* Address */}
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
            <span className="text-lg">
              BIN HYDER Building, Room Number 836/22, Thirunavaya Road, <br />
              Puthanathani, Punnathala Post, Malappuram, Kerala – 676552
            </span>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
            <span className="text-lg">
              Head Restaurant: Kottakkal Road, Puthanathani, <br />
              Kalpakanchery (PO)
            </span>
          </div>

          {/* Phone Numbers */}
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <span className="text-lg font-semibold">Latheef:</span>
              <a
                href="https://wa.me/919048012292"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                9048 012 292
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 flex-shrink-0" />
              <span className="text-lg font-semibold">Office:</span>
              <a href="tel:+919846964965" className="text-lg hover:underline">
                9846 964 965
              </a>
              <span className="mx-2">|</span>
              <a href="tel:+919746701099" className="text-lg hover:underline">
                9746 701 099
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-[#ffe687]/40 my-8" />

      {/* Bottom bar with socials + FSSAI */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-2">
        {/* Socials */}
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/919048012292"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-lg"
          >
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6 flex-shrink-0"
            />
          </a>
          <a
            href="https://instagram.com/parkeventscatering"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline text-lg"
          >
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-6 h-6 flex-shrink-0"
            />
          </a>
        </div>

        {/* FSSAI */}
        <div className="flex items-center gap-3 text-lg">
          <img
            src="/images/fssai.png"
            alt="FSSAI"
            className="w-20 flex-shrink-0 filter invert brightness-0 saturate-0"
          />
          <span className="font-bold">11323010001394</span>
        </div>
      </div>

      {/* Rights */}
      <div className="mt-6 text-center text-lg text-[#ffe687]">
        All Rights Reserved | Park Group {new Date().getFullYear()}
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919048012292"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#30d66b] hover:bg-[#25d366] transition shadow-xl w-[64px] h-[64px] rounded-full flex items-center justify-center z-40"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          className="text-white"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12.002 3.003a8.996 8.996 0 0 0-7.291 14.347l-1.258 3.446a1 1 0 0 0 1.282 1.282l3.446-1.258A8.996 8.996 0 1 0 12.002 3.003Zm6.999 9a7 7 0 0 1-10.951 5.814 1 1 0 0 0-.808-.117l-2.292.838.838-2.292a1 1 0 0 0-.117-.808A7 7 0 1 1 19.001 12Zm-2.672 2.02c-.36-.18-2.12-1.048-2.45-1.167-.329-.12-.57-.18-.81.18-.24.36-.93 1.167-1.144 1.406-.21.24-.42.27-.78.09-.36-.18-1.523-.561-2.9-1.788-1.072-.956-1.796-2.134-2.01-2.494-.21-.36-.022-.555.159-.735.163-.163.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.98-1.11-2.7-.294-.707-.594-.61-.81-.62-.208-.009-.45-.011-.69-.011a1.29 1.29 0 0 0-.93.422c-.24.26-.93.906-.93 2.21 0 1.303.947 2.562 1.08 2.74.13.18 1.866 2.882 4.526 3.921 2.66 1.04 2.66.693 3.14.651.48-.041 1.53-.621 1.746-1.223.217-.602.217-1.119.153-1.223-.064-.104-.326-.19-.686-.37Z"
          />
        </svg>
      </a>
    </footer>
  );
}
