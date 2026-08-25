import type { Metadata } from "next"

import { ClLConverter } from "@/src/components/site/cl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cl til Liter Omregner – Omregn Centiliter til Liter Online"
const DESCRIPTION =
  "Omregn cl til liter online hurtigt og nemt. Se en cl til liter tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/cl-til-l",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/cl-til-l",
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

const L_PER_CL = 1 / 100
const COMMON_CL_VALUES = [10, 25, 50, 75, 100]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man cl til liter?",
    answer:
      "Formlen er liter = cl ÷ 100. Fx bliver 50 cl til liter: 50 ÷ 100 = 0,5 liter.",
  },
  {
    question: "Hvor mange cl er der på en liter?",
    answer: "Der går 100 cl på hver liter.",
  },
  {
    question: "Hvor meget er 50 cl?",
    answer: "50 cl svarer til 0,5 liter, altså en halv liter.",
  },
]

export default function ClTilLPage() {
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
              Cl til Liter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores cl til liter omregner til hurtigt og nemt at omregne
              centiliter til liter. Indtast det antal centiliter, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClLConverter title="Cl til liter" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Cl til liter tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CL_VALUES.map((cl) => (
              <li
                key={cl}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{cl} cl til l</h3>
                <span className="text-muted-foreground">
                  {cl} cl ={" "}
                  {(cl * L_PER_CL).toLocaleString("da-DK", {
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
            Ofte stillede spørgsmål om cl og liter
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
