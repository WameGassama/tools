import type { Metadata } from "next"

import { PercentageCalculator } from "@/src/components/calculator/percentage-calculator"
import { Formulas } from "@/src/components/site/formulas"
import { Hero } from "@/src/components/site/hero"
import { HvordanFinderManProcentSection } from "@/src/components/site/hvordan-finder-man-procent-section"
import { NavBar } from "@/src/components/site/nav-bar"
import { OtherCalculators } from "@/src/components/site/other-calculators"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.procentafettal.dk"
const PAGE_URL = `${SITE_URL}/procentregning`
const TITLE = "Procentregning – Beregn Procent På Flere Måder"
const DESCRIPTION =
  "Procentregning gjort nemt med vores beregner. Beregn procent, procent af et tal og procentvis ændring hurtigt og nemt med vores gratis værktøj."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "procentregning",
    "procentregner",
    "beregn procent",
    "procent regning",
    "regn procent",
    "procent regneregler",
    "hvor mange procent udgør et tal af et andet",
    "hvor mange procent er x af y",
    "hvordan finder man procent",
  ],
  alternates: {
    canonical: "/procentregning",
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

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Procentregner.dk",
  url: PAGE_URL,
  description: DESCRIPTION,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "DKK",
  },
  inLanguage: "da-DK",
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export default function ProcentregningPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(appJsonLd) }}
      />
      <NavBar />
      <Hero />
      <section
        id="calc"
        className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-8"
      >
        <PercentageCalculator />
      </section>
      <HvordanFinderManProcentSection />
      <Formulas />
      <OtherCalculators currentPath="/procentregning" />
      <SiteFooter />
    </div>
  )
}
