import { useEffect, useRef, useState, type FormEvent } from "react";
import QRCode from "qrcode";
import { Copy, ArrowRight, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { UPI_ID, waLink } from "@/lib/whatsapp";

const EVENT_TYPES = [
  "DJ Concert",
  "Wedding",
  "Haldi",
  "Mehendi",
  "Birthday",
  "Anniversary",
  "Theme Party",
  "Corporate Event",
  "Other",
];

export function Booking() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent("Urva Events")}&am=5000&cu=INR&tn=${encodeURIComponent("Urva Events Booking Advance")}`;
    QRCode.toCanvas(canvasRef.current, upiUrl, {
      width: 240,
      margin: 1,
      color: { dark: "#0C0B13", light: "#F9F3E7" },
      errorCorrectionLevel: "M",
    }).catch(() => {});
  }, []);

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      toast.success("UPI ID copied", { description: UPI_ID });
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const msg = [
      "*New Event Enquiry — Urva Events*",
      `Name: ${fd.get("name")}`,
      `Phone: ${fd.get("phone")}`,
      `Event Type: ${fd.get("type")}`,
      `Event Date: ${fd.get("date")}`,
      `Vision: ${fd.get("message") || "—"}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp…", { description: "We respond within 4 working hours." });
    setTimeout(() => setSubmitting(false), 1200);
  };

  const inputClass =
    "w-full bg-white/5 border border-gold/15 focus:border-gold focus:bg-white/[0.07] outline-none rounded-2xl px-4 py-3.5 text-cream placeholder:text-cream/40 transition-colors";

  return (
    <section id="book" className="relative py-24 sm:py-32 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <Reveal>
          <div className="glass rounded-[28px] p-8 sm:p-10">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Enquiry</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-cream">
              Tell us about your <em className="text-gold-gradient not-italic">event</em>.
            </h2>
            <p className="mt-3 text-cream/65 text-sm">
              Share a few details and we'll reply on WhatsApp with a curated plan.
            </p>

            <form onSubmit={onSubmit} className="mt-8 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your name" className={inputClass} />
                <input
                  name="phone"
                  required
                  type="tel"
                  pattern="[0-9+\s-]{7,}"
                  placeholder="Phone number"
                  className={inputClass}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <select name="type" required defaultValue="" className={inputClass}>
                  <option value="" disabled>Event type</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t} className="bg-ink">{t}</option>
                  ))}
                </select>
                <input name="date" required type="date" className={inputClass} />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Your vision — guests, venue, vibe…"
                className={inputClass + " resize-none"}
              />
              <button
                type="submit"
                disabled={submitting}
                className="mt-2 inline-flex items-center justify-center gap-2 gold-gradient text-ink font-semibold px-7 py-3.5 rounded-full hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                Submit Enquiry <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-cream/55 text-center">We respond within 4 working hours.</p>
            </form>
          </div>
        </Reveal>

        {/* Payment card */}
        <Reveal delay={120}>
          <div className="glass rounded-[28px] p-8 sm:p-10 h-full flex flex-col">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">Secure booking</span>
            </div>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl text-cream">
              Pay Using <em className="text-gold-gradient not-italic">UPI</em> advance
            </h3>
            <p className="mt-3 text-cream/65 text-sm">
              Scan with any UPI app or copy the ID. Refundable up to 30 days before the event.
            </p>

            <div className="mt-8 flex flex-col items-center">
              <div className="rounded-3xl p-4 bg-cream">
                <canvas ref={canvasRef} className="block" />
              </div>
              <div className="mt-6 w-full glass rounded-2xl p-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cream/60">UPI ID</p>
                  <p className="font-mono text-cream text-base sm:text-lg">{UPI_ID}</p>
                </div>
                <button
                  onClick={copyUpi}
                  className="inline-flex items-center gap-2 border border-gold/60 text-gold hover:bg-gold hover:text-ink transition-colors px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Copy className="w-4 h-4" /> Copy
                </button>
              </div>
              <p className="mt-5 text-xs text-cream/55 text-center">
                Pay Via UPI advance • Refundable up to 30 days
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
