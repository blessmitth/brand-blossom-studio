export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${
        light ? "text-white" : ""
      }`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-rule" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className={`font-serif text-4xl md:text-5xl leading-[1.1] ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-platinum/80" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
