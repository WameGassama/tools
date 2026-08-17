import type { Metadata } from "next"
import Link from "next/link"

import { DlLConverter } from "@/src/components/site/dl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Liter til Dl Omregner – Omregn Liter til Deciliter Online"
const DESCRIPTION =
  "Omregn liter til dl online hurtigt og nemt. Se en liter til dl tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/l-til-dl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/l-til-dl",
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

const DL_PER_L = 10
const COMMON_L_VALUES = [0.25, 0.5, 1, 1.5, 2, 5]

const FAQ_ITEMS = [
  {
    question: "Hvor mange dl går der på en liter?",
    answer:
      "Der går 10 deciliter (dl) på hver liter. Formlen er dl = liter × 10.",
  },
  {
    question: "Hvor mange dl er 1 liter?",
    answer: "1 liter svarer til 10 dl.",
  },
]

export default function LTilDlPage() {
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
              Liter til Dl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores liter til dl omregner til hurtigt og nemt at omregne
              liter til deciliter. Indtast det antal liter, du vil omregne, og
              få resultatet med det samme, eller brug vores tabel til hurtigt
              at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <DlLConverter title="Liter til dl" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Liter til dl tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_L_VALUES.map((l) => (
              <li
                key={l}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {l.toString().replace(".", ",")} l til dl
                </h3>
                <span className="text-muted-foreground">
                  {l.toString().replace(".", ",")} l ={" "}
                  {(l * DL_PER_L).toLocaleString("da-DK", {
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
            Ofte stillede spørgsmål om liter og dl
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
          <Link href="/volumen/dl-til-l" className="text-primary underline">
            Omregn dl til liter
          </Link>
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
