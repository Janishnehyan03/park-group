export default function CustomReels() {
  const reels = [
    "/videos/reel1.mp4",
    "/videos/reel2.mp4",
    "/videos/reel3.mp4",
    "/videos/reel4.mp4",
  ];

  return (
    <section className="bg-[#fef7d4] py-16">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-[#0a3c32] mb-12">
        Our Latest Moments 🎥✨
      </h2>

      {/* Reels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {reels.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-lg border border-[#0a3c32]/20 group"
          >
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Optional overlay effect */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
