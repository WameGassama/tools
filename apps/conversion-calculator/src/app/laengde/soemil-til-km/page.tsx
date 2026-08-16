import type { Metadata } from "next"

import { SoemilKmConverter } from "@/src/components/site/soemil-km-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Sømil til Km – Omregn Nautisk Mil til Kilometer Online"
const DESCRIPTION =
  "Omregn sømil til km online med det samme. Se en sømil til km tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "sømil til km",
    "hvor lang er en sømil",
    "1 sømil i meter",
    "hvad er en sømil",
    "sømil km",
    "nautisk mil til km",
    "omregn sømil til km",
    "km til sømil",
    "sømil i km",
    "sømil omregner",
  ],
  alternates: {
    canonical: "/laengde/soemil-til-km",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/soemil-til-km",
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

const KM_PER_SOEMIL = 1.852
const COMMON_SOEMIL_VALUES = [1, 2, 3, 5, 10, 20, 25, 50, 100, 200, 500]

const FAQ_ITEMS = [
  {
    question: "Hvad er en sømil?",
    answer:
      "En sømil (nautisk mil) er en længdeenhed, der bruges til sø- og luftfart. En sømil svarer til præcis 1,852 km (1.852 meter).",
  },
  {
    question: "Hvordan regner man sømil til km?",
    answer:
      "Formlen er km = sømil × 1,852. Fx bliver 10 sømil til km: 10 × 1,852 = 18,52 km.",
  },
  {
    question: "Hvad er forskellen på en sømil og en engelsk mile?",
    answer:
      "En sømil (1,852 km) og en engelsk mile (1,609 km) er to forskellige enheder. Sømil bruges til sø- og luftfart, mens den engelske mile bruges til afstande på land i fx USA og Storbritannien.",
  },
]

function formatKm(soemil: number) {
  return (soemil * KM_PER_SOEMIL).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function SoemilTilKmPage() {
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
              Sømil til Km
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn sømil til km online — indtast en værdi herunder for at
              omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <SoemilKmConverter title="Sømil til km" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Sømil til km tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_SOEMIL_VALUES.map((soemil) => (
              <li
                key={soemil}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{soemil} sømil til km</h3>
                <span className="text-muted-foreground">
                  {soemil} nm = {formatKm(soemil)} km
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om sømil og km
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
