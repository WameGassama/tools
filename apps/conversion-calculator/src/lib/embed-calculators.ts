export type EmbedComponentKey =
  | "GramKg"
  | "LbsKg"
  | "FahrenheitCelsius"
  | "MeterCm"
  | "MmCm"
  | "InchCm"
  | "FootMeter"
  | "Height"
  | "MileKm"
  | "MmM"
  | "YardMeter"
  | "TommerMm"
  | "SoemilKm"
  | "HektarKm2"
  | "HektarM2"
  | "HektarTonder"
  | "KnotKmh"
  | "MphKmt"
  | "KmtMs"
  | "ClDl"
  | "ClL"
  | "MlCl"
  | "DlL"
  | "MlDl"
  | "MlL"
  | "KpaBar"
  | "BarPsi"

export interface EmbedCalculatorMeta {
  /** Kategori-segmentet i URL'en, fx "volumen". Matcher den rigtige sides sti 1:1. */
  category: string
  /** Par-segmentet i URL'en, fx "cl-til-ml". Matcher den rigtige sides sti 1:1. */
  slug: string
  title: string
  component: EmbedComponentKey
  reversed?: boolean
  /** Højde (px) sat i det genererede embed-kode-eksempel, før auto-resize slår ind. */
  initialHeight: number
}

export const EMBED_CALCULATORS: EmbedCalculatorMeta[] = [
  // Vægt
  { category: "vaegt", slug: "gram-til-kg", title: "Gram til kg", component: "GramKg", initialHeight: 300 },
  { category: "vaegt", slug: "kg-til-gram", title: "Kg til gram", component: "GramKg", reversed: true, initialHeight: 300 },
  { category: "vaegt", slug: "kg-til-lbs", title: "Kg til lbs", component: "LbsKg", reversed: true, initialHeight: 300 },
  { category: "vaegt", slug: "pund-til-kg", title: "Pund til kg", component: "LbsKg", initialHeight: 300 },

  // Temperatur
  { category: "temperatur", slug: "celsius-til-fahrenheit", title: "Celsius til fahrenheit", component: "FahrenheitCelsius", reversed: true, initialHeight: 300 },
  { category: "temperatur", slug: "fahrenheit-til-celsius", title: "Fahrenheit til celsius", component: "FahrenheitCelsius", initialHeight: 300 },

  // Længde
  { category: "laengde", slug: "cm-til-m", title: "Cm til meter", component: "MeterCm", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "cm-til-mm", title: "Cm til mm", component: "MmCm", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "cm-til-tommer", title: "Cm til tommer", component: "InchCm", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "fod-til-meter", title: "Fod til meter", component: "FootMeter", initialHeight: 300 },
  { category: "laengde", slug: "hoejde-omregner", title: "Højde omregner", component: "Height", initialHeight: 340 },
  { category: "laengde", slug: "km-til-miles", title: "Km til miles", component: "MileKm", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "m-til-mm", title: "Meter til mm", component: "MmM", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "meter-til-cm", title: "Meter til cm", component: "MeterCm", initialHeight: 300 },
  { category: "laengde", slug: "meter-til-fod", title: "Meter til fod", component: "FootMeter", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "meter-til-yard", title: "Meter til yard", component: "YardMeter", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "miles-til-km", title: "Miles til km", component: "MileKm", initialHeight: 300 },
  { category: "laengde", slug: "mm-til-cm", title: "Mm til cm", component: "MmCm", initialHeight: 300 },
  { category: "laengde", slug: "mm-til-m", title: "Mm til meter", component: "MmM", initialHeight: 300 },
  { category: "laengde", slug: "mm-til-tommer", title: "Mm til tommer", component: "TommerMm", reversed: true, initialHeight: 300 },
  { category: "laengde", slug: "soemil-til-km", title: "Sømil til km", component: "SoemilKm", initialHeight: 300 },
  { category: "laengde", slug: "tommer-til-cm", title: "Tommer til cm", component: "InchCm", initialHeight: 300 },
  { category: "laengde", slug: "tommer-til-mm", title: "Tommer til mm", component: "TommerMm", initialHeight: 300 },
  { category: "laengde", slug: "yard-til-meter", title: "Yard til meter", component: "YardMeter", initialHeight: 300 },

  // Areal
  { category: "areal", slug: "hektar-til-km2", title: "Hektar til km²", component: "HektarKm2", initialHeight: 300 },
  { category: "areal", slug: "hektar-til-m2", title: "Hektar til m²", component: "HektarM2", initialHeight: 300 },
  { category: "areal", slug: "hektar-til-tonder", title: "Hektar til tønder land", component: "HektarTonder", initialHeight: 300 },
  { category: "areal", slug: "km2-til-hektar", title: "km² til hektar", component: "HektarKm2", reversed: true, initialHeight: 300 },
  { category: "areal", slug: "m2-til-hektar", title: "m² til hektar", component: "HektarM2", reversed: true, initialHeight: 300 },
  { category: "areal", slug: "tonder-til-hektar", title: "Tønder land til hektar", component: "HektarTonder", reversed: true, initialHeight: 300 },

  // Hastighed
  { category: "hastighed", slug: "km-t-til-knob", title: "Km/t til knob", component: "KnotKmh", reversed: true, initialHeight: 300 },
  { category: "hastighed", slug: "km-t-til-mph", title: "Km/t til mph", component: "MphKmt", reversed: true, initialHeight: 300 },
  { category: "hastighed", slug: "km-t-til-ms", title: "Km/t til m/s", component: "KmtMs", initialHeight: 300 },
  { category: "hastighed", slug: "knob-til-km-t", title: "Knob til km/t", component: "KnotKmh", initialHeight: 300 },
  { category: "hastighed", slug: "mph-til-km-t", title: "Mph til km/t", component: "MphKmt", initialHeight: 300 },
  { category: "hastighed", slug: "ms-til-km-t", title: "M/s til km/t", component: "KmtMs", reversed: true, initialHeight: 300 },

  // Volumen
  { category: "volumen", slug: "cl-til-dl", title: "Cl til dl", component: "ClDl", initialHeight: 300 },
  { category: "volumen", slug: "cl-til-l", title: "Cl til liter", component: "ClL", initialHeight: 300 },
  { category: "volumen", slug: "cl-til-ml", title: "Cl til ml", component: "MlCl", reversed: true, initialHeight: 300 },
  { category: "volumen", slug: "dl-til-cl", title: "Dl til cl", component: "ClDl", reversed: true, initialHeight: 300 },
  { category: "volumen", slug: "dl-til-l", title: "Dl til liter", component: "DlL", initialHeight: 300 },
  { category: "volumen", slug: "dl-til-ml", title: "Dl til ml", component: "MlDl", reversed: true, initialHeight: 300 },
  { category: "volumen", slug: "l-til-cl", title: "Liter til cl", component: "ClL", reversed: true, initialHeight: 300 },
  { category: "volumen", slug: "l-til-dl", title: "Liter til dl", component: "DlL", reversed: true, initialHeight: 300 },
  { category: "volumen", slug: "l-til-ml", title: "Liter til ml", component: "MlL", reversed: true, initialHeight: 300 },
  { category: "volumen", slug: "ml-til-cl", title: "Ml til cl", component: "MlCl", initialHeight: 300 },
  { category: "volumen", slug: "ml-til-dl", title: "Ml til dl", component: "MlDl", initialHeight: 300 },
  { category: "volumen", slug: "ml-til-l", title: "Ml til liter", component: "MlL", initialHeight: 300 },

  // Tryk
  { category: "tryk", slug: "bar-til-kpa", title: "Bar til kpa", component: "KpaBar", reversed: true, initialHeight: 300 },
  { category: "tryk", slug: "bar-til-psi", title: "Bar til psi", component: "BarPsi", reversed: true, initialHeight: 300 },
  { category: "tryk", slug: "kpa-til-bar", title: "Kpa til bar", component: "KpaBar", initialHeight: 300 },
  { category: "tryk", slug: "psi-til-bar", title: "Psi til bar", component: "BarPsi", initialHeight: 300 },
]

export function findEmbedCalculator(category: string, slug: string) {
  return EMBED_CALCULATORS.find((c) => c.category === category && c.slug === slug)
}

/** Den rigtige side (ikke /embed/-shellen) en given omregner linker tilbage til – for et relevant, crawlbart backlink. */
export function embedPageHref(calculator: EmbedCalculatorMeta) {
  return `/${calculator.category}/${calculator.slug}`
}
