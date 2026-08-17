import type { Metadata } from "next"
import Link from "next/link"

import { DlLConverter } from "@/src/components/site/dl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Dl til Liter Omregner – Omregn Deciliter til Liter Online"
const DESCRIPTION =
  "Omregn dl til liter online hurtigt og nemt. Se en dl til liter tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/dl-til-l",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/dl-til-l",
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

const L_PER_DL = 1 / 10
const COMMON_DL_VALUES = [1, 2, 2.5, 3, 5, 10]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man dl til liter?",
    answer:
      "Formlen er liter = dl ÷ 10. Fx bliver 5 dl til liter: 5 ÷ 10 = 0,5 liter.",
  },
  {
    question: "Hvor mange deciliter er en liter?",
    answer: "Der går 10 deciliter (dl) på hver liter.",
  },
  {
    question: "Hvor mange dl er en halv liter?",
    answer: "En halv liter (0,5 l) svarer til 5 dl.",
  },
]

export default function DlTilLPage() {
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
              Dl til Liter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores dl til liter omregner til hurtigt og nemt at omregne
              deciliter til liter. Indtast det antal deciliter, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <DlLConverter title="Dl til liter" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Dl til liter tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_DL_VALUES.map((dl) => (
              <li
                key={dl}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {dl.toString().replace(".", ",")} dl til l
                </h3>
                <span className="text-muted-foreground">
                  {dl.toString().replace(".", ",")} dl ={" "}
                  {(dl * L_PER_DL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  l
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om dl og liter
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
          <Link href="/volumen/l-til-dl" className="text-primary underline">
            Omregn liter til dl
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
