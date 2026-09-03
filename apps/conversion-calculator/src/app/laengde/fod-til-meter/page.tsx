import type { Metadata } from "next"
import Link from "next/link"

import { FootMeterConverter } from "@/src/components/site/foot-meter-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Fod til Meter Omregner | Omregn Feet til Meter Online"
const DESCRIPTION =
  "Omregn fod til meter på et øjeblik. 1 fod er 0,3048 meter. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/fod-til-meter",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/fod-til-meter",
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

const METERS_PER_FOOT = 0.3048
const COMMON_FEET_VALUES = [
  1, 2, 3, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40, 50, 60, 100, 200, 500, 1000,
  10000,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man fod til meter?",
    answer:
      "Formlen er meter = fod × 0,3048. Fx bliver 10 fod til meter: 10 × 0,3048 = 3,048 meter.",
  },
  {
    question: "Hvad er en fod?",
    answer:
      'En fod (på engelsk "foot" eller "feet", forkortet ft) er en længdeenhed fra det amerikanske og britiske målesystem. Den bruges bl.a. til at angive højde og afstande i USA og Storbritannien, hvor Danmark bruger meter.',
  },
  {
    question: "Hvor lang er en fod?",
    answer:
      "En fod svarer til præcis 0,3048 meter, altså 30,48 cm. En fod deles i 12 tommer, og en tomme er 2,54 cm.",
  },
  {
    question: "Hvor mange fod er en meter?",
    answer:
      "1 meter svarer til ca. 3,281 fod. For at gå fra meter til fod deler du meter-tallet med 0,3048.",
  },
  {
    question: "Hvad er 5 fod 10 tommer i meter?",
    answer:
      "5 fod 10 tommer (en almindelig måde at angive højde på) svarer til 5 × 0,3048 + 10 × 0,0254 = 1,778 meter.",
  },
  {
    question: "Hvorfor bruger fly højde i fod?",
    answer:
      "International luftfart bruger fod til flyvehøjde. En marchhøjde på 35.000 fod svarer til ca. 10.668 meter.",
  },
  {
    question: "Findes der en hurtig hovedregningsmetode?",
    answer:
      "Ja. Gang antallet af fod med 0,3 og læg cirka en tyvendedel til. 20 fod bliver dermed cirka 6 meter, tæt på de præcise 6,096 meter.",
  },
  {
    question: "Hvor mange tommer går der på en fod?",
    answer:
      "Der går 12 tommer (inches) på en fod. 1 tomme er 2,54 cm, og 12 gange 2,54 giver 30,48 cm.",
  },
  {
    question: "Hvordan regner jeg meter tilbage til fod?",
    answer:
      "Del antallet af meter med 0,3048. Fx bliver 3 meter til ca. 9,84 fod.",
  },
]

const CONVERT_STEPS = [
  { title: "Find fod-tal", sub: "Fx 10 fod" },
  { title: "Gang med 0,3048", sub: "10 × 0,3048" },
  { title: "Læs meter", sub: "= 3,048 m" },
]

const RELATED_CONVERTERS = [
  { href: "/laengde/meter-til-fod", label: "Meter til fod" },
  { href: "/laengde/hoejde-omregner", label: "Højde omregner" },
  { href: "/laengde/tommer-til-cm", label: "Tommer til cm" },
  { href: "/laengde/cm-til-tommer", label: "Cm til tommer" },
  { href: "/laengde/miles-til-km", label: "Miles til km" },
]

function formatMeters(feet: number) {
  return (feet * METERS_PER_FOOT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function FodTilMeterPage() {
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
              Fod til Meter Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              En fod svarer til præcis 0,3048 meter, altså 30,48 cm. Fod
              bruges til højde, rumhøjde og flyvehøjde i USA og Storbritannien,
              mens meter er standarden i Danmark og resten af det metriske
              system. Brug vores fod til meter omregner til at skifte mellem
              enhederne på et øjeblik, eller find den ønskede værdi i tabellen
              herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <FootMeterConverter title="Fod til meter" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om fod og meter</h2>
          <div className="flex flex-col gap-4 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <div>
              <h3 className="mb-1.5 font-semibold">Om fod (ft)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fod er en af de ældste længdeenheder og tog oprindeligt
                udgangspunkt i længden af en voksen mands fod. Gennem
                historien har en fod haft mange forskellige længder fra land
                til land, men i 1959 blev den internationale fod fastlagt til
                præcis 0,3048 meter, defineret ud fra metersystemet. En fod
                deles i 12 tommer. Enheden bruges stadig dagligt i USA og
                Storbritannien til at angive personers højde, loftshøjde,
                bræddelængder og terrænkoter, og international luftfart bruger
                fod til flyvehøjde overalt i verden. For en dansker er det
                nyttigt at huske, at tre fod er lidt under en meter.
              </p>
            </div>
            <div>
              <h3 className="mb-1.5 font-semibold">Om meter (m)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Meter er SI-systemets grundenhed for længde og defineres i
                dag ud fra den strækning, lyset tilbagelægger i vakuum på en
                bestemt brøkdel af et sekund. I Danmark bruges meter til alt
                fra bygningshøjder og rummål til afstande og tøjstørrelser, og
                enheden hænger direkte sammen med centimeter, millimeter og
                kilometer via faktorer på ti. Når du omregner fra fod til
                meter, ganger du altid med den faste faktor 0,3048, uanset om
                der er tale om en enkelt bræddelængde eller en hel
                bygningshøjde.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du fod til meter
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: meter = fod × 0,3048
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
            Forestil dig, at du kigger på en amerikansk byggevejledning til et
            fritstående skur, hvor målene står i fod: væggene er 8 fod høje,
            og grundfladen er 10 fod gange 12 fod. For at kunne købe
            materialer i danske mål omregner du hvert tal ved at gange med
            0,3048. Væggene bliver 2,44 meter høje, og grundfladen bliver
            3,05 meter gange 3,66 meter. Nu kan du bestille spær og
            beklædning i de længder, tømmerhandlen fører. Samme metode bruges,
            når en amerikansk kilde oplyser et vandfald til 200 fod, og du vil
            fortælle en dansker, at det er cirka 61 meter.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Fod til meter tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_FEET_VALUES.map((feet) => (
              <li
                key={feet}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatMeters(feet)} m
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {feet.toLocaleString("da-DK")} fod
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om fod og meter
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
