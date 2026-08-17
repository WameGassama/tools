import type { Metadata } from "next"

import { MeterCmConverter } from "@/src/components/site/meter-cm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cm til M Omregner – Omregn Centimeter til Meter Online"
const DESCRIPTION =
  "Omregn cm til meter online hurtigt og nemt. Se en cm til meter tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/cm-til-m",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/cm-til-m",
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

const METER_PER_CM = 1 / 100
const COMMON_CM_VALUES = [50, 100, 150, 200, 250, 300, 500, 1000]

const FAQ_ITEMS = [
  {
    question: "Hvor mange meter er en cm?",
    answer: "1 cm svarer til 0,01 meter.",
  },
  {
    question: "Hvordan regner man cm om til meter?",
    answer:
      "Formlen er meter = cm ÷ 100. Fx bliver 250 cm til meter: 250 ÷ 100 = 2,5 meter.",
  },
]

function formatMeter(cm: number) {
  return (cm * METER_PER_CM).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function CmTilMPage() {
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
              Cm til M Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores cm til meter omregner til hurtigt og nemt at omregne
              centimeter til meter. Indtast det antal centimeter, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MeterCmConverter title="Cm til meter" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Cm til meter tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CM_VALUES.map((cm) => (
              <li
                key={cm}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{cm} cm til meter</h3>
                <span className="text-muted-foreground">
                  {cm} cm = {formatMeter(cm)} m
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om cm og meter
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
