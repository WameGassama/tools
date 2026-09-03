import type { Metadata } from "next"
import Link from "next/link"

import { ClLConverter } from "@/src/components/site/cl-l-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cl til Liter Omregner | Omregn Centiliter til Liter Online"
const DESCRIPTION =
  "Omregn cl til liter på et øjeblik. 100 cl er 1 liter. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen/cl-til-l",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen/cl-til-l",
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

const L_PER_CL = 1 / 100
const COMMON_CL_VALUES = [10, 20, 25, 33, 40, 50, 70, 75, 100, 150]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man cl til liter?",
    answer:
      "Formlen er liter = cl ÷ 100. Fx bliver 50 cl til liter: 50 ÷ 100 = 0,5 liter.",
  },
  {
    question: "Hvor mange cl er der på en liter?",
    answer: "Der går 100 cl på hver liter.",
  },
  {
    question: "Hvor meget er 50 cl?",
    answer: "50 cl svarer til 0,5 liter, altså en halv liter.",
  },
  {
    question: "Hvor meget er en flaske vin på 75 cl i liter?",
    answer: "En flaske vin på 75 cl svarer til 0,75 liter.",
  },
  {
    question: "Hvor mange liter er en sodavand på 33 cl?",
    answer: "En sodavand på 33 cl svarer til 0,33 liter.",
  },
  {
    question: "Er 100 cl det samme som 1 liter?",
    answer: "Ja, 100 cl svarer præcis til 1 liter.",
  },
  {
    question: "Hvor mange liter er 200 cl?",
    answer: "200 cl svarer til 2 liter, da du deler med 100.",
  },
  {
    question: "Hvorfor angiver vinflasker cl og ikke liter?",
    answer:
      "Fordi standardstørrelsen på 75 cl giver et mere naturligt og letgenkendeligt tal end 0,75 liter, selvom begge angivelser er korrekte.",
  },
  {
    question: "Er cl og liter begge en del af det metriske system?",
    answer:
      "Ja, begge enheder indgår i det internationale metriske system (SI) og bruges i de fleste lande i verden.",
  },
  {
    question: "Kan jeg omregne cl til liter for andre væsker end vand?",
    answer:
      "Ja, omregningen er en ren rumfangsomregning og gælder for alle væsker uanset densitet, da begge enheder måler volumen.",
  },
  {
    question: "Hvad er den mest almindelige fejl ved omregning fra cl til liter?",
    answer:
      "Mange glemmer at dele med 100 og ganger i stedet, hvilket giver et alt for stort tal. Husk, at liter altid er et markant mindre tal end cl.",
  },
  {
    question: "Hvorfor er der 100 cl på en liter og ikke fx 10?",
    answer:
      "Det skyldes det metriske systems opbygning, hvor \"centi\" altid betyder en hundrededel, uanset hvilken grundenhed det knyttes til.",
  },
  {
    question: "Kan cl og liter bruges til andet end drikkevarer?",
    answer:
      "Ja, begge enheder bruges også til at måle andre væsker som olie, rengøringsmidler og kemikalier, hvor rumfang skal angives præcist.",
  },
  {
    question: "Hvordan husker jeg let forholdet mellem cl og liter?",
    answer:
      "Tænk på, at \"centi\" betyder hundrede, ligesom en centimeter er en hundrededel af en meter. Samme logik gælder for centiliter, som er en hundrededel af en liter.",
  },
]

const CONVERT_STEPS = [
  { title: "Find cl-tal", sub: "Fx 50 cl" },
  { title: "Del med 100", sub: "50 ÷ 100" },
  { title: "Læs liter", sub: "= 0,5 liter" },
]

const RELATED_CONVERTERS = [
  { href: "/volumen/l-til-cl", label: "Liter til cl" },
  { href: "/volumen/cl-til-dl", label: "Cl til dl" },
  { href: "/volumen/cl-til-ml", label: "Cl til ml" },
  { href: "/volumen/ml-til-l", label: "Ml til liter" },
  { href: "/volumen/dl-til-l", label: "Dl til liter" },
  { href: "/volumen/l-til-ml", label: "Liter til ml" },
]

export default function ClTilLPage() {
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
              Cl til Liter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              100 centiliter (cl) svarer til 1 liter, da liter er grundenheden
              og centiliter en hundrededel heraf. Brug vores cl til liter
              omregner til at omregne mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <ClLConverter title="Cl til liter" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om centiliter og liter</h2>
          <div className="grid overflow-hidden rounded-2xl border bg-background shadow-sm md:grid-cols-2">
            <div className="p-6 sm:p-8">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  cl
                </span>
                <h3 className="text-sm font-semibold">Centiliter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centiliter (cl) svarer til en hundrededel af en liter, altså
                10 milliliter, og bruges primært til at angive mængder af
                alkoholholdige drikke i Danmark. En flaske vin er typisk
                mærket i cl (fx 75 cl), og barpersonale måler ofte spiritus
                i cl for at sikre præcise, ensartede skænkemål. Cl er en del
                af det franske metriske system fra 1795, hvor
                &quot;centi&quot; betyder en hundrededel af grundenheden.
                Selvom liter er den mere almindelige enhed i hverdagen, er
                cl praktisk, når mængderne er for små til at give
                meningsfulde tal i liter.
              </p>
            </div>
            <div className="border-t p-6 sm:p-8 md:border-t-0 md:border-l">
              <div className="mb-2.5 flex items-center gap-2.5">
                <span className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[11px] font-semibold text-primary">
                  l
                </span>
                <h3 className="text-sm font-semibold">Liter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Liter (l) er grundenheden for rumfang i det metriske system
                og svarer til 100 centiliter eller 1.000 milliliter. Liter
                bruges til stort set alle større væskemængder i hverdagen,
                fra mælk og vand til benzin og sodavand, og er den enhed, de
                fleste tænker i, når de taler om rumfang. Enheden blev
                indført under den franske revolution som en del af det nye
                metriske system og er siden blevet en af verdens mest
                udbredte måleenheder. Når du omregner fra cl til liter,
                bliver tallene meget mindre, hvilket gør liter velegnet til
                at beskrive større mængder på en overskuelig måde.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du cl til liter
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: liter = cl ÷ 100
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
            Forestil dig, at du har købt en kasse med 12 flasker vin, hver
            på 75 cl, og vil vide, hvor mange liter det samlet svarer til.
            Du omregner først én flaske: 75 cl ÷ 100 = 0,75 liter. Ganger du
            det med 12 flasker, får du 9 liter i alt. Samme princip gælder,
            hvis du fx skal omregne en opskrift, der angiver 150 cl
            bouillon, til liter for at sammenligne med en gryde, der er
            mærket i literstørrelser: 150 ÷ 100 = 1,5 liter.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Cl til liter tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-5">
            {COMMON_CL_VALUES.map((cl) => (
              <li
                key={cl}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {(cl * L_PER_CL).toLocaleString("da-DK", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  l
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cl} cl</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om cl og liter
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
