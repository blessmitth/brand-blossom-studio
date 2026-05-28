import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Prymesphere Recruitment" },
      { name: "description", content: "Begin a confidential conversation with a Prymesphere partner. Offices in London, New York, Singapore, and Dubai." },
      { property: "og:title", content: "Contact Prymesphere Recruitment" },
      { property: "og:description", content: "Confidential. Direct. Without obligation." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="pt-40 pb-12 gradient-navy text-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            light
            eyebrow="Begin the Conversation"
            title={<>Discretion is the <span className="italic gradient-gold-text">first</span> deliverable.</>}
            intro="Whether commissioning a search or considering your next chapter, a partner will respond personally within one business day."
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-10">
            {[
              { Icon: Mail, t: "Email", d: "talent@prymesphere.com" },
              { Icon: Phone, t: "WhatsApp", d: "+1 539 230 9068" },
              { Icon: MapPin, t: "Location", d: "Global" },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="flex gap-5">
                <div className="w-12 h-12 grid place-items-center border border-gold/50 text-gold shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1">{t}</div>
                  <div className="font-serif text-xl">{d}</div>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-border">
              <h4 className="font-serif text-2xl mb-3">A standing offer.</h4>
              <p className="text-muted-foreground leading-relaxed">
                Every senior leader is welcome to a confidential, off-the-record conversation
                with one of our partners. Reach out when the moment is right.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 bg-secondary/40 p-10 border-t-2 border-gold space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Full name" name="name" />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">I am</label>
              <select className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm">
                <option>An employer commissioning a search</option>
                <option>An executive open to introductions</option>
                <option>A board considering succession</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm"
                placeholder="A few lines about your situation, in confidence."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy-deep text-white px-8 py-4 text-xs tracking-[0.25em] uppercase font-bold hover:bg-gold hover:text-navy-deep transition-colors"
            >
              {sent ? "Thank you — a partner will be in touch" : "Send confidentially"}
            </button>
            <p className="text-xs text-muted-foreground">
              All correspondence is held in the strictest confidence.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        className="w-full bg-transparent border border-border focus:border-gold outline-none px-4 py-3 text-sm"
      />
    </div>
  );
}
