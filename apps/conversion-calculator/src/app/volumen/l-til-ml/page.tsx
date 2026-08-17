import type { Metadata } from "next"
import Link from "next/link"

import { MlLConverter } from "@/src/components/site/ml-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Liter til Ml Omregner – Omregn Liter til Milliliter Online"
const DESCRIPTION =
  "Omregn liter til ml online hurtigt og nemt. Se en liter til ml tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/l-til-ml",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/l-til-ml",
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

const ML_PER_L = 1000
const COMMON_L_VALUES = [0.25, 0.5, 1, 1.5, 2, 3, 5]

const FAQ_ITEMS = [
  {
    question: "Hvor mange ml er der på en liter?",
    answer:
      "Der går 1.000 ml på hver liter. Formlen er ml = liter × 1.000.",
  },
  {
    question: "Hvordan omregner man liter til ml?",
    answer:
      "Gang literantallet med 1.000. Fx bliver 1,5 liter til ml: 1,5 × 1.000 = 1.500 ml.",
  },
  {
    question: "Hvor mange ml er en halv liter?",
    answer: "En halv liter (0,5 l) svarer til 500 ml.",
  },
]

export default function LTilMlPage() {
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
              Liter til Ml Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores liter til ml omregner til hurtigt og nemt at omregne
              liter til milliliter. Indtast det antal liter, du vil omregne,
              og få resultatet med det samme, eller brug vores tabel til
              hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlLConverter title="Liter til ml" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Liter til ml tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_L_VALUES.map((l) => (
              <li
                key={l}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {l.toString().replace(".", ",")} l til ml
                </h3>
                <span className="text-muted-foreground">
                  {l.toString().replace(".", ",")} l ={" "}
                  {(l * ML_PER_L).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  ml
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om liter og ml
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
          <Link href="/volumen/ml-til-l" className="text-primary underline">
            Omregn ml til liter
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
