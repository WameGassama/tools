import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Vilkår for brug – omregning.dk"
const DESCRIPTION =
  "Læs vilkårene for brug af omregning.dk's gratis omregnere og beregnere."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vilkaar",
  },
}

export default function VilkaarPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Vilkår for brug
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sidst opdateret: august 2026
        </p>

        <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Ved at bruge omregning.dk accepterer du nedenstående vilkår. Læs
            dem gerne igennem, før du bruger siden.
          </p>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Gratis at bruge
            </h2>
            <p>
              Alle omregnere og beregnere på omregning.dk er gratis at bruge.
              Der kræves ingen oprettelse af konto, og du kan bruge så mange
              omregninger, du har brug for.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Immaterielle rettigheder
            </h2>
            <p>
              Design, tekst og kode på omregning.dk tilhører omregning.dk. Du
              må gerne linke til siden, men indhold må ikke kopieres eller
              genudgives uden tilladelse.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Tilgængelighed
            </h2>
            <p>
              Vi bestræber os på, at omregning.dk er tilgængelig og fungerer
              korrekt, men kan ikke garantere uafbrudt drift. Siden kan fra
              tid til anden være nede pga. vedligeholdelse eller tekniske
              problemer.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Ændringer af vilkår
            </h2>
            <p>
              Vi kan opdatere disse vilkår løbende. Fortsat brug af siden
              efter en ændring betragtes som accept af de nye vilkår.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold text-foreground">
              Ansvar
            </h2>
            <p>
              Se vores{" "}
              <Link
                href="/ansvarsfraskrivelse"
                className="text-primary underline"
              >
                ansvarsfraskrivelse
              </Link>{" "}
              for mere information om, hvordan vi forholder os til
              nøjagtigheden af beregningerne på siden.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
