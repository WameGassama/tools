import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"

import {
  GymnasialCalculator,
  type GradeFieldConfig,
} from "@/src/components/calculator/gymnasial-calculator"
import { Hf2AarigtVaegtningForklaretSection } from "@/src/components/site/hf-2aarigt-vaegtning-forklaret-section"
import { NavBar } from "@/src/components/site/nav-bar"
import { RelatedCalculatorsSection } from "@/src/components/site/related-calculators-section"
import { SiteFooter } from "@/src/components/site/site-footer"
import type { GymnasialRow } from "@/src/lib/gymnasial"
import {
  DEFAULT_HF_2AARIGT_ROWS,
  HF_2AARIGT_BONUS_THRESHOLDS,
  HF_2AARIGT_ROWS_COOKIE_NAME,
  HF_2AARIGT_SUBJECT_LABELS,
  HF_2AARIGT_SUBJECT_OPTIONS,
} from "@/src/lib/hf-2aarigt"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/hf-gennemsnit`
const TITLE = "HF Gennemsnit (2-årigt) – Beregn Dit Karaktergennemsnit På HF"
const DESCRIPTION =
  "Gratis HF gennemsnit beregner (2-årigt). Vælg fag og niveau (A/B/C), indtast karakterer, og få dit niveauvægtede gennemsnit inkl. bonus for A-niveau-fag."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hf-gennemsnit",
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
  name: "HF Gennemsnit Beregner (2-årigt)",
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

const HF_2AARIGT_FAQ_ITEMS = [
  {
    question: "Hvordan beregnes gennemsnittet for 2-årigt HF?",
    answer:
      "Hver karakter ganges med fagets niveauvægt (A = 2, B = 1,5, C = 1), summeres og divideres med summen af niveauvægtene. Har et fag både en mundtlig/intern og en skriftlig/ekstern karakter, deles vægten ligeligt mellem dem. Har du flere end 1 fag på A-niveau, lægges der desuden en bonus oveni.",
  },
  {
    question:
      "Hvorfor udløses bonus-A allerede ved 2 fag på 2-årigt HF, når det kræver 5 på STX?",
    answer:
      "Fordi Dansk A er dit eneste obligatoriske A-niveau-fag på HF (mod 4 obligatoriske A-fag på STX/HHX/HTX). Bonussen gives for A-niveau-fag ud over baseline, så på HF udløses den allerede ved det 2. A-fag (×1,03) og det 3. (×1,06).",
  },
  {
    question: "Hvad er KS og NF?",
    answer:
      "KS (Kultur- og samfundsfaggruppen) og NF (Naturvidenskabelig faggruppe) er samlede fag på HF. Bliver du udtrukket i fx historie, religion eller samfundsfag, indtastes karakteren som en ekstern eksamenskarakter ved KS. Bliver du udtrukket i biologi, geografi eller kemi, indtastes den ved NF.",
  },
  {
    question:
      "Hvad er forskellen på 'Mundtlig/Intern' og 'Skriftlig/Ekstern'?",
    answer:
      "Det er blot HF's betegnelser for opnået eksamenskarakter: mundtlige prøver bedømmes typisk internt af egen lærer og censor, mens skriftlige prøver bedømmes eksternt (centralt stillet og rettet). Der findes ingen løbende standpunktskarakter på samme måde som på STX/HHX/HTX.",
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
  mainEntity: HF_2AARIGT_FAQ_ITEMS.map((item) => ({
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

const HF_2AARIGT_GRADE_FIELDS: GradeFieldConfig[] = [
  { key: "eksamenMundtlig", label: "Mundtlig/Intern" },
  { key: "eksamenSkriftlig", label: "Skriftlig/Ekstern" },
]

export default async function Hf2AarigtPage() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(HF_2AARIGT_ROWS_COOKIE_NAME)?.value

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
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Beregn dit HF gennemsnit (2-årigt)
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Gratis beregner til dit HF-eksamensbevis, forudfyldt med de
          obligatoriske fag. Tilføj dine valgfag, indtast dine opnåede
          eksamenskarakterer, og få dit niveauvægtede gennemsnit –
          inklusive bonus for A-niveau-fag. Se også vores{" "}
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
          defaultRows={DEFAULT_HF_2AARIGT_ROWS}
          subjectOptions={HF_2AARIGT_SUBJECT_OPTIONS}
          subjectLabels={HF_2AARIGT_SUBJECT_LABELS}
          cookieName={HF_2AARIGT_ROWS_COOKIE_NAME}
          resultLabel="Dit HF gennemsnit"
          gradeFields={HF_2AARIGT_GRADE_FIELDS}
          bonusThresholds={HF_2AARIGT_BONUS_THRESHOLDS}
        />
      </section>

      <Hf2AarigtVaegtningForklaretSection />

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:pb-16">
        <h2 className="text-[26px] font-extrabold">
          Ofte stillede spørgsmål om HF gennemsnit
        </h2>
        <div className="mt-8 divide-y rounded-xl border bg-background">
          {HF_2AARIGT_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-6 sm:p-8">
              <div className="font-semibold">{item.question}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <RelatedCalculatorsSection currentSlug="hf-2aarigt" />

      <SiteFooter />
    </div>
  )
}
