export interface EmbedCalculatorMeta {
  slug: string
  /** Titel vist i vælgeren og som iframe-title (tilgængelighed). */
  title: string
  description: string
  /** Højde (px) sat i det genererede embed-kode-eksempel, før auto-resize slår ind. */
  initialHeight: number
  /** Den rigtige side (ikke /embed/-shellen) koden linker tilbage til – for et relevant, crawlbart backlink. */
  pageHref: string
}

export const EMBED_CALCULATORS: EmbedCalculatorMeta[] = [
  {
    slug: "ects",
    title: "Gennemsnitsberegner (ECTS)",
    description:
      "Vægtet karaktergennemsnit ud fra ECTS-point – til universitet og andre videregående uddannelser.",
    initialHeight: 620,
    pageHref: "/",
  },
  {
    slug: "stx",
    title: "STX snit",
    description:
      "Niveauvægtet gennemsnit til STX, inkl. bonus for A-niveau-fag.",
    initialHeight: 760,
    pageHref: "/stx-snit-beregner",
  },
  {
    slug: "hhx",
    title: "HHX gennemsnit",
    description:
      "Niveauvægtet gennemsnit til HHX, inkl. bonus for A-niveau-fag.",
    initialHeight: 760,
    pageHref: "/hhx-gennemsnit",
  },
  {
    slug: "eux",
    title: "EUX gennemsnit",
    description:
      "Niveauvægtet gennemsnit til EUX, inkl. bonus for A-niveau-fag.",
    initialHeight: 620,
    pageHref: "/eux-gennemsnit",
  },
  {
    slug: "htx",
    title: "HTX gennemsnit",
    description:
      "Niveauvægtet gennemsnit til HTX, inkl. bonus for A-niveau-fag.",
    initialHeight: 760,
    pageHref: "/htx-gennemsnit",
  },
  {
    slug: "hf-2aarigt",
    title: "HF gennemsnit (2-årigt)",
    description:
      "Niveauvægtet gennemsnit til 2-årigt HF, inkl. bonus for A-niveau-fag.",
    initialHeight: 700,
    pageHref: "/hf-gennemsnit",
  },
  {
    slug: "hf-enkeltfag",
    title: "HF enkeltfag gennemsnit",
    description: "Niveauvægtet gennemsnit til HF taget som enkeltfag.",
    initialHeight: 760,
    pageHref: "/hf-enkeltfag-gennemsnit",
  },
  {
    slug: "folkeskole",
    title: "Folkeskole karaktergennemsnit",
    description:
      "Simpelt gennemsnit af de 9 lovbundne prøver til FP9, rundet ned.",
    initialHeight: 760,
    pageHref: "/folkeskole-karaktergennemsnit",
  },
]

export function findEmbedCalculator(slug: string) {
  return EMBED_CALCULATORS.find((c) => c.slug === slug)
}
