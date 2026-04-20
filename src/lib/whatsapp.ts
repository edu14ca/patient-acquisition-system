// Centralized WhatsApp config for the Raise landing page
export const WHATSAPP_NUMBER = "244939636042";

export const buildWhatsAppLink = (
  message = "Olá Raise! Quero saber como fazer a minha empresa crescer.",
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
