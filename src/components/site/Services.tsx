import { Reveal } from "./Reveal";
import dj from "@/assets/urva/hero-dj.jpg";
import wedding from "@/assets/urva/svc-wedding.jpg";
import haldi from "@/assets/urva/svc-haldi.jpg";
import mehendi from "@/assets/urva/svc-mehendi.jpg";
import birthday from "@/assets/urva/svc-birthday.jpg";
import anniversary from "@/assets/urva/svc-anniversary.jpg";
import theme from "@/assets/urva/svc-theme.jpg";
import corporate from "@/assets/urva/svc-corporate.jpg";

const SERVICES = [
  { n: "01", title: "DJ Concerts", desc: "Full production — sound, lasers, stage, artist management.", img: dj },
  { n: "02", title: "Weddings", desc: "Mandap to reception, every ritual styled and run beautifully.", img: wedding },
  { n: "03", title: "Haldi", desc: "Warm marigold mornings styled for the camera and the memory.", img: haldi },
  { n: "04", title: "Mehendi", desc: "Intimate setups with traditional decor and live music.", img: mehendi },
  { n: "05", title: "Birthdays", desc: "Sparklers, themes and surprises for every age.", img: birthday },
  { n: "06", title: "Anniversaries", desc: "Curated romantic settings — candlelight, roses, you.", img: anniversary },
  { n: "07", title: "Theme Parties", desc: "Concept, decor, costume cues — wholly immersive worlds.", img: theme },
  { n: "08", title: "Corporate Events", desc: "AV, staging, hospitality for galas and product launches.", img: corporate },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">What we craft</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-cream leading-tight">
            Eight signature <em className="text-gold-gradient not-italic">experiences</em>.
          </h2>
          <p className="mt-5 text-cream/70">
            Each category is a discipline. We design, build and run them so you can be a guest at your own event.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className="group relative h-[380px] rounded-[28px] overflow-hidden border border-white/5 hover:border-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(212,175,55,0.35)]">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <span className="font-display text-gold text-sm tracking-widest">{s.n}</span>
                  <div>
                    <h3 className="font-display text-2xl text-cream">{s.title}</h3>
                    <p className="mt-2 text-sm text-cream/70 leading-relaxed">{s.desc}</p>
                    <div className="mt-4 h-px w-10 bg-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
