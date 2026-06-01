import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const T = [
  {
    q: "Flawless execution for our 1200+ guest corporate gala. Urva handled AV, staging and artist management impeccably.",
    name: "Meera Krishnan",
    role: "VP Marketing",
  },
  {
    q: "The DJ night production was unreal — lasers, sound, vibe. Our club had record footfall that night.",
    name: "Suresh Iyer",
    role: "Echo Lounge",
  },
  {
    q: "Our wedding was a dream. Every detail from mandap to mehendi was perfectly curated.",
    name: "Anjali & Rohan",
    role: "Wedding, 2025",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Loved by clients</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-cream">
            Words that <em className="text-gold-gradient not-italic">matter</em>.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {T.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="glass rounded-[28px] p-8 h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold mb-5" />
                <blockquote className="text-cream/85 font-display italic text-lg leading-relaxed flex-1">
                  "{t.q}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-gold/15">
                  <p className="text-cream font-medium">{t.name}</p>
                  <p className="text-cream/60 text-sm">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
