import type { Metadata } from "next"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Ansvarsfraskrivelse – omregning.dk"
const DESCRIPTION =
  "Læs omregning.dk's ansvarsfraskrivelse om nøjagtighed og brug af omregnerne på siden."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/ansvarsfraskrivelse",
  },
}

export default function AnsvarsfraskrivelsePage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Ansvarsfraskrivelse
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sidst opdateret: august 2026
        </p>

        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            omregning.dk stiller gratis omregnere og beregnere til rådighed
            som et praktisk hjælpeværktøj. Denne side beskriver, hvordan vi
            forholder os til ansvar for indholdet på siden.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Ingen garanti for nøjagtighed
            </h2>
            <p>
              Vi lægger stor vægt på, at omregningerne på siden er korrekte,
              og bruger anerkendte omregningsfaktorer og formler. Vi kan
              dog ikke garantere, at resultaterne til enhver tid er
              fejlfrie, opdaterede eller fuldstændige.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Ikke professionel rådgivning
            </h2>
            <p>
              Omregnerne på siden er tænkt som et generelt hjælpeværktøj og
              erstatter ikke professionel rådgivning inden for fx teknik,
              medicin, jura eller økonomi. Ved vigtige eller kritiske
              beslutninger bør du altid verificere resultatet med en
              relevant fagperson eller officiel kilde.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Brug på eget ansvar
            </h2>
            <p>
              Brug af omregning.dk sker på eget ansvar. Vi påtager os intet
              ansvar for direkte eller indirekte tab, skader eller
              konsekvenser, der måtte opstå som følge af brug af siden eller
              tillid til de beregnede resultater.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Eksterne links
            </h2>
            <p>
              Siden kan indeholde links til eksterne hjemmesider. Vi har
              ikke kontrol over og påtager os intet ansvar for indholdet på
              eksterne sider.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Fejl og feedback
            </h2>
            <p>
              Opdager du en fejl i en af vores omregnere, hører vi meget
              gerne fra dig på{" "}
              <a
                href="mailto:kontakt@omregning.dk"
                className="text-primary underline"
              >
                kontakt@omregning.dk
              </a>
              , så vi kan rette den hurtigst muligt.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
