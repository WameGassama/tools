export type Category = {
  slug: string
  title: string
  /** Present once the converter for this category has a live page. */
  href?: string
}

export const CATEGORIES: Category[] = [
  { slug: "vaegt", title: "Vægt", href: "/vaegt" },
  { slug: "temperatur", title: "Temperatur", href: "/temperatur" },
  { slug: "laengde", title: "Længde", href: "/laengde" },
  { slug: "areal", title: "Areal", href: "/areal" },
  { slug: "hastighed", title: "Hastighed", href: "/hastighed" },
  { slug: "volumen", title: "Volumen", href: "/volumen" },
  { slug: "tryk", title: "Tryk", href: "/tryk" },
]
