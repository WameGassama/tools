import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/vilkaar-for-brug`
const TITLE = "Vilkår For Brug – Gennemsnitsberegner.dk"
const DESCRIPTION =
  "Vilkårene for at bruge Gennemsnitsberegner.dk og for at indlejre vores beregnere på din egen hjemmeside."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vilkaar-for-brug",
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

export default function VilkaarForBrugPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <h1 className="mb-2 text-balance break-words text-[21px] leading-[1.15] font-extrabold sm:text-[38px]">
          Vilkår for brug
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">Sidst opdateret 20. august 2026</p>

        <div className="flex flex-col gap-8 rounded-xl border bg-background p-4 sm:p-8">
          <div>
            <h2 className="mb-2 text-lg font-bold">Brug af beregnerne</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Gennemsnitsberegner.dk stiller karaktergennemsnitsberegnere til rådighed gratis,
              uden krav om oprettelse af bruger eller abonnement. Du må bruge beregnerne til
              privat og ikke-kommercielt brug, herunder til at vurdere dit eget
              karaktergennemsnit.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ingen garanti for rigtigheden</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi bestræber os på, at beregningerne følger de officielle vægtningsregler for hver
              uddannelse, men vi kan ikke garantere, at resultatet altid er 100&nbsp;%
              retvisende, eller at det stemmer overens med dit endelige eksamensbevis. Brug
              beregnerne som vejledende værktøj, og kontakt din uddannelsesinstitution, hvis du
              er i tvivl om dit officielle gennemsnit.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Indlejring på din egen hjemmeside</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Du er velkommen til at indlejre vores beregnere på din egen hjemmeside via{" "}
              <Link href="/del-beregner" className="underline underline-offset-2 hover:text-foreground">
                vores indlejringsfunktion
              </Link>
              , så længe attributionslinket til Gennemsnitsberegner.dk under beregneren bevares
              synligt og uændret. Det er denne synlige kreditering, der gør det muligt for os at
              tilbyde indlejring gratis.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ansvar</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Se vores{" "}
              <Link
                href="/ansvarsfraskrivelse"
                className="underline underline-offset-2 hover:text-foreground"
              >
                ansvarsfraskrivelse
              </Link>{" "}
              for detaljer om, hvad vi ikke kan holdes ansvarlige for.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ændringer af vilkårene</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi kan opdatere disse vilkår løbende, fx hvis vi tilføjer nye beregnere eller
              funktioner. Den seneste version er altid den gældende, og datoen øverst på siden
              viser, hvornår den sidst blev ændret.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
