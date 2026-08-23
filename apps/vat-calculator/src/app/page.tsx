import { Faq } from "@/src/components/site/faq"
import { Hero } from "@/src/components/site/hero"
import { HowItWorks } from "@/src/components/site/how-it-works"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"
import { VatExplainer } from "@/src/components/site/vat-explainer"
import { VatCalculator } from "@/src/components/calculator/vat-calculator"
import { FAQ } from "@/src/lib/faq"

const SITE_URL = "https://www.moms-beregner.dk"

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "moms-beregner.dk",
  url: SITE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "DKK" },
  inLanguage: "da",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(webApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />
      <NavBar />
      <main className="mx-auto w-full max-w-[940px] px-5 pb-20">
        <Hero />
        <VatCalculator />
        <p className="mt-3.5 ml-0.5 text-sm text-muted-foreground">
          Beregningen er vejledende. Kontakt din revisor eller
          Skattestyrelsen for bindende svar.
        </p>
        <HowItWorks />
        <VatExplainer />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  )
}
