import type { Metadata } from "next"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.moms-beregner.dk"
const PAGE_URL = `${SITE_URL}/ansvarsfraskrivelse`
const TITLE = "Ansvarsfraskrivelse – moms-beregner.dk"
const DESCRIPTION =
  "Beregningerne på moms-beregner.dk er vejledende. Læs vores ansvarsfraskrivelse, før du bruger resultatet til vigtige beslutninger."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ansvarsfraskrivelse",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "moms-beregner.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function AnsvarsfraskrivelsePage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <h1 className="mb-2 text-balance font-heading text-[28px] leading-[1.15] font-semibold sm:text-[38px]">
          Ansvarsfraskrivelse
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sidst opdateret 23. august 2026
        </p>

        <div className="flex flex-col gap-8 rounded-xl border border-border bg-card p-4 sm:p-8">
          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Vejledende resultater
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Beregneren på moms-beregner.dk er lavet for at gøre det nemt at
              få et hurtigt overblik over moms af et beløb. Resultatet er
              vejledende og er ikke et bindende svar fra Skattestyrelsen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Ingen ansvar for beslutninger
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi påtager os intet ansvar for tab eller konsekvenser, der måtte
              opstå som følge af, at du har brugt et resultat fra beregneren,
              herunder i forbindelse med prissætning, momsindberetning eller
              andre forretningsmæssige beslutninger. Skal du bruge tallet til
              noget vigtigt, anbefaler vi altid, at du bekræfter det med din
              revisor eller Skattestyrelsen.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Fejl og driftsstop
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi bestræber os på, at beregneren altid er tilgængelig og
              fejlfri, men kan ikke garantere uafbrudt drift eller at siden
              er fri for fejl. Finder du en fejl i en beregning, hører vi
              gerne fra dig på{" "}
              <a
                href="mailto:kontakt@moms-beregner.dk"
                className="underline underline-offset-2 hover:text-foreground"
              >
                kontakt@moms-beregner.dk
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Eksterne links
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vores side kan indeholde links til eksterne hjemmesider, fx
              Skattestyrelsen eller TastSelv Erhverv. Vi har ikke kontrol
              over og er ikke ansvarlige for indholdet på disse sider.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
