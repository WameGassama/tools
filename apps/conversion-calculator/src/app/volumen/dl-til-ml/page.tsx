import type { Metadata } from "next"
import Link from "next/link"

import { MlDlConverter } from "@/src/components/site/ml-dl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Dl til Ml Omregner | Omregn Deciliter til Milliliter Online"
const DESCRIPTION =
  "Omregn dl til ml på et øjeblik. 1 dl er 100 ml. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/dl-til-ml",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/dl-til-ml",
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

const ML_PER_DL = 100
const COMMON_DL_VALUES = [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5]

const FAQ_ITEMS = [
  {
    question: "Hvor mange ml er der i en dl?",
    answer: "Der går 100 ml på hver deciliter (dl). Formlen er ml = dl × 100.",
  },
  {
    question: "Hvad er en deciliter?",
    answer:
      "En deciliter (dl) er en enhed for rumfang, der svarer til 1/10 liter, altså 100 ml. Deciliter bruges især i danske madopskrifter.",
  },
  {
    question: "Hvad er 1 dl i ml?",
    answer: "1 dl svarer til 100 ml.",
  },
  {
    question: "Hvor mange ml er 2,5 dl?",
    answer: "2,5 dl svarer til 250 ml, da hver deciliter er 100 ml.",
  },
  {
    question: "Hvorfor angiver opskrifter dl, når madgrejet er skaleret i ml?",
    answer:
      "Danske opskrifter bruger traditionelt dl, mens mange nyere målebægre og kander er skaleret i ml. Omregningen er dog enkel, da 1 dl altid er 100 ml.",
  },
  {
    question: "Er en halv dl det samme som 50 ml?",
    answer: "Ja, en halv deciliter (0,5 dl) svarer præcis til 50 ml.",
  },
  {
    question: "Hvor mange ml er 10 dl?",
    answer: "10 dl svarer til 1.000 ml, hvilket også er præcis 1 liter.",
  },
  {
    question: "Hvorfor skifter nyere målebægre fra dl til ml?",
    answer:
      "Mange producenter bruger ml for at give mere præcise graderinger, især til mindre mængder, hvor dl-skalaen ville være for grov.",
  },
  {
    question: "Kan jeg blande dl og ml i samme opskrift?",
    answer:
      "Ja, så længe du omregner korrekt mellem enhederne. Husk blot, at 1 dl altid svarer til 100 ml, uanset hvilken væske det drejer sig om.",
  },
  {
    question: "Er dl en unik dansk enhed?",
    answer:
      "Nej, dl er en del af det internationale metriske system, men bruges hyppigere i Norden end i mange andre lande, hvor ml eller liter er mere almindelige i hverdagssprog.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra dl til ml?",
    answer:
      "Mange glemmer at gange med 100 og deler i stedet, hvilket giver et alt for lille tal. Husk, at ml altid er et markant større tal end dl.",
  },
  {
    question: "Findes der målebægre med både dl og ml markeret?",
    answer:
      "Ja, de fleste moderne målebægre i danske køkkener har graduering i både dl og ml, så du kan aflæse direkte uden at regne.",
  },
  {
    question: "Kan jeg bruge dl-ml omregningen til andre væsker end vand?",
    answer:
      "Ja, forholdet mellem dl og ml er fast for alle væsker, uanset densitet, fordi begge enheder måler rumfang.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem dl og ml?",
    answer:
      "Tænk på, at \"deci\" betyder ti og \"milli\" betyder tusind. En deciliter er derfor hundrede gange større end en milliliter, fordi 1.000 delt med 10 giver 100.",
  },
]

const CONVERT_STEPS = [
  { title: "Find dl-tal", sub: "Fx 2,5 dl" },
  { title: "Gang med 100", sub: "2,5 × 100" },
  { title: "Læs ml", sub: "= 250 ml" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/ml-til-dl", label: "Ml til dl" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/dl-til-cl", label: "Dl til cl" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
  { href: "/volumen/cl-til-ml", label: "Cl til ml" },
]

export default function DlTilMlPage() {
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
              Dl til Ml Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 deciliter (dl) svarer til 100 milliliter (ml), da deciliter er
              hundrede gange større end milliliter. Brug vores dl til ml
              omregner til at omregne mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlDlConverter title="Dl til ml" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om deciliter og milliliter</h2>
          <div className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="mb-1.5 font-semibold">Om deciliter (dl)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Deciliter (dl) svarer til en tiendedel af en liter, altså
                100 milliliter, og er den mest anvendte rumfangsenhed i
                danske opskrifter. Mælk, fløde, mel og sukker måles typisk
                i dl, og de fleste danske køkkener har målebægre og kander
                skaleret netop i denne enhed. Dl stammer fra det metriske
                system, der blev indført i Frankrig i 1795, hvor
                &quot;deci&quot; betyder en tiendedel af grundenheden
                liter. Fordi dl giver overskuelige tal for de mængder, der
                typisk indgår i en opskrift, er enheden blevet fast
                standard i nordisk madlavning gennem generationer.
              </p>
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">Om milliliter (ml)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Milliliter (ml) er hundrede gange mindre end en deciliter
                og svarer til en tusindedel af en liter. Enheden bruges,
                når der kræves stor præcision, fx til medicindosering,
                kosmetik og moderne målebægre eller sprøjter, der er
                skaleret i ml. Milliliter blev indført samtidig med resten
                af det metriske system, hvor forstavelsen &quot;milli&quot;
                betyder en tusindedel. Selvom dl er mere almindelig i
                traditionelle danske opskrifter, ser man i stigende grad ml
                på nyere køkkenredskaber og emballager, hvilket gør
                omregningen mellem de to enheder nyttig i praksis.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du dl til ml
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: ml = dl × 100
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
            Forestil dig, at en opskrift beder om 3 dl piskefløde, men dit
            målebæger kun viser milliliter. Du ganger 3 med 100 og får 300
            ml. Samme fremgangsmåde bruges, hvis opskriften angiver 1,5 dl
            mælk: 1,5 × 100 = 150 ml. Ved at kende denne enkle omregning kan
            du frit bruge både ældre opskrifter i dl og nyere måleredskaber
            i ml, uden at det går ud over resultatet.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Dl til ml tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-5">
            {COMMON_DL_VALUES.map((dl) => (
              <li
                key={dl}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(dl * ML_PER_DL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  ml
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
            Ofte stillede spørgsmål om dl og ml
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
