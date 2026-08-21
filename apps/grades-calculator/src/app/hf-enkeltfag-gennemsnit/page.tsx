import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"

import {
  GymnasialCalculator,
  type GradeFieldConfig,
} from "@/src/components/calculator/gymnasial-calculator"
import { HfEnkeltfagVaegtningForklaretSection } from "@/src/components/site/hf-enkeltfag-vaegtning-forklaret-section"
import { NavBar } from "@/src/components/site/nav-bar"
import { RelatedCalculatorsSection } from "@/src/components/site/related-calculators-section"
import { SiteFooter } from "@/src/components/site/site-footer"
import type { GymnasialRow } from "@/src/lib/gymnasial"
import {
  DEFAULT_HF_ENKELTFAG_ROWS,
  HF_ENKELTFAG_BONUS_THRESHOLDS,
  HF_ENKELTFAG_ROWS_COOKIE_NAME,
  HF_ENKELTFAG_SUBJECT_LABELS,
  HF_ENKELTFAG_SUBJECT_OPTIONS,
} from "@/src/lib/hf-enkeltfag"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/hf-enkeltfag-gennemsnit`
const TITLE =
  "HF Enkeltfag Gennemsnit – Beregn Dit Karaktergennemsnit For Enkeltfag"
const DESCRIPTION =
  "Gratis beregner til dit HF enkeltfag gennemsnit. Vælg fag/niveau (A/B/C), indtast karakterer, og få dit gennemsnit inkl. bonus for A-niveau-fag."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hf-enkeltfag-gennemsnit",
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
  name: "HF Enkeltfag Gennemsnit Beregner",
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

const HF_ENKELTFAG_FAQ_ITEMS = [
  {
    question: "Hvordan beregnes HF enkeltfag gennemsnit?",
    answer:
      "Hver karakter ganges med fagets niveauvægt (A = 2, B = 1,5, C = 1), summeres og divideres med summen af niveauvægtene. Har et fag både en mundtlig/intern og en skriftlig/ekstern karakter, deles vægten ligeligt mellem dem. Har du mange fag på A-niveau, lægges der desuden en bonus oveni.",
  },
  {
    question:
      "Hvorfor er der ingen standpunktskarakter på HF enkeltfag?",
    answer:
      "Når du tager et fag som enkeltfag, følger du ikke et helt skoleår i faget – du går direkte til eksamen. Derfor får du kun en eksamenskarakter (mundtlig/intern og/eller skriftlig/ekstern), ikke en løbende standpunktskarakter.",
  },
  {
    question: "Hvad er bonus-A?",
    answer:
      "HF som enkeltfag har ingen bonus-A-ordning – reglen findes kun for STX, HHX, HTX, EUX og 2-årigt HF. Dit gennemsnit er derfor altid det niveauvægtede gennemsnit uden tillæg, uanset hvor mange fag du har på A-niveau.",
  },
  {
    question:
      "Tæller Større Skriftlig Opgave (SSO) og Eksamensprojektet med i gennemsnittet?",
    answer:
      "Ja, men begge har en fast vægt på 1,5 uanset niveau – ikke efter A/B/C-niveauvægten. De tæller heller ikke med som et af dine A-niveau-fag.",
  },
  {
    question: "Hvad hvis jeg har taget et fag på flere niveauer?",
    answer:
      "Kun karakteren på det højeste niveau, du har taget faget på, tæller med i gennemsnittet – indtast derfor kun den karakter, der gælder for det højeste niveau.",
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
  mainEntity: HF_ENKELTFAG_FAQ_ITEMS.map((item) => ({
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

const HF_ENKELTFAG_GRADE_FIELDS: GradeFieldConfig[] = [
  { key: "eksamenMundtlig", label: "Mundtlig/Intern" },
  { key: "eksamenSkriftlig", label: "Skriftlig/Ekstern" },
]

export default async function HfEnkeltfagPage() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(HF_ENKELTFAG_ROWS_COOKIE_NAME)?.value

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
          Beregn dit HF enkeltfag gennemsnit
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Gratis beregner til dig, der tager HF som enkeltfag. Forudfyldt
          med typiske enkeltfag – tilføj dine egne, indtast dine opnåede
          eksamenskarakterer, og få dit niveauvægtede gennemsnit – inklusive
          bonus for mange A-niveau-fag. Se også vores{" "}
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
          defaultRows={DEFAULT_HF_ENKELTFAG_ROWS}
          subjectOptions={HF_ENKELTFAG_SUBJECT_OPTIONS}
          subjectLabels={HF_ENKELTFAG_SUBJECT_LABELS}
          cookieName={HF_ENKELTFAG_ROWS_COOKIE_NAME}
          resultLabel="Dit HF enkeltfag gennemsnit"
          gradeFields={HF_ENKELTFAG_GRADE_FIELDS}
          bonusThresholds={HF_ENKELTFAG_BONUS_THRESHOLDS}
        />
      </section>

      <HfEnkeltfagVaegtningForklaretSection />

      <section className="mx-auto w-full max-w-3xl px-4 pb-12 sm:px-6 sm:pb-16">
        <h2 className="text-[22px] font-extrabold sm:text-[26px]">
          Ofte stillede spørgsmål om HF enkeltfag gennemsnit
        </h2>
        <div className="mt-8 divide-y rounded-xl border bg-background">
          {HF_ENKELTFAG_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-4 sm:p-8">
              <div className="font-semibold">{item.question}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RelatedCalculatorsSection currentSlug="hf-enkeltfag" />

      <SiteFooter />
    </div>
  )
}
