# Urva Events

**Where Every Event Becomes a Memory**

Luxury • Energy • Experiences

A premium, cinematic one-page website for **Urva Event Planners** — a Vijayawada-based event planning and production company specializing in DJ concerts, weddings, haldi, mehendi, birthdays, anniversaries, theme parties, and corporate events.

---

## ✨ Features

- **Cinematic Hero** — Full-screen Swiper.js fade slideshow with dual CTAs
- **About** — Brand story with key stats (500+ events, 50+ artists, 7 years)
- **Services** — 8 numbered service cards with hover effects
- **Gallery** — Filterable masonry grid (Concerts / Weddings / Decor / Reels) with full-screen lightbox + keyboard navigation
- **Instagram Strip** — Curated 6-tile feed linking to `@urva_events`
- **Booking** — Lead form that deep-links to WhatsApp + auto-generated UPI QR code with copy-to-clipboard
- **Testimonials** — Glassmorphic client quote cards
- **Contact** — Address, phone, email, and embedded Google Map
- **Floating WhatsApp FAB** — Always-on "Book a show" button
- **Scroll Reveals** — IntersectionObserver-driven fade-up animations
- **Sticky Header** — Transparent on load, blurred dark on scroll, with active-section highlighting
- **SEO** — Semantic HTML, OG tags, and `LocalBusiness` JSON-LD schema

---

## 🎨 Design System

Gold-on-Ink luxury theme defined as CSS variables in `src/styles.css`:

| Token | Value | Usage |
| --- | --- | --- |
| `--ink` | `#0C0B13` | Primary dark |
| `--bg` | `#0E0C14` | Page background |
| `--plum` | `#5B2D4F` | Secondary accent |
| `--gold` | `#D4AF37` | Primary accent |
| `--gold-hover` | `#B8942A` | Hover state |
| `--cream` | `#F9F3E7` | Foreground text |

**Typography:** Playfair Display (headings) + Montserrat (body), loaded via Google Fonts.
**Surfaces:** 28px border radius, `backdrop-filter: blur(14px)` glassmorphism.

---

## 🛠 Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) v1 (React 19 + Vite 7, SSR-ready)
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Slideshow:** Swiper.js
- **Animations:** Framer Motion + custom IntersectionObserver reveal
- **QR Codes:** `qrcode` (for UPI payments)
- **Toasts:** Sonner
- **Package Manager:** Bun

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build
```

The dev server runs at the URL printed in your terminal. Lovable users get a live preview automatically.

---

## 📁 Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # App shell (html/head/body)
│   └── index.tsx           # Home page — composes all sections, sets SEO
├── components/
│   ├── site/               # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx        # Swiper slideshow
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx     # Filter + lightbox
│   │   ├── Instagram.tsx
│   │   ├── Booking.tsx     # WhatsApp form + UPI QR
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppFAB.tsx
│   │   ├── Reveal.tsx      # IntersectionObserver wrapper
│   │   └── Logo.tsx
│   └── ui/                 # shadcn/ui primitives
├── lib/
│   └── whatsapp.ts         # wa.me deep-link helper
├── assets/urva/            # AI-generated imagery (hero, services, gallery, IG)
└── styles.css              # Tailwind v4 + design tokens
```

---

## 📸 Assets

All imagery under `src/assets/urva/` is AI-generated, cinematically lit, and tuned to the gold-on-ink palette:

- **Hero** (4): concert, wedding haldi, DJ lasers, festival crowd
- **Services** (8): one per category
- **Gallery** (~10): mix of tall/wide event shots
- **Instagram** (6): square lifestyle tiles
- **About** (1): warm-toned brand shot

---

## 📞 Business Info

- **Phone / WhatsApp:** +91 77949 90721
- **Email:** info.urvaevents@gmail.com
- **Address:** Tailor St, Kothapet, Vijayawada 520001, Andhra Pradesh, India
- **Instagram:** [@urva_events](https://instagram.com/urva_events)
- **UPI:** `8520866111@axl`

---

## 📝 License

© 2026 Urva Event Planners. All rights reserved.
