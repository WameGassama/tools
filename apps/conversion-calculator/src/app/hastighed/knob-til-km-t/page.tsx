import type { Metadata } from "next"

import { KnotKmhConverter } from "@/src/components/site/knot-kmh-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Knob til Km/t Omregner – Omregn Knob til Km/t Online"
const DESCRIPTION =
  "Omregn knob til km/t online hurtigt og nemt. Se en knob til km/t tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/knob-til-km-t",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/knob-til-km-t",
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

const KMH_PER_KNOT = 1.852
const COMMON_KNOT_VALUES = [
  1, 3, 4, 5, 7, 8, 9, 10, 12, 14, 15, 16, 17, 17.4, 18, 20, 21, 25, 30, 32,
  35, 40, 45, 50, 60, 70, 90, 100,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er en knob?",
    answer:
      "En knob (også stavet knop, forkortet kn eller kt) er en hastighedsenhed, der bruges til søs og i luftfarten. En knob svarer til 1 sømil i timen.",
  },
  {
    question: "Hvad er kn?",
    answer: "Kn er den internationale forkortelse for knob (knot).",
  },
  {
    question: "Hvordan regner man knob til km/t?",
    answer:
      "Formlen er km/t = knob × 1,852. Fx bliver 20 knob til km/t: 20 × 1,852 = 37,04 km/t.",
  },
]

function formatKmh(knots: number) {
  return (knots * KMH_PER_KNOT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KnobTilKmTPage() {
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
            <h1 className="mb-2.5 text-balance break-words text-[32px] leading-[1.1] font-extrabold sm:text-[44px]">
              Knob til Km/t Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores knob til km/t omregner til hurtigt og nemt at omregne
              knob til km/t. Indtast det antal knob, du vil omregne, og få
              resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KnotKmhConverter title="Knob til km/t" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Knob til km/t tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KNOT_VALUES.map((knots) => (
              <li
                key={knots}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{knots} knob til km/t</h3>
                <span className="text-muted-foreground">
                  {knots} knob = {formatKmh(knots)} km/t
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om knob
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
