import type { Metadata } from "next"
import Link from "next/link"

import { CategorySection } from "@/src/components/site/category-section"
import {
  CATEGORY_ICONS,
  DefaultCategoryIcon,
} from "@/src/components/site/category-icons"
import { ConverterSearchBox } from "@/src/components/site/converter-search-box"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"
import { ALL_CONVERTERS } from "@/src/lib/all-converters"
import { CATEGORIES } from "@/src/lib/converters"

const TITLE = "Søg efter en omregner – omregning.dk"
const DESCRIPTION =
  "Søg blandt alle omregnere på omregning.dk og find den rigtige konverter hurtigt."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/soeg",
  },
  robots: {
    index: false,
    follow: true,
  },
}

function matches(entry: (typeof ALL_CONVERTERS)[number], query: string) {
  const haystack =
    `${entry.title} ${entry.description} ${entry.href}`.toLowerCase()
  return haystack.includes(query)
}

export default async function SoegPage({
  searchParams,
}: PageProps<"/soeg">) {
  const params = await searchParams
  const rawQuery = typeof params.q === "string" ? params.q : ""
  const query = rawQuery.trim().toLowerCase()

  const results = query
    ? ALL_CONVERTERS.filter((entry) => matches(entry, query))
    : ALL_CONVERTERS

  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-primary to-blue-700 px-6 py-14 text-primary-foreground shadow-2xl ring-1 shadow-primary/30 ring-white/10 sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-32 -right-16 h-80 w-80 rounded-full bg-white/20 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-900/30 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative max-w-xl">
            <h1 className="mb-2.5 text-[32px] leading-[1.1] font-extrabold text-balance break-words sm:text-[44px]">
              Søg efter en omregner
            </h1>
            <p className="mb-8 text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              {rawQuery
                ? `${results.length} ${results.length === 1 ? "resultat" : "resultater"} for “${rawQuery}”`
                : "Alle omregnere på omregning.dk."}
            </p>

            <ConverterSearchBox defaultValue={rawQuery} />
          </div>
        </div>

        {results.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((entry) => {
              const Icon = CATEGORY_ICONS[entry.category] ?? DefaultCategoryIcon
              const categoryTitle = CATEGORIES.find(
                (category) => category.slug === entry.category
              )?.title

              return (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="rounded-2xl border bg-background p-6 shadow-sm transition-colors hover:border-primary sm:p-8"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {categoryTitle && (
                    <span className="mb-1 block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {categoryTitle}
                    </span>
                  )}
                  <h2 className="mb-1 text-lg font-bold">{entry.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {entry.description}
                  </p>
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="mt-8">
            <div className="mb-10 rounded-2xl border bg-background p-6 text-center shadow-sm sm:p-8">
              <p className="text-sm text-muted-foreground">
                Ingen omregnere fundet for “{rawQuery}”. Prøv en anden søgning,
                eller find det du søger nedenfor.
              </p>
            </div>
            <CategorySection categories={CATEGORIES} />
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  )
}
