import type { Metadata } from "next"
import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Flash, Html, MonitorMobile, RefreshArrow2, ShieldSecurity } from "@workspace/ui/icons"

import { CalculatorEmbedPicker } from "@/src/components/site/calculator-embed-picker"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/del-beregner`
const TITLE = "Del Eller Indlejr En Gennemsnitsberegner På Din Hjemmeside"
const DESCRIPTION =
  "Indlejr en gratis karaktergennemsnitsberegner på din hjemmeside med et par linjer kode. Ingen tilmelding, ingen tracking, tilpasser højden automatisk."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/del-beregner",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Gennemsnitsberegner.dk",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const STEPS = [
  {
    number: "01",
    title: "Vælg din beregner",
    description:
      "Find den beregner, der passer til din uddannelse – fra STX til folkeskolens afgangseksamen.",
  },
  {
    number: "02",
    title: "Kopiér koden",
    description: "Vi giver dig et lille kodestykke, klar til at indsætte hvor som helst.",
  },
  {
    number: "03",
    title: "Indsæt på din side",
    description: "WordPress, Webflow, Shopify, ren HTML: det er bare et stykke kode.",
  },
  {
    number: "04",
    title: "Færdig (auto-resize)",
    description: "Højden tilpasser sig selv, så der aldrig opstår scrollbars eller tomt felt.",
  },
]

const PLATFORMS = [
  {
    name: "WordPress",
    iconSrc: "/WordPress-icon.svg",
    description:
      "Tilføj en 'Custom HTML'-blok og indsæt koden. Klassisk editor: skift til 'Tekst'-fanen.",
  },
  {
    name: "Webflow",
    iconSrc: "/webflow-icon.svg",
    description: "Træk et 'Embed'-element ind på siden, indsæt koden og publicér.",
  },
  {
    name: "Shopify",
    iconSrc: "/shopify-icon.svg",
    description:
      "I tema-editoren: brug en 'Custom Liquid'- eller HTML-sektion og indsæt koden.",
  },
  {
    name: "Squarespace",
    iconSrc: "/squarespace-icon.svg",
    description: "Tilføj en 'Code Block', vælg HTML, og indsæt koden.",
  },
  {
    name: "Wix",
    iconSrc: "/wix-company-icon.svg",
    description: "Brug 'Indlejr kode → Indlejr HTML' (iframe-element) og indsæt koden.",
  },
  {
    name: "Ren HTML / blog",
    iconSrc: null,
    description: "Indsæt direkte i din side eller blogindlæg. Virker uden at ændre noget andet.",
  },
]

const FEATURES = [
  {
    title: "Lynhurtig",
    description: "Beregneren loader lazy og kører i sin egen iframe, uden at blokere din side.",
    icon: Flash,
  },
  {
    title: "Responsiv",
    description: "Tilpasser sig automatisk mobil, tablet og desktop. Højden justeres live.",
    icon: MonitorMobile,
  },
  {
    title: "Ingen tracking",
    description: "Ingen cookies, ingen reklamer, ingen tredjepartsscripts der følger dine brugere.",
    icon: ShieldSecurity,
  },
  {
    title: "Altid opdateret",
    description: "Forbedrer vi en formel, opdateres din indlejring automatisk. Du gør intet.",
    icon: RefreshArrow2,
  },
]

const FAQ_ITEMS = [
  {
    question: "Koster det noget?",
    answer:
      "Nej. Alle vores beregnere er gratis at indlejre, uden krav om tilmelding, abonnement eller kreditkort.",
  },
  {
    question: "Må jeg fjerne linket til gennemsnitsberegner.dk?",
    answer:
      "Nej, det lille \"Drevet af gennemsnitsberegner.dk\"-link under beregneren skal blive stående. Det er hele grunden til, at vi kan tilbyde indlejring gratis.",
  },
  {
    question: "Sætter I cookies eller tracker mine besøgende?",
    answer:
      "Nej. Den indlejrede beregner sætter ingen cookies og indeholder ingen analyse- eller trackingscripts.",
  },
  {
    question: "Tilpasser højden sig automatisk?",
    answer:
      "Ja. Et lille script i koden lytter efter beregnerens indholdshøjde og justerer iframens højde automatisk, så der hverken opstår scrollbars eller tomt felt.",
  },
  {
    question: "Virker det på mobil?",
    answer: "Ja, beregneren er fuldt responsiv og tilpasser sig automatisk mobil, tablet og desktop.",
  },
]

const faqJsonLd = {
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
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export default function DelBeregnerPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />

      <NavBar />

      <section className="mx-auto w-full max-w-5xl px-4 pt-8 pb-10 sm:px-6 sm:pt-12">
        <div className="relative overflow-hidden rounded-3xl bg-primary">
          {/* Millimeterpapir-mønster – et nik til beregner-temaet, ikke bare ren farve */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Én enkelt ring – rolig, ikke distraherende */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full border border-white/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full border border-white/10"
          />

          <div className="relative px-4 pt-10 pb-8 sm:px-10 sm:pt-14">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              Gratis · uden tilmelding · responsiv
            </div>
            <h1 className="mb-3 max-w-2xl text-balance break-words text-[24px] leading-[1.15] font-extrabold text-white sm:text-[44px]">
              Del en gennemsnitsberegner.{" "}
              <span className="text-indigo-200">På 30 sekunder.</span>
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-indigo-100/90 sm:text-base">
              Vælg en beregner, kopiér kodestumpen, og sæt den ind på din side.
              Den tilpasser højden selv, virker på mobil og desktop, og er
              altid gratis.
            </p>
          </div>

          <div className="relative px-4 pb-10 sm:px-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step) => (
                <div key={step.number} className="rounded-xl border bg-background p-5">
                  <div className="mb-3 text-2xl font-extrabold text-muted-foreground/40">
                    {step.number}
                  </div>
                  <div className="font-semibold">{step.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="calc" className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="mb-1 text-[19px] font-extrabold sm:text-[22px]">Prøv det med en rigtig beregner</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Vælg en beregner herunder. Du ser nøjagtigt den kode, du skal
          kopiere, og hvordan den ser ud, når den er indlejret.
        </p>
        <CalculatorEmbedPicker />
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="mb-6 text-[19px] font-extrabold sm:text-[22px]">
          Virker på alle platforme
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORMS.map((platform) => (
            <div key={platform.name} className="rounded-xl border bg-background p-5">
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg border bg-muted/30 p-1.5">
                {platform.iconSrc ? (
                  <Image
                    src={platform.iconSrc}
                    width={28}
                    height={28}
                    className="size-full object-contain"
                    alt=""
                  />
                ) : (
                  <Html className="size-5 text-muted-foreground" />
                )}
              </div>
              <div className="font-semibold">{platform.name}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="mb-6 text-[19px] font-extrabold sm:text-[22px]">
          Hvorfor indlejre vores beregnere?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-xl border bg-background px-5 py-7 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="size-6" />
              </div>
              <div className="font-semibold">{feature.title}</div>
              <p className="mx-auto mt-1 max-w-[26ch] text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="mb-1 text-[19px] font-extrabold sm:text-[22px]">Ofte stillede spørgsmål</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Det korte svar på det, folk spørger mest om.
        </p>
        <Card className="p-0">
          <CardContent className="p-0">
            <Accordion defaultValue={[]}>
              {FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="rounded-none px-5 py-4 text-[15px] font-semibold hover:bg-muted/40 sm:px-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-sm text-muted-foreground sm:px-6 sm:text-base">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </section>

      <SiteFooter />
    </div>
  )
}
