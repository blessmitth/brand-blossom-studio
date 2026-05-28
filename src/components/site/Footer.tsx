import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.11 4.91A10.06 10.06 0 0 0 12.04 2C6.58 2 2.14 6.44 2.14 11.9c0 1.74.46 3.44 1.32 4.94L2 22l5.32-1.4a9.9 9.9 0 0 0 4.72 1.2h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.84-6.99zM12.04 20.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.16.83.84-3.08-.2-.32a8.21 8.21 0 0 1-1.26-4.33c0-4.54 3.7-8.23 8.27-8.23 2.21 0 4.28.86 5.84 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.22-8.26 8.22zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.04-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.48-.01-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z"/>
    </svg>
  );
}


const WHATSAPP_NUMBER = "+1 539 230 9068";
const WHATSAPP_HREF = "https://wa.me/15392309068";
const EMAIL = "talent@prymesphere.com";

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
              <WhatsAppIcon size={16} />
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
