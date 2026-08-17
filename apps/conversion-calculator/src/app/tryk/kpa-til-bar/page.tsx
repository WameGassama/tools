import type { Metadata } from "next"
import Link from "next/link"

import { KpaBarConverter } from "@/src/components/site/kpa-bar-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Kpa til Bar Omregner – Omregn Kilopascal til Bar Online"
const DESCRIPTION =
  "Omregn kpa til bar online hurtigt og nemt. Se en kpa til bar tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/tryk/kpa-til-bar",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tryk/kpa-til-bar",
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

const BAR_PER_KPA = 1 / 100
const COMMON_KPA_VALUES = [
  50, 100, 150, 200, 250, 270, 300, 350, 400, 500,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man kpa til bar?",
    answer:
      "Formlen er bar = kPa ÷ 100. Fx bliver 250 kPa til bar: 250 ÷ 100 = 2,5 bar.",
  },
  {
    question: "Hvad er kpa?",
    answer:
      "KPa er en forkortelse for kilopascal, en trykenhed. 1 kPa = 1.000 pascal, og 1 bar = 100 kPa.",
  },
  {
    question: "Hvordan omregner man mpa til bar?",
    answer:
      "Formlen er bar = MPa × 10. Mpa (megapascal) er 1.000 gange større end kPa, så 1 MPa = 10 bar.",
  },
  {
    question: "Hvor bruges kpa som trykenhed?",
    answer:
      "Kpa bruges bl.a. til at angive lufttryk, hydrauliktryk og tekniske specifikationer, hvor bar giver for grove tal og pascal alene er for lille en enhed.",
  },
]

export default function KpaTilBarPage() {
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
              Kpa til Bar Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores kpa til bar omregner til hurtigt og nemt at omregne
              kilopascal til bar. Indtast det antal kilopascal, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KpaBarConverter title="Kpa til bar" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Kpa til bar tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KPA_VALUES.map((kpa) => (
              <li
                key={kpa}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{kpa} kpa til bar</h3>
                <span className="text-muted-foreground">
                  {kpa} kPa ={" "}
                  {(kpa * BAR_PER_KPA).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  bar
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om kpa og bar
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
          <Link href="/tryk/bar-til-kpa" className="text-primary underline">
            Omregn bar til kpa
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
