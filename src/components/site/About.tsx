import aboutImg from "@/assets/urva/about.jpg";
import { Reveal } from "./Reveal";


export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative rounded-[28px] overflow-hidden">
            <img
              src={aboutImg}
              alt="Urva Events team setting up a luxury ballroom"
              className="w-full h-[560px] object-cover"
              loading="lazy"
              width={1200}
              height={1400}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/40 rounded-[28px] pointer-events-none" />
          </div>
          <div className="absolute -inset-3 -z-10 rounded-[36px] bg-gradient-to-tr from-gold/30 via-plum/20 to-transparent blur-2xl" />
          <div className="hidden md:block absolute -bottom-6 bg-gradient-to-tr -right-6 glass rounded-2xl px-5 py-4">
            <p className="text-xs text-yellow-900/60 uppercase tracking-widest">Based in</p>
            <p className="font-display text-2xl text-yellow-700">Vijayawada</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">About Urva</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-cream leading-tight">
              A full-service event <em className="text-gold-gradient not-italic">powerhouse</em> for moments that matter.
            </h2>
            <p className="mt-6 text-cream/70 text-base sm:text-lg leading-relaxed">
              From intimate haldi mornings to thousand-strong corporate galas, Urva Events
              designs, produces and runs experiences end-to-end. Decor, sound, lighting,
              artist management, hospitality — one team, one accountable point of contact,
              and a stubborn attention to detail.
            </p>
            <p className="mt-6 text-cream/70 text-base sm:text-lg leading-relaxed">
              We believe every event tells a story — and our job is to make yours unforgettable. Whether it's a DJ night that keeps the energy pulsing until dawn, a wedding that blends tradition with cinematic flair, or a birthday celebration that feels plucked from a dream, we pour the same passion into every project. Our Vijayawada-based crew works tirelessly behind the scenes, coordinating vendors, managing timelines, and troubleshooting before problems ever reach you.
            </p>
            <p className="mt-6 text-cream/70 text-base sm:text-lg leading-relaxed">
              What sets us apart isn't just our gear or our playlists — it's the way we listen. We start every partnership with a conversation, not a proposal, learning your vision, your budget, and your non-negotiables. Then we build backward from there, crafting a seamless production where every light cue, song transition, and floral arrangement lands exactly as it should. No surprises. No shortcuts. Just the event you imagined — and a few magical moments you never saw coming.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
