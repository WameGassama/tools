import type { Metadata } from "next"
import { cookies } from "next/headers"

import { FolkeskoleCalculator } from "@/src/components/calculator/folkeskole-calculator"
import { FolkeskoleForklaretSection } from "@/src/components/site/folkeskole-forklaret-section"
import { NavBar } from "@/src/components/site/nav-bar"
import { RelatedCalculatorsSection } from "@/src/components/site/related-calculators-section"
import { SiteFooter } from "@/src/components/site/site-footer"
import {
  FOLKESKOLE_GRADES_COOKIE_NAME,
  type FolkeskoleRow,
} from "@/src/lib/folkeskole"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/folkeskole-karaktergennemsnit`
const TITLE =
  "Folkeskole Karaktergennemsnit – Beregn Dit Afgangseksamen-Gennemsnit (FP9)"
const DESCRIPTION =
  "Gratis beregner til dit folkeskole karaktergennemsnit (FP9). Indtast dine 9 karakterer, og få dit gennemsnit rundet ned til nærmeste hele tal."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/folkeskole-karaktergennemsnit",
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
  name: "Folkeskole Karaktergennemsnit Beregner",
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

const FOLKESKOLE_FAQ_ITEMS = [
  {
    question: "Hvordan beregnes folkeskole karaktergennemsnit?",
    answer:
      "Gennemsnittet er et simpelt gennemsnit af dine karakterer fra de 9 lovbundne prøver – ingen niveauer eller vægte, som man kender fra gymnasiet. Summen af dine karakterer divideres med antallet af prøver.",
  },
  {
    question: "Hvorfor rundes gennemsnittet ned?",
    answer:
      "Gennemsnittet af de lovbundne prøver rundes altid ned til nærmeste hele tal – aldrig op og aldrig til nærmeste. Et gennemsnit på 7,9 bliver derfor til 7.",
  },
  {
    question: "Hvilke 9 prøver indgår i afgangseksamen?",
    answer:
      "Praktisk/musisk valgfagsprøve (8. kl.), Dansk (mundtlig), Dansk – retskrivning, læsning og skriftlig fremstilling, Fællesprøve i naturfag, Matematik uden og med hjælpemidler, samt Udtræksprøven.",
  },
  {
    question: "Hvad er udtræksprøven?",
    answer:
      "Udtræksprøven er en mundtlig prøve i et fag, der udtrækkes tilfældigt blandt dine øvrige fag (fx engelsk, historie eller fysik/kemi). Indtast blot karakteren i feltet, uanset hvilket fag du blev trukket i.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FOLKESKOLE_FAQ_ITEMS.map((item) => ({
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

export default async function FolkeskolePage() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(FOLKESKOLE_GRADES_COOKIE_NAME)?.value

  let initialRows: FolkeskoleRow[] | undefined
  try {
    if (raw) {
      const parsed = JSON.parse(decodeURIComponent(raw))
      if (Array.isArray(parsed) && parsed.length > 0) initialRows = parsed
    }
  } catch {
    // corrupt/foreign cookie content, fall back to the default blank rows
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
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Beregn dit folkeskole karaktergennemsnit
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Gratis beregner til folkeskolens afgangseksamen (FP9), forudfyldt
          med de 9 lovbundne prøver. Tilføj eller fjern fag efter behov, og
          få dit gennemsnit – rundet ned til nærmeste hele tal.
        </p>

        <FolkeskoleCalculator initialRows={initialRows} />
      </section>

      <FolkeskoleForklaretSection />

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:pb-16">
        <h2 className="text-[26px] font-extrabold">
          Ofte stillede spørgsmål om folkeskole karaktergennemsnit
        </h2>
        <div className="mt-8 divide-y rounded-xl border bg-background">
          {FOLKESKOLE_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-6 sm:p-8">
              <div className="font-semibold">{item.question}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RelatedCalculatorsSection currentSlug="folkeskole" />

      <SiteFooter />
    </div>
  )
}
