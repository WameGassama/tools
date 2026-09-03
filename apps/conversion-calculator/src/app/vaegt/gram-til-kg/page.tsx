import type { Metadata } from "next"
import Link from "next/link"

import { GramKgConverter } from "@/src/components/site/gram-kg-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Gram til Kg Omregner | Omregn Gram til Kilogram Online"
const DESCRIPTION =
  "Omregn gram til kg på et øjeblik. 1.000 gram er 1 kg. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vaegt/gram-til-kg",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vaegt/gram-til-kg",
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

const KG_PER_GRAM = 1 / 1000
const COMMON_GRAM_VALUES = [
  50, 100, 200, 250, 300, 400, 500, 750, 1000, 1500, 2000, 2500, 5000, 10000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man gram til kg?",
    answer:
      "Formlen er kg = gram ÷ 1.000. Fx bliver 250 gram til kg: 250 ÷ 1.000 = 0,25 kg.",
  },
  {
    question: "Hvor mange gram er der på et kilo?",
    answer:
      "Der går præcis 1.000 gram på hvert kilogram (kg). Et halvt kilo er 500 gram, og et kvart kilo er 250 gram.",
  },
  {
    question: "Kan jeg bare flytte kommaet?",
    answer:
      "Ja. Da du deler med 1.000, rykker du kommaet tre pladser til venstre. 1.750 gram bliver til 1,750 kg, altså 1,75 kg.",
  },
  {
    question: "Hvor meget er 500 gram i kg?",
    answer:
      "500 gram svarer til 0,5 kg. 100 gram er 0,1 kg, og 750 gram er 0,75 kg.",
  },
  {
    question: "Hvor mange gram er 2,5 kg?",
    answer: "2,5 kg svarer til 2.500 gram. Hvert helt kilo er 1.000 gram.",
  },
  {
    question: "Hvad er forskellen på gram og kilogram?",
    answer:
      "Begge måler masse. Forstavelsen kilo betyder tusinde, så et kilogram er 1.000 gram. Gram bruges til små mængder, kilogram til større.",
  },
  {
    question: "Er gram og kilogram vægt eller masse?",
    answer:
      "Fysisk set er de masseenheder. I daglig tale kalder vi det vægt, og på en almindelig køkkenvægt eller badevægt er forskellen uden praktisk betydning.",
  },
  {
    question: "Hvorfor angiver opskrifter nogle gange gram og nogle gange kg?",
    answer:
      "For at holde tallene overskuelige. Krydderier og bagepulver angives i gram, mens mel, kartofler og kød ofte angives i kg, når mængden er stor.",
  },
  {
    question: "Hvor mange kg er 100 gram?",
    answer:
      "100 gram er 0,1 kg. En varedeklaration, der oplyser næringsindhold pr. 100 g, dækker altså en tiendedel kilo.",
  },
]

const CONVERT_STEPS = [
  { title: "Find gram-tal", sub: "Fx 250 g" },
  { title: "Del med 1.000", sub: "250 ÷ 1.000" },
  { title: "Læs kg", sub: "= 0,25 kg" },
]

const RELATED_CONVERTERS = [
  { href: "/vaegt/kg-til-gram", label: "Kg til gram" },
  { href: "/vaegt/kg-til-lbs", label: "Kg til lbs (pund)" },
  { href: "/vaegt/pund-til-kg", label: "Pund til kg" },
]

function formatKg(gram: number) {
  return (gram * KG_PER_GRAM).toLocaleString("da-DK", {
    maximumFractionDigits: 3,
  })
}

export default function GramTilKgPage() {
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
              Gram til Kg Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1.000 gram svarer til 1 kilogram, fordi forstavelsen
              &quot;kilo&quot; betyder tusinde. Gram bruges til små mængder
              som krydderier og portioner, mens kilogram bruges til mel,
              frugt og pakkevægt. Brug vores gram til kg omregner til at
              skifte mellem enhederne på et øjeblik, eller find den ønskede
              værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <GramKgConverter title="Gram til kg" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om gram og kilogram</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  g
                </span>
                <h3 className="text-lg font-semibold">Gram</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Gram er en masseenhed i det metriske system og oprindeligt
                defineret som massen af en kubikcentimeter rent vand.
                Enheden bruges overalt, hvor mængderne er små: en madopskrift
                der beder om 200 g mel, en pakke pålæg på 150 g,
                næringsindhold pr. 100 g på en varedeklaration eller en dosis
                medicin på få milligram, som er tusindedele af et gram. Fordi
                gram giver hele, præcise tal for hverdagens portioner, er det
                den enhed, køkkenvægte og butiksvægte som regel viser først.
                Så snart mængden vokser til flere hundrede eller tusinde
                gram, bliver tallene lange, og så skifter man til kilogram.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  kg
                </span>
                <h3 className="text-lg font-semibold">Kilogram</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kilogram er SI-systemets grundenhed for masse og den eneste
                grundenhed med en forstavelse indbygget i navnet. Et kilogram
                er 1.000 gram. I hverdagen bruges kg til alt fra kropsvægt og
                bagagevægt til indkøb af kartofler, kød og vaskepulver, og
                prisen i supermarkedet regnes ofte pr. kg. Når du omregner
                fra gram til kilogram, er forholdet altid det samme: du
                deler med 1.000, hvilket i praksis betyder, at du rykker
                kommaet tre pladser til venstre. 3.400 gram bliver derfor til
                3,4 kg.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du gram til kg
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: kg = gram ÷ 1.000
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
            Forestil dig, at du bager til en fest og har tre opskrifter, der
            tilsammen kræver 800 g, 450 g og 1.200 g hvedemel. For at vide
            hvor mange poser mel du skal købe, lægger du sammen: 800 + 450 +
            1.200 = 2.450 g. Det deler du med 1.000 og får 2,45 kg. En
            almindelig pose mel er 1 kg, så du skal bruge tre poser og har
            lidt over et halvt kilo til overs. Samme fremgangsmåde bruges,
            når du pakker en kuffert: læg vægten af hver ting sammen i gram,
            del med 1.000, og se om du holder dig under flyselskabets grænse
            i kilo.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Gram til kg tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_GRAM_VALUES.map((gram) => (
              <li
                key={gram}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatKg(gram)} kg
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {gram.toLocaleString("da-DK")} g
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om gram og kg
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
