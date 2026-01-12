export interface Product {
  id: string
  category: string
  categoryName: string
  slug: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  images: string[]
  tags: string[]
}

export interface Category {
  slug: string
  name: string
  description: string
}

export const categories: Category[] = [
  {
    slug: "vozol-gear-50000",
    name: "Vozol Gear 50000",
    description: "50000 çekim kapasiteli premium serisi",
  },
  {
    slug: "vozol-neon-45000",
    name: "Vozol Neon 45000",
    description: "45000 çekim kapasiteli neon serisi",
  },
  {
    slug: "vozol-rave-40000",
    name: "Vozol Rave 40000",
    description: "40000 çekim kapasiteli rave serisi",
  },
]

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace("vozol gear 50000 – ", "")
    .replace("vozol neon 45000 – ", "")
    .replace("vozol rave 40000 – ", "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

function getProductImages(category: string, slug: string): string[] {
  return [
    `/products/${category}/${slug}.webp`,
  ]
}

export const products: Product[] = [
  {
    id: "gear-blueberry-ice",
    category: "vozol-gear-50000",
    categoryName: "Vozol Gear 50000",
    slug: "blueberry-ice",
    name: "Vozol Gear 50000 – Blueberry Ice",
    description: "Buz gibi serinleten yaban mersini aroması ile ferahlatıcı bir deneyim.",
    price: 1599.99,
    images: getProductImages("vozol-gear-50000", "blueberry-ice"),
    tags: ["meyve", "buzlu", "yeni"],
  },
  {
    id: "gear-coconut-melt-magic",
    category: "vozol-gear-50000",
    categoryName: "Vozol Gear 50000",
    slug: "coconut-melt-magic",
    name: "Vozol Gear 50000 – Coconut Melt Magic",
    description: "Tropik hindistan cevizi aroması ile büyüleyici bir tat yolculuğu.",
    price: 1599.99,
    images: getProductImages("vozol-gear-50000", "coconut-melt-magic"),
    tags: ["tropik", "kremalı"],
  },
  {
    id: "gear-cranberry-grape-juice",
    category: "vozol-gear-50000",
    categoryName: "Vozol Gear 50000",
    slug: "cranberry-grape-juice",
    name: "Vozol Gear 50000 – Cranberry Grape Juice",
    description: "Kızılcık ve üzüm suyu karışımı ile ekşi-tatlı harmoni.",
    price: 1599.99,
    images: getProductImages("vozol-gear-50000", "cranberry-grape-juice"),
    tags: ["meyve", "ekşi"],
  },
  {
    id: "gear-mango-ice",
    category: "vozol-gear-50000",
    categoryName: "Vozol Gear 50000",
    slug: "mango-ice",
    name: "Vozol Gear 50000 – Mango Ice",
    description: "Olgun mango aroması buzlu serinlikle buluşuyor.",
    price: 1599.99,
    images: getProductImages("vozol-gear-50000", "mango-ice"),
    tags: ["tropik", "buzlu"],
  },
  {
    id: "gear-guava-melon-ice",
    category: "vozol-gear-50000",
    categoryName: "Vozol Gear 50000",
    slug: "guava-melon-ice",
    name: "Vozol Gear 50000 – Guava Melon Ice",
    description: "Egzotik guava ve tatlı kavun birleşimi buzlu ferahlık.",
    price: 1599.99,
    images: getProductImages("vozol-gear-50000", "guava-melon-ice"),
    tags: ["tropik", "buzlu", "yeni"],
  },
  {
    id: "gear-grape-ice",
    category: "vozol-gear-50000",
    categoryName: "Vozol Gear 50000",
    slug: "grape-ice",
    name: "Vozol Gear 50000 – Grape Ice",
    description: "Klasik üzüm aroması buz notalarıyla taçlanıyor.",
    price: 1599.99,
    images: getProductImages("vozol-gear-50000", "grape-ice"),
    tags: ["meyve", "buzlu"],
  },
  {
    id: "neon-cherry-strazz",
    category: "vozol-neon-45000",
    categoryName: "Vozol Neon 45000",
    slug: "cherry-strazz",
    name: "Vozol Neon 45000 – Cherry Strazz",
    description: "Yoğun kiraz aroması ile göz alıcı tat deneyimi.",
    price: 1499.99,
    compareAtPrice: 1549.99,
    images: getProductImages("vozol-neon-45000", "cherry-strazz"),
    tags: ["meyve", "indirimli"],
  },
  {
    id: "neon-grape-ice",
    category: "vozol-neon-45000",
    categoryName: "Vozol Neon 45000",
    slug: "grape-ice",
    name: "Vozol Neon 45000 – Grape Ice",
    description: "Neon serisinin buzlu üzüm yorumu.",
    price: 1499.99,
    compareAtPrice: 1549.99,
    images: getProductImages("vozol-neon-45000", "grape-ice"),
    tags: ["meyve", "buzlu", "indirimli"],
  },
  {
    id: "neon-lychee-orange-passion-fruit",
    category: "vozol-neon-45000",
    categoryName: "Vozol Neon 45000",
    slug: "lychee-orange-passion-fruit",
    name: "Vozol Neon 45000 – Lychee Orange Passion Fruit",
    description: "Liçi, portakal ve tutku meyvesi üçlüsü ile egzotik harmoni.",
    price: 1499.99,
    compareAtPrice: 1549.99,
    images: getProductImages("vozol-neon-45000", "lychee-orange-passion-fruit"),
    tags: ["tropik", "egzotik", "indirimli"],
  },
  {
    id: "neon-blueberry-watermelon",
    category: "vozol-neon-45000",
    categoryName: "Vozol Neon 45000",
    slug: "blueberry-watermelon",
    name: "Vozol Neon 45000 – Blueberry Watermelon",
    description: "Yaban mersini ve karpuz birleşimi ile yaz esintisi.",
    price: 1499.99,
    compareAtPrice: 1549.99,
    images: getProductImages("vozol-neon-45000", "blueberry-watermelon"),
    tags: ["meyve", "ferahlatıcı", "indirimli"],
  },
  {
    id: "neon-cherry-cola",
    category: "vozol-neon-45000",
    categoryName: "Vozol Neon 45000",
    slug: "cherry-cola",
    name: "Vozol Neon 45000 – Cherry Cola",
    description: "Nostaljik kirazlı kola tadı modern yorumla.",
    price: 1499.99,
    compareAtPrice: 1549.99,
    images: getProductImages("vozol-neon-45000", "cherry-cola"),
    tags: ["içecek", "nostaljik", "indirimli"],
  },
  {
    id: "neon-berry-cherry-lime",
    category: "vozol-neon-45000",
    categoryName: "Vozol Neon 45000",
    slug: "berry-cherry-lime",
    name: "Vozol Neon 45000 – Berry Cherry Lime",
    description: "Böğürtlen, kiraz ve misket limonu ile ekşi-tatlı parti.",
    price: 1499.99,
    compareAtPrice: 1549.99,
    images: getProductImages("vozol-neon-45000", "berry-cherry-lime"),
    tags: ["meyve", "ekşi", "indirimli"],
  },
  {
    id: "rave-grape-ice",
    category: "vozol-rave-40000",
    categoryName: "Vozol Rave 40000",
    slug: "grape-ice",
    name: "Vozol Rave 40000 – Grape Ice",
    description: "Rave serisinin efsane buzlu üzüm aroması.",
    price: 1399.99,
    compareAtPrice: 1499.99,
    images: getProductImages("vozol-rave-40000", "grape-ice"),
    tags: ["meyve", "buzlu", "indirimli"],
  },
  {
    id: "rave-mango-ice",
    category: "vozol-rave-40000",
    categoryName: "Vozol Rave 40000",
    slug: "mango-ice",
    name: "Vozol Rave 40000 – Mango Ice",
    description: "Tropik mango serinliği Rave kalitesiyle.",
    price: 1399.99,
    compareAtPrice: 1499.99,
    images: getProductImages("vozol-rave-40000", "mango-ice"),
    tags: ["tropik", "buzlu", "indirimli"],
  },
  {
    id: "rave-watermelon-razz-rancher",
    category: "vozol-rave-40000",
    categoryName: "Vozol Rave 40000",
    slug: "watermelon-razz-rancher",
    name: "Vozol Rave 40000 – Watermelon Razz Rancher",
    description: "Karpuz ve ahududu şekerleme tadı ile eğlenceli deneyim.",
    price: 1399.99,
    compareAtPrice: 1499.99,
    images: getProductImages("vozol-rave-40000", "watermelon-razz-rancher"),
    tags: ["meyve", "tatlı", "indirimli"],
  },
  {
    id: "rave-blue-razz-ice",
    category: "vozol-rave-40000",
    categoryName: "Vozol Rave 40000",
    slug: "blue-razz-ice",
    name: "Vozol Rave 40000 – Blue Razz Ice",
    description: "Mavi ahududu aroması buzla dans ediyor.",
    price: 1399.99,
    compareAtPrice: 1499.99,
    images: getProductImages("vozol-rave-40000", "blue-razz-ice"),
    tags: ["meyve", "buzlu", "indirimli"],
  },
  {
    id: "rave-blueberry-ice",
    category: "vozol-rave-40000",
    categoryName: "Vozol Rave 40000",
    slug: "blueberry-ice",
    name: "Vozol Rave 40000 – Blueberry Ice",
    description: "Klasik yaban mersini buzlu serinlikle.",
    price: 1399.99,
    compareAtPrice: 1499.99,
    images: getProductImages("vozol-rave-40000", "blueberry-ice"),
    tags: ["meyve", "buzlu", "indirimli"],
  },
  {
    id: "rave-blueberry-watermelon",
    category: "vozol-rave-40000",
    categoryName: "Vozol Rave 40000",
    slug: "blueberry-watermelon",
    name: "Vozol Rave 40000 – Blueberry Watermelon",
    description: "Yaban mersini ve karpuz ikilisi ile sıcak yaz günleri.",
    price: 1399.99,
    compareAtPrice: 1499.99,
    images: getProductImages("vozol-rave-40000", "blueberry-watermelon"),
    tags: ["meyve", "ferahlatıcı", "indirimli"],
  },
]

export function getProductBySlug(category: string, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(count: number = 6): Product[] {
  return products.slice(0, count)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  )
}
