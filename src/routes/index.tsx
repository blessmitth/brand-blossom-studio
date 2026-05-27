import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { DualAudience } from "@/components/site/DualAudience";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prymesphere Recruitment | Global Executive Search" },
      { name: "description", content: "Retained executive search firm placing C-suite and board-level leaders at the world's most ambitious enterprises." },
      { property: "og:title", content: "Prymesphere Recruitment | Global Executive Search" },
      { property: "og:description", content: "Retained executive search for visionary leaders." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Clients />
      <DualAudience />
      <Services />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  );
}
