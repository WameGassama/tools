import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"

import { GymnasialCalculator } from "@/src/components/calculator/gymnasial-calculator"
import { NavBar } from "@/src/components/site/nav-bar"
import { RelatedCalculatorsSection } from "@/src/components/site/related-calculators-section"
import { SiteFooter } from "@/src/components/site/site-footer"
import { StxVaegtningForklaretSection } from "@/src/components/site/stx-vaegtning-forklaret-section"
import type { GymnasialRow } from "@/src/lib/gymnasial"
import {
  DEFAULT_STX_ROWS,
  STX_ROWS_COOKIE_NAME,
  STX_SUBJECT_LABELS,
  STX_SUBJECT_OPTIONS,
} from "@/src/lib/stx"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/stx-snit-beregner`
const TITLE = "STX Snit – Beregn Dit Karaktergennemsnit På STX"
const DESCRIPTION =
  "Gratis STX snit beregner. Vælg fag og niveau (A/B/C), indtast dine karakterer, og få dit niveauvægtede eksamensgennemsnit inkl. bonus for A-niveau-fag."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/stx-snit-beregner",
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

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "STX Snit Beregner",
  url: PAGE_URL,
  description: DESCRIPTION,
  applicationCategory: "EducationApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "DKK",
  },
  inLanguage: "da-DK",
}

const STX_FAQ_ITEMS = [
  {
    question: "Hvordan beregnes STX snit?",
    answer:
      "Hver karakter ganges med fagets niveauvægt (A = 2, B = 1,5, C = 1), summeres og divideres med summen af niveauvægtene. Har et fag flere karakterer (fx både standpunkt og eksamen, eller mundtlig og skriftlig), deles vægten ligeligt mellem dem. Har du mange fag på A-niveau, lægges der desuden en bonus oveni.",
  },
  {
    question: "Hvad er forskellen på standpunktskarakter og eksamenskarakter?",
    answer:
      "Standpunktskarakteren (årskarakteren) er den karakter, du får løbende i faget. Eksamenskarakteren får du, hvis du bliver udtrukket til eksamen i faget. Begge dele fremgår af dit eksamensbevis og tæller med i gennemsnittet, hvis de er givet – du skal derfor kun udfylde de felter, der gælder for dig.",
  },
  {
    question: "Hvad er bonus-A?",
    answer:
      "Har du 5 fag på A-niveau, ganges dit gennemsnit med 1,03. Har du 6 eller flere fag på A-niveau, ganges det med 1,06. Har du 4 eller færre, er der ingen bonus.",
  },
  {
    question: "Tæller studieretningsprojektet (SRP) med i gennemsnittet?",
    answer:
      "Ja, men med en fast vægt på 2 uanset niveau – ikke efter A/B/C-niveauvægten. SRP tæller heller ikke med som et af dine A-niveau-fag i bonus-A-reglen.",
  },
  {
    question: "Hvad betyder niveau A, B og C?",
    answer:
      "Niveauet angiver, hvor avanceret et fag er undervist på – C er det mest grundlæggende, og A det mest avancerede. Niveauet afgør også, hvor meget faget vejer i dit gennemsnit.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: STX_FAQ_ITEMS.map((item) => ({
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

export default async function StxPage() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(STX_ROWS_COOKIE_NAME)?.value

  let initialRows: GymnasialRow[] | undefined
  try {
    if (raw) {
      const parsed = JSON.parse(decodeURIComponent(raw))
      if (Array.isArray(parsed) && parsed.length > 0) initialRows = parsed
    }
  } catch {
    // corrupt/foreign cookie content, fall back to the default blank row
  }

  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />

      <NavBar />

      <section
        id="calc"
        className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-18"
      >
        <h1 className="mb-2.5 text-[26px] leading-[1.15] font-extrabold text-balance break-words sm:text-[38px]">
          Beregn dit STX snit
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Gratis beregner til dit STX-eksamensbevis, forudfyldt med de
          obligatoriske fag. Tilføj dine studieretningsfag, indtast dine
          standpunkts- og eksamenskarakterer, og få dit niveauvægtede gennemsnit
          – inklusive bonus for mange A-niveau-fag. Se også vores{" "}
          <Link
            href="/gennemsnit-gymnasium"
            className="underline underline-offset-2 hover:text-foreground"
          >
            oversigt over gennemsnit i gymnasiet
          </Link>
          .
        </p>

        <GymnasialCalculator
          initialRows={initialRows}
          defaultRows={DEFAULT_STX_ROWS}
          subjectOptions={STX_SUBJECT_OPTIONS}
          subjectLabels={STX_SUBJECT_LABELS}
          cookieName={STX_ROWS_COOKIE_NAME}
          resultLabel="Dit STX snit"
        />
      </section>

      <StxVaegtningForklaretSection />

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:pb-16">
        <h2 className="text-[26px] font-extrabold">
          Ofte stillede spørgsmål om STX snit
        </h2>
        <div className="mt-8 divide-y rounded-xl border bg-background">
          {STX_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-6 sm:p-8">
              <div className="font-semibold">{item.question}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RelatedCalculatorsSection currentSlug="stx" />

      <SiteFooter />
    </div>
  )
}
