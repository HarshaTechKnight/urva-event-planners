import { waLink } from "@/lib/whatsapp";

export function WhatsAppFAB() {
  return (
    <a
      href={waLink("Hi Urva Events! I'd like to book a show.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 pl-3.5 pr-5 py-3 rounded-full text-white font-semibold text-sm shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-[1.04] transition-transform float-slow"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white" aria-hidden="true">
        <path d="M19.11 17.45c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z"/>
        <path d="M27.32 4.68A15.86 15.86 0 0 0 16 0C7.18 0 0 7.18 0 16c0 2.82.74 5.57 2.14 7.99L0 32l8.2-2.15A15.94 15.94 0 0 0 16 32c8.82 0 16-7.18 16-16 0-4.27-1.66-8.29-4.68-11.32zM16 29.33c-2.4 0-4.74-.65-6.79-1.86l-.49-.29-4.87 1.28 1.3-4.75-.32-.51A13.27 13.27 0 0 1 2.67 16C2.67 8.65 8.65 2.67 16 2.67c3.56 0 6.91 1.39 9.42 3.91A13.24 13.24 0 0 1 29.33 16c0 7.35-5.98 13.33-13.33 13.33z"/>
      </svg>
      <span className="hidden sm:inline">Book a show</span>
    </a>
  );
}
