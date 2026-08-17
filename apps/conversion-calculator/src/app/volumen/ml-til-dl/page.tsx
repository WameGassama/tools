import type { Metadata } from "next"
import Link from "next/link"

import { MlDlConverter } from "@/src/components/site/ml-dl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Ml til Dl Omregner – Omregn Milliliter til Deciliter Online"
const DESCRIPTION =
  "Omregn ml til dl online hurtigt og nemt. Se en ml til dl tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/ml-til-dl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/ml-til-dl",
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

const DL_PER_ML = 1 / 100
const COMMON_ML_VALUES = [
  10, 25, 40, 50, 60, 80, 100, 120, 125, 150, 500, 1000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man ml til dl?",
    answer:
      "Formlen er dl = ml ÷ 100. Fx bliver 50 ml til dl: 50 ÷ 100 = 0,5 dl.",
  },
  {
    question: "Hvad er ml?",
    answer:
      "Ml er en forkortelse for milliliter, en enhed for rumfang. 1 ml svarer til 1/1000 liter, og bruges ofte til at måle mindre mængder væske, fx i madopskrifter.",
  },
  {
    question: "Er 100 ml det samme som 1 dl?",
    answer:
      "Ja, 100 ml svarer præcis til 1 dl (deciliter), da der går 100 ml på hver deciliter.",
  },
  {
    question: "Hvor meget er 50 ml i dl?",
    answer: "50 ml svarer til 0,5 dl, altså en halv deciliter.",
  },
]

export default function MlTilDlPage() {
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
              Ml til Dl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores ml til dl omregner til hurtigt og nemt at omregne
              milliliter til deciliter. Indtast det antal milliliter, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlDlConverter title="Ml til dl" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Ml til dl tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_ML_VALUES.map((ml) => (
              <li
                key={ml}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{ml} ml til dl</h3>
                <span className="text-muted-foreground">
                  {ml} ml ={" "}
                  {(ml * DL_PER_ML).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  dl
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om ml og dl
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
          <Link href="/volumen/dl-til-ml" className="text-primary underline">
            Omregn dl til ml
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
