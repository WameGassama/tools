import type { Metadata } from "next"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Privatlivspolitik – omregning.dk"
const DESCRIPTION =
  "Læs omregning.dk's privatlivspolitik om cookies, Google Analytics og behandling af persondata."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/privatlivspolitik",
  },
}

export default function PrivatlivspolitikPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Privatlivspolitik
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sidst opdateret: august 2026
        </p>

        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            omregning.dk lægger vægt på at behandle dine data ansvarligt. Denne
            side beskriver, hvilke data der indsamles, når du besøger siden,
            og hvordan de bruges.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Ingen konto, ingen gemte beregninger
            </h2>
            <p>
              Alle omregninger foregår direkte i din browser. Vi gemmer ikke
              de tal, du indtaster, og du behøver ikke oprette en konto for at
              bruge nogen af omregnerne på siden.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Cookies og statistik
            </h2>
            <p>
              Vi bruger Google Analytics til at forstå, hvordan siden bliver
              brugt (fx hvilke omregnere der besøges mest). Google Analytics
              sætter cookies og indsamler anonymiseret information som
              sideviews, browsertype og omtrentlig geografisk placering.
              Denne information bruges udelukkende til at forbedre siden og
              deles ikke med tredjeparter til markedsføringsformål.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Dine rettigheder
            </h2>
            <p>
              Da vi ikke gemmer personhenførbare data om dig, har vi ikke en
              database med oplysninger, du kan bede om indsigt i eller få
              slettet. Du kan til enhver tid blokere cookies i din browsers
              indstillinger eller bruge annonce-/sporingsblokkere.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Ændringer til denne politik
            </h2>
            <p>
              Vi kan opdatere denne privatlivspolitik løbende, fx hvis vi
              tilføjer nye funktioner. Væsentlige ændringer vil fremgå af
              denne side.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Kontakt
            </h2>
            <p>
              Har du spørgsmål til denne privatlivspolitik, er du velkommen
              til at kontakte os på{" "}
              <a
                href="mailto:kontakt@omregning.dk"
                className="text-primary underline"
              >
                kontakt@omregning.dk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
