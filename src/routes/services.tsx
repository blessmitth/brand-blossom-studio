import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Prymesphere Recruitment" },
      { name: "description", content: "Retained executive search, board advisory, interim leadership, RPO, talent strategy, and employer brand consulting." },
      { property: "og:title", content: "Services | Prymesphere Recruitment" },
      { property: "og:description", content: "Six disciplines. One standard of execution." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-12 gradient-navy text-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            light
            eyebrow="Our Services"
            title={<>The full <span className="italic gradient-gold-text">spectrum</span> of leadership talent.</>}
            intro="From CEO succession to interim transformation, Prymesphere is structured to meet enterprise leadership needs end to end."
          />
        </div>
      </section>
      <Services />
      <Process />
      <CTABanner />
    </>
  );
}
