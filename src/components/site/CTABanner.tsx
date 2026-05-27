import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-navy-deep text-white relative">
      <div className="gold-divider" />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="gold-rule" />
          <span className="text-xs tracking-[0.35em] uppercase text-gold">A defining engagement awaits</span>
          <span className="gold-rule" />
        </div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] text-balance">
          Ready to transform your
          <br />
          <span className="italic gradient-gold-text">leadership team?</span>
        </h2>
        <p className="mt-6 text-lg text-platinum/80 max-w-2xl mx-auto">
          A confidential conversation with a Prymesphere partner — without obligation, without delay.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-gold text-navy-deep px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-gold-soft transition-colors"
          >
            Engage Prymesphere <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:border-gold hover:text-gold transition-colors"
          >
            Submit Your Profile
          </Link>
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
}
