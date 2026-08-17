import type { Metadata } from "next"
import Link from "next/link"

import { MmMConverter } from "@/src/components/site/mm-m-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "M til Mm Omregner – Omregn Meter til Millimeter Online"
const DESCRIPTION =
  "Omregn meter til mm online hurtigt og nemt. Se en meter til mm tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/m-til-mm",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/m-til-mm",
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

const MM_PER_METER = 1000
const COMMON_METER_VALUES = [0.1, 0.5, 1, 2, 5, 10, 25, 50, 100]

const FAQ_ITEMS = [
  {
    question: "Hvor mange mm er der på en meter?",
    answer:
      "Der går 1.000 mm (millimeter) på hver meter. Formlen er mm = meter × 1.000.",
  },
  {
    question: "Hvordan regner man meter om til mm?",
    answer:
      "Gang metertallet med 1.000. Fx bliver 2,5 meter til mm: 2,5 × 1.000 = 2.500 mm.",
  },
]

function formatMm(meter: number) {
  return (meter * MM_PER_METER).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function MTilMmPage() {
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
              M til Mm Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores meter til mm omregner til hurtigt og nemt at omregne
              meter til millimeter. Indtast det antal meter, du vil omregne, og
              få resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MmMConverter title="Meter til mm" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Meter til mm tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_METER_VALUES.map((meter) => (
              <li
                key={meter}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {meter.toString().replace(".", ",")} meter til mm
                </h3>
                <span className="text-muted-foreground">
                  {meter.toString().replace(".", ",")} m = {formatMm(meter)} mm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om meter og mm
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
          <Link href="/laengde/mm-til-m" className="text-primary underline">
            Omregn mm til meter
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
