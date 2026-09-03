import type { Metadata } from "next"
import Link from "next/link"

import { InchCmConverter } from "@/src/components/site/inch-cm-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Cm til Tommer Omregner | Omregn Centimeter til Tommer (Inch)"
const DESCRIPTION =
  "Omregn cm til tommer (inch) på et øjeblik. 1 tomme er 2,54 cm. Indtast din værdi, eller brug tabellen med de mest søgte omregninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/cm-til-tommer",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/cm-til-tommer",
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

const INCH_PER_CM = 1 / 2.54
const COMMON_CM_VALUES = [
  1, 2, 5, 10, 12, 15, 20, 24, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100, 110,
  120, 140, 165, 180,
]

const FAQ_ITEMS = [
  {
    question: "Hvordan omregner man cm til tommer?",
    answer:
      "Formlen er tommer = cm ÷ 2,54. Fx bliver 30 cm til tommer: 30 ÷ 2,54 ≈ 11,81 tommer.",
  },
  {
    question: "Hvor mange tommer er en cm?",
    answer:
      "1 cm svarer til ca. 0,3937 tommer (inch). 10 cm er ca. 3,94 tommer, og 100 cm er ca. 39,37 tommer.",
  },
  {
    question: "Hvor mange cm er en tomme?",
    answer:
      "1 tomme er defineret som præcis 2,54 cm. 12 tommer udgør en fod, som er 30,48 cm.",
  },
  {
    question: "Hvad er en tomme (inch)?",
    answer:
      "En tomme er en længdeenhed fra det amerikanske og britiske system, hvor 12 tommer udgør en fod. Den bruges blandt andet til skærmstørrelser, cykel- og bildæk samt rørdimensioner.",
  },
  {
    question: 'Hvad betyder tegnet " efter et tal?',
    answer:
      'Dobbelt anførselstegn står for tommer, mens en enkelt apostrof står for fod. 32" betyder altså 32 tommer, og 6\'2" betyder 6 fod og 2 tommer.',
  },
  {
    question: "Hvor stor er en 55 tommer skærm i cm?",
    answer:
      "De 55 tommer er skærmens diagonal. 55 × 2,54 = 139,7 cm målt på tværs af diagonalen, mens selve billedets bredde er mindre.",
  },
  {
    question: "Findes der en hurtig hovedregningsmetode?",
    answer:
      "Ja. Del cm-tallet med 2,5 for et hurtigt overslag. 100 cm bliver dermed cirka 40 tommer, tæt på de præcise 39,37 tommer.",
  },
  {
    question: "Hvordan omregner jeg min højde fra cm til inches?",
    answer:
      'Del først din højde i cm med 2,54 for at få det samlede antal tommer, og del så med 12 for at få hele fod. Skal du bruge formatet fx 5\'7", kan du i stedet bruge vores højde omregner under Længde.',
  },
  {
    question: "Hvorfor bruger man 2,54 præcis?",
    answer:
      "Siden 1959 har en tomme været defineret som nøjagtig 2,54 cm ved international aftale, så omregningen altid giver samme resultat.",
  },
]

const CONVERT_STEPS = [
  { title: "Find cm-tal", sub: "Fx 30 cm" },
  { title: "Del med 2,54", sub: "30 ÷ 2,54" },
  { title: "Læs tommer", sub: "≈ 11,81 in" },
]

const RELATED_CONVERTERS = [
  { href: "/laengde/tommer-til-cm", label: "Tommer til cm" },
  { href: "/laengde/mm-til-tommer", label: "Mm til tommer" },
  { href: "/laengde/tommer-til-mm", label: "Tommer til mm" },
  { href: "/laengde/hoejde-omregner", label: "Højde omregner" },
  { href: "/laengde/fod-til-meter", label: "Fod til meter" },
]

function formatTommer(cm: number) {
  return (cm * INCH_PER_CM).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function CmTilTommerPage() {
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
              Cm til Tommer Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              En tomme (inch) svarer til præcis 2,54 cm, så for at omregne cm
              til tommer deler du med 2,54. Centimeter bruges til hverdag i
              Danmark, mens tommer bruges til skærmstørrelser, dæk, rør og
              amerikanske mål. Brug vores cm til tommer omregner til at skifte
              mellem enhederne på et øjeblik, eller find den ønskede værdi i
              tabellen herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <InchCmConverter title="Cm til tommer" reversed />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Om centimeter og tommer</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  cm
                </span>
                <h3 className="text-lg font-semibold">Centimeter</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centimeter er en længdeenhed i det metriske system og svarer
                til en hundrededel af en meter. Forstavelsen &quot;centi&quot;
                kommer af det latinske ord for hundrede. I Danmark er
                centimeter den enhed, de fleste bruger til at måle højde,
                møbler, tøjstørrelser, sår og alt andet i menneskestørrelse,
                og næsten alle lineraler og målebånd har cm som hovedinddeling
                med millimeter som underinddeling. Centimeter hænger direkte
                sammen med resten af det metriske system: der går 10
                millimeter på en centimeter og 100 centimeter på en meter,
                så man kan flytte kommaet i stedet for at gange.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="shrink-0 rounded-full border bg-background px-3 py-1 font-mono text-[13px] font-medium text-primary">
                  inch
                </span>
                <h3 className="text-lg font-semibold">Tommer</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Tommer, på engelsk inch, er en længdeenhed fra det
                angelsaksiske system, hvor 12 tommer udgør en fod. Navnet
                betød oprindeligt en tolvtedel og blev knyttet til bredden af
                en tommelfinger. Siden 1959 har en tomme været defineret som
                nøjagtig 2,54 cm. Selvom Danmark bruger det metriske system,
                støder vi hele tiden på tommer: tv- og computerskærme måles i
                tommer på diagonalen, cykel- og bildæk angiver fælgstørrelse i
                tommer, og vvs-rør, bolte og værktøj fra amerikanske
                producenter bruger tommemål. Derfor er det praktisk at kunne
                dele et cm-tal med 2,54 og få tommer.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan konverterer du cm til tommer
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: tommer = cm ÷ 2,54
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
            Forestil dig, at du vil købe en tv-plads i en reol, og hylderummet
            er 120 cm bredt. Skærme sælges efter diagonal i tommer, så du vil
            vide, hvor stort et tv der kan være. Du deler først bredden med
            2,54: 120 ÷ 2,54 ≈ 47,2 tommer i ren bredde. Da et fladt tv er
            bredere end det er højt, passer et 50 tommers tv, hvis diagonal er
            127 cm, typisk med en kabinetsbredde omkring 111 cm og går derfor
            fint ind i rummet. Samme metode bruges, når en byggevejledning
            oplyser et rørs diameter som 25 mm, og du skal finde det
            tilsvarende tommemål på cirka 1 tomme.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">Cm til tommer tabel</h2>
          <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {COMMON_CM_VALUES.map((cm) => (
              <li
                key={cm}
                className="rounded-xl border bg-background p-4 shadow-sm"
              >
                <p className="font-mono text-lg font-semibold text-primary">
                  {formatTommer(cm)} in
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cm} cm</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om cm og tommer
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
