import Image from "next/image";

export default function VisionSection() {
  return (
    <section id="vision" className="w-full min-h-[520px] flex items-center justify-center px-0 py-2">
      <div className="w-[96%] max-w-[1800px] mx-auto flex flex-col md:flex-row h-full overflow-hidden">
        {/* Vision Text Left */}
        <div className="w-full md:w-1/2 bg-[#fdf7c3] flex flex-col justify-center px-8 md:px-20 py-14 md:py-0">
          <h2 className="text-[#133427] text-4xl md:text-5xl font-bold mb-8">
            Our Vision
          </h2>
          <p className="text-[#133427] text-lg md:text-xl max-w-xl leading-relaxed">
            At Park Event-Management, we strive to enhance event experiences and
            break through geographical boundaries to connect people and ideas
            globally.
          </p>
        </div>
        {/* Image Right */}
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[540px] group">
          <Image
            src="/images/food1.jpg"
            alt="Decorated event venue"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-95"
            priority
          />
        </div>
      </div>
    </section>
  );
}
