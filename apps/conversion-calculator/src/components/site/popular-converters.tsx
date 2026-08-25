import Link from "next/link"

import { StatusUp } from "@workspace/ui/icons"

import { CATEGORY_ICONS } from "@/src/components/site/category-icons"

const POPULAR_CONVERTERS = [
  { href: "/volumen/cl-til-ml", title: "Cl til ml", category: "volumen" },
  { href: "/volumen/ml-til-dl", title: "Ml til dl", category: "volumen" },
  { href: "/areal/hektar-til-m2", title: "Hektar til m²", category: "areal" },
  { href: "/volumen/ml-til-l", title: "Ml til liter", category: "volumen" },
  {
    href: "/hastighed/km-t-til-ms",
    title: "Km/t til m/s",
    category: "hastighed",
  },
  { href: "/volumen/dl-til-ml", title: "Dl til ml", category: "volumen" },
  { href: "/volumen/dl-til-cl", title: "Dl til cl", category: "volumen" },
  { href: "/vaegt/gram-til-kg", title: "Gram til kg", category: "vaegt" },
  { href: "/volumen/l-til-ml", title: "Liter til ml", category: "volumen" },
  { href: "/volumen/ml-til-cl", title: "Ml til cl", category: "volumen" },
  {
    href: "/laengde/tommer-til-mm",
    title: "Tommer til mm",
    category: "laengde",
  },
  {
    href: "/laengde/cm-til-tommer",
    title: "Cm til tommer",
    category: "laengde",
  },
  { href: "/areal/m2-til-hektar", title: "m² til hektar", category: "areal" },
  {
    href: "/hastighed/knob-til-km-t",
    title: "Knob til km/t",
    category: "hastighed",
  },
  {
    href: "/laengde/mm-til-tommer",
    title: "Mm til tommer",
    category: "laengde",
  },
  { href: "/volumen/cl-til-dl", title: "Cl til dl", category: "volumen" },
  {
    href: "/temperatur/celsius-til-fahrenheit",
    title: "Celsius til fahrenheit",
    category: "temperatur",
  },
  { href: "/volumen/dl-til-l", title: "Dl til liter", category: "volumen" },
  { href: "/tryk/bar-til-kpa", title: "Bar til kpa", category: "tryk" },
  { href: "/tryk/kpa-til-bar", title: "Kpa til bar", category: "tryk" },
] as const

export function PopularConverters() {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <StatusUp className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-lg font-bold">Populære omregninger</h2>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {POPULAR_CONVERTERS.map((converter) => {
          const Icon = CATEGORY_ICONS[converter.category]

          return (
            <Link
              key={converter.href}
              href={converter.href}
              className="group inline-flex items-center gap-2 rounded-full border bg-background py-2 pr-4 pl-2 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
              </span>
              <span className="text-sm font-semibold group-hover:text-primary">
                {converter.title}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
