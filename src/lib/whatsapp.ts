export const WHATSAPP_NUMBER = "917794990721";
export const UPI_ID = "8520866111@axl";
export const INSTAGRAM_URL = "https://instagram.com/urva_events";
export const FACEBOOK_URL = "https://facebook.com/urvaevents";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
