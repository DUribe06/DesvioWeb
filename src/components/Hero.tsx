export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-desvio-black via-desvio-black/95 to-desvio-black" />

      {/* Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-desvio-red to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Brand tagline small */}
        <p className="font-body text-xs tracking-[0.3em] uppercase text-desvio-concrete mb-6">
          Streetwear — Independent — Urban
        </p>

        {/* Main headline */}
        <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-desvio-white mb-2">
          NOT MADE
        </h1>
        <h1 className="font-headline text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-desvio-white mb-8">
          <span className="text-desvio-red">TO</span> FOLLOW
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg md:text-xl text-desvio-concrete max-w-xl mx-auto mb-12 leading-relaxed">
          We are DESVÍO. We take another way.
        </p>

        {/* CTA Button */}
        <a
          href="#drop-001"
          className="inline-block font-body text-sm tracking-[0.2em] uppercase px-10 py-4 bg-desvio-red text-desvio-white hover:bg-desvio-white hover:text-desvio-black transition-all duration-300 border-2 border-desvio-red"
        >
          Drop 001 — Pre-sale
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-desvio-concrete/50">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-desvio-concrete/50 to-transparent" />
      </div>
    </section>
  );
}
