import type { Metadata } from "next"
import Link from "next/link"

import { ClDlConverter } from "@/src/components/site/cl-dl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Dl til Cl Omregner | Omregn Deciliter til Centiliter Online"
const DESCRIPTION =
  "Omregn dl til cl på et øjeblik. 1 dl er 10 cl. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/dl-til-cl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/dl-til-cl",
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

const CL_PER_DL = 10
const COMMON_DL_VALUES = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5]

const FAQ_ITEMS = [
  {
    question: "Hvor mange cl er der på en dl?",
    answer: "Der går 10 cl på hver deciliter (dl). Formlen er cl = dl × 10.",
  },
  {
    question: "Hvordan omregner man dl til cl?",
    answer:
      "Gang decilitertallet med 10. Fx bliver 3 dl til cl: 3 × 10 = 30 cl.",
  },
  {
    question: "Hvor mange cl er en halv dl?",
    answer: "En halv dl (0,5 dl) svarer til 5 cl.",
  },
  {
    question: "Hvor mange cl er 2,5 dl?",
    answer: "2,5 dl svarer til 25 cl, da hver deciliter er 10 cl.",
  },
  {
    question: "Hvorfor skal jeg omregne dl til cl?",
    answer:
      "Det er praktisk, når en opskrift angiver mængder i dl, men du fx skal skænke drikkevarer eller læse en etiket, der bruger cl.",
  },
  {
    question: "Er 4 dl det samme som 40 cl?",
    answer: "Ja, 4 dl svarer præcis til 40 cl.",
  },
  {
    question: "Hvordan omregner jeg 10 dl til cl?",
    answer:
      "10 dl svarer til 100 cl, da du ganger med 10. Det svarer også til præcis 1 liter.",
  },
  {
    question: "Hvorfor er cl mere præcis end dl til skænkemål?",
    answer:
      "Fordi cl-enheden giver hele tal for de mindre mængder, der typisk skænkes, mens dl ofte ville kræve decimaltal for samme mængde.",
  },
  {
    question: "Bruges dl og cl uden for Norden?",
    answer:
      "Begge enheder findes i det internationale metriske system, men dl bruges sjældnere uden for Norden, hvor liter og milliliter er mere almindelige i hverdagssprog.",
  },
  {
    question: "Kan jeg bruge omregningen til alle typer væske?",
    answer:
      "Ja, forholdet mellem dl og cl er fast og gælder uanset densitet, fordi begge enheder måler rumfang og ikke vægt.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra dl til cl?",
    answer:
      "Den hyppigste fejl er at dele i stedet for at gange med 10. Husk, at cl altid bliver et større tal end det oprindelige dl-tal.",
  },
  {
    question: "Kan jeg bruge dl-cl omregningen til at måle mel eller sukker?",
    answer:
      "Dl bruges nogle gange til tørre ingredienser i opskrifter, men cl bruges næsten udelukkende til væsker som alkohol og skænkemål.",
  },
  {
    question: "Findes der målebægre, der viser både dl og cl?",
    answer:
      "Ja, mange moderne målebægre har graduering i både dl, cl og ml, så du kan aflæse direkte uden at skulle regne selv.",
  },
  {
    question: "Er cl en gammeldags enhed, der er ved at forsvinde?",
    answer:
      "Nej, cl bruges fortsat aktivt i Danmark, særligt inden for gastronomi og alkoholindustrien, hvor præcise skænkemål og portionsstørrelser er vigtige for både kunder og myndigheder.",
  },
  {
    question: "Hvor mange cl er der i en hel liter?",
    answer:
      "Der går 100 cl på en hel liter, hvilket svarer til 10 dl, da hver deciliter er 10 cl.",
  },
]

const CONVERT_STEPS = [
  { title: "Find dl-tal", sub: "Fx 3 dl" },
  { title: "Gang med 10", sub: "3 × 10" },
  { title: "Læs cl", sub: "= 30 cl" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/cl-til-dl", label: "Cl til dl" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/dl-til-ml", label: "Dl til ml" },
  { href: "/volumen/l-til-cl", label: "Liter til cl" },
  { href: "/volumen/ml-til-cl", label: "Ml til cl" },
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
]

export default function DlTilClPage() {
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
              Dl til Cl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 deciliter (dl) svarer til 10 centiliter (cl), da deciliter er
              den større af de to enheder. Brug vores dl til cl omregner til
              at omregne mellem enhederne på et øjeblik, eller find den
              ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClDlConverter title="Dl til cl" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om deciliter og centiliter</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  dl
                </span>
                <h3 className="text-lg font-semibold">Deciliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Deciliter (dl) er den mest udbredte rumfangsenhed i danske
                opskrifter og svarer til en tiendedel af en liter, altså 100
                milliliter. De fleste målebægre, kander og skeer i det
                danske køkken er skaleret i dl, hvilket gør enheden intuitiv
                at arbejde med i hverdagen. Dl stammer fra det metriske
                system, der blev indført i Frankrig i 1795, hvor
                forstavelsen &quot;deci&quot; betyder en tiendedel af
                grundenheden liter. Selvom dl er den foretrukne enhed til
                mad, støder man sjældnere på den, når det gælder
                alkoholholdige drikke, hvor cl er mere almindelig.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  cl
                </span>
                <h3 className="text-lg font-semibold">Centiliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centiliter (cl) er ti gange mindre end en deciliter og
                svarer til en hundrededel af en liter. I Danmark bruges cl
                primært til at angive skænkemål og alkoholprocent, fx en
                genstand spiritus på 4 cl eller et glas vin på 12 cl. Cl er
                en del af samme metriske system som dl, men er langt mindre
                udbredt i danske kogebøger. Når du omregner fra dl til cl,
                bliver tallene ti gange større, hvilket gør cl praktisk, når
                du skal måle eller angive mindre portioner mere præcist end
                dl tillader.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du dl til cl
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: cl = dl × 10
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
            Forestil dig, at en opskrift beder om 2,5 dl hvidvin til en
            sauce, men du vil vide, hvor mange centiliter det svarer til,
            fordi flasken kun angiver alkoholindhold pr. cl. Du ganger 2,5
            med 10 og får 25 cl. På samme måde kan du omregne 4 dl fløde til
            40 cl, hvis du sammenligner mængder på tværs af opskrifter, der
            bruger forskellige enheder.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Dl til cl tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_DL_VALUES.map((dl) => (
              <li
                key={dl}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(dl * CL_PER_DL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  cl
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
            Ofte stillede spørgsmål om dl og cl
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
