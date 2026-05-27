import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABanner } from "@/components/site/CTABanner";
import { Banknote, Cpu, HeartPulse, Factory, ShoppingBag, Zap, Building, Scale } from "lucide-react";

const industries = [
  { icon: Banknote, t: "Financial Services", d: "Banking, asset management, private equity, fintech." },
  { icon: Cpu, t: "Technology & SaaS", d: "Enterprise software, AI, cloud infrastructure, cybersecurity." },
  { icon: HeartPulse, t: "Healthcare & Life Sciences", d: "Pharma, biotech, medical devices, healthcare services." },
  { icon: Factory, t: "Industrial & Manufacturing", d: "Advanced manufacturing, aerospace, automotive, materials." },
  { icon: ShoppingBag, t: "Consumer & Retail", d: "Luxury, FMCG, e-commerce, hospitality." },
  { icon: Zap, t: "Energy & Resources", d: "Renewables, oil & gas, mining, utilities." },
  { icon: Building, t: "Real Estate & Infrastructure", d: "REITs, development, infrastructure funds." },
  { icon: Scale, t: "Professional Services", d: "Consulting, legal, accounting, advisory." },
];

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Prymesphere Recruitment" },
      { name: "description", content: "Sector-specialised executive search across financial services, technology, healthcare, industrials, consumer, energy, and more." },
      { property: "og:title", content: "Industries We Serve | Prymesphere" },
      { property: "og:description", content: "Deep sector expertise across global industries." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <section className="pt-40 pb-12 gradient-navy text-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            light
            eyebrow="Industries"
            title={<>Sector fluency that <span className="italic gradient-gold-text">earns</span> the brief.</>}
            intro="Our partners are former operators and search specialists with deep networks in the industries that define the global economy."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {industries.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-background p-8 hover:bg-secondary/50 transition-colors group">
              <Icon className="w-8 h-8 text-gold mb-5" strokeWidth={1.2} />
              <h3 className="font-serif text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
