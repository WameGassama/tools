import type { Metadata } from "next"

import { InchCmConverter } from "@/src/components/site/inch-cm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Tommer til Cm Omregner – Omregn Inch til Centimeter Online"
const DESCRIPTION =
  "Omregn tommer (inch) til cm online hurtigt og nemt. Se en tommer til cm tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
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
  24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 40, 42, 43, 45, 46,
  47, 48, 49, 50, 52, 55, 58, 60, 65, 70, 75, 80, 85, 100,
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
  {
    question: "Er tommer og inch det samme?",
    answer:
      'Ja, "tommer" er det danske ord for det engelske "inch". De er samme længdeenhed og svarer begge til 2,54 cm.',
  },
  {
    question: 'Hvad betyder et højdemål som 5\'7" i cm?',
    answer:
      'Højder angivet i det amerikanske format, fx 5\'7" (5 fod og 7 tommer), skal omregnes i to trin: fod til cm og tommer til cm lægges sammen. 5\'7" = (5 × 30,48 cm) + (7 × 2,54 cm) ≈ 170,2 cm.',
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
              Tommer til Cm Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores tommer til cm omregner til hurtigt og nemt at omregne
              inch til centimeter. Indtast det antal inch, du vil omregne, og
              få resultatet med det samme, eller brug vores tabel til hurtigt
              at finde den ønskede omregning.
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
