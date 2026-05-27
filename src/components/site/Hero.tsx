import hero from "@/assets/hero.jpg";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
      <div className="absolute inset-0">
        <img src={hero} alt="" className="w-full h-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/60 to-navy-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 fade-up">
            <span className="gold-rule" />
            <span className="text-xs tracking-[0.35em] uppercase text-gold">
              Global Executive Search
            </span>
          </div>

          <h1 className="font-serif text-white text-5xl md:text-7xl leading-[1.05] text-balance fade-up" style={{ animationDelay: "0.1s" }}>
            Where extraordinary
            <br />
            leaders <span className="gradient-gold-text italic">find</span> their
            <br />
            defining chapter.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-platinum/85 max-w-2xl leading-relaxed fade-up" style={{ animationDelay: "0.25s" }}>
            Prymesphere is a retained executive search firm placing visionary
            C-suite and board-level talent at the world's most ambitious enterprises —
            with discretion, precision, and conviction.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 fade-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold text-navy-deep px-7 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-gold-soft transition-colors"
            >
              Engage Prymesphere
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-7 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:border-gold hover:text-gold transition-colors"
            >
              Submit Your Profile
            </Link>
          </div>
        </div>

        {/* Stats inline */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl fade-up" style={{ animationDelay: "0.55s" }}>
          {[
            ["1,200+", "Executive placements"],
            ["38", "Countries served"],
            ["94%", "Retention at 24 months"],
            ["Fortune 500", "Trusted partners"],
          ].map(([n, l]) => (
            <div key={l} className="border-l border-gold/40 pl-5">
              <div className="font-serif text-3xl md:text-4xl text-white">{n}</div>
              <div className="text-xs text-platinum/70 mt-1 tracking-wide">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.4em] uppercase text-platinum/60">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  );
}
