import type { Metadata } from "next"

import { LbsKgConverter } from "@/src/components/site/lbs-kg-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Pund til Kg – Omregn Pund (lbs) til Kg Online"
const DESCRIPTION =
  "Omregn pund til kg online hurtigt og nemt. Se en pund til kg tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vaegt/pund-til-kg",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vaegt/pund-til-kg",
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

const KG_PER_LB = 0.45359237
const COMMON_LBS_VALUES = [
  1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 20, 22, 25, 45, 50, 55, 60,
  65, 70, 80, 95, 100, 160, 168, 240, 250, 280, 295, 300, 335, 365, 400, 700,
  800, 803, 1000,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er et pund (lbs)?",
    answer:
      'Pund (lbs eller lb, engelsk "pound") er en engelsk/amerikansk vægtenhed. Et pund svarer til 0,45359237 kg, altså 453,6 gram.',
  },
  {
    question: "Hvad er forkortelsen for pund?",
    answer:
      'Pund forkortes lb eller lbs (flertal). "Lbs" kommer fra det latinske "libra".',
  },
  {
    question: "Hvordan regner man pund til kg?",
    answer:
      "Formlen er kg = pund × 0,45359237. Fx bliver 20 pund til kg: 20 × 0,45359237 ≈ 9,07 kg.",
  },
  {
    question: "Er dansk pund det samme som engelsk pund?",
    answer:
      'Nej. Det gamle danske pund (brugt før overgangen til det metriske system) var præcis 500 gram og bruges stadig uformelt, fx "et pund smør". Det engelske/amerikanske pund (lbs), som denne omregner bruger, er derimod 453,6 gram.',
  },
]

function formatKg(lbs: number) {
  return (lbs * KG_PER_LB).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function PundTilKgPage() {
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
              Omregn Pund til Kg
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores pund til kg omregner til hurtigt og nemt at omregne
              pund (lbs) til kilogram. Indtast det antal pund, du vil omregne,
              og få resultatet med det samme, eller brug vores tabel til hurtigt
              at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <LbsKgConverter title="Pund til kg" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Pund til kg tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_LBS_VALUES.map((lbs) => (
              <li
                key={lbs}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{lbs} pund til kg</h3>
                <span className="text-muted-foreground">
                  {lbs} pund = {formatKg(lbs)} kg
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om pund
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
