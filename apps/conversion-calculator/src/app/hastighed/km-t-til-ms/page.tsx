import type { Metadata } from "next"

import { KmtMsConverter } from "@/src/components/site/kmt-ms-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Km/t til M/s Omregner – Omregn Km i Timen til Meter i Sekundet Online"
const DESCRIPTION =
  "Omregn km/t til m/s online hurtigt og nemt. Se en km/t til m/s tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/km-t-til-ms",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/km-t-til-ms",
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

const MS_PER_KMT = 1 / 3.6
const COMMON_KMT_VALUES = [
  5, 10, 15, 18, 20, 25, 30, 32, 35, 40, 50, 60, 70, 80, 90, 100, 120,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man km/t til m/s?",
    answer:
      "Formlen er m/s = km/t ÷ 3,6. Fx bliver 100 km/t til m/s: 100 ÷ 3,6 ≈ 27,78 m/s.",
  },
  {
    question: "Hvorfor deler man med 3,6?",
    answer:
      "1 km/t = 1.000 meter / 3.600 sekunder = 0,2778 m/s. Da 1.000 ÷ 3.600 = 1 ÷ 3,6, kan man gange eller dele med 3,6 for at skifte mellem km/t og m/s.",
  },
  {
    question: "Hvor bruges km/t til m/s omregning?",
    answer:
      "Bl.a. i fysikformler og til at omregne vindstyrke fra km/t til m/s, som meteorologer typisk bruger. Vindstyrker angives ofte i m/s, mens hastighed på veje angives i km/t.",
  },
  {
    question: "Hvad er lydens hastighed i km/t?",
    answer:
      "Lydens hastighed ved havoverfladen er ca. 343 m/s, hvilket svarer til ca. 1.235 km/t.",
  },
]

function formatMs(kmt: number) {
  return (kmt * MS_PER_KMT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KmTTilMsPage() {
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
              Km/t til M/s Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores km/t til m/s omregner til hurtigt og nemt at omregne
              km i timen til meter i sekundet. Indtast det antal km i timen,
              du vil omregne, og få resultatet med det samme, eller brug vores
              tabel til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KmtMsConverter title="Km/t til m/s" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Km/t til m/s tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KMT_VALUES.map((kmt) => (
              <li
                key={kmt}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{kmt} km/t til m/s</h3>
                <span className="text-muted-foreground">
                  {kmt} km/t = {formatMs(kmt)} m/s
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om km/t og m/s
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
