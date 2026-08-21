import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"

import { GymnasialCalculator } from "@/src/components/calculator/gymnasial-calculator"
import { EuxVaegtningForklaretSection } from "@/src/components/site/eux-vaegtning-forklaret-section"
import { NavBar } from "@/src/components/site/nav-bar"
import { RelatedCalculatorsSection } from "@/src/components/site/related-calculators-section"
import { SiteFooter } from "@/src/components/site/site-footer"
import {
  DEFAULT_EUX_ROWS,
  EUX_BONUS_THRESHOLDS,
  EUX_ROWS_COOKIE_NAME,
  EUX_SUBJECT_LABELS,
  EUX_SUBJECT_OPTIONS,
} from "@/src/lib/eux"
import type { GymnasialRow } from "@/src/lib/gymnasial"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/eux-gennemsnit`
const TITLE = "EUX Gennemsnit – Beregn Dit Karaktergennemsnit På EUX"
const DESCRIPTION =
  "Gratis EUX gennemsnit beregner. Vælg fag og niveau (A/B/C), indtast dine karakterer, og få dit niveauvægtede gennemsnit inkl. bonus for A-niveau-fag."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/eux-gennemsnit",
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
  name: "EUX Gennemsnit Beregner",
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

const EUX_FAQ_ITEMS = [
  {
    question: "Hvordan beregnes EUX gennemsnit?",
    answer:
      "Hver karakter ganges med fagets niveauvægt (A = 2, B = 1,5, C = 1), summeres og divideres med summen af niveauvægtene. Har et fag flere karakterer (fx både standpunkt og eksamen, eller mundtlig og skriftlig), deles vægten ligeligt mellem dem. Har du mange fag på A-niveau, lægges der desuden en bonus oveni.",
  },
  {
    question: "Hvorfor er der kun fire forudfyldte fag på EUX-beregneren?",
    answer:
      "Erhvervsområdeprojekt, Dansk, Engelsk og Samfundsfag går igen på tværs af stort set alle eux-forløb. Resten af din gymnasiale fagpakke (fx matematik, fysik eller erhvervsøkonomi) varierer mellem merkantil og teknisk eux, så de tilføjer du selv via \"Tilføj fag\".",
  },
  {
    question:
      "Hvad er forskellen på standpunktskarakter og eksamenskarakter?",
    answer:
      "Standpunktskarakteren (årskarakteren) er den karakter, du får løbende i faget. Eksamenskarakteren får du, hvis du bliver udtrukket til eksamen i faget. Begge dele fremgår af dit eksamensbevis og tæller med i gennemsnittet, hvis de er givet – du skal derfor kun udfylde de felter, der gælder for dig.",
  },
  {
    question: "Hvad er bonus-A?",
    answer:
      "På eux afhænger antallet af A-niveau-fag, der udløser bonus, af den enkelte erhvervsuddannelse – typisk 2 fag i alt (×1,03) og 3 eller flere (×1,06), samme princip som på 2-årigt HF. Erhvervsområdeprojektet (EOP) tæller ikke med som et af dine A-niveau-fag her.",
  },
  {
    question: "Tæller erhvervsområdeprojektet (EOP) med i gennemsnittet?",
    answer:
      "Ja, men med en fast vægt på 2 uanset niveau – ikke efter A/B/C-niveauvægten. EOP tæller heller ikke med som et af dine A-niveau-fag i bonus-A-reglen.",
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
  mainEntity: EUX_FAQ_ITEMS.map((item) => ({
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

export default async function EuxPage() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(EUX_ROWS_COOKIE_NAME)?.value

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
        <h1 className="mb-2.5 text-balance break-words text-[21px] leading-[1.15] font-extrabold sm:text-[38px]">
          Beregn dit EUX gennemsnit
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Gratis beregner til dit EUX-eksamensbevis, forudfyldt med de fag
          der går igen på tværs af eux-forløb. Tilføj dine øvrige
          gymnasiale fag og niveauer, indtast dine standpunkts- og
          eksamenskarakterer, og få dit niveauvægtede gennemsnit –
          inklusive bonus for mange A-niveau-fag. Se også vores{" "}
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
          defaultRows={DEFAULT_EUX_ROWS}
          subjectOptions={EUX_SUBJECT_OPTIONS}
          subjectLabels={EUX_SUBJECT_LABELS}
          cookieName={EUX_ROWS_COOKIE_NAME}
          resultLabel="Dit EUX gennemsnit"
          bonusThresholds={EUX_BONUS_THRESHOLDS}
        />
      </section>

      <EuxVaegtningForklaretSection />

      <section className="mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6 sm:pb-16">
        <h2 className="text-[22px] font-extrabold sm:text-[26px]">
          Ofte stillede spørgsmål om EUX gennemsnit
        </h2>
        <div className="mt-8 divide-y rounded-xl border bg-background">
          {EUX_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-4 sm:p-8">
              <div className="font-semibold">{item.question}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RelatedCalculatorsSection currentSlug="eux" />

      <SiteFooter />
    </div>
  )
}
