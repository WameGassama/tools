import type { Metadata } from "next"

import { MphKmtConverter } from "@/src/components/site/mph-kmt-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Km/t til Mph – Omregn Km i Timen til Miles i Timen Online"
const DESCRIPTION =
  "Omregn km/t til mph online med det samme. Se en km/t til mph tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "km/t til mph",
    "km/t til mph omregner",
    "omregn km/t til mph",
    "kilometer i timen til mph",
    "kmh to mph",
  ],
  alternates: {
    canonical: "/hastighed/km-t-til-mph",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/km-t-til-mph",
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

const MPH_PER_KMT = 1 / 1.609344
const COMMON_KMT_VALUES = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 130, 140,
]

const FAQ_ITEMS = [
  {
    question: "Hvor mange mph er en km/t?",
    answer: "1 km/t svarer til ca. 0,6214 mph.",
  },
  {
    question: "Hvordan regner man km/t til mph?",
    answer:
      "Formlen er mph = km/t ÷ 1,609344. Fx bliver 100 km/t til mph: 100 ÷ 1,609344 ≈ 62,14 mph.",
  },
]

function formatMph(kmt: number) {
  return (kmt * MPH_PER_KMT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KmTTilMphPage() {
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
              Km/t til Mph
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn km/t til mph online — indtast en værdi herunder for at
              omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MphKmtConverter title="Km/t til mph" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Km/t til mph tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KMT_VALUES.map((kmt) => (
              <li
                key={kmt}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{kmt} km/t til mph</h3>
                <span className="text-muted-foreground">
                  {kmt} km/t = {formatMph(kmt)} mph
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om km/t og mph
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
