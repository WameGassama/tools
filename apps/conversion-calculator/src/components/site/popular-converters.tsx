"use client"

import { useState } from "react"

import Link from "next/link"

import { ArrowHorizontalSwap } from "@workspace/ui/icons"
import { cn } from "@workspace/ui/lib/utils"

import { CATEGORY_ICONS } from "@/src/components/site/category-icons"
import { ALL_CONVERTERS } from "@/src/lib/all-converters"
import { CATEGORIES } from "@/src/lib/converters"

const POPULAR_HREFS = new Set([
  "/volumen/cl-til-ml",
  "/volumen/ml-til-dl",
  "/areal/hektar-til-m2",
  "/volumen/ml-til-l",
  "/hastighed/km-t-til-ms",
  "/volumen/dl-til-ml",
  "/volumen/dl-til-cl",
  "/vaegt/gram-til-kg",
  "/volumen/l-til-ml",
  "/volumen/ml-til-cl",
  "/laengde/tommer-til-mm",
  "/laengde/cm-til-tommer",
  "/areal/m2-til-hektar",
  "/hastighed/knob-til-km-t",
  "/laengde/mm-til-tommer",
  "/volumen/cl-til-dl",
  "/temperatur/celsius-til-fahrenheit",
  "/volumen/dl-til-l",
  "/tryk/bar-til-kpa",
  "/tryk/kpa-til-bar",
])

const POPULAR_CONVERTERS = ALL_CONVERTERS.filter((converter) =>
  POPULAR_HREFS.has(converter.href),
)

export function PopularConverters() {
  const [activeCategory, setActiveCategory] = useState<string>("populaer")

  const converters =
    activeCategory === "populaer"
      ? POPULAR_CONVERTERS
      : ALL_CONVERTERS.filter(
          (converter) => converter.category === activeCategory,
        )

  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <ArrowHorizontalSwap
          className="h-5 w-5 text-primary"
          aria-hidden="true"
        />
        <h2 className="text-lg font-bold">Omregnere</h2>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("populaer")}
          aria-pressed={activeCategory === "populaer"}
          className={cn(
            "cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
            activeCategory === "populaer"
              ? "border-primary bg-primary text-primary-foreground"
              : "bg-background text-muted-foreground hover:border-primary hover:text-foreground",
          )}
        >
          Populær
        </button>
        {CATEGORIES.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveCategory(category.slug)}
            aria-pressed={activeCategory === category.slug}
            className={cn(
              "cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors",
              activeCategory === category.slug
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:border-primary hover:text-foreground",
            )}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div
        key={activeCategory}
        className="grid animate-in grid-cols-2 gap-2.5 fade-in duration-300 sm:grid-cols-3 lg:grid-cols-4"
      >
        {converters.map((converter) => {
          const Icon = CATEGORY_ICONS[converter.category]

          return (
            <Link
              key={converter.href}
              href={converter.href}
              className="group flex items-center gap-2.5 rounded-xl border bg-background p-3 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
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
