export function HeroSection() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* diagonal color blocks */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0f0f0f]" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#c8121b] diagonal-clip-reverse" />
        <div className="absolute top-0 right-[38%] w-[4%] h-full bg-white diagonal-clip-reverse opacity-90" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="animate-fade-up">
          <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4">
            Helena-West Helena City Council
          </p>
          <h1 className="font-display text-6xl sm:text-7xl leading-[0.95] mb-2 text-shadow-strong">
            DR. ONIKA
            <br />
            SHIRLEY
          </h1>
          <p className="text-2xl font-display text-[#e8b4b4] mb-6">a.k.a. &quot;Dr. O&quot;</p>
          <p className="text-lg text-white/80 mb-8 max-w-md">
            Ward 2, Position 2 At Large. Nearly 20 years of supply chain
            leadership, a lifetime of service — bringing real solutions to
            Helena-West Helena.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#platform"
              className="bg-[#c8121b] hover:bg-[#a30f16] transition-colors px-8 py-3 font-display text-lg rounded-sm"
            >
              See The Platform
            </a>
            <a
              href="#contact"
              className="border border-white/40 hover:border-white transition-colors px-8 py-3 font-display text-lg rounded-sm"
            >
              Get Involved
            </a>
          </div>
          <p className="mt-10 font-display text-xl tracking-wide text-white/60">
            ACTION SPEAKS VOLUME.
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-sm overflow-hidden border-4 border-white/20 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://galaxy-prod.tlcdn.com/gen/4c94f19f04804b97b97cc90ed6126baf.png"
              alt="Dr. Onika Shirley"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
