import { useState } from "react";
import employers from "@/assets/employers.jpg";
import candidates from "@/assets/candidates.jpg";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";

const data = {
  employers: {
    image: employers,
    eyebrow: "For Employers",
    title: "Search with conviction.",
    body: "When the brief is uncompromising, generic recruiters fall short. We run discreet, retained mandates that bring you the leaders most firms cannot reach.",
    bullets: [
      "Retained C-suite & board search",
      "Bespoke shortlists, never databases",
      "Confidential market mapping",
      "Onboarding & 24-month retention support",
    ],
    cta: "Commission a search",
  },
  candidates: {
    image: candidates,
    eyebrow: "For Candidates",
    title: "Career moves, considered.",
    body: "We represent senior operators whose next chapter must be deliberate. Every introduction is hand-curated, confidential, and made on your terms.",
    bullets: [
      "C-suite & board introductions",
      "Long-horizon career partnership",
      "Total discretion, always",
      "Compensation & transition advisory",
    ],
    cta: "Submit your profile",
  },
};

export function DualAudience() {
  const [tab, setTab] = useState<"employers" | "candidates">("employers");
  const d = data[tab];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Two Audiences. One Standard."
          title={<>Whether you're <span className="italic gradient-gold-text">hiring</span> or being hired —<br/>we move at the height of your ambition.</>}
          align="center"
        />

        <div className="mt-12 flex justify-center">
          <div className="inline-flex border border-border p-1">
            {(["employers", "candidates"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-7 py-3 text-xs tracking-[0.25em] uppercase font-bold transition-colors ${
                  tab === t
                    ? "bg-navy-deep text-white"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center fade-up">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={d.image} alt="" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-gold" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">{d.eyebrow}</span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight">{d.title}</h3>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{d.body}</p>
            <ul className="mt-8 space-y-4">
              {d.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 mt-0.5 grid place-items-center border border-gold/50 text-gold shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-foreground/85">{b}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-navy-deep border-b-2 border-gold pb-2 hover:gap-5 transition-all"
            >
              {d.cta} <ArrowRight size={16} className="text-gold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
