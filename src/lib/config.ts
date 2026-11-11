// ==============================================================================
// PROJECTBEE – GLOBAL STORE CONFIGURATION
// Configure your store details and your real-time WhatsApp phone number here
// ==============================================================================

export const STORE_CONFIG = {
  name: 'ProjectBee',
  // Default WhatsApp number (fallback). Can be overridden via NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local
  // or dynamically updated by the store owner in the browser.
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917331102982',
  supportPhone: '+91 73311 02982',
  supportEmail: 'help@projectbee.in',
  dispatchHub: 'Koramangala 4th Block, Bengaluru, Karnataka 560034',
  currency: 'INR',
  currencySymbol: '₹',
  freeShippingThresholdPaise: 99900, // ₹999
  standardShippingFeePaise: 7000,    // ₹70
};

/**
 * Returns the currently active WhatsApp number.
 * Checks for owner-saved number in browser localStorage first, then falls back to STORE_CONFIG.
 */
export function getActiveWhatsAppNumber(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('projectbee_whatsapp_number');
    if (saved && saved.trim()) {
      return saved.replace(/\D/g, '');
    }
  }
  return (STORE_CONFIG.whatsappNumber || '917331102982').replace(/\D/g, '');
}

/**
 * Saves a new WhatsApp number in browser localStorage and triggers custom event for real-time reactivity.
 */
export function saveActiveWhatsAppNumber(phone: string): string {
  const clean = phone.replace(/\D/g, '');
  if (typeof window !== 'undefined') {
    localStorage.setItem('projectbee_whatsapp_number', clean);
    window.dispatchEvent(new CustomEvent('projectbee:whatsapp_updated', { detail: clean }));
  }
  return clean;
}

/**
 * Generate a direct WhatsApp click-to-chat URL with pre-filled message
 */
export function getWhatsAppChatUrl(message: string, customPhone?: string): string {
  const phone = (customPhone || getActiveWhatsAppNumber()).replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMsg}`;
}

/**
 * Pre-filled message when inquiring about a specific project
 */
export function getProductInquiryWhatsAppUrl(productTitle: string, productSku: string, price: number): string {
  const message = `Hello ProjectBee! 👋\nI am interested in ordering: *${productTitle}* (SKU: ${productSku}, Price: ₹${price}).\nCould you please share availability and delivery timeframe to my city?`;
  return getWhatsAppChatUrl(message);
}

/**
 * Pre-filled message for confirming an order directly on WhatsApp
 */
export function getOrderConfirmationWhatsAppUrl(orderNumber: string, parentName: string, totalAmount: number, items: string): string {
  const message = `Hi ProjectBee! 🐝\nI just placed COD Order *#${orderNumber}* on your website.\n*Parent:* ${parentName}\n*Items:* ${items}\n*Total (COD):* ₹${totalAmount}\nPlease confirm dispatch and tracking details. Thank you!`;
  return getWhatsAppChatUrl(message);
}
