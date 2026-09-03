import type { Metadata } from "next"
import Link from "next/link"

import { MlLConverter } from "@/src/components/site/ml-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Ml til Liter Omregner | Omregn Milliliter til Liter Online"
const DESCRIPTION =
  "Omregn ml til liter på et øjeblik. 1.000 ml er 1 liter. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/ml-til-l",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/ml-til-l",
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

const L_PER_ML = 1 / 1000
const COMMON_ML_VALUES = [
  5, 10, 15, 20, 25, 30, 50, 75, 100, 150, 200, 250, 300, 330, 400, 500, 750,
  1000, 1500, 2000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man ml til liter?",
    answer:
      "Formlen er liter = ml ÷ 1.000. Fx bliver 500 ml til liter: 500 ÷ 1.000 = 0,5 liter.",
  },
  {
    question: "Hvor mange ml går der på en liter?",
    answer: "Der går 1.000 ml på hver liter.",
  },
  {
    question: "Hvor meget er 500 ml?",
    answer: "500 ml svarer til 0,5 liter, altså en halv liter.",
  },
  {
    question: "Hvor meget er 250 ml?",
    answer: "250 ml svarer til 0,25 liter, altså en kvart liter.",
  },
  {
    question: "Hvad er en milliliter, og hvad er en liter?",
    answer:
      "Både milliliter (ml) og liter (l) er måleenheder for rumfang i det metriske system. En milliliter er en tusindedel af en liter, så enhederne bruges til hhv. små og lidt større mængder væske.",
  },
  {
    question: "Hvor mange ml er en kvart liter, og hvor mange er tre kvart liter?",
    answer:
      "En kvart liter er 250 ml (1.000 ÷ 4). Tre kvart liter er 750 ml (1.000 × 0,75).",
  },
  {
    question: "Er ml og cl det samme?",
    answer:
      "Nej. En centiliter (cl) er 10 ml, så der går 100 cl på en liter, men kun 10 ml på en cl. Skal du fra ml til cl, deles der med 10 i stedet for 1.000.",
  },
  {
    question: "Hvor meget er en sodavand eller en vandflaske i liter?",
    answer:
      "En almindelig sodavand på 330 ml svarer til 0,33 liter, og en vandflaske på 500 ml svarer til 0,5 liter.",
  },
  {
    question: "Hvor mange liter er 2.500 ml?",
    answer: "2.500 ml svarer til 2,5 liter, da du deler med 1.000.",
  },
  {
    question: "Hvorfor er nogle produkter mærket i ml og andre i liter?",
    answer:
      "Mindre emballager, fx medicin og kosmetik, bruger ofte ml for at angive indholdet præcist, mens større emballager som mælk og sodavand typisk bruger liter for at give et mere overskueligt tal.",
  },
  {
    question: "Kan jeg regne ml om til liter uden lommeregner?",
    answer:
      "Ja, du skal blot flytte kommaet tre pladser mod venstre, da du deler med 1.000. Fx bliver 1.250 ml til 1,25 liter.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra ml til liter?",
    answer:
      "Mange glemmer at dele med 1.000 og ganger i stedet, hvilket giver et alt for stort tal. Husk, at liter altid er et markant mindre tal end ml.",
  },
  {
    question: "Bruges ml og liter i madlavning uden for Danmark?",
    answer:
      "Ja, begge enheder bruges i stort set alle lande med metrisk system, mens lande som USA og Storbritannien ofte bruger cups, pints og fluid ounces i stedet for ml og liter i deres opskrifter.",
  },
]

const CONVERT_STEPS = [
  { title: "Find ml-tal", sub: "Fx 500 ml" },
  { title: "Del med 1.000", sub: "500 ÷ 1.000" },
  { title: "Læs liter", sub: "= 0,5 liter" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
  { href: "/volumen/ml-til-cl", label: "Ml til cl" },
  { href: "/volumen/ml-til-dl", label: "Ml til dl" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
  { href: "/volumen/l-til-cl", label: "Liter til cl" },
]

export default function MlTilLPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
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
              Ml til Liter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1.000 milliliter (ml) svarer til 1 liter, da milliliter er en
              tusindedel af grundenheden liter. Brug vores ml til liter
              omregner til at omregne mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlLConverter title="Ml til liter" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om milliliter og liter</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  ml
                </span>
                <h3 className="text-lg font-semibold">Milliliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Milliliter (ml) er en tusindedel af en liter og den mest
                finmaskede rumfangsenhed, vi bruger i hverdagen. Fordi
                tallene forbliver præcise selv ved meget små mængder, er
                ml den foretrukne enhed inden for medicin, kosmetik og
                madlavning, hvor selv få milliliter kan gøre en forskel
                for resultatet. Milliliter blev indført sammen med resten
                af det metriske system i Frankrig i slutningen af
                1700-tallet, hvor forstavelsen &quot;milli&quot; betyder
                en tusindedel af grundenheden liter.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  l
                </span>
                <h3 className="text-lg font-semibold">Liter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Liter (l) er grundenheden for rumfang i det metriske
                system og svarer til 1.000 milliliter. Det er den enhed,
                de fleste tænker i, når mængderne bliver store nok til at
                gøre milliliter upraktisk, fx når man taler om indholdet i
                en mælkekarton eller en literflaske sodavand. Liter blev
                indført under den franske revolution som en del af det
                nye metriske system og er i dag en af verdens mest
                udbredte rumfangsenheder, brugt i stort set alle lande med
                metrisk system.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du ml til liter
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: liter = ml ÷ 1.000
          </p>
          <div className="relative grid grid-cols-3">
            <div className="absolute top-[15px] right-[15px] left-[15px] h-0.5 bg-border" />
            {CONVERT_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="relative z-10 flex flex-col items-center gap-2 text-center"
              >
                <div className="flex size-[30px] items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <h3 className="text-xs font-semibold">{step.title}</h3>
                <p className="max-w-[16ch] text-[11px] text-muted-foreground">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-3 text-lg font-bold">Praktisk eksempel</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Forestil dig, at en opskrift til hjemmelavet limonade kræver
            1.500 ml vand, men du helst vil måle det op i en literkande. Du
            deler 1.500 med 1.000 og får 1,5 liter. På samme måde kan du
            omregne 750 ml saft til 0,75 liter, hvis du fx skal fylde en
            flaske, der kun er mærket med literinddelinger.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Ml til liter tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_ML_VALUES.map((ml) => (
              <li
                key={ml}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(ml * L_PER_ML).toLocaleString("da-DK", {
                    maximumFractionDigits: 3,
                  })}{" "}
                  l
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{ml} ml</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om ml og liter
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <div
                key={item.question}
                className="rounded-xl bg-background p-4"
              >
                <h3 className="mb-1.5 text-sm font-semibold">
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Relaterede omregninger</h2>
          <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr]">
            <Link
              href={RELATED_CONVERTERS[0].href}
              className="flex flex-col justify-between rounded-2xl bg-gradient-to-br from-blue-500 via-primary to-blue-700 p-5 text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span className="text-xs tracking-wide text-primary-foreground/70 uppercase">
                Den modsatte retning
              </span>
              <span className="mt-6 flex items-end justify-between">
                <span className="text-xl font-bold">
                  {RELATED_CONVERTERS[0].label}
                </span>
                <span className="text-lg">→</span>
              </span>
            </Link>
            <ul className="flex flex-col">
              {RELATED_CONVERTERS.slice(1).map((item) => (
                <li
                  key={item.href}
                  className="border-b last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-2.5 text-sm font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                    <span>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
