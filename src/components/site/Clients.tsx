const logos = [
  "MERIDIAN", "ASHCROFT & CO", "NORTHBRIDGE", "VALENCIA HOLDINGS",
  "KENSINGTON LABS", "AURELIA GROUP", "BLACKWOOD CAPITAL", "OSLO DYNAMICS",
];

export function Clients() {
  return (
    <section className="py-20 bg-navy-deep text-white border-y border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs tracking-[0.35em] uppercase text-platinum/60 mb-12">
          Trusted by leadership teams worldwide
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-navy-deep to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-navy-deep to-transparent z-10" />
        <div className="flex marquee w-max">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="px-12 font-serif text-xl tracking-[0.2em] text-platinum/60 whitespace-nowrap">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
