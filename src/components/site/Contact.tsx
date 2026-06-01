import { Phone, Mail, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-cream leading-tight">
            Let's plan your <em className="text-gold-gradient not-italic">event</em>.
          </h2>
          <p className="mt-5 text-cream/70 max-w-md">
            Walk in, call us, or send a quick note. We're based in Vijayawada and work across Andhra Pradesh.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-4">
              <span className="glass w-12 h-12 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cream/55">Phone</p>
                <a href="tel:+917794990721" className="text-cream hover:text-gold text-lg font-medium">
                  +91 77949 90721
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="glass w-12 h-12 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cream/55">Email</p>
                <a href="mailto:info.urvaevents@gmail.com" className="text-cream hover:text-gold text-lg font-medium break-all">
                  info.urvaevents@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="glass w-12 h-12 rounded-2xl flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-cream/55">Office</p>
                <p className="text-cream text-lg font-medium">Tailor St, Kothapet</p>
                <p className="text-cream/70">Vijayawada — 520001</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[28px] overflow-hidden border border-gold/20 h-[460px]">
            <iframe
              title="Urva Events — Kothapet, Vijayawada"
              src="https://www.google.com/maps?q=Kothapet,+Vijayawada,+Andhra+Pradesh+520001&output=embed"
              className="w-full h-full grayscale-[0.4] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
