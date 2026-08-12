import { SalaryCalculator } from "@/src/components/calculator/salary-calculator";
import { Faq } from "@/src/components/site/faq";
import { Hero } from "@/src/components/site/hero";
import { HowItWorks } from "@/src/components/site/how-it-works";
import { NavBar } from "@/src/components/site/nav-bar";
import { SiteFooter } from "@/src/components/site/site-footer";
import { translations } from "@/src/lib/i18n/translations";

const SITE_URL = "https://www.hvadfårjegudbetalt.dk";

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Hvad får jeg udbetalt",
  url: SITE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "DKK",
  },
  description:
    "Beregn din nettoløn efter AM-bidrag, bund-, mellem-, top- og kommuneskat med de gældende 2026-satser.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: translations.da.faq.items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(webApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />
      <NavBar />
      <main className="mx-auto w-full max-w-5xl px-4">
        <div className="flex flex-col bg-background p-4 py-8 sm:p-8 lg:p-12 rounded-xl mt-10 border border-border">
          <Hero />
          <SalaryCalculator />
        </div>
        <HowItWorks />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
