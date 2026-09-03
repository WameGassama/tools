import type { Metadata } from "next"
import Link from "next/link"

import { MlClConverter } from "@/src/components/site/ml-cl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cl til Ml Omregner | Omregn Centiliter til Milliliter Online"
const DESCRIPTION =
  "Omregn cl til ml på et øjeblik. 1 cl er 10 ml. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/cl-til-ml",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/cl-til-ml",
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

const ML_PER_CL = 10
const COMMON_CL_VALUES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 50]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man cl til ml?",
    answer: "Formlen er ml = cl × 10. Fx bliver 4 cl til ml: 4 × 10 = 40 ml.",
  },
  {
    question: "Hvor meget er 1 cl?",
    answer: "1 cl (centiliter) svarer til 10 ml.",
  },
  {
    question: "Hvad er forskellen på cl og ml?",
    answer:
      "En centiliter er 10 gange større end en milliliter. Der skal altså 10 ml til at fylde 1 cl.",
  },
  {
    question: "Hvor mange ml er et glas vin på 12 cl?",
    answer: "Et glas vin på 12 cl svarer til 120 ml.",
  },
  {
    question: "Hvor mange ml er en snaps på 4 cl?",
    answer: "En snaps på 4 cl svarer til 40 ml.",
  },
  {
    question: "Hvorfor angiver nogle flasker cl og andre ml?",
    answer:
      "Skænkemål og genstande angives ofte i cl, mens medicin og små doser typisk angives i ml, fordi enheden giver mere præcise tal ved små mængder.",
  },
  {
    question: "Hvordan omregner jeg store mængder cl til ml, fx 100 cl?",
    answer:
      "Samme formel gælder uanset størrelsen: gang cl-tallet med 10. 100 cl bliver derfor til 1.000 ml, hvilket også svarer til præcis 1 liter.",
  },
  {
    question: "Bruges cl og ml i andre lande end Danmark?",
    answer:
      "Ja, begge enheder er en del af det internationale metriske system (SI) og bruges i de fleste lande. I engelsktalende lande som USA bruges ounces og pints dog oftere end cl, mens ml er mere universelt i medicinsk og videnskabelig sammenhæng.",
  },
  {
    question: "Hvad er forskellen mellem en cl og en dl?",
    answer:
      "En deciliter (dl) er ti gange større end en centiliter. Der går altså 10 cl på 1 dl, mens der går 100 cl på 1 liter.",
  },
  {
    question: "Hvorfor er der ikke en fast omregning mellem cl og gram?",
    answer:
      "Cl og ml måler rumfang, mens gram måler vægt. Omregningen mellem dem afhænger af væskens densitet, så 1 cl vand vejer ca. 10 gram, mens 1 cl olie vejer lidt mindre, fordi olie er lettere end vand.",
  },
]

const CONVERT_STEPS = [
  { title: "Find cl-tal", sub: "Fx 12 cl" },
  { title: "Gang med 10", sub: "12 × 10" },
  { title: "Læs ml", sub: "= 120 ml" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/ml-til-cl", label: "Ml til cl" },
  { href: "/volumen/cl-til-dl", label: "Cl til dl" },
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/dl-til-cl", label: "Dl til cl" },
  { href: "/volumen/l-til-cl", label: "Liter til cl" },
]

export default function ClTilMlPage() {
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
              Cl til Ml Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 centiliter (cl) svarer til 10 milliliter (ml), da centiliter
              er ti gange større end milliliter i det metriske system. Brug
              vores cl til ml omregner til at omregne mellem enhederne på et
              øjeblik, eller find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlClConverter title="Cl til ml" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om centiliter og milliliter</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  cl
                </span>
                <h3 className="text-lg font-semibold">Centiliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centiliter (cl) er en rumfangsenhed i det metriske system, der
                svarer til en hundrededel af en liter, eller ti milliliter.
                Navnet kommer fra det latinske &quot;centum&quot;, der
                betyder hundrede, og enheden blev indført sammen med resten
                af det metriske system i Frankrig i 1795. I Danmark bruges cl
                primært til at angive mængder af alkoholholdige drikke, fx
                hvor mange centiliter der er i et glas vin, en genstand
                spiritus eller en fadøl. Det skyldes, at cl giver
                håndterbare, hele tal for de portionsstørrelser, der typisk
                skænkes på restauranter og barer, i modsætning til liter, som
                ville kræve mange decimaler for de samme mængder. Selvom cl
                ikke er lige så udbredt som deciliter i danske madopskrifter,
                støder du stadig på enheden på etiketter, hvor alkoholprocent
                og indhold angives præcist.
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
                Milliliter (ml) er den mindste af de rumfangsenheder, som
                bruges i hverdagen, og svarer til en tusindedel af en liter,
                altså en tiendedel af en centiliter. Enheden blev indført
                samtidig med resten af det metriske system, hvor forstavelsen
                &quot;milli&quot; betyder en tusindedel af grundenheden.
                Fordi ml giver stor præcision ved små mængder, bruges
                enheden ofte til medicindosering, øjendråber, parfume og
                andre produkter, hvor selv få milliliter kan gøre en
                forskel. I køkkenet støder man også på ml på emballager til
                fx olie, eddike og smagsgivere, samt på moderne målebægre og
                målesprøjter. Når du omregner mellem cl og ml, er forholdet
                fast og enkelt: der går altid ti milliliter på hver
                centiliter, uanset hvilken væske der er tale om.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du cl til ml
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: ml = cl × 10
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
            Forestil dig, at du skal blande cocktails til en fest, og
            opskriften angiver 4 cl gin, 2 cl citronsaft og 1 cl sukkersirup.
            Hvis dit målebæger kun er skaleret i milliliter, skal du omregne
            hvert tal: 4 cl bliver til 40 ml gin, 2 cl bliver til 20 ml
            citronsaft, og 1 cl bliver til 10 ml sukkersirup. Ved at gange
            hvert tal med 10 kan du hurtigt regne opskriften om, uden at
            skulle regne i hovedet under festen. Samme princip gælder, hvis
            du læser en vinetiket, der angiver alkoholprocenten pr. cl, men
            vil vide, hvor mange ml en hel flaske indeholder.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Cl til ml tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_CL_VALUES.map((cl) => (
              <li
                key={cl}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(cl * ML_PER_CL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  ml
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cl} cl</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om cl og ml
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
