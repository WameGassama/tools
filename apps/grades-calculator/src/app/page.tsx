import { cookies } from "next/headers"

import { GradeCalculator } from "@/src/components/calculator/grade-calculator"
import { EctsForklaretSection } from "@/src/components/site/ects-forklaret-section"
import { GennemsnitUddannelserSection } from "@/src/components/site/gennemsnit-uddannelser-section"
import { NavBar } from "@/src/components/site/nav-bar"
import { RelatedCalculatorsSection } from "@/src/components/site/related-calculators-section"
import { SiteFooter } from "@/src/components/site/site-footer"
import { TopBanner } from "@/src/components/site/top-banner"
import { VaegtetGennemsnitHowTo } from "@/src/components/site/vaegtet-gennemsnit-howto"
import { GRADES_COOKIE_NAME, type GradeRow } from "@/src/lib/grades"

const SITE_URL = "https://www.gennemsnitsberegner.dk"

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gennemsnitsberegner.dk",
  url: SITE_URL,
  description:
    "Gratis gennemsnitsberegner til den danske 7-trinsskala. Beregn dit vægtede karaktergennemsnit ud fra ECTS-point.",
  applicationCategory: "EducationApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "DKK",
  },
  inLanguage: "da-DK",
}

export default async function Home() {
  const cookieStore = await cookies()
  const raw = cookieStore.get(GRADES_COOKIE_NAME)?.value

  let initialRows: GradeRow[] | undefined
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />

      <NavBar />
      {/* <TopBanner /> */}

      <section
        id="calc"
        className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-18"
      >
        <h1 className="mb-2.5 text-balance break-words text-[21px] leading-[1.15] font-extrabold sm:text-[38px]">
          Beregn dit karaktergennemsnit
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Danmarks gratis gennemsnitsberegner til den danske 7-trinsskala.
          Indtast dine fag, karakterer og ECTS-point, og få dit vægtede
          gennemsnit på få sekunder.
        </p>

        <GradeCalculator initialRows={initialRows} />
      </section>

      <VaegtetGennemsnitHowTo />
      <EctsForklaretSection />
      <GennemsnitUddannelserSection />
      <RelatedCalculatorsSection currentSlug="ects" />
      <SiteFooter />
    </div>
  )
}
