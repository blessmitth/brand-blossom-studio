import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className={`shrink-0 ${scrolled ? "" : "[&_*]:!text-white"}`}><Logo /></Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm tracking-wide hover:text-gold transition-colors font-medium ${scrolled ? "text-foreground/80" : "text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]"}`}
              activeProps={{ className: "!text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className={`text-xs tracking-[0.2em] uppercase px-5 py-3 border hover:border-gold hover:text-gold transition-colors ${scrolled ? "border-foreground/20 text-foreground" : "border-white/40 text-white"}`}
          >
            For Candidates
          </Link>
          <Link
            to="/contact"
            className={`text-xs tracking-[0.2em] uppercase px-5 py-3 transition-colors ${scrolled ? "bg-navy-deep text-white hover:bg-gold hover:text-navy-deep" : "bg-gold text-navy-deep hover:bg-gold-soft"}`}
          >
            For Employers
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border mt-3">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide text-foreground/80 py-2"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.2em] uppercase px-5 py-3 bg-navy-deep text-white text-center mt-2"
            >
              Engage Prymesphere
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
