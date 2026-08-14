import type { Metadata } from "next"

import { PercentageCalculator } from "@/src/components/calculator/percentage-calculator"
import { NavBar } from "@/src/components/site/nav-bar"
import { OtherCalculators } from "@/src/components/site/other-calculators"
import { SiteFooter } from "@/src/components/site/site-footer"
import { HowToCalculatePercentageIncrease } from "@/src/components/site/stigning-i-procent-howto"

const SITE_URL = "https://www.procentafettal.dk"
const PAGE_URL = `${SITE_URL}/stigning-i-procent`
const TITLE = "Stigning I Procent – Beregn Procentvis Stigning"
const DESCRIPTION =
  "Beregn stigning i procent nemt med vores beregner. Se, hvor mange procent et tal er steget, og lær at beregne procentvis stigning trin for trin."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "stigning i procent",
    "procentvis stigning",
    "procentstigning",
    "beregn stigning i procent",
    "procent stigning formel",
    "prisstigning i procent",
    "hvordan regner man procent stigning",
  ],
  alternates: {
    canonical: "/stigning-i-procent",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
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

export default function StigningIProcentPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section
        id="calc"
        className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-8"
      >
        <h1 className="mb-2.5 text-[26px] leading-[1.15] font-extrabold text-balance wrap-break-word sm:text-[38px]">
          Stigning i procent
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Stigning i procent (også kaldet procentvis stigning eller
          procentstigning) viser, hvor meget en værdi er vokset i forhold til
          udgangspunktet, fx en prisstigning, lønstigning eller ændring i en
          måling. Formlen er ((Til − Fra) ÷ Fra) × 100, hvor et negativt
          resultat betyder et fald i stedet for en stigning.
        </p>
        <PercentageCalculator lockedMode="change" />
      </section>
      <HowToCalculatePercentageIncrease />
      <OtherCalculators currentPath="/stigning-i-procent" />
      <SiteFooter />
    </div>
  )
}
