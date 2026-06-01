import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Reveal } from "./Reveal";

import g1 from "@/assets/urva/gal-1.jpg";
import g2 from "@/assets/urva/gal-2.jpg";
import g3 from "@/assets/urva/gal-3.jpg";
import g4 from "@/assets/urva/gal-4.jpg";
import g5 from "@/assets/urva/gal-5.jpg";
import g6 from "@/assets/urva/gal-6.jpg";
import g7 from "@/assets/urva/gal-7.jpg";
import g8 from "@/assets/urva/gal-8.jpg";
import g9 from "@/assets/urva/gal-9.jpg";
import g10 from "@/assets/urva/gal-10.jpg";
import hero1 from "@/assets/urva/hero-festival.jpg";
import hero2 from "@/assets/urva/hero-concert.jpg";

type Cat = "Concerts" | "Weddings" | "Decor" | "Reels";

const ITEMS: { src: string; cat: Cat; caption: string; reel?: boolean }[] = [
  { src: g1, cat: "Weddings", caption: "Floral mandap, Vijayawada" },
  { src: g2, cat: "Concerts", caption: "Pyrotechnics — main stage" },
  { src: g3, cat: "Decor", caption: "Tablescape — ivory & gold" },
  { src: g4, cat: "Concerts", caption: "Club night production" },
  { src: g7, cat: "Reels", caption: "Stage moment", reel: true },
  { src: g5, cat: "Weddings", caption: "Golden-hour vows" },
  { src: g6, cat: "Decor", caption: "Fairy-light canopy" },
  { src: hero1, cat: "Concerts", caption: "Festival closing set" },
  { src: g8, cat: "Weddings", caption: "Sangeet performance" },
  { src: g10, cat: "Reels", caption: "Bride twirl reel", reel: true },
  { src: g9, cat: "Concerts", caption: "Lighting rig — blue hour" },
  { src: hero2, cat: "Concerts", caption: "Crowd of 5,000+" },
];

const FILTERS = ["All", "Concerts", "Weddings", "Decor", "Reels"] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, prev, next]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Recent work</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-cream">
            The <em className="text-gold-gradient not-italic">gallery</em>.
          </h2>
          <p className="mt-5 text-cream/70">A look at events we've designed and run lately.</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
                filter === f
                  ? "gold-gradient text-ink border-transparent"
                  : "border-gold/30 text-cream/80 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((item, i) => (
            <button
              key={item.src + i}
              onClick={() => setLightbox(i)}
              className="group relative mb-5 block w-full overflow-hidden rounded-[24px] border border-white/5 break-inside-avoid focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {item.reel && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-ink/80 backdrop-blur text-gold text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full border border-gold/40">
                  <Play className="w-3 h-3 fill-gold" /> REEL
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                <div>
                  <span className="text-gold text-[10px] tracking-widest uppercase">{item.cat}</span>
                  <p className="text-cream text-sm mt-1">{item.caption}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 text-cream/80 hover:text-gold p-2"
            aria-label="Close"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 p-3 rounded-full glass hover:text-gold"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <figure className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="max-h-[80vh] w-auto mx-auto rounded-2xl"
            />
            <figcaption className="text-center text-cream/80 text-sm mt-4">
              <span className="text-gold text-[10px] tracking-widest uppercase mr-3">
                {filtered[lightbox].cat}
              </span>
              {filtered[lightbox].caption}
            </figcaption>
          </figure>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 p-3 rounded-full glass hover:text-gold"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
