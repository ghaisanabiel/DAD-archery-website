// Central place to build wa.me deep links so the number only
// needs to change in one spot once the real DAD Archery number
// is available.
export const DAD_WHATSAPP_NUMBER = '6281234567890'; // placeholder — replace with real number

export function waLink(message: string, number: string = DAD_WHATSAPP_NUMBER) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
