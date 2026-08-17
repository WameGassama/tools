import type { Metadata } from "next"
import Link from "next/link"

import { BarPsiConverter } from "@/src/components/site/bar-psi-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "PSI til Bar Omregner – Omregn PSI til Bar Online"
const DESCRIPTION =
  "Omregn psi til bar online hurtigt og nemt. Se en psi til bar tabel for bl.a. dæktryk, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/tryk/psi-til-bar",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tryk/psi-til-bar",
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

const BAR_PER_PSI = 1 / 14.5037738
const COMMON_PSI_VALUES = [
  10, 15, 20, 25, 30, 32, 33, 35, 36, 38, 39, 40, 41, 42, 44, 45, 50, 51, 60,
  65, 100, 120, 130, 150, 250, 1000, 3000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man psi til bar?",
    answer:
      "Formlen er bar = psi ÷ 14,5038. Fx bliver 36 psi til bar: 36 ÷ 14,5038 ≈ 2,48 bar.",
  },
  {
    question: "Hvad er forskellen på psi og bar?",
    answer:
      "Psi (pound-force per square inch) og bar er begge trykenheder. 1 bar svarer til ca. 14,5 psi. Psi bruges typisk i USA og Storbritannien, mens bar er den mest udbredte trykenhed i Danmark og resten af Europa.",
  },
  {
    question: "Hvad er en bar (trykenhed)?",
    answer:
      "En bar er en trykenhed, der svarer nogenlunde til det gennemsnitlige lufttryk ved havoverfladen. 1 bar = 100.000 pascal (Pa) = 14,5038 psi.",
  },
  {
    question: "Hvordan omregner jeg dæktryk fra psi til bar?",
    answer:
      "Dæktryk angives ofte i psi på amerikanske og engelske biler, mens danske dæktrykstabeller normalt bruger bar. Brug samme formel: bar = psi ÷ 14,5038. Fx svarer et typisk dæktryk på 32 psi til ca. 2,2 bar.",
  },
  {
    question: "Hvad er psig?",
    answer:
      "Psig (pounds per square inch gauge) er psi målt i forhold til det omgivende atmosfæretryk, altså det overtryk du typisk aflæser på en dæktryksmåler. Omregningen til bar er den samme: bar = psig ÷ 14,5038.",
  },
]

export default function PsiTilBarPage() {
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
              Psi til Bar Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores psi til bar omregner til hurtigt og nemt at omregne
              psi til bar. Indtast det antal psi, du vil omregne, og få
              resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <BarPsiConverter title="Psi til bar" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Psi til bar tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_PSI_VALUES.map((psi) => (
              <li
                key={psi}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{psi} psi til bar</h3>
                <span className="text-muted-foreground">
                  {psi} psi ={" "}
                  {(psi * BAR_PER_PSI).toLocaleString("da-DK", {
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
            Ofte stillede spørgsmål om psi og bar
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
          <Link href="/tryk/bar-til-psi" className="text-primary underline">
            Omregn bar til psi
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
