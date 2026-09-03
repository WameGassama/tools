import type { Metadata } from "next"
import Link from "next/link"

import { HektarM2Converter } from "@/src/components/site/hektar-m2-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "m² til Hektar Omregner | Omregn Kvadratmeter til Hektar Online"
const DESCRIPTION =
  "Omregn m² til hektar på et øjeblik. 10.000 m² er 1 hektar. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/areal/m2-til-hektar",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal/m2-til-hektar",
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

const HEKTAR_PER_M2 = 1 / 10000
const COMMON_M2_VALUES = [
  500, 1000, 2000, 2500, 5000, 7140, 10000, 15000, 20000, 25000, 50000, 100000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man m² til hektar?",
    answer:
      "Formlen er hektar = m² ÷ 10.000. Fx bliver 25.000 m² til hektar: 25.000 ÷ 10.000 = 2,5 hektar.",
  },
  {
    question: "Hvor mange m² er 1 hektar?",
    answer:
      "1 hektar er 10.000 m², altså et kvadrat med 100 meter til hver side.",
  },
  {
    question: "Hvor mange hektar er 1.000 m²?",
    answer:
      "1.000 m² svarer til 0,1 hektar. 5.000 m² er 0,5 hektar, og 500 m² er 0,05 hektar.",
  },
  {
    question: "Hvorfor deler man netop med 10.000?",
    answer:
      "Fordi en hektar per definition er 100 meter gange 100 meter, og 100 gange 100 er 10.000 kvadratmeter.",
  },
  {
    question: "Hvornår giver det mening at skifte fra m² til hektar?",
    answer:
      "Når arealet overstiger nogle få tusinde kvadratmeter. Så bliver m²-tallene lange og svære at overskue, og hektar giver kortere, mere sammenlignelige tal.",
  },
  {
    question: "Hvor mange hektar er en fodboldbane?",
    answer:
      "En fodboldbane på 105 gange 68 meter er ca. 7.140 m², altså cirka 0,71 hektar.",
  },
  {
    question: "Kan jeg omregne et grundareal på fx 800 m² til hektar?",
    answer:
      "Ja. 800 ÷ 10.000 = 0,08 hektar. For små bolig- og villagrunde bliver hektar-tallet så lille, at kvadratmeter er den mere praktiske enhed.",
  },
  {
    question: "Hvad er tønder land i forhold til m² og hektar?",
    answer:
      "Tønder land er en gammel dansk arealenhed. 1 tønde land er ca. 5.516 m², svarende til ca. 0,5516 hektar.",
  },
  {
    question: "Hvor mange hektar er 1 km²?",
    answer:
      "1 km² er 1.000.000 m², hvilket svarer til 100 hektar. For at omregne km² til hektar ganger du med 100.",
  },
]

const CONVERT_STEPS = [
  { title: "Find m²-tal", sub: "Fx 25.000 m²" },
  { title: "Del med 10.000", sub: "25.000 ÷ 10.000" },
  { title: "Læs hektar", sub: "= 2,5 ha" },
]

const RELATED_CONVERTERS = [
  { href: "/areal/hektar-til-m2", label: "Hektar til m²" },
  { href: "/areal/km2-til-hektar", label: "km² til hektar" },
  { href: "/areal/tonder-til-hektar", label: "Tønder land til hektar" },
  { href: "/areal/hektar-til-km2", label: "Hektar til km²" },
  { href: "/areal/hektar-til-tonder", label: "Hektar til tønder land" },
]

function formatHektar(m2: number) {
  return (m2 * HEKTAR_PER_M2).toLocaleString("da-DK", {
    maximumFractionDigits: 4,
  })
}

export default function M2TilHektarPage() {
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
              m² til Hektar Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              10.000 kvadratmeter svarer til præcis 1 hektar, fordi en hektar
              per definition er 100 gange 100 meter. Kvadratmeter bruges til
              boliger og grunde, mens hektar er den enhed, større marker,
              skovarealer og hele ejendomme opgøres i. Brug vores m² til
              hektar omregner til at skifte mellem enhederne på et øjeblik,
              eller find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HektarM2Converter title="m² til hektar" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om kvadratmeter og hektar</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  m²
                </span>
                <h3 className="text-lg font-semibold">Kvadratmeter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kvadratmeter er SI-systemets grundenhed for areal og
                beskriver et kvadrat med en sidelængde på en meter. Enheden
                er den, danskerne kender bedst fra hverdagen: boligareal i
                en salgsopstilling, kvadratmeterpris på en lejlighed,
                gulvareal når der skal købes parket, og haveareal når der
                skal sås græs. Kvadratmeter giver præcise og håndterbare
                tal for alt op til nogle tusinde kvadratmeter, men for
                marker og hele ejendomme bliver tallene så lange, at de er
                svære at overskue og sammenligne. Derfor går man op i enhed
                til ar og hektar, når arealet vokser.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  ha
                </span>
                <h3 className="text-lg font-semibold">Hektar</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Hektar er en større arealenhed i det metriske system,
                defineret som 10.000 kvadratmeter, eller hundrede ar.
                Forstavelsen &quot;hekto&quot; betyder hundrede. Hektar blev
                indført med det metriske system i Frankrig omkring 1795 og
                er i dag den almindelige enhed for landbrugsjord, skovdrift,
                naturarealer og planlægning i Danmark og resten af Europa.
                En hektar fylder omtrent halvanden fodboldbane. Når du
                omregner fra kvadratmeter til hektar, er forholdet altid det
                samme: du deler kvadratmeter-tallet med 10.000, uanset om
                arealet er kvadratisk, aflangt eller uregelmæssigt.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du m² til hektar
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: hektar = m² ÷ 10.000
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
            Forestil dig, at du har fået opmålt en grund til et
            byggemodningsprojekt, og landmåleren har opgivet arealet som
            34.500 m². Ansøgningen om landbrugsstøtte og de fleste
            landbrugsberegninger regner i hektar, så du deler med 10.000:
            34.500 m² bliver til 3,45 hektar. Skal du så afsætte 6.000 m²
            til vej og regnvandsbassin, kan du enten trække tallet fra i m²
            eller omregne det til 0,6 hektar først. Tilbage er 28.500 m²,
            altså 2,85 hektar, der kan bebygges eller dyrkes.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">m² til hektar tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
            {COMMON_M2_VALUES.map((m2) => (
              <li
                key={m2}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatHektar(m2)} ha
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {m2.toLocaleString("da-DK")} m²
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om m² og hektar
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
