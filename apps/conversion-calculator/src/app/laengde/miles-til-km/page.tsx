import type { Metadata } from "next"
import Link from "next/link"

import { MileKmConverter } from "@/src/components/site/mile-km-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Miles til Km Omregner | Omregn Engelske Mil til Kilometer Online"
const DESCRIPTION =
  "Omregn miles til km på et øjeblik. 1 mile er 1,609 km. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/miles-til-km",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/miles-til-km",
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

const KM_PER_MILE = 1.609344
const COMMON_MILE_VALUES = [
  1, 2, 3, 5, 6, 8, 10, 13.1, 15, 20, 26.2, 30, 50, 60, 100, 150, 200, 300, 500,
  1000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man miles til km?",
    answer:
      "Formlen er km = miles × 1,609344. Fx bliver 100 miles til km: 100 × 1,609344 ≈ 160,93 km.",
  },
  {
    question: "Hvad er en mile (engelsk mil)?",
    answer:
      "En mile (også kaldet en engelsk eller amerikansk mil) er en længdeenhed, der bruges i USA og Storbritannien til at angive afstande, blandt andet på vejskilte. 1 mile svarer til præcis 1.609,344 meter.",
  },
  {
    question: "Findes der en hurtig hovedregningsmetode?",
    answer:
      "Ja. Gang antallet af mile med 1,6, eller læg cirka to tredjedele til mile-tallet. 50 miles bliver dermed cirka 80 km, tæt på de præcise 80,47 km.",
  },
  {
    question: "Hvor langt er et maraton i miles?",
    answer:
      "Et maraton er 42,195 km, hvilket svarer til ca. 26,2 miles. Et halvmaraton er ca. 13,1 miles, og 10 km er ca. 6,2 miles.",
  },
  {
    question: "Hvad er forskellen på en engelsk mile og en dansk mil?",
    answer:
      "Det er to helt forskellige enheder. Den engelske og amerikanske mile er ca. 1,609 km, mens den gamle danske (og svenske og norske) mil er 10 km, altså over seks gange så lang.",
  },
  {
    question: "Hvad er en sømil?",
    answer:
      "En sømil (nautisk mil) bruges til sø- og luftfart og svarer til 1,852 km. Det er hverken det samme som en engelsk mile (1,609 km) eller en dansk mil (10 km).",
  },
  {
    question: "Hvorfor står der miles på min løbeapp?",
    answer:
      "Mange apps er som standard sat til amerikanske enheder. Du kan som regel skifte til kilometer i indstillingerne, eller omregne bagefter ved at gange med 1,609.",
  },
  {
    question: "Hvad er 60 mph i km/t?",
    answer:
      "Miles per hour omregnes med samme faktor. 60 mph svarer til ca. 96,6 km/t, og 30 mph til ca. 48,3 km/t.",
  },
  {
    question: "Hvordan regner jeg km tilbage til miles?",
    answer:
      "Del antallet af kilometer med 1,609344. Fx bliver 160 km til ca. 99,4 miles.",
  },
]

const CONVERT_STEPS = [
  { title: "Find miles-tal", sub: "Fx 100 miles" },
  { title: "Gang med 1,609", sub: "100 × 1,609" },
  { title: "Læs km", sub: "≈ 160,93 km" },
]

const RELATED_CONVERTERS = [
  { href: "/laengde/km-til-miles", label: "Km til miles" },
  { href: "/laengde/soemil-til-km", label: "Sømil til km" },
  { href: "/laengde/fod-til-meter", label: "Fod til meter" },
  { href: "/laengde/cm-til-tommer", label: "Cm til tommer" },
  { href: "/hastighed/mph-til-km-t", label: "Mph til km/t" },
]

function formatKm(miles: number) {
  return (miles * KM_PER_MILE).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function MilesTilKmPage() {
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
              Miles til Km Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 mile svarer til 1,609344 km. Mile er den længdeenhed, USA og
              Storbritannien bruger til afstande på vej og i løbeapps, mens
              kilometer er standarden i Danmark og resten af det metriske
              system. Brug vores miles til km omregner til at skifte mellem
              enhederne på et øjeblik, eller find den ønskede værdi i tabellen
              herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MileKmConverter title="Miles til km" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om miles og kilometer</h2>
          <div className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="mb-1.5 font-semibold">Om mile (mi)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Mile er en længdeenhed fra det angelsaksiske målesystem.
                Ordet stammer fra det latinske &quot;mille passus&quot;, tusind
                skridt, som var en romersk hærs marchafstand på cirka 1.480
                meter. Den moderne internationale mile blev fastlagt i 1959
                til præcis 1.609,344 meter, defineret ud fra metersystemet.
                I dag bruges mile på vejskilte, i vejrudsigter og i sport i
                USA og Storbritannien, og enheden dukker op overalt i
                amerikansk film, litteratur og software. For en dansker er
                den vigtigste pointe, at en mile er godt halvanden kilometer,
                så et tal i miles altid bliver større, når det skrives om til
                kilometer.
              </p>
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">Om kilometer (km)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kilometer er den længdeenhed, danskerne bruger til alle
                større afstande: vejskilte, løberuter, bilens kilometertæller
                og rejseplaner. Enheden er 1.000 meter, og forstavelsen
                &quot;kilo&quot; betyder netop tusind. Fordi kilometer indgår
                direkte i det metriske system, er den nem at regne videre med,
                fx til meter eller til hastighed i km/t. Når du omregner fra
                mile til kilometer, ganger du altid med den faste faktor
                1,609344, uanset om afstanden er kort eller lang.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du miles til km
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: km = miles × 1,609344
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
            Forestil dig, at du planlægger en biltur i USA, og rutevejledningen
            siger 240 miles fra San Francisco til Yosemite. Du vil gerne vide,
            hvor langt det er i den skala, du kender hjemmefra. Du ganger med
            1,609344: 240 × 1,609344 ≈ 386 km. Det er omtrent afstanden fra
            København til Skagen, så du kan hurtigt regne ud, at turen tager en
            god halv dag med pauser. Samme metode bruges, når din løbeapp har
            registreret en tur på 6,2 miles, og du vil vide, at det svarer til
            cirka 10 km.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Miles til km tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_MILE_VALUES.map((miles) => (
              <li
                key={miles}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatKm(miles)} km
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {miles.toLocaleString("da-DK")} mi
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om miles og km
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
