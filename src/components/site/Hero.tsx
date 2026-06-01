import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight, ChevronDown } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import heroConcert from "@/assets/urva/hero-concert.jpg";
import heroHaldi from "@/assets/urva/hero-haldi.jpg";
import heroDj from "@/assets/urva/hero-dj.jpg";
import heroFestival from "@/assets/urva/hero-festival.jpg";

const SLIDES = [
  { src: heroConcert, alt: "Concert crowd under golden stage lights" },
  { src: heroHaldi, alt: "Indian haldi ceremony with marigold petals" },
  { src: heroDj, alt: "DJ booth with laser light show" },
  { src: heroFestival, alt: "Outdoor festival crowd with confetti" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      ref.current?.classList.add("in-view");
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{ clickable: true }}
          className="hero-swiper h-full w-full"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Main Black Overlay */}
        <div className="absolute inset-0 bg-black/70 z-[1]" />

        {/* Luxury Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/85 z-[2]" />

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.55)_100%)] z-[3]" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-5 pt-32 pb-24">
        <div ref={ref} className="reveal max-w-5xl mx-auto">
          <span className="inline-flex items-center gap-3 glass rounded-full px-5 py-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-cream/90 font-medium">
            Luxury
            <span className="text-gold">•</span>
            Energy
            <span className="text-gold">•</span>
            Experiences
          </span>

          <h1 className="mt-8 font-display text-[clamp(2.8rem,6.5vw,6rem)] leading-[1.05] text-cream font-medium">
            Where Every Event
            <br />
            Becomes a{" "}
            <em className="text-gold-gradient not-italic font-semibold relative">
              Memory
              <span className="absolute -bottom-2 left-0 right-0 h-[3px] gold-gradient rounded-full opacity-80" />
            </em>
            .
          </h1>

          <p className="mt-7 max-w-3xl mx-auto text-cream/80 text-base sm:text-lg leading-relaxed">
            Premium event planning & production from Vijayawada — DJ concerts,
            weddings, haldi, mehendi, birthdays, theme parties and corporate
            galas, executed flawlessly.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 gold-gradient text-ink font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_12px_40px_-12px_rgba(212,175,55,0.7)]"
            >
              Book Your Event
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-gold/70 text-gold hover:bg-gold hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold"
            >
              Explore Events
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream/60 hover:text-gold transition-colors"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>

        <div className="w-6 h-10 rounded-full border border-cream/30 flex items-start justify-center pt-2 relative overflow-hidden">
          <span className="w-1 h-1.5 bg-gold rounded-full scroll-dot" />
        </div>

        <ChevronDown className="w-4 h-4" />
      </a>
    </section>
  );
}