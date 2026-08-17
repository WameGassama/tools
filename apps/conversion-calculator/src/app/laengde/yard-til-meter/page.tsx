import type { Metadata } from "next"

import { YardMeterConverter } from "@/src/components/site/yard-meter-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Yard til Meter Omregner – Omregn Yards til Meter Online"
const DESCRIPTION =
  "Omregn yard til meter online hurtigt og nemt. Se en yard til meter tabel med de mest søgte omregninger, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/yard-til-meter",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/yard-til-meter",
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

const METERS_PER_YARD = 0.9144
const COMMON_YARD_VALUES = [
  1, 2, 3, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100, 200, 300,
  400, 440, 500, 800, 1000, 1760,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er en yard?",
    answer:
      'En yard (forkortet yd) er en længdeenhed fra det amerikanske/britiske målesystem, svarende til 3 fod eller 36 tommer. Yard bruges bl.a. i USA og Storbritannien til afstande i sport (fx amerikansk fodbold og golf) og tekstiler, hvor Danmark og resten af det metriske system bruger meter.',
  },
  {
    question: "Hvor lang er en yard?",
    answer:
      "En yard svarer til præcis 0,9144 meter, altså 91,44 cm. Det er det tal, vores yard til meter omregner regner ud fra.",
  },
  {
    question: "Hvor meget er en yard i cm?",
    answer: "En yard er præcis 91,44 cm, altså lige under en meter.",
  },
  {
    question: "Yard vs. meter",
    answer:
      "Yard bruges primært i USA og Storbritannien, mens meter er standarden i Danmark og de fleste andre lande. Da 1 yard = 0,9144 meter, er en yard lidt kortere end en meter.",
  },
  {
    question: "Hvor mange yards er 100 meter?",
    answer:
      "100 meter svarer til ca. 109,36 yards (100 ÷ 0,9144). En 100 meter-løb er altså lidt længere end 109 yards.",
  },
]

function formatMeters(yards: number) {
  return (yards * METERS_PER_YARD).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function YardTilMeterPage() {
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
              Yard til Meter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores yard til meter omregner til hurtigt og nemt at
              omregne yards til meter. Indtast det antal yards, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <YardMeterConverter title="Yard til meter" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Yard til meter tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_YARD_VALUES.map((yards) => (
              <li
                key={yards}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{yards} yard til meter</h3>
                <span className="text-muted-foreground">
                  {yards} yard = {formatMeters(yards)} meter
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om yard
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
