import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", t: "Discovery", d: "A confidential briefing with your board or executive team to define the mandate, success criteria, and cultural imperatives." },
  { n: "02", t: "Market Mapping", d: "We map the entire universe of qualified leaders — visible and invisible — across geographies, sectors, and adjacent industries." },
  { n: "03", t: "Engagement", d: "Senior partners personally approach each candidate. No databases, no automation, no compromise on discretion." },
  { n: "04", t: "Shortlist", d: "A curated slate of three to five exceptional candidates, each presented with depth of insight, references, and rigorous assessment." },
  { n: "05", t: "Placement & Onboarding", d: "We shepherd the offer, the transition, and the first 24 months — because the placement is the beginning, not the end." },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 gradient-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          light
          eyebrow="Our Method"
          title={<>A search worthy of the <span className="italic gradient-gold-text">decision</span>.</>}
          intro="Every Prymesphere mandate follows a disciplined five-stage process, designed to find the right leader — not the available one."
        />

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-gold/30 hidden lg:block" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="hidden lg:block absolute left-0 top-12 w-3 h-3 bg-gold rounded-full ring-4 ring-navy-deep -translate-y-1/2" />
                <div className="font-serif text-5xl text-gold mb-4">{s.n}</div>
                <h3 className="font-serif text-xl mb-3 text-white">{s.t}</h3>
                <p className="text-sm text-platinum/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
