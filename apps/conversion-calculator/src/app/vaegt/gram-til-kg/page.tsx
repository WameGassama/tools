import type { Metadata } from "next"
import Link from "next/link"

import { GramKgConverter } from "@/src/components/site/gram-kg-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Gram til Kg Omregner – Omregn Gram til Kilogram Online"
const DESCRIPTION =
  "Omregn gram til kg online hurtigt og nemt. Se en gram til kg tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vaegt/gram-til-kg",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vaegt/gram-til-kg",
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

const KG_PER_GRAM = 1 / 1000
const COMMON_GRAM_VALUES = [100, 250, 500, 750, 1000, 2000, 5000, 10000]

const FAQ_ITEMS = [
  {
    question: "Hvor mange gram er der på et kilo?",
    answer: "Der går 1.000 gram på hvert kilo (kg).",
  },
  {
    question: "Hvordan regner man gram om til kg?",
    answer:
      "Formlen er kg = gram ÷ 1.000. Fx bliver 100 gram til kg: 100 ÷ 1.000 = 0,1 kg.",
  },
]

function formatKg(gram: number) {
  return (gram * KG_PER_GRAM).toLocaleString("da-DK", {
    maximumFractionDigits: 3,
  })
}

export default function GramTilKgPage() {
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
              Gram til Kg Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores gram til kg omregner til hurtigt og nemt at omregne fra
              gram til kg. Indtast det antal gram, du vil omregne, og få
              resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <GramKgConverter title="Gram til kg" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Gram til kg tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_GRAM_VALUES.map((gram) => (
              <li
                key={gram}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{gram} gram til kg</h3>
                <span className="text-muted-foreground">
                  {gram} g = {formatKg(gram)} kg
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om gram og kg
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

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Vil du regne den anden vej?{" "}
          <Link href="/vaegt/kg-til-gram" className="text-primary underline">
            Omregn kg til gram
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
