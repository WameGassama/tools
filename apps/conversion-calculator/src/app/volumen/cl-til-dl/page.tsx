import type { Metadata } from "next"
import Link from "next/link"

import { ClDlConverter } from "@/src/components/site/cl-dl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cl til Dl Omregner – Omregn Centiliter til Deciliter Online"
const DESCRIPTION =
  "Omregn cl til dl online hurtigt og nemt. Se en cl til dl tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/cl-til-dl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/cl-til-dl",
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

const DL_PER_CL = 1 / 10
const COMMON_CL_VALUES = [
  1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 25, 30, 33, 40, 50, 70,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man cl til dl?",
    answer:
      "Formlen er dl = cl ÷ 10. Fx bliver 20 cl til dl: 20 ÷ 10 = 2 dl.",
  },
  {
    question: "Hvad er cl?",
    answer:
      "Cl er en forkortelse for centiliter, en enhed for rumfang. 1 cl svarer til 1/100 liter, altså 10 ml.",
  },
  {
    question: "Hvor mange cl er der på en dl?",
    answer: "Der går 10 cl på hver deciliter (dl).",
  },
]

export default function ClTilDlPage() {
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
              Cl til Dl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores cl til dl omregner til hurtigt og nemt at omregne
              centiliter til deciliter. Indtast det antal centiliter, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClDlConverter title="Cl til dl" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Cl til dl tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CL_VALUES.map((cl) => (
              <li
                key={cl}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{cl} cl til dl</h3>
                <span className="text-muted-foreground">
                  {cl} cl ={" "}
                  {(cl * DL_PER_CL).toLocaleString("da-DK", {
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
            Ofte stillede spørgsmål om cl og dl
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
          <Link href="/volumen/dl-til-cl" className="text-primary underline">
            Omregn dl til cl
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
