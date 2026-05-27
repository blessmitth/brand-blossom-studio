import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Prymesphere Recruitment" },
      { name: "description", content: "A global retained search firm built on discretion, conviction, and a generation of experience placing exceptional leaders." },
      { property: "og:title", content: "About Prymesphere Recruitment" },
      { property: "og:description", content: "Discretion, conviction, exceptional leaders." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="pt-40 pb-24 gradient-navy text-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            light
            eyebrow="The Firm"
            title={<>A search firm built for the <span className="italic gradient-gold-text">consequential</span> hire.</>}
            intro="Founded by veteran search partners from the world's leading consultancies, Prymesphere exists for the appointments that shape the next decade — not the next quarter."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-3xl mb-4">Our conviction</h3>
            <p className="text-muted-foreground leading-relaxed">
              The right leader compounds value across an entire enterprise. The wrong one
              destroys it. We exist because that decision deserves a firm that treats
              it with the gravity it warrants — and the discretion it demands.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-3xl mb-4">Our standard</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every Prymesphere mandate is led by a partner with deep sector fluency,
              two decades of placement experience, and direct accountability to the
              board or chief executive who commissioned the search.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["1,200+","Placements"],["38","Countries"],["94%","24-month retention"],["18yrs","Avg partner tenure"]].map(([n,l])=>(
            <div key={l}>
              <div className="font-serif text-4xl md:text-5xl gradient-gold-text">{n}</div>
              <div className="mt-2 text-xs tracking-[0.25em] uppercase text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
