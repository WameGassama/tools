import type { Metadata } from "next"

import { LbsKgConverter } from "@/src/components/site/lbs-kg-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Kg til Lbs – Omregn Kg til Pund Online"
const DESCRIPTION =
  "Omregn kg til lbs (pund) online med det samme. Se en kg til lbs tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "kg til lbs",
    "kg til pund",
    "kg til pounds",
    "kg til lbs omregner",
    "kilo til lbs",
    "kilo til pund",
    "hvor meget er 1 kg",
  ],
  alternates: {
    canonical: "/vaegt/kg-til-lbs",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vaegt/kg-til-lbs",
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

const LBS_PER_KG = 1 / 0.45359237
const COMMON_KG_VALUES = [1, 5, 10, 20, 50, 82, 100]

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man kg til lbs?",
    answer:
      "Formlen er lbs = kg × 2,20462. Fx bliver 82 kg til lbs: 82 × 2,20462 ≈ 180,78 lbs.",
  },
  {
    question: "Hvor meget er 1 kg i pund?",
    answer: "1 kg svarer til ca. 2,2 lbs (mere præcist 2,20462 lbs).",
  },
]

function formatLbs(kg: number) {
  return (kg * LBS_PER_KG).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KgTilLbsPage() {
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
              Kg til Lbs
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn kg til lbs (pund) online — indtast en værdi herunder
              for at omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <LbsKgConverter title="Kg til lbs" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Kg til lbs tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KG_VALUES.map((kg) => (
              <li
                key={kg}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{kg} kg til lbs</h3>
                <span className="text-muted-foreground">
                  {kg} kg = {formatLbs(kg)} lbs
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om kg og lbs
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
