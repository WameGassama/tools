import type { Metadata } from "next"
import Link from "next/link"

import { HeightConverter } from "@/src/components/site/height-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Højde Omregner | Fod og Tommer til Cm (Feet to Cm) Online"
const DESCRIPTION =
  "Omregn højde mellem fod og tommer og centimeter (feet to cm). Se tabeller med gængse højder, eller indtast din egen."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/laengde/hoejde-omregner",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde/hoejde-omregner",
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

const CM_PER_FOOT = 30.48
const CM_PER_INCH = 2.54

const COMMON_HEIGHTS = [
  { feet: 4, inches: 8 },
  { feet: 4, inches: 9 },
  { feet: 4, inches: 10 },
  { feet: 4, inches: 11 },
  { feet: 5, inches: 1 },
  { feet: 5, inches: 2 },
  { feet: 5, inches: 3 },
  { feet: 5, inches: 4 },
  { feet: 5, inches: 5 },
  { feet: 5, inches: 6 },
  { feet: 5, inches: 7 },
  { feet: 5, inches: 8 },
  { feet: 5, inches: 9 },
  { feet: 5, inches: 10 },
  { feet: 6, inches: 0 },
  { feet: 6, inches: 1 },
  { feet: 6, inches: 2 },
  { feet: 6, inches: 3 },
  { feet: 6, inches: 4 },
  { feet: 6, inches: 5 },
  { feet: 6, inches: 6 },
  { feet: 6, inches: 7 },
  { feet: 6, inches: 8 },
  { feet: 6, inches: 9 },
  { feet: 6, inches: 10 },
  { feet: 6, inches: 11 },
  { feet: 7, inches: 1 },
  { feet: 7, inches: 2 },
  { feet: 7, inches: 4 },
  { feet: 7, inches: 6 },
  { feet: 7, inches: 7 },
  { feet: 8, inches: 11 },
]

const WHOLE_FEET_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const COMMON_CM_VALUES = [150, 160, 170, 180, 190, 200, 204, 210]

function formatFeetInches(cm: number) {
  const totalInches = cm / CM_PER_INCH
  const wholeFeet = Math.floor(totalInches / 12)
  const remainingInches = Math.round(totalInches - wholeFeet * 12)
  return `${wholeFeet}'${remainingInches}"`
}

function formatCm(feet: number, inches: number) {
  return (feet * CM_PER_FOOT + inches * CM_PER_INCH).toLocaleString("da-DK", {
    maximumFractionDigits: 1,
  })
}

const CONVERT_STEPS = [
  { title: "Fod gange 30,48", sub: "5 × 30,48 = 152,4" },
  { title: "Tommer gange 2,54", sub: "10 × 2,54 = 25,4" },
  { title: "Læg sammen", sub: "= 177,8 cm" },
]

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man fod og tommer om til cm?",
    answer:
      "Formlen er cm = (fod × 30,48) + (tommer × 2,54). Fx bliver 5 fod 10 tommer til cm: (5 × 30,48) + (10 × 2,54) = 177,8 cm.",
  },
  {
    question: "Hvor høj er jeg i feet, hvis jeg kender min højde i cm?",
    answer:
      "Del din højde i cm med 2,54 for at få det samlede antal tommer, og del så det tal med 12 for at få hele fod. Resten er de tommer, der er tilbage. Fx bliver 178 cm til ca. 5 fod 10 tommer.",
  },
  {
    question: "Hvad er en tommer?",
    answer:
      'En tommer (på engelsk "inch") er en længdeenhed fra det amerikanske og britiske målesystem, hvor 12 tommer udgør 1 fod. 1 tommer svarer til præcis 2,54 cm.',
  },
  {
    question: "Hvor meget er en fod i cm?",
    answer:
      "1 fod (foot) svarer til præcis 30,48 cm. To fod er 60,96 cm, og tre fod er 91,44 cm.",
  },
  {
    question: "Hvad er 5 fod 7 i cm?",
    answer: "5 fod 7 tommer svarer til (5 × 30,48) + (7 × 2,54) = 170,18 cm.",
  },
  {
    question:
      "Hvad er den gennemsnitlige højde i fod for danske mænd og kvinder?",
    answer:
      "Danske mænd er i gennemsnit omkring 181 cm, altså cirka 5 fod 11 tommer, og danske kvinder omkring 168 cm, altså cirka 5 fod 6 tommer.",
  },
  {
    question: "Hvordan omregner jeg cm til feet og inches?",
    answer:
      'Del cm-tallet med 2,54 for at få det samlede antal tommer. Del så det tal med 12 for at få hele fod (feet), og resten er de tommer (inches), der er tilbage. Fx bliver 200 cm til ca. 6\'7".',
  },
  {
    question: 'Hvad betyder et højdemål som 6\'2 eller 6\'2"?',
    answer:
      'Notationen angiver fod og tommer: 6\'2" betyder 6 fod og 2 tommer, hvilket bruges i det amerikanske og britiske målesystem og svarer til cirka 188 cm.',
  },
  {
    question: "Kan jeg regne højden i ren decimalfod?",
    answer:
      "Ja. Del din højde i cm med 30,48. Fx bliver 178 cm til ca. 5,84 fod, hvilket svarer til 5 fod og 0,84 × 12 ≈ 10 tommer.",
  },
]

const RELATED_CONVERTERS = [
  { href: "/laengde/fod-til-meter", label: "Fod til meter" },
  { href: "/laengde/cm-til-tommer", label: "Cm til tommer" },
  { href: "/laengde/tommer-til-cm", label: "Tommer til cm" },
  { href: "/laengde/meter-til-fod", label: "Meter til fod" },
  { href: "/laengde/cm-til-m", label: "Cm til meter" },
]

export default function HoejdeOmregnerPage() {
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
              Højde Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Højde angives i fod og tommer i USA og Storbritannien, mens
              Danmark bruger centimeter. Formlen er cm = (fod × 30,48) +
              (tommer × 2,54), fordi en fod er 30,48 cm og en tomme er 2,54
              cm. Brug vores højde omregner til at skifte mellem fod og tommer
              og cm på et øjeblik, eller find en gængs højde i tabellerne
              herunder.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HeightConverter />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Om fod og tommer og centimeter
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <h3 className="mb-1.5 font-semibold">Om fod og tommer</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fod og tommer hører til det angelsaksiske målesystem, hvor 12
                tommer udgør en fod. En fod er præcis 30,48 cm, og en tomme er
                præcis 2,54 cm. En persons højde skrives som fod og tommer,
                fx 5 fod 9 tommer, ofte forkortet med en apostrof og et
                anførselstegn som 5&apos;9&quot;. Formatet bruges dagligt i USA og
                Storbritannien og optræder i pas, kørekort, sportsprofiler og
                film. For danskere er fod og tommer sjældent noget, man selv
                måler i, men det er nyttigt at kunne omregne, når man udfylder
                en engelsksproget formular eller sammenligner højder med
                udenlandske venner, atleter eller skuespillere.
              </p>
            </div>
            <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-3 inline-block rounded-lg bg-primary/10 px-2.5 py-1 font-mono text-xs font-semibold text-primary">
                cm
              </span>
              <h3 className="mb-1.5 font-semibold">Om centimeter</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Centimeter er den enhed, danskere bruger til at måle højde.
                Den er en hundrededel af en meter og indgår i det metriske
                system sammen med millimeter og meter, så man kan flytte
                kommaet i stedet for at gange. Hos lægen, til session og på
                målebåndet derhjemme opgives højde altid i hele centimeter.
                Når du omregner fra fod og tommer til cm, ganger du antallet
                af fod med 30,48 og antallet af tommer med 2,54 og lægger de
                to tal sammen. Den anden vej deler du cm-tallet med 2,54 for
                at få tommer i alt og derefter med 12 for at få hele fod.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-2 text-lg font-bold">
            Sådan omregner du fod og tommer til cm
          </h2>
          <p className="mb-5 font-mono text-sm text-muted-foreground">
            Formel: cm = (fod × 30,48) + (tommer × 2,54)
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
            Forestil dig, at du skal udfylde en amerikansk visumansøgning, der
            beder om din højde i fod og tommer, men du kender kun dine 183 cm.
            Du deler først med 2,54: 183 ÷ 2,54 ≈ 72 tommer i alt. Så deler du
            med 12: 72 ÷ 12 = 6 med 0 i rest, altså 6 fod 0 tommer. Var du 178
            cm, ville regnestykket give 70,1 tommer, altså 5 fod og cirka 10
            tommer. Samme metode virker den anden vej: kender du en
            basketballspiller som 6 fod 8 tommer, ganger du 6 × 30,48 og 8 ×
            2,54 og får 203,2 cm.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Højde tabel (fod og tommer til cm)
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_HEIGHTS.map(({ feet, inches }) => (
              <li
                key={`${feet}-${inches}`}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">
                  {feet} fod {inches} tommer
                </h3>
                <span className="text-muted-foreground">
                  = {formatCm(feet, inches)} cm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Fod til cm tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHOLE_FEET_VALUES.map((feet) => (
              <li
                key={feet}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{feet} fod til cm</h3>
                <span className="text-muted-foreground">
                  = {formatCm(feet, 0)} cm
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Cm til feet og inches tabel
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_CM_VALUES.map((cm) => (
              <li
                key={cm}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{cm} cm til feet</h3>
                <span className="text-muted-foreground">
                  = {formatFeetInches(cm)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om højde omregning
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
                Relateret omregner
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
