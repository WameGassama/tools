import type { Metadata } from "next"

import { HektarKm2Converter } from "@/src/components/site/hektar-km2-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Hektar til km² – Omregn Hektar til Kvadratkilometer Online"
const DESCRIPTION =
  "Omregn hektar til km² online med det samme. Se en hektar til km² tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "hektar til km2",
    "hektar til km²",
    "1 hektar i km2",
    "hektar in km2",
    "hvad er 1 hektar i km2",
    "km2 til hektar",
    "km2 til ha",
    "hvor mange hektar er 1 km2",
    "en hektar i km2",
    "hvor meget er en hektar i km2",
  ],
  alternates: {
    canonical: "/areal/hektar-til-km2",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal/hektar-til-km2",
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

const KM2_PER_HEKTAR = 0.01
const COMMON_HEKTAR_VALUES = [1, 10, 50, 100, 200, 500, 1000, 5000, 10000]

const FAQ_ITEMS = [
  {
    question: "Hvor mange hektar er 1 km²?",
    answer:
      "1 km² svarer til 100 hektar. Omvendt er 1 hektar derfor 0,01 km².",
  },
  {
    question: "Hvordan regner man hektar til km²?",
    answer:
      "Formlen er km² = hektar × 0,01 (eller hektar ÷ 100). Fx bliver 250 hektar til km²: 250 × 0,01 = 2,5 km².",
  },
]

function formatKm2(hektar: number) {
  return (hektar * KM2_PER_HEKTAR).toLocaleString("da-DK", {
    maximumFractionDigits: 4,
  })
}

export default function HektarTilKm2Page() {
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
            <h1 className="mb-2.5 text-balance break-words text-[32px] leading-[1.1] font-extrabold sm:text-[44px]">
              Hektar til km²
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn hektar til kvadratkilometer online — indtast en værdi
              herunder for at omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HektarKm2Converter title="Hektar til km²" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Hektar til km² tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_HEKTAR_VALUES.map((hektar) => (
              <li
                key={hektar}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{hektar} hektar til km²</h3>
                <span className="text-muted-foreground">
                  {hektar} ha = {formatKm2(hektar)} km²
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om hektar og km²
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
