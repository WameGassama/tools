import type { Metadata } from "next"

import { GramKgConverter } from "@/src/components/site/gram-kg-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Kg til Gram Omregner – Omregn Kilogram til Gram Online"
const DESCRIPTION =
  "Omregn kg til gram online hurtigt og nemt. Se en kg til gram tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vaegt/kg-til-gram",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vaegt/kg-til-gram",
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

const GRAM_PER_KG = 1000
const COMMON_KG_VALUES = [0.1, 0.25, 0.5, 0.75, 1, 2, 5, 10]

const FAQ_ITEMS = [
  {
    question: "Hvor mange gram er et kilo?",
    answer:
      "Et kilo (kg) svarer til 1.000 gram. Det gælder uanset om du spørger til gram, g eller gram pr. kilo — forholdet er altid det samme.",
  },
  {
    question: "Hvordan regner man kg om til gram?",
    answer:
      "Gang kg-tallet med 1.000. Fx bliver 1 kg til gram: 1 × 1.000 = 1.000 gram.",
  },
  {
    question: "Hvad er et kilogram?",
    answer:
      "Kilogram (kg) er SI-systemets grundenhed for masse. Et kilogram svarer til 1.000 gram og bruges bl.a. til at veje mad, personer og pakker.",
  },
  {
    question: "Hvor meget er 100 gram i kg?",
    answer: "100 gram svarer til 0,1 kg.",
  },
]

function formatGram(kg: number) {
  return (kg * GRAM_PER_KG).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KgTilGramPage() {
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
              Kg til Gram Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores kg til gram omregner til hurtigt og nemt at omregne kg
              til g. Indtast det antal kilogram, du vil omregne, og få
              resultatet med det samme, eller brug vores tabel til hurtigt at
              finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <GramKgConverter title="Kg til gram" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Kg til gram tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_KG_VALUES.map((kg) => (
              <li
                key={kg}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {kg.toString().replace(".", ",")} kg til gram
                </h3>
                <span className="text-muted-foreground">
                  {kg.toString().replace(".", ",")} kg = {formatGram(kg)} g
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om kg og gram
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
