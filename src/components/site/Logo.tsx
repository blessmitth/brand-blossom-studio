import logo from "@/assets/logo.png";

export function Logo({ withText = true, size = 44 }: { withText?: boolean; size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative rounded-full overflow-hidden ring-1 ring-gold/40 shadow-[0_4px_20px_rgba(212,175,55,0.25)] bg-navy-deep flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <img
          src={logo}
          alt="Prymesphere Recruitment crest"
          className="w-[120%] h-[120%] object-cover"
          style={{ objectPosition: "center 55%" }}
        />
      </div>
      {withText && (
        <div className="leading-tight">
          <div className="font-serif text-[15px] tracking-[0.22em] uppercase text-foreground">
            Prymesphere
          </div>
          <div className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-light">
            Recruitment
          </div>
        </div>
      )}
    </div>
  );
}
