import type { Metadata } from "next"

import { TommerMmConverter } from "@/src/components/site/tommer-mm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Tommer til Mm Omregner – Omregn Inch til Millimeter Online"
const DESCRIPTION =
  "Omregn tommer (inch) til mm online hurtigt og nemt. Se en tommer til mm tabel, inkl. rørdimensioner, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/tommer-til-mm",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/tommer-til-mm",
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

const MM_PER_TOMME = 25.4
const COMMON_TOMMER_VALUES = [1, 2, 3, 4, 5, 6, 8, 10, 12]

const PIPE_SIZES = [
  { label: "1/8", value: 0.125 },
  { label: "1/4", value: 0.25 },
  { label: "5/16", value: 0.3125 },
  { label: "3/8", value: 0.375 },
  { label: "1/2", value: 0.5 },
  { label: "5/8", value: 0.625 },
  { label: "3/4", value: 0.75 },
  { label: "1", value: 1 },
  { label: "1 1/4", value: 1.25 },
  { label: "1 1/2", value: 1.5 },
  { label: "1 3/4", value: 1.75 },
  { label: "2", value: 2 },
  { label: "2 1/2", value: 2.5 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
]

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man tommer om til mm?",
    answer:
      "Formlen er mm = tommer × 25,4. Fx bliver 1 tommer til mm: 1 × 25,4 = 25,4 mm.",
  },
  {
    question: "Hvad er en halv tomme i mm?",
    answer: 'En halv tomme (1/2") svarer til 12,7 mm.',
  },
  {
    question: "Hvorfor bruges tommer til rørdimensioner?",
    answer:
      'Rør og fittings måles traditionelt i tommer (fx 1/2", 3/4", 1"), en standard der stammer fra det amerikanske/britiske målesystem. Tabellen ovenfor viser de mest almindelige rørstørrelser omregnet til mm.',
  },
  {
    question: 'Hvad betyder fx 1/2" eller 3/4" rørgevind i mm?',
    answer:
      'Gevindmålet på rør, fx 1/2" eller 3/4", angiver den nominelle rørstørrelse (ikke nødvendigvis den præcise udvendige diameter, som afhænger af rørtype). Som tommelfingerregel svarer 1/2" til ca. 12,7 mm og 3/4" til ca. 19 mm — brug tabellen ovenfor til hurtig omregning.',
  },
]

function formatMm(tommer: number) {
  return (tommer * MM_PER_TOMME).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function TommerTilMmPage() {
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
              Tommer til Mm Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores tommer til mm omregner til hurtigt og nemt at omregne
              inch til millimeter. Indtast det antal inch, du vil omregne, og
              få resultatet med det samme, eller brug vores tabel til hurtigt
              at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <TommerMmConverter title="Tommer til mm" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Tommer til mm tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_TOMMER_VALUES.map((tommer) => (
              <li
                key={tommer}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{tommer} tommer til mm</h3>
                <span className="text-muted-foreground">
                  {tommer} in = {formatMm(tommer)} mm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Rørdimensioner – tommer til mm
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {PIPE_SIZES.map((size) => (
              <li
                key={size.label}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{size.label}&quot; rør</h3>
                <span className="text-muted-foreground">
                  {formatMm(size.value)} mm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om tommer og mm
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
