import type { Metadata } from "next"

import { FahrenheitCelsiusConverter } from "@/src/components/site/fahrenheit-celsius-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Celsius til Fahrenheit – Omregn C til F Online"
const DESCRIPTION =
  "Omregn celsius til fahrenheit online med det samme. Se en celsius til fahrenheit tabel, formel og svar på hvad celsius er, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "celsius to fahrenheit",
    "celsius til fahrenheit",
    "c to f",
    "celsius",
    "celcius",
    "hvad er celsius",
    "celcius to farenheit",
    "celcius to f",
    "grader til fahrenheit",
    "celsius til grader",
    "grader celsius",
    "grader celcius",
    "grad celsius",
    "celsius grader",
    "grad tegn",
    "0 grader celsius til fahrenheit",
    "hvor mange grader fahrenheit svarer 0 grader celsius til",
    "omregn celsius til fahrenheit",
    "omregning celsius til fahrenheit",
    "temperature conversion",
    "hvor mange grader",
    "hvad er frysepunktet",
    "degrees celsius",
    "degrees to celsius",
  ],
  alternates: {
    canonical: "/temperatur/celsius-til-fahrenheit",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/temperatur/celsius-til-fahrenheit",
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

const CELSIUS_VALUES = [
  -10, 0, 5, 10, 11, 12, 13, 14, 15, 16, 19, 20, 24, 35, 40, 60, 80, 100, 200,
]

const FAQ_ITEMS = [
  {
    question: "Hvad er celsius?",
    answer:
      "Celsius (°C, ofte fejlstavet celcius) er den temperaturskala, Danmark og det meste af verden bruger. Her fryser vand ved 0 grader og koger ved 100 grader.",
  },
  {
    question: "Hvordan regner man celsius til fahrenheit?",
    answer: "Formlen er °F = °C × 9/5 + 32.",
  },
  {
    question: "Hvor mange grader fahrenheit svarer 0 grader celsius til?",
    answer: "0 °C svarer altid til 32 °F — det er vands frysepunkt.",
  },
  {
    question: "Hvad er frysepunktet?",
    answer:
      "Vands frysepunkt er 0 °C, hvilket svarer til 32 °F. Kogepunktet er tilsvarende 100 °C, hvilket svarer til 212 °F.",
  },
  {
    question: "Celsius vs. fahrenheit",
    answer:
      "Celsius bruges i Danmark og de fleste andre lande, mens fahrenheit primært bruges i USA. Da 1 grad celsius er større end 1 grad fahrenheit, stiger fahrenheit-tallet hurtigere, når temperaturen ændrer sig.",
  },
]

function formatFahrenheit(c: number) {
  return ((c * 9) / 5 + 32).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function CelsiusTilFahrenheitPage() {
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
              Celsius til Fahrenheit
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn celsius til fahrenheit online — indtast en værdi herunder
              for at omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <FahrenheitCelsiusConverter title="Celsius til fahrenheit" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Celsius til fahrenheit tabel
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {CELSIUS_VALUES.map((c) => (
              <li
                key={c}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{c}°C til fahrenheit</h3>
                <span className="text-muted-foreground">
                  {formatFahrenheit(c)}°F
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om celsius
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
