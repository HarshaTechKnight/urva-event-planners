import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { InstagramSection } from "@/components/site/Instagram";
import { Booking } from "@/components/site/Booking";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFAB } from "@/components/site/WhatsAppFAB";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urva Events — Luxury Event Planning in Vijayawada" },
      {
        name: "description",
        content:
          "Premium event planning & production in Vijayawada — DJ concerts, weddings, haldi, mehendi, birthdays, theme parties, corporate galas. Where every event becomes a memory.",
      },
      { property: "og:title", content: "Urva Events — Luxury Event Planning in Vijayawada" },
      {
        property: "og:description",
        content:
          "DJ concerts, weddings, haldi, mehendi, birthdays, theme parties, corporate galas. Luxury • Energy • Experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "theme-color", content: "#0E0C14" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Urva Event Planners",
          description:
            "Premium event planning and production company specializing in DJ concerts, weddings, and corporate events.",
          url: "/",
          telephone: "+91-77949-90721",
          email: "info.urvaevents@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tailor St, Kothapet",
            addressLocality: "Vijayawada",
            postalCode: "520001",
            addressRegion: "Andhra Pradesh",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 16.5062, longitude: 80.648 },
          sameAs: ["https://instagram.com/urva_events"],
          slogan: "Where Every Event Becomes a Memory",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <InstagramSection />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFAB />
      <Toaster
        theme="dark"
        position="bottom-center"
        toastOptions={{
          style: {
            background: "rgba(14,12,20,0.92)",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "#F9F3E7",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </main>
  );
}
