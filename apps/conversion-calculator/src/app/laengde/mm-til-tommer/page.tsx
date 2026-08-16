import type { Metadata } from "next"

import { TommerMmConverter } from "@/src/components/site/tommer-mm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Mm til Tommer – Omregn Millimeter til Inch Online"
const DESCRIPTION =
  "Omregn mm til tommer (inch) online med det samme. Se en mm til tommer tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "mm til tommer",
    "millimeter til tommer",
    "mm til tomme",
    "mm til tommer rør",
    "omregner mm til tommer",
    "omregn mm til tommer",
    "millimeter til tomme",
  ],
  alternates: {
    canonical: "/laengde/mm-til-tommer",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/mm-til-tommer",
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

const TOMME_PER_MM = 1 / 25.4
const COMMON_MM_VALUES = [1, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100]

const FAQ_ITEMS = [
  {
    question: "Hvor mange tommer er en mm?",
    answer: "1 mm svarer til ca. 0,0394 tommer (inch).",
  },
  {
    question: "Hvordan regner man mm om til tommer?",
    answer:
      "Formlen er tommer = mm ÷ 25,4. Fx bliver 50 mm til tommer: 50 ÷ 25,4 ≈ 1,97 tommer.",
  },
]

function formatTommer(mm: number) {
  return (mm * TOMME_PER_MM).toLocaleString("da-DK", {
    maximumFractionDigits: 3,
  })
}

export default function MmTilTommerPage() {
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
              Mm til Tommer
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn mm til tommer online — indtast en værdi herunder for at
              omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <TommerMmConverter title="Mm til tommer" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Mm til tommer tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_MM_VALUES.map((mm) => (
              <li
                key={mm}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{mm} mm til tommer</h3>
                <span className="text-muted-foreground">
                  {mm} mm = {formatTommer(mm)} in
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om mm og tommer
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
