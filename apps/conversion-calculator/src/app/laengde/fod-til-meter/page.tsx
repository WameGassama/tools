import type { Metadata } from "next"

import { FootMeterConverter } from "@/src/components/site/foot-meter-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Fod til Meter – Omregn Fod til Meter Online"
const DESCRIPTION =
  "Omregn fod til meter online med det samme. Se en fod til meter tabel med de mest søgte omregninger, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "fod til meter",
    "omregn fod til meter",
    "omregner fod til meter",
    "omregning fod til meter",
    "fra fod til meter",
    "fod omregnet til meter",
    "fod til meter tabel",
    "fod i meter",
    "feet til meter",
    "omregn feet til meter",
    "omregning feet til meter",
    "fod til km",
    "fod til m",
    "ft til m",
    "hvad er en fod",
    "hvor lang er en fod",
    "hvor meget er en fod",
    "en fod",
    "en fod i meter",
    "hvor mange cm er en fod",
    "amerikansk fod",
    "fod vs meter",
    "højde i fod",
    "højde omregner",
    "højde i feet",
    "fod til cm",
    "1 fod til cm",
    "hvor lang er en fod i cm",
    "fod meter",
    "19 fod båd i meter",
  ],
  alternates: {
    canonical: "/laengde/fod-til-meter",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/fod-til-meter",
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

const METERS_PER_FOOT = 0.3048
const COMMON_FEET_VALUES = [
  1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25,
  26, 27, 28, 30, 35, 40, 45, 50, 60, 61, 80, 100, 200, 1000, 1600, 12000,
  15000,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er en fod?",
    answer:
      'En fod (på engelsk "foot" eller "feet", forkortet ft) er en længdeenhed fra det amerikanske/britiske målesystem. Den amerikanske fod bruges bl.a. til at angive højde og afstande i USA og Storbritannien, hvor Danmark og resten af det metriske system bruger meter.',
  },
  {
    question: "Hvor lang er en fod?",
    answer:
      "En fod svarer til præcis 0,3048 meter, altså 30,48 cm. Det er det tal, vores fod til meter omregner regner ud fra.",
  },
  {
    question: "Fod vs. meter",
    answer:
      "Fod bruges primært i USA og Storbritannien, mens meter er standarden i Danmark og de fleste andre lande. Da 1 fod = 0,3048 meter, er fod den mindre enhed — der skal altså færre meter til end fod for at beskrive den samme længde.",
  },
  {
    question: "Hvad er 5 fod 10 tommer i meter?",
    answer:
      "5 fod 10 tommer (en almindelig måde at angive højde i fod på) svarer til 5 × 0,3048 + 10 × 0,0254 = 1,778 meter.",
  },
]

function formatMeters(feet: number) {
  return (feet * METERS_PER_FOOT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function FodTilMeterPage() {
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
              Fod til Meter
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn fod til meter online — indtast en værdi herunder for at
              omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <FootMeterConverter title="Fod til meter" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Fod til meter tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_FEET_VALUES.map((feet) => (
              <li
                key={feet}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{feet} fod til meter</h3>
                <span className="text-muted-foreground">
                  {feet} fod = {formatMeters(feet)} meter
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om fod
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
