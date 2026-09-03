import type { Metadata } from "next"
import Link from "next/link"

import { ClDlConverter } from "@/src/components/site/cl-dl-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cl til Dl Omregner | Omregn Centiliter til Deciliter Online"
const DESCRIPTION =
  "Omregn cl til dl på et øjeblik. 10 cl er 1 dl. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/cl-til-dl",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/cl-til-dl",
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

const DL_PER_CL = 1 / 10
const COMMON_CL_VALUES = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 25, 30]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man cl til dl?",
    answer: "Formlen er dl = cl ÷ 10. Fx bliver 20 cl til dl: 20 ÷ 10 = 2 dl.",
  },
  {
    question: "Hvad er cl?",
    answer:
      "Cl er en forkortelse for centiliter, en enhed for rumfang. 1 cl svarer til 1/100 liter, altså 10 ml.",
  },
  {
    question: "Hvor mange cl er der på en dl?",
    answer: "Der går 10 cl på hver deciliter (dl).",
  },
  {
    question: "Hvor mange dl er et glas vin på 15 cl?",
    answer: "Et glas vin på 15 cl svarer til 1,5 dl.",
  },
  {
    question: "Hvorfor bruges dl mere end cl i danske opskrifter?",
    answer:
      "Deciliter er den gængse måleenhed i danske madopskrifter, mens cl typisk kun bruges til alkoholholdige drikke og skænkemål.",
  },
  {
    question: "Er 30 cl det samme som 3 dl?",
    answer: "Ja, 30 cl svarer præcis til 3 dl.",
  },
  {
    question: "Hvordan omregner jeg 100 cl til dl?",
    answer: "100 cl svarer til 10 dl, da du blot deler med 10.",
  },
  {
    question: "Hvorfor bruges dl mere end cl i danske kogebøger?",
    answer:
      "Dl har historisk været standardenheden i nordisk madlavning, mens cl primært bruges til alkoholholdige drikke og skænkemål.",
  },
  {
    question: "Er der en international standard for cl og dl?",
    answer:
      "Ja, begge enheder er en del af det internationale metriske system (SI), men bruges mest i lande, der har det metriske system som standard, herunder Danmark og resten af Norden.",
  },
  {
    question: "Kan jeg omregne cl direkte til gram?",
    answer:
      "Nej, cl måler rumfang og gram måler vægt. Omregningen afhænger af væskens densitet, så du skal kende densiteten for at omregne præcist.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra cl til dl?",
    answer:
      "Mange forveksler formlen og ganger i stedet for at dele med 10. Husk, at dl altid bliver et mindre tal end det oprindelige cl-tal, når du regner rigtigt.",
  },
  {
    question: "Kan cl og dl bruges til at måle andet end væske?",
    answer:
      "Nej, cl og dl er rumfangsenheder og bruges primært til væsker. Faste stoffer som mel og sukker vejes normalt i gram, selvom nogle opskrifter angiver dem i dl af praktiske årsager.",
  },
  {
    question: "Hvornår bør jeg vælge dl frem for cl i en opskrift?",
    answer:
      "Vælg dl, når mængden er stor nok til at give et helt eller enkelt decimaltal, og cl, når du har brug for mere finkornet præcision, fx til skænkemål eller små justeringer i en opskrift.",
  },
]

const CONVERT_STEPS = [
  { title: "Find cl-tal", sub: "Fx 20 cl" },
  { title: "Del med 10", sub: "20 ÷ 10" },
  { title: "Læs dl", sub: "= 2 dl" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/dl-til-cl", label: "Dl til cl" },
  { href: "/volumen/cl-til-l", label: "Cl til liter" },
  { href: "/volumen/cl-til-ml", label: "Cl til ml" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/ml-til-dl", label: "Ml til dl" },
  { href: "/volumen/l-til-dl", label: "Liter til dl" },
]

export default function ClTilDlPage() {
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
              Cl til Dl Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              10 centiliter (cl) svarer til 1 deciliter (dl), da en deciliter
              er ti gange større end en centiliter. Brug vores cl til dl
              omregner til at omregne mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClDlConverter title="Cl til dl" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om centiliter og deciliter</h2>
          <div className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="mb-1.5 font-semibold">Om centiliter (cl)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centiliter (cl) svarer til en hundrededel af en liter, altså
                10 milliliter, og er dermed mindre end en deciliter. Enheden
                bruges i Danmark primært til alkoholholdige drikke og
                skænkemål, fx når en bartender måler 4 cl spiritus til en
                cocktail, eller når en vinflaske angiver alkoholprocenten
                pr. cl. Cl er en del af det metriske system fra 1795, hvor
                forstavelsen &quot;centi&quot; betyder en hundrededel af
                grundenheden liter. I modsætning til deciliter er cl
                sjældent brugt i danske kogebøger, men optræder ofte på
                etiketter og i baropskrifter, hvor små, præcise mængder
                alkohol skal måles.
              </p>
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">Om deciliter (dl)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Deciliter (dl) er ti gange større end en centiliter og
                svarer til en tiendedel af en liter, altså 100 ml. Det er
                den mest anvendte rumfangsenhed i danske madopskrifter, hvor
                mælk, fløde, mel og sukker typisk måles i dl. De fleste
                danske husholdninger har målebægre og kander skaleret i dl,
                hvilket gør enheden let at bruge i praksis. Ligesom cl
                stammer dl fra det franske metriske system, hvor &quot;deci&quot;
                betyder en tiendedel. Når du omregner fra cl til dl, bliver
                tallene mindre og mere håndterbare, hvilket er praktisk,
                hvis en opskrift kræver store mængder væske.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du cl til dl
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: dl = cl ÷ 10
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
            Forestil dig, at en cocktailopskrift angiver 30 cl juice, men du
            vil skrive opskriften om til en madopskrift, der bruger dl som
            mål. Du deler 30 med 10 og får 3 dl juice. På samme måde kan du
            regne ud, at 45 cl fløde svarer til 4,5 dl, hvis du fx skal
            skalere en dessertopskrift, der oprindeligt var angivet i cl fra
            en bar- eller cateringmenu.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Cl til dl tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_CL_VALUES.map((cl) => (
              <li
                key={cl}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(cl * DL_PER_CL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  dl
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cl} cl</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om cl og dl
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
