import type { Metadata } from "next"
import Link from "next/link"

import { MlClConverter } from "@/src/components/site/ml-cl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Ml til Cl Omregner | Omregn Milliliter til Centiliter Online"
const DESCRIPTION =
  "Omregn ml til cl på et øjeblik. 10 ml er 1 cl. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/ml-til-cl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/ml-til-cl",
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

const CL_PER_ML = 1 / 10
const COMMON_ML_VALUES = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man ml til cl?",
    answer: "Formlen er cl = ml ÷ 10. Fx bliver 30 ml til cl: 30 ÷ 10 = 3 cl.",
  },
  {
    question: "Hvor mange cl er 10 ml?",
    answer: "10 ml svarer til 1 cl.",
  },
  {
    question: "Hvor mange cl er 5 ml?",
    answer: "5 ml svarer til en halv cl (0,5 cl), da 1 cl er 10 ml.",
  },
  {
    question: "Hvor mange cl er en mundskylning på 20 ml?",
    answer: "20 ml svarer til 2 cl.",
  },
  {
    question: "Hvorfor bruges ml frem for cl til medicin?",
    answer:
      "Medicin doseres ofte i ml, fordi enheden giver mere præcise tal ved meget små mængder, hvor cl ville kræve decimaltal.",
  },
  {
    question: "Er 100 ml det samme som 10 cl?",
    answer: "Ja, 100 ml svarer præcis til 10 cl.",
  },
  {
    question: "Hvordan omregner jeg store mængder ml til cl, fx 1.000 ml?",
    answer:
      "Del blot tallet med 10. 1.000 ml svarer til 100 cl, hvilket også er præcis 1 liter.",
  },
  {
    question: "Er ml og cl begge en del af det metriske system?",
    answer:
      "Ja, begge enheder er en del af det internationale metriske system (SI) og bruges i de fleste lande, om end med varierende hyppighed i hverdagssprog.",
  },
  {
    question: "Hvad er forskellen mellem ml og dl?",
    answer:
      "En deciliter (dl) er 100 gange større end en milliliter. Der går altså 100 ml på 1 dl, mens der kun går 10 ml på 1 cl.",
  },
  {
    question: "Kan jeg bruge samme omregning til alle væsker?",
    answer:
      "Ja, omregningen mellem ml og cl er en ren rumfangsomregning og gælder uanset hvilken væske der er tale om, da begge enheder måler volumen og ikke vægt.",
  },
  {
    question: "Hvad er den mest almindelige fejl, når man omregner ml til cl?",
    answer:
      "Den mest almindelige fejl er at gange i stedet for at dele med 10. Husk, at cl altid bliver et mindre tal end det oprindelige ml-tal, når du regner rigtigt.",
  },
  {
    question: "Kan jeg regne ml om til cl uden lommeregner?",
    answer:
      "Ja, du skal blot flytte kommaet én plads mod venstre, da du deler med 10. Fx bliver 45 ml til 4,5 cl.",
  },
]

const CONVERT_STEPS = [
  { title: "Find ml-tal", sub: "Fx 30 ml" },
  { title: "Del med 10", sub: "30 ÷ 10" },
  { title: "Læs cl", sub: "= 3 cl" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/cl-til-ml", label: "Cl til ml" },
  { href: "/volumen/ml-til-dl", label: "Ml til dl" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
  { href: "/volumen/dl-til-ml", label: "Dl til ml" },
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
]

export default function MlTilClPage() {
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
              Ml til Cl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              10 milliliter (ml) svarer til 1 centiliter (cl), da der skal ti
              milliliter til at udgøre en enkelt centiliter. Brug vores ml
              til cl omregner til at omregne mellem enhederne på et øjeblik,
              eller find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlClConverter title="Ml til cl" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om milliliter og centiliter</h2>
          <div className="grid overflow-hidden rounded-2xl border bg-background shadow-sm md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  ml
                </span>
                <h3 className="text-sm font-semibold">Milliliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Milliliter (ml) er den mest finmaskede rumfangsenhed, vi
                bruger i hverdagen, og svarer til en tusindedel af en liter.
                Fordi tallene bliver præcise selv ved meget små mængder, er
                ml den foretrukne enhed inden for medicin, hvor en forskel
                på få milliliter kan have betydning for en dosis. Du finder
                også ml angivet på emballager til kosmetik, parfume og
                rengøringsmidler, hvor producenter ønsker at oplyse
                indholdet så nøjagtigt som muligt. I køkkenet bruges ml
                typisk på moderne målebægre, sprøjter og dryppebeholdere,
                hvor små justeringer betyder noget for resultatet. Milliliter
                er en del af det metriske system, der blev indført i
                Frankrig i slutningen af 1700-tallet, og forstavelsen
                &quot;milli&quot; betyder netop en tusindedel.
              </p>
            </div>
            <div className="border-t p-6 sm:p-8 md:border-t-0 md:border-l">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  cl
                </span>
                <h3 className="text-sm font-semibold">Centiliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centiliter (cl) er ti gange større end en milliliter og
                bruges typisk, når præcisionen fra ml ikke er nødvendig, men
                liter er for stor en enhed at regne i. Det gælder især for
                alkoholholdige drikke, hvor skænkemål traditionelt angives i
                cl, fx en genstand spiritus på 4 cl eller et glas vin på 12
                cl. Cl stammer fra samme metriske system som ml, men bruges
                sjældnere i det danske køkken, hvor deciliter er den mest
                udbredte enhed. Når du omregner fra ml til cl, bliver
                tallene som regel mindre og mere overskuelige at arbejde
                med, hvilket gør cl praktisk til opskrifter og skænkemål med
                større mængder.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du ml til cl
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: cl = ml ÷ 10
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
            Forestil dig, at en flaske parfume indeholder 50 ml, og du vil
            vide, hvor mange centiliter det svarer til for at sammenligne
            med en anden flaske, der er mærket i cl. Du deler blot 50 med 10
            og får 5 cl. Samme metode bruges, hvis du fx skal omregne en
            dosis på 30 ml til cl for at sammenligne med en tidligere
            angivelse i centiliter: 30 ÷ 10 = 3 cl. Fordi forholdet mellem
            enhederne altid er det samme, kan du bruge denne fremgangsmåde
            uanset hvilken væske eller hvilket produkt, det drejer sig om.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Ml til cl tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {COMMON_ML_VALUES.map((ml) => (
              <li
                key={ml}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(ml * CL_PER_ML).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  cl
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{ml} ml</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om ml og cl
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
