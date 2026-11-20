export default function Footer() {
  return (
    <footer className="border-t border-desvio-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-headline text-2xl font-bold tracking-widest text-desvio-white mb-1">
            WE ARE DESVÍO
          </p>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-desvio-concrete/50">
            Not Made to Follow
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="font-body text-xs tracking-[0.15em] uppercase text-desvio-concrete/50 hover:text-desvio-red transition-colors duration-200"
          >
            Instagram
          </a>
          <a
            href="#"
            className="font-body text-xs tracking-[0.15em] uppercase text-desvio-concrete/50 hover:text-desvio-red transition-colors duration-200"
          >
            TikTok
          </a>
          <a
            href="#"
            className="font-body text-xs tracking-[0.15em] uppercase text-desvio-concrete/50 hover:text-desvio-red transition-colors duration-200"
          >
            Twitter
          </a>
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-desvio-concrete/30">
          &copy; 2026 DESVÍO®. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
