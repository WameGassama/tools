import type { Metadata } from "next"

import { HeightConverter } from "@/src/components/site/height-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Højde Omregner – Fod og Tommer til Cm (Feet to Cm) Online"
const DESCRIPTION =
  "Omregn højde fra fod og tommer til centimeter online hurtigt og nemt (feet to cm). Se en tabel med gængse højder, eller indtast din egen."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/hoejde-omregner",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/hoejde-omregner",
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

const CM_PER_FOOT = 30.48
const CM_PER_INCH = 2.54

const COMMON_HEIGHTS = [
  { feet: 4, inches: 8 },
  { feet: 4, inches: 9 },
  { feet: 4, inches: 10 },
  { feet: 4, inches: 11 },
  { feet: 5, inches: 1 },
  { feet: 5, inches: 2 },
  { feet: 5, inches: 3 },
  { feet: 5, inches: 4 },
  { feet: 5, inches: 5 },
  { feet: 5, inches: 6 },
  { feet: 5, inches: 7 },
  { feet: 5, inches: 8 },
  { feet: 5, inches: 9 },
  { feet: 5, inches: 10 },
  { feet: 6, inches: 0 },
  { feet: 6, inches: 1 },
  { feet: 6, inches: 2 },
  { feet: 6, inches: 3 },
  { feet: 6, inches: 4 },
  { feet: 6, inches: 5 },
  { feet: 6, inches: 6 },
  { feet: 6, inches: 7 },
  { feet: 6, inches: 8 },
  { feet: 6, inches: 9 },
  { feet: 6, inches: 10 },
  { feet: 6, inches: 11 },
  { feet: 7, inches: 1 },
  { feet: 7, inches: 2 },
  { feet: 7, inches: 4 },
  { feet: 7, inches: 6 },
  { feet: 7, inches: 7 },
  { feet: 8, inches: 11 },
]

const WHOLE_FEET_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const COMMON_CM_VALUES = [150, 160, 170, 180, 190, 200, 204, 210]

function formatFeetInches(cm: number) {
  const totalInches = cm / CM_PER_INCH
  const wholeFeet = Math.floor(totalInches / 12)
  const remainingInches = Math.round(totalInches - wholeFeet * 12)
  return `${wholeFeet}'${remainingInches}"`
}

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man fod og tommer om til cm?",
    answer:
      "Formlen er cm = (fod × 30,48) + (tommer × 2,54). Fx bliver 5 fod 10 tommer til cm: (5 × 30,48) + (10 × 2,54) = 177,8 cm.",
  },
  {
    question: "Hvor høj er jeg i feet, hvis jeg kender min højde i cm?",
    answer:
      "Del din højde i cm med 2,54 for at få det samlede antal tommer, og del så det tal med 12 for at få hele fod — resten er de tommer, der er tilbage. Fx bliver 178 cm til ca. 5 fod 10 tommer.",
  },
  {
    question: "Hvad er en tommer?",
    answer:
      'En tommer (på engelsk "inch") er en længdeenhed fra det amerikanske/britiske målesystem, hvor 12 tommer udgør 1 fod. 1 tommer svarer til præcis 2,54 cm.',
  },
  {
    question: "Hvor meget er en fod i cm?",
    answer: "1 fod (foot) svarer til præcis 30,48 cm.",
  },
  {
    question: "Hvordan omregner jeg cm til feet og inches?",
    answer:
      "Del cm-tallet med 2,54 for at få det samlede antal tommer. Del så det tal med 12 for at få hele fod (feet) — resten er de tommer (inches), der er tilbage. Fx bliver 200 cm til ca. 6'7\".",
  },
  {
    question: "Hvad betyder et højdemål som 6'2 eller 6'2\"?",
    answer:
      "Notationen angiver fod og tommer: 6'2\" betyder 6 fod og 2 tommer, hvilket bruges i det amerikanske/britiske målesystem til at angive højde.",
  },
]

function formatCm(feet: number, inches: number) {
  return (feet * CM_PER_FOOT + inches * CM_PER_INCH).toLocaleString("da-DK", {
    maximumFractionDigits: 1,
  })
}

export default function HoejdeOmregnerPage() {
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
              Højde Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores højde omregner til hurtigt og nemt at omregne højde fra
              fod og tommer til centimeter. Indtast det antal fod og tommer, du
              vil omregne, og få resultatet med det samme, eller brug vores
              tabel til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HeightConverter />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Højde tabel (fod og tommer til cm)
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_HEIGHTS.map(({ feet, inches }) => (
              <li
                key={`${feet}-${inches}`}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {feet} fod {inches} tommer
                </h3>
                <span className="text-muted-foreground">
                  = {formatCm(feet, inches)} cm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Fod til cm tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHOLE_FEET_VALUES.map((feet) => (
              <li
                key={feet}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{feet} fod til cm</h3>
                <span className="text-muted-foreground">
                  = {formatCm(feet, 0)} cm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Cm til feet og inches tabel
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CM_VALUES.map((cm) => (
              <li
                key={cm}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{cm} cm til feet</h3>
                <span className="text-muted-foreground">
                  = {formatFeetInches(cm)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om højde omregning
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
