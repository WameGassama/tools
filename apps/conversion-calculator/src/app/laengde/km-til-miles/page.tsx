import type { Metadata } from "next"

import { MileKmConverter } from "@/src/components/site/mile-km-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Km til Miles Omregner – Omregn Kilometer til Mile Online"
const DESCRIPTION =
  "Omregn km til miles online hurtigt og nemt. Se en km til miles tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/km-til-miles",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/km-til-miles",
    siteName: "omregning.dk",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const MILE_PER_KM = 1 / 1.609344
const COMMON_KM_VALUES = [1, 5, 10, 20, 50, 100, 160, 200, 300, 500, 1000]

const FAQ_ITEMS = [
  {
    question: "Hvor mange miles er en km?",
    answer: "1 km svarer til ca. 0,6214 miles.",
  },
  {
    question: "Hvordan regner man km til miles?",
    answer:
      "Formlen er miles = km ÷ 1,609344. Fx bliver 100 km til miles: 100 ÷ 1,609344 ≈ 62,14 miles.",
  },
]

function formatMiles(km: number) {
  return (km * MILE_PER_KM).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KmTilMilesPage() {
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
              Km til Miles Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores km til miles omregner til hurtigt og nemt at omregne
              kilometer til mile. Indtast det antal kilometer, du vil omregne,
              og få resultatet med det samme, eller brug vores tabel til hurtigt
              at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MileKmConverter title="Km til miles" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Km til miles tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KM_VALUES.map((km) => (
              <li
                key={km}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{km} km til miles</h3>
                <span className="text-muted-foreground">
                  {km} km = {formatMiles(km)} mi
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om km og miles
          </h2>
          <div className="flex flex-col gap-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1.5 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
