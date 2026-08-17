import type { Metadata } from "next"
import Link from "next/link"

import { BarPsiConverter } from "@/src/components/site/bar-psi-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Bar til PSI Omregner – Omregn Bar til PSI Online"
const DESCRIPTION =
  "Omregn bar til psi online hurtigt og nemt. Se en bar til psi tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/tryk/bar-til-psi",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/tryk/bar-til-psi",
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

const PSI_PER_BAR = 14.5037738
const COMMON_BAR_VALUES = [
  0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 50, 100,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man bar til psi?",
    answer:
      "Formlen er psi = bar × 14,5038. Fx bliver 2,5 bar til psi: 2,5 × 14,5038 ≈ 36,26 psi.",
  },
  {
    question: "Hvad er en bar?",
    answer:
      "En bar er en trykenhed, der svarer nogenlunde til det gennemsnitlige lufttryk ved havoverfladen. 1 bar = 100.000 pascal (Pa) = 14,5038 psi.",
  },
  {
    question: "Hvad er 1 bar tryk i kg?",
    answer:
      "1 bar svarer til ca. 1,02 kg/cm² (kilogram-force per kvadratcentimeter). Det er derfor bar og kg/cm² ofte bruges næsten som synonymer i praksis.",
  },
  {
    question: "Hvad er forskellen på bar og psi?",
    answer:
      "Bar og psi er begge trykenheder. Bar er standarden i Danmark og resten af Europa, mens psi typisk bruges i USA og Storbritannien, bl.a. til dæktryk. 1 bar = 14,5038 psi.",
  },
]

export default function BarTilPsiPage() {
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
              Bar til Psi Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores bar til psi omregner til hurtigt og nemt at omregne
              bar til psi. Indtast det antal bar, du vil omregne, og få
              resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <BarPsiConverter title="Bar til psi" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Bar til psi tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_BAR_VALUES.map((bar) => (
              <li
                key={bar}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {bar.toString().replace(".", ",")} bar til psi
                </h3>
                <span className="text-muted-foreground">
                  {bar.toString().replace(".", ",")} bar ={" "}
                  {(bar * PSI_PER_BAR).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  psi
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om bar og psi
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
          <Link href="/tryk/psi-til-bar" className="text-primary underline">
            Omregn psi til bar
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
