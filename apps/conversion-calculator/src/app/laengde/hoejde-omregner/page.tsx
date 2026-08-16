import type { Metadata } from "next"

import { HeightConverter } from "@/src/components/site/height-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Højde Omregner – Fod og Tommer til Cm Online"
const DESCRIPTION =
  "Omregn højde fra fod og tommer til centimeter online med det samme. Se en tabel med gængse højder, eller indtast din egen."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "højde omregner",
    "højde i fod",
    "højde i feet",
    "hvor høj er jeg i feet",
    "fod og tommer til cm",
    "feet og inches til cm",
    "5 fod 10 tommer",
    "6 fod 3 tommer",
    "5 fod 10 tommer i cm",
    "6 fod 3 tommer i cm",
    "fod tommer omregner",
    "omregn højde",
    "5 fod 9 tommer",
    "6 fod 6 tommer",
    "amerikansk højde til cm",
    "amerikanske mål til cm",
    "højde i inches",
    "højde i tommer",
    "højde cm til fod",
  ],
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
  { feet: 5, inches: 1 },
  { feet: 5, inches: 2 },
  { feet: 5, inches: 4 },
  { feet: 5, inches: 5 },
  { feet: 5, inches: 7 },
  { feet: 5, inches: 8 },
  { feet: 5, inches: 9 },
  { feet: 5, inches: 10 },
  { feet: 6, inches: 0 },
  { feet: 6, inches: 1 },
  { feet: 6, inches: 2 },
  { feet: 6, inches: 3 },
  { feet: 6, inches: 6 },
]

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
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn højde fra fod og tommer til centimeter online — indtast en
              værdi herunder for at omregne med det samme.
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
