import { Instagram as IgIcon, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { INSTAGRAM_URL } from "@/lib/whatsapp";

import i1 from "@/assets/urva/ig-1.jpg";
import i2 from "@/assets/urva/ig-2.jpg";
import i3 from "@/assets/urva/ig-3.jpg";
import i4 from "@/assets/urva/ig-4.jpg";
import i5 from "@/assets/urva/ig-5.jpg";
import i6 from "@/assets/urva/ig-6.jpg";

const TILES = [i1, i2, i3, i4, i5, i6];

export function InstagramSection() {
  return (
    <section id="instagram" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-3 text-gold">
            <IgIcon className="w-5 h-5" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display italic text-2xl hover:underline underline-offset-4"
            >
              @urva_events
            </a>
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-cream">
            Follow the <em className="text-gold-gradient not-italic">feed</em>.
          </h2>
          <p className="mt-4 text-cream/70 max-w-xl mx-auto">
            Behind the scenes, latest reels, and tomorrow's events from our team.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">
          {TILES.map((src, i) => (
            <Reveal key={src} delay={i * 50}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-[20px] border border-white/5"
              >
                <img
                  src={src}
                  alt={`Urva Events Instagram post ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <IgIcon className="w-8 h-8 text-gold" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-ink font-semibold px-7 py-3.5 rounded-full hover:scale-[1.03] transition-transform"
          >
            Follow @urva_events <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
