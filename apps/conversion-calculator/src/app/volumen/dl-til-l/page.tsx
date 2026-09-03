import type { Metadata } from "next"
import Link from "next/link"

import { DlLConverter } from "@/src/components/site/dl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Dl til Liter Omregner | Omregn Deciliter til Liter Online"
const DESCRIPTION =
  "Omregn dl til liter på et øjeblik. 10 dl er 1 liter. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/dl-til-l",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/dl-til-l",
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

const L_PER_DL = 1 / 10
const COMMON_DL_VALUES = [1, 2, 2.5, 3, 4, 5, 6, 8, 10, 15]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man dl til liter?",
    answer:
      "Formlen er liter = dl ÷ 10. Fx bliver 5 dl til liter: 5 ÷ 10 = 0,5 liter.",
  },
  {
    question: "Hvor mange deciliter er en liter?",
    answer: "Der går 10 deciliter (dl) på hver liter.",
  },
  {
    question: "Hvor mange dl er en halv liter?",
    answer: "En halv liter (0,5 l) svarer til 5 dl.",
  },
  {
    question: "Hvor meget er 7 dl i liter?",
    answer: "7 dl svarer til 0,7 liter.",
  },
  {
    question: "Hvorfor er dl til liter en nyttig omregning?",
    answer:
      "Mange opskrifter angiver mængder i dl, men skal du fx skalere en opskrift op til flere personer, er det ofte lettere at regne videre i hele liter.",
  },
  {
    question: "Er 10 dl det samme som 1 liter?",
    answer: "Ja, 10 dl svarer præcis til 1 liter.",
  },
  {
    question: "Hvor mange liter er 30 dl?",
    answer: "30 dl svarer til 3 liter, da du deler med 10.",
  },
  {
    question: "Hvorfor omregnes dl til liter, når man laver mad?",
    answer:
      "Det er praktisk, når en opskrift skal skaleres op eller ned, eller når mængderne bliver så store, at liter giver et mere overskueligt tal end dl.",
  },
  {
    question: "Er dl og liter begge en del af det metriske system?",
    answer:
      "Ja, begge enheder indgår i det internationale metriske system (SI), men dl bruges hyppigere i Norden end i mange andre lande.",
  },
  {
    question: "Kan jeg bruge omregningen til alle væsker?",
    answer:
      "Ja, forholdet mellem dl og liter er fast for alle væsker, da begge enheder måler rumfang uafhængigt af densitet.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra dl til liter?",
    answer:
      "Mange glemmer at dele med 10 og ganger i stedet, hvilket giver et alt for stort tal. Husk, at liter altid er et markant mindre tal end dl.",
  },
  {
    question: "Hvorfor bruges dl mest til madlavning og liter til indkøb?",
    answer:
      "Dl passer godt til de mindre mængder, en opskrift typisk kræver, mens liter er mere naturligt, når man køber ind eller opbevarer større mængder væske.",
  },
  {
    question: "Kan jeg regne dl om til liter uden lommeregner?",
    answer:
      "Ja, du skal blot flytte kommaet én plads mod venstre, da du deler med 10. Fx bliver 35 dl til 3,5 liter.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem dl og liter?",
    answer:
      "Tænk på, at \"deci\" betyder ti. En deciliter er derfor en tiendedel af en liter, ligesom en decimeter er en tiendedel af en meter.",
  },
  {
    question: "Hvor mange liter svarer 45 dl til?",
    answer:
      "45 dl svarer til 4,5 liter, da du deler antallet af deciliter med 10.",
  },
]

const CONVERT_STEPS = [
  { title: "Find dl-tal", sub: "Fx 5 dl" },
  { title: "Del med 10", sub: "5 ÷ 10" },
  { title: "Læs liter", sub: "= 0,5 liter" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/l-til-dl", label: "Liter til dl" },
  { href: "/volumen/dl-til-ml", label: "Dl til ml" },
  { href: "/volumen/dl-til-cl", label: "Dl til cl" },
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
]

export default function DlTilLPage() {
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
              Dl til Liter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              10 deciliter (dl) svarer til 1 liter, da liter er grundenheden
              og deciliter en tiendedel heraf. Brug vores dl til liter
              omregner til at omregne mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <DlLConverter title="Dl til liter" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om deciliter og liter</h2>
          <div className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="mb-1.5 font-semibold">Om deciliter (dl)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Deciliter (dl) svarer til en tiendedel af en liter, altså
                100 milliliter, og er den mest anvendte rumfangsenhed i
                danske opskrifter. Mælk, fløde, mel og sukker måles typisk
                i dl, og enheden findes på næsten alle målebægre og kander
                i det danske køkken. Dl stammer fra det metriske system,
                der blev indført i Frankrig i 1795, hvor &quot;deci&quot;
                betyder en tiendedel af grundenheden liter. Fordi dl giver
                overskuelige tal for mindre mængder, er enheden blevet fast
                standard i nordisk madlavning gennem generationer.
              </p>
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">Om liter (l)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Liter (l) er grundenheden for rumfang i det metriske system
                og svarer til 10 deciliter eller 1.000 milliliter. Liter
                bruges til de fleste større væskemængder i hverdagen, fra
                mælk og vand til benzin, og er den enhed de fleste tænker
                i, når mængderne bliver store nok til at gøre dl
                upraktisk. Enheden blev indført under den franske
                revolution som en del af det nye metriske system og er
                siden blevet en af verdens mest udbredte måleenheder. Når
                du omregner fra dl til liter, bliver tallene mindre og
                lettere at overskue.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du dl til liter
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: liter = dl ÷ 10
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
            Forestil dig, at du skal skalere en suppeopskrift op til en
            stor familiefest og har brug for at vide, hvor mange liter
            bouillon 25 dl svarer til. Du deler 25 med 10 og får 2,5 liter.
            Samme fremgangsmåde bruges, hvis en opskrift angiver 8 dl
            fløde, og du vil vide det i liter til en større gryde: 8 ÷ 10 =
            0,8 liter.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Dl til liter tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-5">
            {COMMON_DL_VALUES.map((dl) => (
              <li
                key={dl}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(dl * L_PER_DL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  l
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {dl.toString().replace(".", ",")} dl
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om dl og liter
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question} className="rounded-xl bg-background p-4">
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
                <li key={item.href} className="border-b last:border-b-0">
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
