import type { Metadata } from "next"

import { PercentageCalculator } from "@/src/components/calculator/percentage-calculator"
import { AndelAfTotalSection } from "@/src/components/site/andel-af-total-section"
import {
  COMMON_PERCENTAGES,
  CommonPercentagesSection,
} from "@/src/components/site/common-percentages-section"
import { LaegProcentTilHowTo } from "@/src/components/site/laeg-procent-til-howto"
import { NavBar } from "@/src/components/site/nav-bar"
import { OtherCalculators } from "@/src/components/site/other-calculators"
import { HowToFindPercentOfNumber } from "@/src/components/site/procent-af-et-tal-howto"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.procentafettal.dk"
const TITLE = "Procent Af Et Tal – Beregn Procentdel Af Et Tal"
const DESCRIPTION =
  "Beregn procent af et tal nemt med vores beregner. Indtast dine tal og få resultatet med det samme, eller se formlen og eksempler på procent af et tal."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "procent",
    "procent af et tal",
    "udregn procent",
    "procentregner",
    "hvordan finder man procent af et tal",
    "hvordan lægger man procent til et tal",
    "hvordan finder man 1 % af et tal",
    "hvordan finder man 15 % af et tal",
    "hvordan finder man 20 % af et tal",
    "hvor mange procent udgør et tal af et andet",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Procentregner.dk",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COMMON_PERCENTAGES.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: `${item.shortcut} Fx ${item.example}.`,
    },
  })),
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />
      <NavBar />
      <section
        id="calc"
        className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-8"
      >
        <h1 className="mb-2.5 text-[26px] leading-[1.15] font-extrabold text-balance wrap-break-word sm:text-[38px]">
          Procent af et tal
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Procent af et tal fortæller, hvor meget en bestemt procentdel svarer
          til i faktiske tal, fx hvor mange kroner 15 % af 200 kr. er. Formlen
          er Resultat = Tal × (Procent ÷ 100): angiv tallet og procenten
          herunder, så beregner vi beløbet, som procentdelen svarer til, med det
          samme.
        </p>
        <PercentageCalculator lockedMode="of-number" />
      </section>
      <HowToFindPercentOfNumber />
      <LaegProcentTilHowTo />
      <CommonPercentagesSection />
      <AndelAfTotalSection />
      <OtherCalculators currentPath="/" />
      <SiteFooter />
    </div>
  )
}
