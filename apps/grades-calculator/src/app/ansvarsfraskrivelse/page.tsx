import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/ansvarsfraskrivelse`
const TITLE = "Ansvarsfraskrivelse – Gennemsnitsberegner.dk"
const DESCRIPTION =
  "Beregningerne på Gennemsnitsberegner.dk er vejledende. Læs vores ansvarsfraskrivelse, før du bruger resultatet til vigtige beslutninger."

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
    siteName: "Gennemsnitsberegner.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function AnsvarsfraskrivelsePage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <h1 className="mb-2 text-balance break-words text-[21px] leading-[1.15] font-extrabold sm:text-[38px]">
          Ansvarsfraskrivelse
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">Sidst opdateret 20. august 2026</p>

        <div className="flex flex-col gap-8 rounded-xl border bg-background p-4 sm:p-8">
          <div>
            <h2 className="mb-2 text-lg font-bold">Vejledende resultater</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Beregnerne på Gennemsnitsberegner.dk er lavet for at gøre det nemt at få et
              hurtigt overblik over dit karaktergennemsnit. Resultatet er vejledende og er ikke
              et officielt dokument. Dit endelige, officielle gennemsnit fremgår altid af dit
              eksamensbevis eller karakterudskrift fra din uddannelsesinstitution.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ingen ansvar for beslutninger</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi påtager os intet ansvar for tab eller konsekvenser (herunder forkerte
              studievalg, ansøgninger eller andre beslutninger), der måtte opstå som følge af, at
              du har brugt et resultat fra vores beregnere. Skal du bruge dit gennemsnit til noget
              vigtigt, fx en ansøgning, anbefaler vi altid, at du bekræfter tallet med din
              uddannelsesinstitution.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Fejl og driftsstop</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi bestræber os på, at beregnerne altid er tilgængelige og fejlfrie, men kan ikke
              garantere uafbrudt drift eller at siden er fri for fejl. Finder du en fejl i en
              beregning, hører vi gerne fra dig via{" "}
              <Link href="/kontakt" className="underline underline-offset-2 hover:text-foreground">
                kontaktsiden
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Eksterne links</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vores side kan indeholde links til eksterne hjemmesider, fx uddannelsesinstitutioner.
              Vi har ikke kontrol over og er ikke ansvarlige for indholdet på disse sider.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
