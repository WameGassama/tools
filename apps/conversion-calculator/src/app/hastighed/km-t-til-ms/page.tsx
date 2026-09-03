import type { Metadata } from "next"
import Link from "next/link"

import { KmtMsConverter } from "@/src/components/site/kmt-ms-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE =
  "Km/t til M/s Omregner | Omregn Kilometer i Timen til Meter i Sekundet"
const DESCRIPTION =
  "Omregn km/t til m/s på et øjeblik. Du deler med 3,6. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/km-t-til-ms",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/km-t-til-ms",
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

const MS_PER_KMT = 1 / 3.6
const COMMON_KMT_VALUES = [
  5, 10, 15, 18, 20, 25, 30, 36, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man km/t til m/s?",
    answer:
      "Formlen er m/s = km/t ÷ 3,6. Fx bliver 100 km/t til m/s: 100 ÷ 3,6 ≈ 27,78 m/s.",
  },
  {
    question: "Hvorfor deler man med 3,6?",
    answer:
      "1 km/t er 1.000 meter fordelt på 3.600 sekunder. 1.000 ÷ 3.600 er det samme som 1 ÷ 3,6, så man deler med 3,6 for at gå fra km/t til m/s og ganger med 3,6 for at gå den anden vej.",
  },
  {
    question: "Er 36 km/t præcis 10 m/s?",
    answer:
      "Ja. 36 ÷ 3,6 = 10, så 36 km/t er nøjagtig 10 m/s. Det er et nyttigt holdepunkt: 72 km/t er 20 m/s, og 18 km/t er 5 m/s.",
  },
  {
    question: "Findes der en hurtig hovedregningsmetode?",
    answer:
      "Ja. Del km/t-tallet med 4 og læg cirka en tiendedel til resultatet. Fx: 100 ÷ 4 = 25, plus 2,5 giver 27,5, tæt på de rigtige 27,78 m/s.",
  },
  {
    question: "Hvad er 50 km/t i m/s?",
    answer:
      "50 km/t svarer til ca. 13,9 m/s. 30 km/t er ca. 8,3 m/s, og 80 km/t er ca. 22,2 m/s.",
  },
  {
    question: "Hvor bruges omregningen fra km/t til m/s?",
    answer:
      "Især i fysik og i vejrmeldinger. Bevægelsesligninger regner i m/s, og danske vindhastigheder oplyses i m/s, mens fartgrænser og speedometre bruger km/t.",
  },
  {
    question: "Hvad er lydens hastighed i km/t og m/s?",
    answer:
      "Lydens hastighed i luft ved havoverfladen er ca. 343 m/s, hvilket svarer til ca. 1.235 km/t.",
  },
  {
    question: "Hvordan regner jeg m/s tilbage til km/t?",
    answer:
      "Gang tallet i m/s med 3,6. Fx bliver 10 m/s til 36 km/t, og 25 m/s til 90 km/t.",
  },
  {
    question: "Hvad er forskellen på km/t og m/s?",
    answer:
      "Begge måler hastighed, men km/t bruger kilometer og timer, mens m/s bruger meter og sekunder. Et tal i km/t er 3,6 gange større end det samme tal i m/s.",
  },
]

const CONVERT_STEPS = [
  { title: "Find km/t-tal", sub: "Fx 100 km/t" },
  { title: "Del med 3,6", sub: "100 ÷ 3,6" },
  { title: "Læs m/s", sub: "≈ 27,78 m/s" },
]

const RELATED_CONVERTERS = [
  { href: "/hastighed/ms-til-km-t", label: "M/s til km/t" },
  { href: "/hastighed/km-t-til-mph", label: "Km/t til mph" },
  { href: "/hastighed/mph-til-km-t", label: "Mph til km/t" },
  { href: "/hastighed/knob-til-km-t", label: "Knob til km/t" },
  { href: "/hastighed/km-t-til-knob", label: "Km/t til knob" },
]

function formatMs(kmt: number) {
  return (kmt * MS_PER_KMT).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function KmTTilMsPage() {
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
              Km/t til M/s Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              For at omregne km/t til m/s deler du med 3,6, fordi en time er
              3.600 sekunder og en kilometer er 1.000 meter. Km/t er den fart,
              vi kender fra fartgrænser og speedometre, mens m/s er den enhed,
              fysik og danske vindudsigter regner i. Brug vores km/t til m/s
              omregner til at skifte mellem enhederne på et øjeblik, eller
              find den ønskede værdi i tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KmtMsConverter title="Km/t til m/s" />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om km/t og m/s</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                km/t
              </span>
              <h3 className="mb-1.5 font-semibold">Om kilometer i timen</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Kilometer i timen er den hastighedsenhed, danskerne bruger i
                trafikken. Fartgrænser, bilers speedometre, cykelcomputere og
                køreplaner for tog og bus regner alle i km/t. Enheden passer
                godt til land, hvor afstande måles i kilometer langs veje, og
                hvor en time er et naturligt tidsrum at forholde sig til.
                Ulempen er, at km/t ikke passer direkte ind i fysikkens
                formler, som er bygget op om meter og sekunder. Derfor skal
                man ofte omregne til m/s, når man laver beregninger for fald,
                bremselængde, energi eller bevægelsesmængde.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                m/s
              </span>
              <h3 className="mb-1.5 font-semibold">Om meter i sekundet</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Meter i sekundet er SI-systemets grundenhed for hastighed og
                den, videnskab og teknik regner i. Fordi både længde og tid
                er i grundenheder, kan m/s sættes direkte ind i formler uden
                omregningsfaktorer. I Danmark oplyses vindhastighed altid i
                m/s, og DMI beskriver fx en frisk vind som 8 til 10,7 m/s.
                Forholdet til km/t er fast: du deler med 3,6 for at gå fra
                km/t til m/s, og et godt holdepunkt er, at 36 km/t er præcis
                10 m/s.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du km/t til m/s
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: m/s = km/t ÷ 3,6
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
            Forestil dig, at du skal regne bremselængde i en fysikopgave. En
            bil kører 90 km/t, og du skal bruge farten i m/s, før du kan
            sætte den ind i formlen. Du deler med 3,6: 90 ÷ 3,6 = 25 m/s.
            Kører bilen i stedet 54 km/t, bliver det 15 m/s. Fordi 36 km/t
            svarer til nøjagtig 10 m/s, kan du hurtigt tjekke: 90 km/t er 2,5
            gange 36, altså 2,5 gange 10 = 25 m/s. Samme metode bruges, når
            en vindhastighed i en udenlandsk vejrudsigt er angivet i km/t, og
            du vil sammenligne med den danske skala i m/s.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Km/t til m/s tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-6">
            {COMMON_KMT_VALUES.map((kmt) => (
              <li
                key={kmt}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatMs(kmt)} m/s
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {kmt} km/t
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om km/t og m/s
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
