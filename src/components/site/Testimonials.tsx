import { SectionHeading } from "./SectionHeading";
import { Quote } from "lucide-react";

const items = [
  {
    q: "Prymesphere delivered a CEO shortlist that genuinely raised the ambition of our board. Their judgment shaped the search as much as the candidates did.",
    n: "Margaret Holloway",
    r: "Chair, FTSE 100 Industrials Group",
  },
  {
    q: "The most discreet, intellectually rigorous search firm we have ever engaged. They understood the role before we fully did.",
    n: "Daniel Acheson",
    r: "Managing Partner, Sovereign Capital Partners",
  },
  {
    q: "Two years on, every leader they placed is still with us — and three are now on the executive committee. That is the only metric that matters.",
    n: "Reiko Tanaka",
    r: "Group CHRO, Multinational Technology Firm",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="In Their Words"
          title={<>Trusted at the highest <span className="italic gradient-gold-text">tables</span>.</>}
          align="center"
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure
              key={t.n}
              className="bg-secondary/50 p-10 border-t-2 border-gold relative flex flex-col"
            >
              <Quote className="w-10 h-10 text-gold mb-6" fill="currentColor" strokeWidth={0} />
              <blockquote className="font-serif text-lg leading-relaxed text-foreground flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{t.n}</div>
                <div className="text-xs text-muted-foreground tracking-wide mt-1">{t.r}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
