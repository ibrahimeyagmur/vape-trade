export const SITE_BRAND_NAME = "IDev"

export const SITE_CONFIG = {
  name: SITE_BRAND_NAME,
  description: "Premium Vape Ürünleri",
  currency: "TRY",
  currencySymbol: "₺",
  locale: "tr-TR",
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat(SITE_CONFIG.locale, {
    style: "currency",
    currency: SITE_CONFIG.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}
