import { SectionHeading } from "./SectionHeading";
import { Crown, Compass, Users, Briefcase, LineChart, Building2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Retained Executive Search",
    desc: "Discreet, dedicated search for CEO, C-suite, and board appointments at enterprises that cannot afford a wrong hire.",
  },
  {
    icon: Building2,
    title: "Board & Advisory Practice",
    desc: "Independent directors, board chairs, and advisory council members for public companies and PE-backed boards.",
  },
  {
    icon: Compass,
    title: "Interim Leadership",
    desc: "Battle-tested operators deployed in 14 days for turnaround, transformation, and transition mandates.",
  },
  {
    icon: Users,
    title: "Recruitment Process Outsourcing",
    desc: "End-to-end ownership of senior hiring for high-growth scale-ups and Fortune 500 talent functions.",
  },
  {
    icon: LineChart,
    title: "Workforce & Talent Strategy",
    desc: "Succession planning, org design, and competitive talent intelligence for boards and CHROs.",
  },
  {
    icon: Briefcase,
    title: "Employer Brand Advisory",
    desc: "Positioning your firm as a destination for the leaders the rest of the market is also chasing.",
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What We Do"
          title={<>A complete <span className="italic gradient-gold-text">leadership</span> practice.</>}
          intro="Six disciplines, one standard of execution. Each engagement is led by a partner with a generation of experience in your industry."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-background p-9 transition-colors hover:bg-navy-deep relative cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <Icon className="w-9 h-9 text-gold mb-6 group-hover:scale-110 transition-transform" strokeWidth={1.2} />
              <h3 className="font-serif text-2xl mb-3 text-foreground group-hover:text-white transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-platinum/80 transition-colors">
                {desc}
              </p>
              <ArrowUpRight className="mt-8 w-5 h-5 text-foreground/40 group-hover:text-gold transition-all group-hover:rotate-12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
