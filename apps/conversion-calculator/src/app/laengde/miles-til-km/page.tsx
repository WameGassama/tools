import type { Metadata } from "next"

import { MileKmConverter } from "@/src/components/site/mile-km-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Miles til Km – Omregn Mile til Kilometer Online"
const DESCRIPTION =
  "Omregn miles til km online med det samme. Se en miles til km tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "miles to km",
    "mile to km",
    "miles til km",
    "mil til km",
    "1 mile to km",
    "1 mile in km",
    "one mile in km",
    "100 miles in km",
    "hvor meget er en mile",
    "hvor meget er en mil",
    "hvad er en mile",
    "hvad er en mil",
    "hvor lang er en mile",
    "hvor lang er en mil",
    "hvor langt er en mile",
    "hvor langt er en mil",
    "engelsk mil",
    "engelsk mile",
    "amerikansk mil",
    "en mil",
    "en mile",
    "en engelsk mil",
    "mil",
    "mile",
    "miles",
    "omregn miles til km",
    "omregner miles til km",
    "omregning miles til km",
    "fra miles til km",
    "fra mil til km",
    "miles til kilometer",
    "mil til kilometer",
    "miles omregner",
    "hvor mange km er en mile",
    "hvor mange km er en mil",
    "hvor mange kilometer er en mile",
    "hvor mange kilometer er en mil",
  ],
  alternates: {
    canonical: "/laengde/miles-til-km",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/miles-til-km",
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

const KM_PER_MILE = 1.609344
const COMMON_MILE_VALUES = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 17, 18, 25, 30, 60, 70, 100,
  150, 200, 250, 300, 400, 700, 1000, 2000,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er en mile (engelsk mil)?",
    answer:
      "En mile (også kaldet en engelsk eller amerikansk mil) er en længdeenhed, der bruges i USA og Storbritannien til at angive afstande, fx på vejskilte. En mile svarer til 1.609,344 meter.",
  },
  {
    question: "Hvordan regner man miles til km?",
    answer:
      "Formlen er km = miles × 1,609344. Fx bliver 100 miles til km: 100 × 1,609344 ≈ 160,93 km.",
  },
  {
    question: "Hvad er forskellen på en engelsk mile og en dansk mil?",
    answer:
      "Det er to helt forskellige enheder. Den engelske/amerikanske mile er ca. 1,609 km, mens den gamle danske (og svenske/norske) mil er 10 km — altså over 6 gange så lang som en engelsk mile.",
  },
  {
    question: "Hvad er en sømil?",
    answer:
      "En sømil (nautisk mil) bruges til sø- og luftfart og svarer til 1,852 km. Det er hverken det samme som en engelsk mile (1,609 km) eller en dansk mil (10 km).",
  },
]

function formatKm(miles: number) {
  return (miles * KM_PER_MILE).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function MilesTilKmPage() {
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
              Miles til Km
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn miles til km online — indtast en værdi herunder for at
              omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MileKmConverter title="Miles til km" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Miles til km tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_MILE_VALUES.map((miles) => (
              <li
                key={miles}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{miles} miles til km</h3>
                <span className="text-muted-foreground">
                  {miles} mi = {formatKm(miles)} km
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om miles og km
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
