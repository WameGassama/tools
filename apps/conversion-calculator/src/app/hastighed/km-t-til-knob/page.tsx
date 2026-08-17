import type { Metadata } from "next"

import { KnotKmhConverter } from "@/src/components/site/knot-kmh-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Km/t til Knob Omregner – Omregn Km/t til Knob Online"
const DESCRIPTION =
  "Omregn km/t til knob online hurtigt og nemt. Se en km/t til knob tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/km-t-til-knob",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/km-t-til-knob",
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

const KNOTS_PER_KMH = 1 / 1.852
const COMMON_KMH_VALUES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120]

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man km/t til knob?",
    answer:
      "Formlen er knob = km/t ÷ 1,852. Fx bliver 37 km/t til knob: 37 ÷ 1,852 ≈ 19,98 knob.",
  },
  {
    question: "Hvad er en knob i km/t?",
    answer: "En knob svarer til 1,852 km/t.",
  },
]

function formatKnots(kmh: number) {
  return (kmh * KNOTS_PER_KMH).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KmTTilKnobPage() {
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
              Km/t til Knob Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores km/t til knob omregner til hurtigt og nemt at omregne
              km/t til knob. Indtast det antal km/t, du vil omregne, og få
              resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KnotKmhConverter title="Km/t til knob" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Km/t til knob tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KMH_VALUES.map((kmh) => (
              <li
                key={kmh}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{kmh} km/t til knob</h3>
                <span className="text-muted-foreground">
                  {kmh} km/t = {formatKnots(kmh)} knob
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om km/t og knob
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
