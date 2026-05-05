export const siteConfig = {
  name: "Fume Coworking",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fumecoworking.in",
  phone: "+91-838-387-4274",
  phoneHref: "tel:+918383874274",
  email: "Hello@fumecoworking.in",
  emailHref: "mailto:Hello@fumecoworking.in",
  whatsappHref: "https://wa.me/918383874274"
} as const;
