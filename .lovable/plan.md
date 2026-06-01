# Urva Events — Build Plan

A premium, cinematic one-page site for Urva Event Planners with all 11 sections, responsive layout, scroll/reveal animations, gallery lightbox + filters, WhatsApp-powered forms, and UPI QR payment.

## Stack note (important)

The brief asks for Bootstrap 5 + vanilla JS. This project is **TanStack Start + React 19 + Tailwind v4 + shadcn/ui**, which is what Lovable supports. I will build the same design and behavior using the project stack instead of Bootstrap — visually and functionally identical, but idiomatic to the codebase. Swiper, qrcode, and framer-motion will be added as npm deps. Let me know if you'd rather have a static Bootstrap HTML file instead (would live outside the React app).

## Design tokens (added to `src/styles.css`)

- `--ink: #0C0B13`, `--bg: #0E0C14`, `--plum: #5B2D4F`
- `--gold: #D4AF37`, `--gold-hover: #B8942A`, `--cream: #F9F3E7`
- Map to semantic tokens: background, foreground, primary (gold), secondary (plum), card (glass)
- Fonts via Google Fonts: Playfair Display (headings, italic emphasis), Montserrat (body)
- Card radius: 28px; glass surfaces use `backdrop-filter: blur(14px)` over `rgba(255,255,255,0.04)`

## Routes & files

- `src/routes/index.tsx` — replace placeholder, compose all sections, set SEO head (title, description, og tags, JSON-LD LocalBusiness for Vijayawada office)
- `src/components/site/Header.tsx` — fixed nav, transparent → blurred on scroll >30px, mobile sheet menu
- `src/components/site/Hero.tsx` — Swiper fade slideshow (4 AI images), glass pillars badge, dual CTAs, scroll indicator
- `src/components/site/About.tsx` — 2-col, stats (500+ / 50+ / 7)
- `src/components/site/Services.tsx` — 8 cards grid, numbered 01–08, hover lift + gold border
- `src/components/site/Gallery.tsx` — filter chips (All/Concerts/Weddings/Decor/Reels), masonry via CSS columns, REEL badge, lightbox with prev/next + keyboard nav
- `src/components/site/Instagram.tsx` — 6 square tiles, hover overlay, link to `@urva_events`
- `src/components/site/Booking.tsx` — left: form (Name, Phone, Event Type select, Date, Message) → builds WhatsApp deep link to `+917794990721`; right: glass card with generated UPI QR (`qrcode` lib, `upi://pay?pa=8520866111@axl&pn=Urva Events&am=5000&cu=INR`), copy-to-clipboard button with toast
- `src/components/site/Testimonials.tsx` — 3 glass cards with the provided quotes
- `src/components/site/Contact.tsx` — left: details; right: Google Maps iframe (Kothapet, Vijayawada)
- `src/components/site/Footer.tsx` — logo + tagline, explore links, IG/FB icons, address, © 2026
- `src/components/site/WhatsAppFAB.tsx` — fixed bottom-right, #25D366, "Book a show"
- `src/components/site/Reveal.tsx` — IntersectionObserver wrapper for fade-up reveal
- `src/lib/whatsapp.ts` — helper to build wa.me links

## Assets (AI-generated via imagegen)

Saved under `src/assets/urva/` and imported as ES modules:

- Hero (4): concert-crowd, wedding-haldi, dj-lasers, festival-crowd
- Services (8): one per category, cinematic, gold-lit
- Gallery (~12): mix tall/wide across Concerts/Weddings/Decor/Reels
- Instagram (6): square lifestyle/event shots
- About (1): team / event shot with warm gold tones
Total ~31 images. Generated in parallel batches with `fast` tier; hero at higher quality.

## Dependencies to add

`bun add swiper qrcode framer-motion` and `bun add -d @types/qrcode`

## Functionality checklist

1. Smooth scroll on anchor links (`scroll-behavior: smooth` + offset for fixed header)
2. Active nav link via IntersectionObserver on section ids
3. Reveal-on-scroll (Reveal wrapper, prefers-reduced-motion respected)
4. Lightbox: Esc to close, ←/→ to navigate, focus trap
5. Gallery filter: client state, animated layout
6. Forms: build wa.me URL with encoded message, open in new tab
7. Copy UPI: `navigator.clipboard.writeText` + sonner toast
8. QR: render to canvas on mount with `qrcode`
9. Hero slideshow: Swiper Autoplay + EffectFade, 5s interval
10. Fully responsive: mobile-first, hamburger nav, single-column stacks

## SEO

- `<title>`: "Urva Events — Luxury Event Planning in Vijayawada"
- Meta description with tagline + services
- og:title/description/type=website, og:image = hero 1
- JSON-LD `LocalBusiness` with address, phone, geo, sameAs (Instagram)
- Single H1 in hero, semantic `<section>` per block, alt text on every image

## Out of scope (will not include unless asked)

- Backend storage of enquiries (forms route to WhatsApp only, as specified)
- Real Instagram API feed (uses curated AI images per brief)
- Bootstrap CSS (replaced by Tailwind to match project stack)