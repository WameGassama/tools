import type { Metadata } from "next"

import { PercentageCalculator } from "@/src/components/calculator/percentage-calculator"
import { NavBar } from "@/src/components/site/nav-bar"
import { OtherCalculators } from "@/src/components/site/other-calculators"
import { ProcentvisAfvigelseHowTo } from "@/src/components/site/procentvis-afvigelse-howto"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.procentafettal.dk"
const PAGE_URL = `${SITE_URL}/procentvis-afvigelse`
const TITLE = "Procentvis Afvigelse – Beregn Afvigelse I Procent"
const DESCRIPTION =
  "Procentvis afvigelse gjort nemt. Brug vores beregner til at beregne den procentvise afvigelse mellem to tal og se, hvordan du beregner den trin for trin."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "procentvis afvigelse",
    "afvigelse i procent",
    "procent afvigelse",
    "beregn afvigelse i procent",
    "procentvis afvigelse formel",
  ],
  alternates: {
    canonical: "/procentvis-afvigelse",
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

export default function ProcentvisAfvigelsePage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section
        id="calc"
        className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-8"
      >
        <h1 className="mb-2.5 text-[26px] leading-[1.15] font-extrabold text-balance wrap-break-word sm:text-[38px]">
          Procentvis afvigelse
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Procentvis afvigelse viser, hvor meget en faktisk værdi afviger fra en
          forventet eller budgetteret værdi, fx forskellen mellem budget og
          forbrug eller mellem en målt værdi og en forventet værdi. Formlen er
          ((Faktisk − Forventet) ÷ Forventet) × 100, hvor et negativt resultat
          betyder, at den faktiske værdi er lavere end forventet.
        </p>
        <PercentageCalculator lockedMode="change" />
      </section>
      <ProcentvisAfvigelseHowTo />
      <OtherCalculators currentPath="/procentvis-afvigelse" />
      <SiteFooter />
    </div>
  )
}
