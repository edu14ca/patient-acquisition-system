// Meta/Facebook Pixel helpers
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const fbqSafe = (...args: unknown[]) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq(...args);
  }
};

export const trackPageView = () => fbqSafe("track", "PageView");
export const trackLead = () => fbqSafe("track", "Lead");
export const trackWhatsAppClick = () => {
  fbqSafe("track", "Lead");
  fbqSafe("trackCustom", "WhatsAppClick");
};

let waListenerBound = false;
export const bindWhatsAppClickListener = () => {
  if (waListenerBound || typeof document === "undefined") return;
  waListenerBound = true;
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
      if (anchor) trackWhatsAppClick();
    },
    { capture: true }
  );
};
