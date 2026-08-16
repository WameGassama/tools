import type { Metadata } from "next"

import { InchCmConverter } from "@/src/components/site/inch-cm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Tommer til Cm – Omregn Inch til Centimeter Online"
const DESCRIPTION =
  "Omregn tommer (inch) til cm online med det samme. Se en tommer til cm tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tommer til cm",
    "inches to cm",
    "inch to cm",
    "tommer i cm",
    "1 tommer til cm",
    "1 tommer i cm",
    "1 inch to cm",
    "1 inch in cm",
    "hvor mange cm er en tomme",
    "hvad er en tomme i cm",
    "hvor lang er en tomme i cm",
    "hvor lang er en tomme",
    "hvor meget er en tomme i cm",
    "hvor meget er en tomme",
    "tomme til cm",
    "en tomme i cm",
    "engelsk tomme til cm",
    "amerikansk tommer til cm",
    "inch til cm",
    "omregn tommer til cm",
    "tommer til cm tabel",
    "tommer til centimeter",
    "inch cm omregner",
    "hvad er en tomme",
    "hvad er en inch",
    "tommer omregner",
  ],
  alternates: {
    canonical: "/laengde/tommer-til-cm",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/tommer-til-cm",
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

const CM_PER_INCH = 2.54
const COMMON_TOMMER_VALUES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  24, 26, 27, 28, 30, 32, 34, 36, 38, 40, 42, 43, 45, 46, 47, 48, 49, 50, 52,
  55, 58, 60, 65, 70, 75, 80, 85, 100,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er en tomme (inch)?",
    answer:
      'En tomme (på engelsk "inch", forkortet in eller ") er en længdeenhed fra det amerikanske/britiske målesystem. Tommer bruges bl.a. til at angive skærmstørrelser på tv og mobiler, højde og rørdimensioner.',
  },
  {
    question: "Hvor mange cm er en tomme?",
    answer: "En tomme svarer til præcis 2,54 cm.",
  },
  {
    question: "Hvordan regner man tommer om til cm?",
    answer:
      "Formlen er cm = tommer × 2,54. Fx bliver 10 tommer til cm: 10 × 2,54 = 25,4 cm.",
  },
  {
    question: "Hvorfor måles tv og skærme i tommer?",
    answer:
      "Skærmstørrelser, fx en 55 tommer tv, angives traditionelt i tommer, fordi det er den oprindelige amerikanske standard for skærmmål. Tommer-målet er skærmens diagonale længde.",
  },
]

function formatCm(tommer: number) {
  return (tommer * CM_PER_INCH).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function TommerTilCmPage() {
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
              Tommer til Cm
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn tommer til cm online — indtast en værdi herunder for at
              omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <InchCmConverter title="Tommer til cm" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Tommer til cm tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_TOMMER_VALUES.map((tommer) => (
              <li
                key={tommer}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{tommer} tommer til cm</h3>
                <span className="text-muted-foreground">
                  {tommer} in = {formatCm(tommer)} cm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om tommer og cm
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
