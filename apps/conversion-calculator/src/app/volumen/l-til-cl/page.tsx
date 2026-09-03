import type { Metadata } from "next"
import Link from "next/link"

import { ClLConverter } from "@/src/components/site/cl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Liter til Cl Omregner | Omregn Liter til Centiliter Online"
const DESCRIPTION =
  "Omregn liter til cl på et øjeblik. 1 liter er 100 cl. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/l-til-cl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/l-til-cl",
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

const CL_PER_L = 100
const COMMON_L_VALUES = [0.25, 0.33, 0.5, 0.75, 1, 1.5, 2, 5]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man liter til cl?",
    answer:
      "Formlen er cl = liter × 100. Fx bliver 1,5 liter til cl: 1,5 × 100 = 150 cl.",
  },
  {
    question: "Hvor mange cl er der på en liter?",
    answer: "Der går 100 cl på hver liter.",
  },
  {
    question: "Hvor mange cl er en halv liter?",
    answer: "En halv liter (0,5 l) svarer til 50 cl.",
  },
  {
    question: "Hvor mange cl er der i en flaske vin på 0,75 l?",
    answer: "En flaske vin på 0,75 liter svarer til 75 cl.",
  },
  {
    question: "Hvorfor omregnes liter til cl?",
    answer:
      "Det er praktisk, når du skal skænke portioner eller læse etiketter, der angiver alkoholprocent og genstande i cl frem for liter.",
  },
  {
    question: "Er 2 liter det samme som 200 cl?",
    answer: "Ja, 2 liter svarer præcis til 200 cl.",
  },
  {
    question: "Hvor mange cl er 3 liter?",
    answer: "3 liter svarer til 300 cl, da du ganger med 100.",
  },
  {
    question: "Hvorfor bruges cl til skænkemål frem for liter?",
    answer:
      "Fordi cl giver mere naturlige, hele tal for de portionsstørrelser, der typisk serveres, mens liter ville kræve mange decimaler.",
  },
  {
    question: "Er literomregninger de samme i hele verden?",
    answer:
      "Liter er en del af det internationale metriske system og bruges ens i de fleste lande, dog bruger enkelte lande som USA andre enheder som gallons og quarts til dagligt brug.",
  },
  {
    question: "Kan jeg bruge omregningen til andre væsker end vand?",
    answer:
      "Ja, forholdet mellem liter og cl er fast for alle væsker, da begge enheder måler rumfang uafhængigt af densitet.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra liter til cl?",
    answer:
      "Mange glemmer at gange med 100 og deler i stedet, hvilket giver et alt for lille tal. Husk, at cl altid er et markant større tal end liter.",
  },
  {
    question: "Hvorfor bruger nogle opskrifter liter og andre cl?",
    answer:
      "Det afhænger typisk af mængden: liter bruges til store portioner, mens cl er mere praktisk til mindre, præcise mængder som i cocktails og bagværk.",
  },
  {
    question: "Kan jeg bruge samme formel, uanset hvor stor mængden er?",
    answer:
      "Ja, formlen cl = liter × 100 gælder uanset størrelsen på mængden, fra få centiliter til flere hundrede liter.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem liter og cl?",
    answer:
      "Tænk på, at \"centi\" betyder hundrede, ligesom en centimeter er en hundrededel af en meter. Samme logik gælder for centiliter, som er en hundrededel af en liter.",
  },
  {
    question: "Hvor mange cl svarer 5 liter til?",
    answer:
      "5 liter svarer til 500 cl, da du ganger antallet af liter med 100.",
  },
]

const CONVERT_STEPS = [
  { title: "Find liter-tal", sub: "Fx 1,5 l" },
  { title: "Gang med 100", sub: "1,5 × 100" },
  { title: "Læs cl", sub: "= 150 cl" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
  { href: "/volumen/l-til-dl", label: "Liter til dl" },
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
  { href: "/volumen/dl-til-cl", label: "Dl til cl" },
  { href: "/volumen/ml-til-cl", label: "Ml til cl" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
]

export default function LTilClPage() {
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
              Liter til Cl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 liter svarer til 100 centiliter (cl), da liter er den
              grundlæggende rumfangsenhed i det metriske system. Brug vores
              liter til cl omregner til at omregne mellem enhederne på et
              øjeblik, eller find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClLConverter title="Liter til cl" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om liter og centiliter</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                l
              </span>
              <h3 className="mb-1.5 font-semibold">Om liter</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Liter (l) er grundenheden for rumfang i det metriske system
                og bruges til de fleste større væskemængder i hverdagen, fx
                mælk, vand, benzin og sodavand. Enheden blev indført under
                den franske revolution som en del af det nye metriske
                system og er i dag en af verdens mest udbredte
                måleenheder. En liter svarer til 100 centiliter eller
                1.000 milliliter, og de fleste mennesker tænker naturligt i
                liter, når de taler om væskemængder i køkkenet eller
                husholdningen.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                cl
              </span>
              <h3 className="mb-1.5 font-semibold">Om centiliter</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centiliter (cl) er en hundrededel af en liter og bruges
                typisk til mindre portionsstørrelser, især inden for
                alkoholholdige drikke. En genstand spiritus svarer
                traditionelt til 4 cl, mens et glas vin ofte måler omkring
                12 cl. Cl stammer fra samme metriske system som liter, men
                giver mere håndterbare tal, når mængderne er for små til at
                give meningsfulde decimaltal i liter. Når du omregner fra
                liter til cl, bliver tallene hundrede gange større, hvilket
                er nyttigt, hvis du skal skænke eller dosere præcise
                portioner.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du liter til cl
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: cl = liter × 100
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
            Forestil dig, at du skal fylde en punchebowle med 2 liter
            frugtpunch og vil vide, hvor mange centiliter det svarer til,
            for at kunne beregne, hvor mange portioner på 15 cl du kan
            servere. Du ganger 2 med 100 og får 200 cl. Deler du de 200 cl
            med 15 cl pr. portion, kan du servere omkring 13 portioner.
            Samme fremgangsmåde bruges, hvis du skal omregne 0,75 liter vin
            til cl for at sammenligne med en anden flaskestørrelse: 0,75 ×
            100 = 75 cl.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Liter til cl tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-4">
            {COMMON_L_VALUES.map((l) => (
              <li
                key={l}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(l * CL_PER_L).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  cl
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
            Ofte stillede spørgsmål om liter og cl
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
