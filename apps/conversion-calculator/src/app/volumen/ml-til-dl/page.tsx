import type { Metadata } from "next"
import Link from "next/link"

import { MlDlConverter } from "@/src/components/site/ml-dl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Ml til Dl Omregner | Omregn Milliliter til Deciliter Online"
const DESCRIPTION =
  "Omregn ml til dl på et øjeblik. 100 ml er 1 dl. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/ml-til-dl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/ml-til-dl",
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

const DL_PER_ML = 1 / 100
const COMMON_ML_VALUES = [10, 25, 40, 50, 60, 80, 100, 120, 125, 150, 250, 500]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man ml til dl?",
    answer: "Formlen er dl = ml ÷ 100. Fx bliver 50 ml til dl: 50 ÷ 100 = 0,5 dl.",
  },
  {
    question: "Hvad er ml?",
    answer:
      "Ml er en forkortelse for milliliter, en enhed for rumfang. 1 ml svarer til 1/1000 liter, og bruges ofte til at måle mindre mængder væske, fx i madopskrifter.",
  },
  {
    question: "Er 100 ml det samme som 1 dl?",
    answer:
      "Ja, 100 ml svarer præcis til 1 dl (deciliter), da der går 100 ml på hver deciliter.",
  },
  {
    question: "Hvor meget er 50 ml i dl?",
    answer: "50 ml svarer til 0,5 dl, altså en halv deciliter.",
  },
  {
    question: "Hvor mange dl er 250 ml?",
    answer: "250 ml svarer til 2,5 dl.",
  },
  {
    question: "Hvornår er det praktisk at omregne ml til dl?",
    answer:
      "Det er nyttigt, når emballage eller et målebæger angiver ml, men opskriften du følger, er skrevet i dl.",
  },
  {
    question: "Hvor mange dl er 1.000 ml?",
    answer: "1.000 ml svarer til 10 dl, hvilket også er præcis 1 liter.",
  },
  {
    question: "Hvorfor angiver visse emballager ml i stedet for dl?",
    answer:
      "Producenter bruger ofte ml for at angive indholdet så præcist som muligt, især ved mindre emballagestørrelser.",
  },
  {
    question: "Kan jeg omregne ml til dl for alle typer væske?",
    answer:
      "Ja, forholdet mellem ml og dl er fast for alle væsker, da begge enheder måler rumfang uafhængigt af densitet.",
  },
  {
    question: "Hvad er forskellen mellem ml og cl set i forhold til dl?",
    answer:
      "Både ml og cl er mindre end dl, men i forskellig grad: der går 100 ml på 1 dl, mens der kun går 10 cl på 1 dl.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra ml til dl?",
    answer:
      "Mange glemmer at dele med 100 og ganger i stedet, hvilket giver et alt for stort tal. Husk, at dl altid er et markant mindre tal end ml.",
  },
  {
    question: "Hvorfor er dl mere almindelig end ml i ældre danske kogebøger?",
    answer:
      "Dl har historisk været standardenheden i dansk madlavning, mens ml er blevet mere udbredt med moderne, internationalt inspirerede opskrifter.",
  },
  {
    question: "Kan jeg regne ml om til dl uden lommeregner?",
    answer:
      "Ja, du skal blot flytte kommaet to pladser mod venstre, da du deler med 100. Fx bliver 350 ml til 3,5 dl.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem ml og dl?",
    answer:
      "Tænk på, at \"milli\" betyder tusind og \"deci\" betyder ti. En deciliter er derfor hundrede gange større end en milliliter, fordi 1.000 delt med 10 giver 100.",
  },
]

const CONVERT_STEPS = [
  { title: "Find ml-tal", sub: "Fx 250 ml" },
  { title: "Del med 100", sub: "250 ÷ 100" },
  { title: "Læs dl", sub: "= 2,5 dl" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/dl-til-ml", label: "Dl til ml" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/ml-til-cl", label: "Ml til cl" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/l-til-dl", label: "Liter til dl" },
  { href: "/volumen/cl-til-dl", label: "Cl til dl" },
]

export default function MlTilDlPage() {
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
              Ml til Dl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              100 milliliter (ml) svarer til 1 deciliter (dl), så der skal
              hundrede milliliter til at udgøre en enkelt deciliter. Brug
              vores ml til dl omregner til at omregne mellem enhederne på et
              øjeblik, eller find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MlDlConverter title="Ml til dl" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om milliliter og deciliter</h2>
          <div className="grid overflow-hidden rounded-2xl border bg-background shadow-sm md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  ml
                </span>
                <h3 className="text-sm font-semibold">Milliliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Milliliter (ml) svarer til en tusindedel af en liter og er
                den mindste rumfangsenhed, der bruges i hverdagen. Fordi
                enheden giver stor præcision ved små mængder, bruges ml
                ofte til medicindosering, øjendråber og kosmetik, samt på
                moderne målebægre og sprøjter. Milliliter blev indført
                sammen med resten af det metriske system i Frankrig i
                slutningen af 1700-tallet, hvor forstavelsen
                &quot;milli&quot; betyder en tusindedel af grundenheden
                liter. I køkkenet støder man også på ml på emballager til
                olie, eddike og andre flydende ingredienser.
              </p>
            </div>
            <div className="border-t p-6 sm:p-8 md:border-t-0 md:border-l">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  dl
                </span>
                <h3 className="text-sm font-semibold">Deciliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Deciliter (dl) er hundrede gange større end en milliliter
                og svarer til en tiendedel af en liter. Det er den mest
                udbredte rumfangsenhed i danske madopskrifter, hvor mælk,
                fløde, mel og sukker traditionelt måles i dl. De fleste
                danske husholdninger har målebægre skaleret i dl, hvilket
                gør enheden let genkendelig og praktisk at bruge. Dl
                stammer fra samme metriske system som ml, men bruges
                primært i madlavning frem for til medicinske eller
                kosmetiske formål, hvor ml er mere almindelig.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du ml til dl
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: dl = ml ÷ 100
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
            Forestil dig, at en emballage til madolie angiver 250 ml, men du
            vil vide, hvor mange deciliter det svarer til for at
            sammenligne med en opskrift, der bruger dl. Du deler 250 med 100
            og får 2,5 dl. På samme måde kan du omregne 500 ml mælk til 5
            dl, hvis du fx skal skalere en opskrift, der oprindeligt var
            angivet i ml fra en emballage eller et udenlandsk madsted.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Ml til dl tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {COMMON_ML_VALUES.map((ml) => (
              <li
                key={ml}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(ml * DL_PER_ML).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  dl
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{ml} ml</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om ml og dl
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
