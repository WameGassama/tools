import type { Metadata } from "next"
import Link from "next/link"

import { MlLConverter } from "@/src/components/site/ml-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Liter til Ml Omregner | Omregn Liter til Milliliter Online"
const DESCRIPTION =
  "Omregn liter til ml på et øjeblik. 1 liter er 1.000 ml. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/l-til-ml",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/l-til-ml",
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

const ML_PER_L = 1000
const COMMON_L_VALUES = [0.1, 0.25, 0.33, 0.5, 0.75, 1, 1.5, 2, 3, 5]

const FAQ_ITEMS = [
  {
    question: "Hvor mange ml er der på en liter?",
    answer: "Der går 1.000 ml på hver liter. Formlen er ml = liter × 1.000.",
  },
  {
    question: "Hvordan omregner man liter til ml?",
    answer:
      "Gang literantallet med 1.000. Fx bliver 1,5 liter til ml: 1,5 × 1.000 = 1.500 ml.",
  },
  {
    question: "Hvor mange ml er en halv liter?",
    answer: "En halv liter (0,5 l) svarer til 500 ml.",
  },
  {
    question: "Hvor mange ml er en kvart liter?",
    answer: "En kvart liter (0,25 l) svarer til 250 ml.",
  },
  {
    question: "Hvor mange ml er der i en flaske sodavand på 0,33 l?",
    answer: "En flaske sodavand på 0,33 liter svarer til 330 ml.",
  },
  {
    question: "Er 2 liter det samme som 2.000 ml?",
    answer: "Ja, 2 liter svarer præcis til 2.000 ml.",
  },
  {
    question: "Hvor mange ml er 3 liter?",
    answer: "3 liter svarer til 3.000 ml, da du ganger med 1.000.",
  },
  {
    question: "Hvorfor bruges liter til store mængder og ml til små?",
    answer:
      "Fordi liter giver overskuelige tal for større væskemængder, mens ml giver den nødvendige præcision, når mængderne er små, fx i medicin eller kosmetik.",
  },
  {
    question: "Er omregningen mellem liter og ml den samme for alle væsker?",
    answer:
      "Ja, forholdet er fast uanset væske, da begge enheder måler rumfang og ikke vægt eller densitet.",
  },
  {
    question: "Bruges liter og ml i hele verden?",
    answer:
      "Begge enheder er en del af det internationale metriske system (SI) og bruges i de fleste lande, dog bruger enkelte lande som USA andre enheder som gallons og fluid ounces i hverdagen.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra liter til ml?",
    answer:
      "Mange glemmer at gange med 1.000 og deler i stedet, hvilket giver et alt for lille tal. Husk, at ml altid er et markant større tal end liter.",
  },
  {
    question: "Kan jeg regne liter om til ml uden lommeregner?",
    answer:
      "Ja, du skal blot flytte kommaet tre pladser mod højre, da du ganger med 1.000. Fx bliver 2,5 liter til 2.500 ml.",
  },
  {
    question: "Hvorfor er der præcis 1.000 ml på en liter?",
    answer:
      "Det skyldes det metriske systems opbygning, hvor \"milli\" altid betyder en tusindedel, uanset hvilken grundenhed det knyttes til.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem liter og ml?",
    answer:
      "Tænk på, at \"milli\" betyder tusind, ligesom en millimeter er en tusindedel af en meter. Samme logik gælder for milliliter, som er en tusindedel af en liter.",
  },
  {
    question: "Hvor mange ml svarer 4 liter til?",
    answer:
      "4 liter svarer til 4.000 ml, da du ganger antallet af liter med 1.000.",
  },
]

const CONVERT_STEPS = [
  { title: "Find liter-tal", sub: "Fx 1,5 l" },
  { title: "Gang med 1.000", sub: "1,5 × 1.000" },
  { title: "Læs ml", sub: "= 1.500 ml" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/l-til-dl", label: "Liter til dl" },
  { href: "/volumen/l-til-cl", label: "Liter til cl" },
  { href: "/volumen/ml-til-dl", label: "Ml til dl" },
  { href: "/volumen/ml-til-cl", label: "Ml til cl" },
  { href: "/volumen/dl-til-ml", label: "Dl til ml" },
]

export default function LTilMlPage() {
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
              Liter til Ml Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 liter svarer til 1.000 milliliter (ml), da liter er
              grundenheden i det metriske system. Brug vores liter til ml
              omregner til at omregne mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlLConverter title="Liter til ml" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om liter og milliliter</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  l
                </span>
                <h3 className="text-lg font-semibold">Liter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Liter (l) er grundenheden for rumfang i det metriske system
                og er den enhed, de fleste tænker i, når de taler om
                væskemængder i hverdagen, fra mælk og vand til benzin og
                sodavand. En liter svarer til præcis 1.000 milliliter eller
                én kubikdecimeter, hvilket gør omregningen mellem de to
                enheder enkel og fast. Liter blev indført under den franske
                revolution som en del af det nye metriske system og er
                siden blevet en af verdens mest udbredte måleenheder,
                brugt i stort set alle lande med metrisk system.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  ml
                </span>
                <h3 className="text-lg font-semibold">Milliliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Milliliter (ml) er den mindste af de gængse rumfangsenheder
                og udgør en tusindedel af en liter. Fordi enheden giver
                stor præcision ved små mængder, bruges ml til alt fra
                medicindosering og øjendråber til kosmetik og drikkevarer
                i mindre emballager, fx en sodavand på 330 ml eller en
                vandflaske på 500 ml. Milliliter blev indført samtidig med
                resten af det metriske system, og selvom liter er den
                mere naturlige enhed for større mængder, er ml
                uundværlig, når præcision er vigtigere end
                overskuelighed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du liter til ml
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: ml = liter × 1.000
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
            Forestil dig, at du skal fylde vand på 6 flasker á 500 ml til
            en løbetur og vil vide, hvor mange liter det samlet svarer
            til. Du ganger 500 ml med 6 flasker og får 3.000 ml, hvilket
            omregnes til 3 liter. Modsat kan du regne den anden vej: hvis
            du har 2 liter saft og vil fordele det i glas på 250 ml,
            ganger du 2 med 1.000 for at få 2.000 ml, som derefter deles
            med 250 for at finde antallet af glas: 8 glas.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Liter til ml tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-5">
            {COMMON_L_VALUES.map((l) => (
              <li
                key={l}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(l * ML_PER_L).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  ml
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {l.toString().replace(".", ",")} l
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om liter og ml
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
