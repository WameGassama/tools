import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Flash, Html, MonitorMobile, RefreshArrow2, ShieldSecurity } from "@workspace/ui/icons"

import { CalculatorEmbedPicker } from "@/src/components/site/calculator-embed-picker"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
})

const SITE_URL = "https://www.omregning.dk"
const PAGE_URL = `${SITE_URL}/del-omregner`
const TITLE = "Del Eller Indlejr En Omregner På Din Hjemmeside"
const DESCRIPTION =
  "Indlejr en gratis omregner på din hjemmeside med et par linjer kode. Ingen tilmelding, ingen tracking, tilpasser højden automatisk."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/del-omregner",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
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

const STEPS = [
  {
    number: "01",
    title: "Vælg en omregner",
    description: "De 7 kategorier på siden kan alle indlejres. Vælg den, dine besøgende har brug for.",
  },
  {
    number: "02",
    title: "Sæt din farve på",
    description: "Match omregnerens knapper og felter til dit eget design med ét klik.",
  },
  {
    number: "03",
    title: "Sæt koden ind",
    description: "Ét kodestykke, der virker i WordPress, Webflow, Shopify eller ren HTML.",
  },
  {
    number: "04",
    title: "Glem alt om vedligehold",
    description: "Højden retter sig selv til, og forbedringer ruller ud uden du løfter en finger.",
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
    title: "Holder siden hurtig",
    description: "Kører isoleret i sin egen iframe og loader først, når den er i syne.",
    icon: Flash,
  },
  {
    title: "Passer sig selv til",
    description: "Fra mobil til desktop følger bredde og højde automatisk med.",
    icon: MonitorMobile,
  },
  {
    title: "Sporer ingen",
    description: "Ingen cookies, ingen pixels, ingen data om dine besøgende sendes videre.",
    icon: ShieldSecurity,
  },
  {
    title: "Vedligeholder sig selv",
    description: "Retter vi en formel eller et design, opdateres alle indlejringer med det samme.",
    icon: RefreshArrow2,
  },
]

const FAQ_ITEMS = [
  {
    question: "Koster det noget?",
    answer:
      "Nej, det er gratis at indlejre enhver af vores omregnere. Der er ingen loft over antal visninger og intet abonnement.",
  },
  {
    question: "Skal krediteringslinket blive stående?",
    answer:
      "Ja. Den lille linje \"Omregner leveret af omregning.dk\" under omregneren er det, der gør det muligt for os at holde indlejring gratis, så den skal forblive synlig og uændret.",
  },
  {
    question: "Indsamler den indlejrede omregner data om mine besøgende?",
    answer: "Nej. Der sættes ingen cookies, og der køres ingen analyse- eller trackingscripts inde i iframen.",
  },
  {
    question: "Skal jeg selv styre højden på iframen?",
    answer:
      "Nej. Scriptet, der følger med koden, lytter efter omregnerens indhold og justerer iframens højde automatisk, så der hverken kommer scrollbars eller et tomt felt.",
  },
  {
    question: "Virker den på mobilsider?",
    answer: "Ja, layoutet er fuldt responsivt og tilpasser sig mobil, tablet og desktop uden ekstra opsætning.",
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

export default function DelOmregnerPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />

      <NavBar />

      <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-primary to-blue-700 px-6 py-10 text-primary-foreground shadow-2xl ring-1 shadow-primary/30 ring-white/10 sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
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

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-primary-foreground/85">
              Gratis · ingen cookies · auto-højde
            </div>
            <h1
              className={`${fraunces.className} max-w-xl text-balance break-words text-[30px] leading-[1.12] font-semibold sm:text-[44px]`}
            >
              Del en omregner. <span className="text-blue-100">På et øjeblik.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-primary-foreground/75 sm:text-base">
              Vælg en omregner, kopiér kodestumpen, og sæt den ind på din side.
              Ingen tilmelding, ingen cookies, ingen vedligehold.
            </p>
          </div>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.number} className="rounded-xl border bg-background p-5 text-foreground">
                <div className={`${fraunces.className} mb-2 text-2xl text-muted-foreground/40`}>
                  {step.number}
                </div>
                <div className="text-[14.5px] font-semibold">{step.title}</div>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calc" className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6">
        <h2 className="mb-1 text-[19px] font-extrabold sm:text-[22px]">Prøv det med en rigtig omregner</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Vælg en omregner herunder. Du ser nøjagtigt den kode, du skal
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
              <div className="mb-3 flex size-10 items-center justify-center rounded-full border bg-muted/30 p-1.5">
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
          Derfor er den værd at indlejre
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="rounded-xl border bg-background p-5">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </div>
              <div className="font-semibold">{feature.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
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
        <Accordion defaultValue={[]} className="grid items-start gap-3 sm:grid-cols-2">
          {FAQ_ITEMS.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="not-last:border-b-0 rounded-2xl border bg-background px-5 sm:px-6"
            >
              <AccordionTrigger className="py-4 text-[15px] font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <SiteFooter />
    </div>
  )
}
