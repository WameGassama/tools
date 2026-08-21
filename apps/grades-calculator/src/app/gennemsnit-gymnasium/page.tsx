import type { Metadata } from "next"
import Link from "next/link"
import type { ComponentType, SVGProps } from "react"

import { Briefcase, Calendar, Glass, Monitor, RulerPen, Task } from "@workspace/ui/icons"

import { KilderSektion, Regelgrundlag } from "@/src/components/site/kilder-sektion"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"
import { EMBED_CALCULATORS } from "@/src/lib/embed-calculators"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/gennemsnit-gymnasium`
const TITLE = "Gennemsnit Gymnasium – Beregn Dit Karaktergennemsnit"
const DESCRIPTION =
  "Se hvordan dit karaktergennemsnit beregnes i gymnasiet, og find den rigtige beregner til STX, HHX, HTX, EUX eller HF. Gratis og niveauvægtet, med bonus-A."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/gennemsnit-gymnasium",
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

const GYMNASIUM_SLUGS = ["stx", "hhx", "htx", "eux", "hf-2aarigt", "hf-enkeltfag"]

const GYMNASIUM_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  stx: Glass,
  hhx: Briefcase,
  htx: Monitor,
  eux: RulerPen,
  "hf-2aarigt": Calendar,
  "hf-enkeltfag": Task,
}

const GYMNASIUM_CALCULATORS = GYMNASIUM_SLUGS.map((slug) =>
  EMBED_CALCULATORS.find((c) => c.slug === slug)
).filter((c): c is (typeof EMBED_CALCULATORS)[number] => c !== undefined)

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: TITLE,
  url: PAGE_URL,
  description: DESCRIPTION,
  inLanguage: "da-DK",
  hasPart: GYMNASIUM_CALCULATORS.map((calculator) => ({
    "@type": "WebApplication",
    name: calculator.title,
    url: `${SITE_URL}${calculator.pageHref}`,
    applicationCategory: "EducationApplication",
  })),
}

const GYMNASIUM_FAQ_ITEMS = [
  {
    question: "Hvad er gennemsnittet på gymnasiet?",
    answer:
      "Der findes ikke ét fast gennemsnit for \"gymnasiet\" som helhed. Dit gennemsnit er individuelt og afhænger af dine egne fagvalg, niveauer og karakterer. Vælg din uddannelse ovenfor for at finde dit eget gennemsnit.",
  },
  {
    question: "Hvilke uddannelser tæller som \"gymnasiet\" i Danmark?",
    answer:
      "De fire gymnasiale ungdomsuddannelser er STX, HHX, HTX og HF. Derudover har EUX en gymnasial del, der følger de samme regler for niveauvægtning og bonus-A som de øvrige gymnasiale uddannelser.",
  },
  {
    question: "Hvad betyder \"snit\" i gymnasiet?",
    answer:
      "\"Snit\" er den almindelige, kortere betegnelse for dit eksamensgennemsnit fra en gymnasial uddannelse (fx dit \"STX-snit\" eller dit \"HF-snit\"). Det er samme tal som dit karaktergennemsnit, bare en anden talemåde for det.",
  },
  {
    question: "Hvordan beregnes gennemsnit i gymnasiet?",
    answer:
      "Hver karakter ganges med fagets niveauvægt (A = 2, B = 1,5, C = 1), summeres og divideres med summen af niveauvægtene. Har et fag flere karakterer (fx både standpunkt og eksamen, eller mundtlig og skriftlig), deles vægten ligeligt mellem dem.",
  },
  {
    question: "Hvad er bonus-A, og gælder det for alle gymnasiale uddannelser?",
    answer:
      "Har du mange fag på A-niveau, ganges dit gennemsnit med en bonusfaktor. På STX, HHX og HTX udløses bonus ved 5 A-fag (×1,03) og 6+ A-fag (×1,06). På 2-årigt HF, hvor Dansk A er det eneste obligatoriske A-fag, udløses bonus allerede ved 2 og 3 A-fag – og eux følger typisk samme lavere tærskel som HF. HF som enkeltfag har ingen bonusordning. Studieretnings-/områdeprojekter (SRP, SOP, EOP m.fl.) har egne faste vægte og tæller ikke selv som A-niveau-fag i denne sammenhæng.",
  },
  {
    question: "Er der forskel på, hvordan gennemsnittet beregnes på STX, HHX, HTX og HF?",
    answer:
      "Selve beregningsmetoden (niveauvægtning og bonus-A) er den samme på tværs af uddannelserne. Forskellen ligger i de obligatoriske fag og niveauer, som varierer fra uddannelse til uddannelse. Brug den dedikerede beregner for din uddannelse for at få de rigtige fag forudfyldt.",
  },
  {
    question: "Kan jeg bruge samme beregner til alle gymnasiale uddannelser?",
    answer:
      "Det kan man godt, men vi anbefaler at bruge den beregner, der er lavet specifikt til din uddannelse, da de obligatoriske fag og niveauer allerede er forudfyldt korrekt for hver enkelt uddannelse.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GYMNASIUM_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

const CALCULATION_STEPS = [
  {
    title: "Find niveauvægten for hvert fag",
    detail: "A-niveau vejer 2, B-niveau vejer 1,5, og C-niveau vejer 1.",
  },
  {
    title: "Gang hver karakter med niveauvægten",
    detail: "Fx en 7-tal på A-niveau bliver til 7 × 2 = 14.",
  },
  {
    title: "Læg de vægtede tal sammen",
    detail: "Summér alle fagenes vægtede karakterer til ét samlet tal.",
  },
  {
    title: "Divider med summen af niveauvægtene",
    detail: "Det giver dit niveauvægtede gennemsnit, før en eventuel bonus.",
  },
  {
    title: "Gang med bonusfaktoren, hvis den udløses",
    detail: "× 1,03 ved 5 A-niveau-fag, × 1,06 ved 6 eller flere.",
  },
]

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Sådan udregner du et vægtet gennemsnit i gymnasiet",
  step: CALCULATION_STEPS.map((step) => ({
    "@type": "HowToStep",
    name: step.title,
    text: step.detail,
  })),
}

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export default function GennemsnitGymnasiumPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(howToJsonLd) }}
      />

      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-14">
        <h1 className="mb-2.5 text-[26px] leading-[1.15] font-extrabold text-balance break-words sm:text-[38px]">
          Gennemsnit gymnasium
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Gymnasiet dækker over STX, HHX, HTX og HF, samt EUX&apos;s gymnasiale
          fag. Dit gymnasiale karaktergennemsnit (ofte bare kaldet dit snit)
          beregnes efter samme princip på tværs af uddannelserne:
          niveauvægtning (A, B, C) og bonus for mange A-niveau-fag. De
          obligatoriske fag og niveauer er dog forskellige fra uddannelse til
          uddannelse, så vælg din uddannelse nedenfor for at få en beregner med
          de rigtige fag forudfyldt.
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:pb-16">
        <h2 className="text-[26px] font-extrabold">Vælg din gymnasiale uddannelse</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {GYMNASIUM_CALCULATORS.map((calculator) => {
            const Icon = GYMNASIUM_ICONS[calculator.slug] ?? Glass
            return (
              <Link
                key={calculator.slug}
                href={calculator.pageHref}
                className="rounded-xl border bg-background p-5 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary/40 hover:shadow-md"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <div className="font-semibold">{calculator.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {calculator.description}
                </p>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:pb-16">
        <h2 className="text-[26px] font-extrabold">
          Sådan udregner du et vægtet gennemsnit i gymnasiet
        </h2>
        <p className="mt-2 text-muted-foreground">
          I modsætning til et simpelt gennemsnit vægtes dine karakterer i
          gymnasiet efter fagets niveau. Sådan udregner du det, trin for
          trin.
        </p>

        <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
          <ol className="divide-y rounded-lg border">
            {CALCULATION_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-3 px-3 py-2.5 text-sm">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <span>
                  <span className="font-medium">{step.title}.</span>{" "}
                  <span className="text-muted-foreground">{step.detail}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-6 border-t pt-6">
            <div className="text-sm font-semibold">Vægtet gennemsnit formel</div>
            <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
              Gennemsnit = (∑ karakter × niveauvægt ÷ ∑ niveauvægt) × bonus
            </p>

            <div className="mt-4 text-sm font-semibold">Eksempel</div>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Dansk A (karakter 7), Idræt C (karakter 10) og Engelsk B
              (karakter 4) giver
              (7 × 2 + 10 × 1 + 4 × 1,5) ÷ (2 + 1 + 1,5) ={" "}
              <strong className="text-foreground">6,7</strong> i gennemsnit –
              uden bonus, da der kun er 1 fag på A-niveau.
            </p>
          </div>

          <KilderSektion>
            <p>
              Niveauvægtningen og bonus-A-reglerne herover fremgår af Almen
              prøvebekendtgørelse, § 66 og § 68. Bonus-tærsklen er 5/6 A-fag
              på STX, HHX og HTX (§ 68, stk. 1), 2/3 A-fag på 2-årigt HF
              (§ 68, stk. 2), mens EUX&apos;s tærskel afhænger af den
              enkelte erhvervsuddannelse (§ 68, stk. 3). HF som enkeltfag
              har ingen bonusordning. Vælg din uddannelse ovenfor for de
              fag- og niveaudetaljer, der gælder for netop dig.
            </p>
            <Regelgrundlag
              items={[
                {
                  href: "https://www.retsinformation.dk/eli/lta/2026/624",
                  title: "Lov om de gymnasiale uddannelser (LBK nr. 624 af 18/6/2026)",
                  description:
                    "Uddannelsernes indretning og obligatoriske fag/niveauer (STX, HHX, HTX, 2-årigt HF).",
                },
                {
                  href: "https://www.retsinformation.dk/eli/lta/2026/629",
                  title: "Avu-loven (LBK nr. 629 af 17/6/2026)",
                  description: "Uddannelsen til hf-eksamen og hf som enkeltfag/GSK.",
                },
                {
                  href: "https://www.retsinformation.dk/eli/lta/2022/537",
                  title: "EUX-loven (LBK nr. 537 af 2/5/2022)",
                  description:
                    "Indretning af eux – kombination af erhvervsuddannelse og gymnasial eksamen.",
                },
                {
                  href: "https://www.retsinformation.dk/eli/lta/2026/3",
                  title: "Almen prøvebekendtgørelse (BEK nr. 3 af 5/1/2026)",
                  description: "Niveauvægte (§ 66) og bonus-A (§ 68).",
                },
              ]}
            />
          </KilderSektion>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl px-6 pb-12 sm:pb-16">
        <h2 className="text-[26px] font-extrabold">
          Ofte stillede spørgsmål om gennemsnit i gymnasiet
        </h2>
        <div className="mt-8 divide-y rounded-xl border bg-background">
          {GYMNASIUM_FAQ_ITEMS.map((item) => (
            <div key={item.question} className="p-6 sm:p-8">
              <div className="font-semibold">{item.question}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
