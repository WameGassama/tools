import type { Metadata } from "next"

import { FahrenheitCelsiusConverter } from "@/src/components/site/fahrenheit-celsius-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Fahrenheit til Celsius Omregner – Omregn F til C Online"
const DESCRIPTION =
  "Omregn fahrenheit til celsius online hurtigt og nemt. Se en fahrenheit til celsius tabel, formel og svar på hvad fahrenheit er, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/temperatur/fahrenheit-til-celsius",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/temperatur/fahrenheit-til-celsius",
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

const FAHRENHEIT_VALUES = [
  0, 20, 37, 39, 40, 42, 47, 50, 55, 59, 60, 61, 65, 66, 69, 70, 71, 72, 75, 76,
  78, 80, 82, 84, 87, 90, 91, 94, 95, 97, 98, 99, 100, 106, 110, 115, 116, 125,
  130, 131, 140, 145, 150, 160, 165, 170, 175, 180, 190, 210, 240, 250, 275,
  300, 320, 325, 350, 356, 360, 375, 390, 400, 425, 450, 500,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er fahrenheit?",
    answer:
      "Fahrenheit (°F) er en temperaturskala, der primært bruges i USA. På fahrenheit-skalaen fryser vand ved 32 grader og koger ved 212 grader.",
  },
  {
    question: "Hvordan regner man fahrenheit til celsius?",
    answer:
      "Formlen er °C = (°F − 32) × 5/9. Fx bliver 350 fahrenheit til celsius: (350 − 32) × 5/9 ≈ 176,67 °C.",
  },
  {
    question: "Hvad er 72 fahrenheit i grader celsius?",
    answer: "72 °F svarer til (72 − 32) × 5/9 ≈ 22,22 °C.",
  },
  {
    question: "Hvad betyder gradtegnet (°) ved fahrenheit?",
    answer:
      "Gradtegnet ° foran F angiver, at temperaturen er angivet på fahrenheit-skalaen, fx 350 °F.",
  },
]

function formatCelsius(f: number) {
  return (((f - 32) * 5) / 9).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function FahrenheitTilCelsiusPage() {
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
              Fahrenheit til Celsius Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores fahrenheit til celsius omregner til hurtigt og nemt at
              omregne fahrenheit til celsius. Indtast det antal fahrenheit, du
              vil omregne, og få resultatet med det samme, eller brug vores
              tabel til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <FahrenheitCelsiusConverter title="Fahrenheit til celsius" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Fahrenheit til celsius tabel
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {FAHRENHEIT_VALUES.map((f) => (
              <li
                key={f}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{f}°F til celsius</h3>
                <span className="text-muted-foreground">
                  {formatCelsius(f)}°C
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om fahrenheit
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
