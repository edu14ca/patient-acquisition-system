// Centralized WhatsApp config for the Raise landing pages
export const WHATSAPP_NUMBER = "244939636042";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá Raise, quero fazer um diagnóstico de crescimento para a minha empresa.";

export const buildWhatsAppLink = (message: string = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
