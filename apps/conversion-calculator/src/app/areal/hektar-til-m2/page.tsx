import type { Metadata } from "next"
import Link from "next/link"

import { HektarM2Converter } from "@/src/components/site/hektar-m2-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Hektar til m² Omregner | Omregn Hektar til Kvadratmeter Online"
const DESCRIPTION =
  "Omregn hektar til m² på et øjeblik. 1 hektar er 10.000 m². Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/areal/hektar-til-m2",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal/hektar-til-m2",
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

const M2_PER_HEKTAR = 10000
const COMMON_HEKTAR_VALUES = [
  0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10, 20, 50, 100,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man hektar til m²?",
    answer:
      "Formlen er m² = hektar × 10.000. Fx bliver 2,5 hektar til m²: 2,5 × 10.000 = 25.000 m².",
  },
  {
    question: "Hvor meget er 1 hektar?",
    answer:
      "1 hektar (ha) er 10.000 m², altså et kvadrat med 100 meter til hver side.",
  },
  {
    question: "Hvor mange m² er en halv hektar?",
    answer:
      "En halv hektar er 5.000 m². En kvart hektar er 2.500 m², og en tiendedel hektar er 1.000 m².",
  },
  {
    question: "Hvor stor er en fodboldbane i hektar?",
    answer:
      "En 11-mands fodboldbane på 105 gange 68 meter fylder ca. 7.140 m², altså cirka 0,71 hektar. En hektar svarer derfor til knap halvanden bane.",
  },
  {
    question: "Hvad betyder et areal skrevet som 3 ha 2.500 m²?",
    answer:
      "Det er en sammensat skrivemåde, du møder i tingbogen og på matrikelkort. Den betyder 3 hele hektar plus 2.500 m², altså 32.500 m² i alt.",
  },
  {
    question: "Hvor mange tønder land er en hektar?",
    answer:
      "En hektar svarer til ca. 1,81 tønder land, da 1 tønde land er ca. 0,5516 hektar (5.516 m²). Tønder land er den gamle danske enhed, som ældre skøder og lokale landmænd stadig bruger.",
  },
  {
    question: "Hvor mange hektar er en typisk parcelhusgrund?",
    answer:
      "En villagrund på 700 til 900 m² svarer til 0,07 til 0,09 hektar. Der går altså 11 til 14 almindelige parcelhusgrunde på en hektar.",
  },
  {
    question: "Hvorfor bruger landbruget hektar frem for m²?",
    answer:
      "Marker er så store, at kvadratmeter giver uoverskuelige tal. Samtidig opgøres arealstøtte, sædskifte og udbytte pr. hektar, så det er den enhed, der regnes i.",
  },
  {
    question: "Hvor mange hektar er 1 km²?",
    answer: "1 km² svarer til 100 hektar, så 1 hektar er 0,01 km².",
  },
  {
    question: "Hvorfor er 1 hektar lig præcis 10.000 m²?",
    answer:
      "En hektar er defineret som 100 ar, og et ar er 100 m². 100 gange 100 giver 10.000 m², eller et kvadrat med 100 meter til hver side.",
  },
]

const CONVERT_STEPS = [
  { title: "Find hektar-tal", sub: "Fx 2,5 ha" },
  { title: "Gang med 10.000", sub: "2,5 × 10.000" },
  { title: "Læs m²", sub: "= 25.000 m²" },
]

const RELATED_CONVERTERS = [
  { href: "/areal/m2-til-hektar", label: "m² til hektar" },
  { href: "/areal/hektar-til-km2", label: "Hektar til km²" },
  { href: "/areal/hektar-til-tonder", label: "Hektar til tønder land" },
  { href: "/areal/km2-til-hektar", label: "km² til hektar" },
  { href: "/areal/tonder-til-hektar", label: "Tønder land til hektar" },
]

function formatM2(hektar: number) {
  return (hektar * M2_PER_HEKTAR).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function HektarTilM2Page() {
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
              Hektar til m² Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 hektar (ha) svarer til præcis 10.000 kvadratmeter, altså et
              kvadrat med 100 meter til hver side. Hektar bruges til
              landbrugsjord, skov og byggegrunde, mens kvadratmeter er den
              enhed, vi kender fra bolig og grund. Brug vores hektar til m²
              omregner til at skifte mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HektarM2Converter title="Hektar til m²" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om hektar og kvadratmeter</h2>
          <div className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="mb-1.5 font-semibold">Om hektar (ha)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hektar er en arealenhed i det metriske system, der er
                defineret som 10.000 kvadratmeter. Navnet er sat sammen af
                forstavelsen &quot;hekto&quot;, der betyder hundrede, og
                &quot;ar&quot;, som er en ældre arealenhed på 100
                kvadratmeter. En hektar er altså hundrede ar. Enheden blev
                indført i Frankrig i slutningen af 1700-tallet sammen med
                resten af det metriske system og er i dag den mest brugte
                måde at beskrive større landområder på i Europa. I Danmark
                angives landbrugsarealer, naturområder, skovdrift og
                markstørrelser næsten altid i hektar, og landbrugsstøtten
                fra EU beregnes pr. hektar. En hektar er lidt mindre end
                halvanden fodboldbane i fuld størrelse, og det gør enheden
                praktisk, når man hurtigt skal danne sig et overblik over et
                areal ude i landskabet.
              </p>
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">Om kvadratmeter (m²)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kvadratmeter er grundenheden for areal i SI-systemet og
                svarer til et kvadrat, hvor hver side er en meter lang.
                Enheden bruges til alt fra boligareal og grundplaner til
                gulvbelægning, maling og haveanlæg, og den står på næsten
                alle danske bolig- og byggetegninger. Fordi kvadratmeter er
                en forholdsvis lille enhed, bliver tallene hurtigt store, når
                man beskriver marker eller hele ejendomme, og derfor skifter
                man til hektar, så snart arealet overstiger nogle få tusinde
                kvadratmeter. Forholdet mellem de to enheder er fast: der går
                altid 10.000 kvadratmeter på en hektar, uanset markens form.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du hektar til m²
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: m² = hektar × 10.000
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
            Forestil dig, at du kigger på en landbrugsejendom, hvor
            salgsopstillingen angiver 4,2 hektar jord, mens kommune- og
            lokalplanen opgiver arealer i kvadratmeter. For at kunne
            sammenligne tallene ganger du med 10.000: 4,2 hektar bliver til
            42.000 m². Skal du så trække en byggegrund på 1.500 m² fra til
            stuehus og driftsbygninger, kan du regne videre i samme enhed og
            se, at der er 40.500 m² dyrkbar jord tilbage. Samme fremgangsmåde
            bruges, når gødning eller udsæd er doseret pr. kvadratmeter, men
            marken er opmålt i hektar.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Hektar til m² tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_HEKTAR_VALUES.map((hektar) => (
              <li
                key={hektar}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatM2(hektar)} m²
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {hektar} ha
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om hektar og m²
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
