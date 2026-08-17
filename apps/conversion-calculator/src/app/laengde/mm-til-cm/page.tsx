import type { Metadata } from "next"
import Link from "next/link"

import { MmCmConverter } from "@/src/components/site/mm-cm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Mm til Cm Omregner – Omregn Millimeter til Centimeter Online"
const DESCRIPTION =
  "Omregn mm til cm online hurtigt og nemt. Se en mm til cm tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/mm-til-cm",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/mm-til-cm",
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

const CM_PER_MM = 1 / 10
const COMMON_MM_VALUES = [1, 2, 5, 10, 20, 25, 50, 100, 150, 250, 300, 600, 1000]

const FAQ_ITEMS = [
  {
    question: "Hvor mange mm er en cm?",
    answer: "Der går 10 mm (millimeter) på hver cm (centimeter).",
  },
  {
    question: "Hvordan regner man mm om til cm?",
    answer:
      "Formlen er cm = mm ÷ 10. Fx bliver 100 mm til cm: 100 ÷ 10 = 10 cm.",
  },
]

function formatCm(mm: number) {
  return (mm * CM_PER_MM).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function MmTilCmPage() {
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
              Mm til Cm Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores mm til cm omregner til hurtigt og nemt at omregne
              millimeter til centimeter. Indtast det antal millimeter, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MmCmConverter title="Mm til cm" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Mm til cm tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_MM_VALUES.map((mm) => (
              <li
                key={mm}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{mm} mm til cm</h3>
                <span className="text-muted-foreground">
                  {mm} mm = {formatCm(mm)} cm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om mm og cm
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
          <Link href="/laengde/cm-til-mm" className="text-primary underline">
            Omregn cm til mm
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
