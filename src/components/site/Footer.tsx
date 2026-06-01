import { Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pt-16 pb-10 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <Logo />
          <p className="mt-4 text-cream/65 text-sm max-w-xs italic font-display">
            Where every event becomes a memory.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Explore</p>
          <ul className="mt-4 space-y-2 text-cream/75">
            <li><a href="#home" className="hover:text-gold">Home</a></li>
            <li><a href="#services" className="hover:text-gold">Services</a></li>
            <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
            <li><a href="#book" className="hover:text-gold">Book</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-semibold">Office</p>
          <p className="mt-4 text-cream/75 text-sm">
            Tailor St, Kothapet<br />
            Vijayawada — 520001<br />
            Andhra Pradesh, India
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="glass w-10 h-10 rounded-full flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="glass w-10 h-10 rounded-full flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/55">
        <p>© 2026 Urva Event Planners — Where every event becomes a memory.</p>
        <p>Vijayawada, India</p>
      </div>
    </footer>
  );
}
