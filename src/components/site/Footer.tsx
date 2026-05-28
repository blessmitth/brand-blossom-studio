import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "+1 539 230 9068";
const WHATSAPP_HREF = "https://wa.me/15392309068";
const EMAIL = "partners@prymesphere.com";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="[&_*]:!text-white"><Logo /></div>
          <p className="text-sm text-platinum/80 max-w-sm leading-relaxed">
            A global retained executive search firm placing visionary leaders at the
            world's most ambitious enterprises.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${WHATSAPP_NUMBER}`}
              className="w-10 h-10 grid place-items-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label={`Email ${EMAIL}`}
              className="w-10 h-10 grid place-items-center border border-white/20 hover:border-gold hover:text-gold transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Firm</h4>
          <ul className="space-y-3 text-sm text-platinum/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/industries" className="hover:text-gold">Industries</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">Practice</h4>
          <ul className="space-y-3 text-sm text-platinum/80">
            <li>Executive Search</li>
            <li>Board Advisory</li>
            <li>Interim Leadership</li>
            <li>Talent Strategy</li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-5">
            Executive Briefings
          </h4>
          <p className="text-sm text-platinum/80 mb-4">
            Quarterly intelligence on leadership and talent markets.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-white/20 focus-within:border-gold transition-colors"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent px-4 py-3 text-sm placeholder:text-platinum/50 outline-none"
            />
            <button className="px-5 text-xs uppercase tracking-[0.2em] bg-gold text-navy-deep hover:bg-gold-soft transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-platinum/60">
          <p>© {new Date().getFullYear()} Prymesphere Recruitment. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
