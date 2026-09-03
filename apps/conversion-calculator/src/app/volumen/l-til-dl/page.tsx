import type { Metadata } from "next"
import Link from "next/link"

import { DlLConverter } from "@/src/components/site/dl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Liter til Dl Omregner | Omregn Liter til Deciliter Online"
const DESCRIPTION =
  "Omregn liter til dl på et øjeblik. 1 liter er 10 dl. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/l-til-dl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/l-til-dl",
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

const DL_PER_L = 10
const COMMON_L_VALUES = [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 5]

const FAQ_ITEMS = [
  {
    question: "Hvor mange dl går der på en liter?",
    answer:
      "Der går 10 deciliter (dl) på hver liter. Formlen er dl = liter × 10.",
  },
  {
    question: "Hvor mange dl er 1 liter?",
    answer: "1 liter svarer til 10 dl.",
  },
  {
    question: "Hvor mange dl er en halv liter?",
    answer: "En halv liter (0,5 l) svarer til 5 dl.",
  },
  {
    question: "Hvor mange dl er 1,5 liter?",
    answer: "1,5 liter svarer til 15 dl.",
  },
  {
    question: "Hvorfor omregnes liter til dl?",
    answer:
      "Det er praktisk, når en emballage angiver mængden i liter, men opskriften du følger, er skrevet i deciliter.",
  },
  {
    question: "Er 2 liter det samme som 20 dl?",
    answer: "Ja, 2 liter svarer præcis til 20 dl.",
  },
  {
    question: "Hvor mange dl er 5 liter?",
    answer: "5 liter svarer til 50 dl, da du ganger med 10.",
  },
  {
    question: "Hvorfor er dl mere praktisk end liter i madopskrifter?",
    answer:
      "Fordi dl giver mere overskuelige tal for de mindre mængder, der typisk indgår i en opskrift, mens liter primært bruges til store mængder.",
  },
  {
    question: "Bruges liter og dl på samme måde i hele verden?",
    answer:
      "Liter er en del af det internationale metriske system og bruges bredt, men dl er mest udbredt i Norden, mens andre lande ofte bruger ml eller cups i stedet.",
  },
  {
    question: "Kan jeg bruge omregningen til andre væsker end vand?",
    answer:
      "Ja, forholdet mellem liter og dl er fast for alle væsker, da begge enheder måler rumfang uafhængigt af densitet.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra liter til dl?",
    answer:
      "Mange glemmer at gange med 10 og deler i stedet, hvilket giver et alt for lille tal. Husk, at dl altid er et markant større tal end liter.",
  },
  {
    question: "Hvorfor bruges liter til indkøb og dl til madlavning?",
    answer:
      "Liter er den naturlige enhed, når man køber eller opbevarer væske, mens dl passer bedre til de mindre mængder, en opskrift typisk kræver.",
  },
  {
    question: "Kan jeg regne liter om til dl uden lommeregner?",
    answer:
      "Ja, du skal blot flytte kommaet én plads mod højre, da du ganger med 10. Fx bliver 2,5 liter til 25 dl.",
  },
  {
    question: "Findes der andre enheder mellem liter og dl?",
    answer:
      "Nej, dl er den nærmeste mindre enhed under liter i det metriske system for rumfang, efterfulgt af cl og ml.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem liter og dl?",
    answer:
      "Tænk på, at \"deci\" betyder ti. En deciliter er derfor en tiendedel af en liter, ligesom en decimeter er en tiendedel af en meter.",
  },
  {
    question: "Hvor mange dl svarer 4,5 liter til?",
    answer:
      "4,5 liter svarer til 45 dl, da du ganger antallet af liter med 10.",
  },
]

const CONVERT_STEPS = [
  { title: "Find liter-tal", sub: "Fx 1,5 l" },
  { title: "Gang med 10", sub: "1,5 × 10" },
  { title: "Læs dl", sub: "= 15 dl" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
  { href: "/volumen/l-til-cl", label: "Liter til cl" },
  { href: "/volumen/ml-til-dl", label: "Ml til dl" },
  { href: "/volumen/cl-til-dl", label: "Cl til dl" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
]

export default function LTilDlPage() {
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
              Liter til Dl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 liter svarer til 10 deciliter (dl), da liter er den
              grundlæggende rumfangsenhed i det metriske system. Brug vores
              liter til dl omregner til at omregne mellem enhederne på et
              øjeblik, eller find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <DlLConverter title="Liter til dl" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om liter og deciliter</h2>
          <div className="grid overflow-hidden rounded-2xl border bg-background shadow-sm md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  l
                </span>
                <h3 className="text-sm font-semibold">Liter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Liter (l) er grundenheden for rumfang i det metriske system
                og bruges til de fleste større væskemængder i hverdagen, fx
                mælk, vand, benzin og sodavand. Enheden blev indført under
                den franske revolution som en del af det nye metriske
                system og er i dag en af verdens mest udbredte
                måleenheder. En liter svarer til 10 deciliter eller 1.000
                milliliter, og de fleste tænker naturligt i liter, når
                mængderne bliver store nok til at gøre mindre enheder
                upraktiske.
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
                Deciliter (dl) er en tiendedel af en liter og er den mest
                udbredte rumfangsenhed i danske madopskrifter. Mælk, fløde,
                mel og sukker måles typisk i dl, og enheden findes på
                stort set alle målebægre og kander i det danske køkken. Dl
                stammer fra samme metriske system som liter, men bruges
                primært i madlavning, hvor overskuelige tal for mindre
                mængder er praktiske. Når du omregner fra liter til dl,
                bliver tallene ti gange større, hvilket gør dl velegnet
                til at beskrive de mængder, der typisk indgår i en
                opskrift.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du liter til dl
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: dl = liter × 10
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
            Forestil dig, at du har købt 1,5 liter mælk og vil vide, hvor
            mange deciliter det svarer til, for at kunne følge en
            opskrift, der angiver mængder i dl. Du ganger 1,5 med 10 og får
            15 dl. Samme fremgangsmåde bruges, hvis du skal omregne 3 liter
            fond til dl for at fordele det i mindre portioner: 3 × 10 = 30
            dl.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Liter til dl tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-4">
            {COMMON_L_VALUES.map((l) => (
              <li
                key={l}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(l * DL_PER_L).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  dl
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
            Ofte stillede spørgsmål om liter og dl
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
