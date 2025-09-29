import Image from "next/image";

export default function TheManBehindSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-center px-6">
        {/* Highlighted Person (Lateef) */}
        <div className="relative w-[320px] h-[420px] overflow-hidden flex-shrink-0 ">
          <Image
            src="/images/man.png"
            alt="Lateef Park, Founder of Park Group"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Lateef Content */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#133427]">
            The Visionary Behind Park Group
          </h2>

          <p className="text-lg text-[#1e3624] mb-6 leading-relaxed">
            <span className="font-semibold text-[#19523d]">Lateef Park</span> is
            the driving force and creative heart behind Park Group. With over 20
            years of leadership and entrepreneurial experience spanning multiple
            industries, he brings a unique blend of innovation, tradition, and
            relentless pursuit of excellence to every venture.
          </p>

          <p className="text-lg text-[#1e3624] mb-8 leading-relaxed">
            Guided by his unwavering commitment to excellence, Lateef Park has
            built a team that shares his passion for service, innovation, and
            growth. His leadership inspires everyone at Park Group to go the
            extra mile, ensuring that each client receives not just a service,
            but a memorable experience.
          </p>

          {/* Lateef Details */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div>
              <p className="font-semibold text-[#133427] text-xl mb-1">
                Lateef Park
              </p>
              <span className="text-base text-[#19523d]">
                Managing Director
              </span>
              <p className="text-sm text-[#19523d] mt-1">📞 9048 012 292</p>
            </div>
            <div className="flex gap-3 mt-2 sm:mt-0">
              <span className="inline-block bg-[#19523d]/10 text-[#19523d] font-semibold px-4 py-2 rounded-full shadow">
                20+ Years Experience
              </span>
              <span className="inline-block bg-[#19523d]/10 text-[#19523d] font-semibold px-4 py-2 rounded-full shadow">
                Innovator
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-center text-[#133427] mt-20">
        Partners in Malappuram
      </h1>
      {/* Other Partners */}
      <div className="max-w-5xl mx-auto mt-20 px-6 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-[#133427] mb-2">
            Noushad Moopen
          </h3>
          <p className="text-[#1e3624] leading-relaxed text-base">
            With over 14 years in the kitchen & bakery industry and 10 years in
            catering and event management, Mr. Noushad brings unmatched
            expertise and passion to Park Event Management.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#133427] mb-2">Hussain</h3>
          <p className="text-[#1e3624] leading-relaxed text-base">
            Mr. Hussain, an experienced ex-chef in the GCC and bakery
            specialist, brings creativity and depth of knowledge that enriches
            Park Event Management’s offerings.
          </p>
        </div>
      </div>
    </section>
  );
}
