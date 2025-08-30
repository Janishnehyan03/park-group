import Image from "next/image";

export default function MissionSection() {
  return (
    <section id="mission" className="w-full min-h-[500px]  flex items-center justify-center px-0 py-2">
      <div className="w-[96%] max-w-[1800px] mx-auto flex flex-col md:flex-row h-full overflow-hidden">
        {/* Image Left */}
        <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-[540px] group">
          <Image
            src="/images/food2.jpg"
            alt="Assorted healthy food in a bowl"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-95"
            priority
          />
        </div>
        {/* Mission Text Right */}
        <div className="w-full md:w-1/2 bg-[#11493e] flex flex-col justify-center px-8 md:px-20 py-12 md:py-0">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
            Our Mission
          </h2>
          <p className="text-white text-lg md:text-xl max-w-xl leading-relaxed">
            Our mission is to deliver exceptional catering services that exceed
            our clients’ expectations. We believe in the power of high-quality,
            hygienic food to create memorable experiences, whether in a
            corporate setting or an outdoor event.
          </p>
        </div>
      </div>
    </section>
  );
}
