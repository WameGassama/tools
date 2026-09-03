import type { Metadata } from "next"
import Link from "next/link"

import { KnotKmhConverter } from "@/src/components/site/knot-kmh-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Knob til Km/t Omregner | Omregn Knob til Kilometer i Timen Online"
const DESCRIPTION =
  "Omregn knob til km/t på et øjeblik. 1 knob er 1,852 km/t. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/knob-til-km-t",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/knob-til-km-t",
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

const KMH_PER_KNOT = 1.852
const COMMON_KNOT_VALUES = [
  1, 2, 3, 5, 6, 8, 10, 12, 15, 17.4, 18, 20, 25, 30, 35, 40, 45, 50, 60, 70,
  90, 100,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man knob til km/t?",
    answer:
      "Formlen er km/t = knob × 1,852. Fx bliver 20 knob til km/t: 20 × 1,852 = 37,04 km/t.",
  },
  {
    question: "Hvad er en knob?",
    answer:
      "En knob (forkortet kn eller kt) er en hastighedsenhed, der bruges til søs og i luftfarten. En knob svarer til 1 sømil i timen, altså 1,852 km/t.",
  },
  {
    question: "Hvorfor svarer 1 knob til præcis 1,852 km/t?",
    answer:
      "En sømil er defineret som 1.852 meter, valgt så den svarer til et bueminut langs en storcirkel om jorden. En knob er farten, hvor man tilbagelægger en sømil på en time, altså 1.852 meter i timen eller 1,852 km/t.",
  },
  {
    question: "Hvor kommer ordet knob fra?",
    answer:
      "Fra sejlskibstiden, hvor farten blev målt med en logline med knuder. Man talte, hvor mange knuder der løb ud over hækken på et halvt minut, og det tal var skibets fart i knob.",
  },
  {
    question: "Hvor hurtigt er 20 knob i praksis?",
    answer:
      "20 knob svarer til ca. 37 km/t, altså cirka bytrafik-tempo. Det er den fart, en almindelig motorbåd holder, når den er kommet op at plane.",
  },
  {
    question: "Hvad er forskellen på knob og mph?",
    answer:
      "Mph er miles i timen, hvor 1 mile er 1,609 km. Knob er sømil i timen, hvor 1 sømil er 1,852 km. 1 knob svarer derfor til 1,151 mph.",
  },
  {
    question: "Hvordan omregner jeg knob til m/s?",
    answer:
      "Gang antallet af knob med ca. 0,514. Fx bliver 10 knob til cirka 5,1 m/s. Det svarer til at gange med 1,852 og dele med 3,6.",
  },
  {
    question: "Hvornår bliver vind til orkan målt i knob?",
    answer:
      "Fra 64 knob og opefter. Det er Beaufort 12 og svarer til ca. 118 km/t eller 32,7 m/s. Stormende kuling begynder ved 34 knob.",
  },
  {
    question: "Hedder det knob eller knob i timen?",
    answer:
      "Det hedder bare knob. En knob er allerede en hastighed, nemlig en sømil i timen, så at sige knob i timen er en tautologi.",
  },
  {
    question: "Bruges knob også om vind?",
    answer:
      "Ja. I luftfart og i søvejrudsigter angives vindhastighed i knob. Danske landudsigter bruger derimod m/s.",
  },
]

const CONVERT_STEPS = [
  { title: "Find knob-tal", sub: "Fx 20 knob" },
  { title: "Gang med 1,852", sub: "20 × 1,852" },
  { title: "Læs km/t", sub: "= 37,04 km/t" },
]

const RELATED_CONVERTERS = [
  { href: "/hastighed/km-t-til-knob", label: "Km/t til knob" },
  { href: "/hastighed/km-t-til-ms", label: "Km/t til m/s" },
  { href: "/hastighed/ms-til-km-t", label: "M/s til km/t" },
  { href: "/hastighed/km-t-til-mph", label: "Km/t til mph" },
  { href: "/hastighed/mph-til-km-t", label: "Mph til km/t" },
]

function formatKmh(knots: number) {
  return (knots * KMH_PER_KNOT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KnobTilKmTPage() {
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
              Knob til Km/t Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              1 knob er en sømil i timen, hvilket svarer til 1,852 km/t.
              Enheden bruges til skibsfart, luftfart og vind, fordi en sømil
              hænger sammen med bredde- og længdegrader og gør navigation
              efter søkort enkel. Brug vores knob til km/t omregner til at
              skifte mellem enhederne på et øjeblik, eller find den ønskede
              værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KnotKmhConverter title="Knob til km/t" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om knob og km/t</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                kn
              </span>
              <h3 className="mb-1.5 font-semibold">Om knob</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Knob er en hastighedsenhed, der betyder en sømil i timen.
                Enheden har rødder i sejlskibstiden, hvor besætningen målte
                farten ved at kaste en logline ud over hækken. Linen havde
                knuder med jævne mellemrum, og ved at tælle hvor mange knuder
                der løb ud i løbet af et bestemt tidsrum, kunne man aflæse
                skibets fart. Metoden gav enheden navn. I dag bruges knob
                stadig som international standard i skibsfart og luftfart,
                blandt andet fordi en sømil hænger direkte sammen med et
                bueminut på jordkloden, hvilket gør navigation efter søkort
                og længde- og breddegrader enkel. Vindhastighed til søs og i
                cockpittet angives også i knob.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                km/t
              </span>
              <h3 className="mb-1.5 font-semibold">Om kilometer i timen</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kilometer i timen er den hastighedsenhed, de fleste møder i
                hverdagen. Fartgrænser, speedometre, løbe- og cykelapps og
                togtabeller regner alle i km/t. Enheden bygger på kilometeren
                (1.000 meter) og timen (3.600 sekunder) og er let at bruge på
                land, hvor afstande måles langs veje. Når man omregner fra
                knob til km/t, ganger man altid med den faste faktor 1,852,
                fordi forholdet mellem en sømil og en kilometer er det samme
                uanset farten. En tommelfingerregel er, at km/t-tallet er
                knob-tallet plus lidt under det halve.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du knob til km/t
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: km/t = knob × 1,852
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
            Forestil dig, at du er på færgetur, og skærmen i salonen viser,
            at skibet gør 22 knob. Du vil gerne vide, hvad det svarer til i
            den fart, du kender fra motorvejen. Du ganger med 1,852: 22 ×
            1,852 = 40,74 km/t. Færgen bevæger sig altså i omtrent samme
            tempo som en bil i byzone. Vil du regne den anden vej, fordi
            vejrudsigten lover 15 knobs vind, ganger du igen med 1,852 og
            får ca. 27,8 km/t, hvilket svarer til en frisk kuling.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Knob til km/t tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_KNOT_VALUES.map((knots) => (
              <li
                key={knots}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatKmh(knots)} km/t
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {knots} knob
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om knob og km/t
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
