import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.moms-beregner.dk"
const PAGE_URL = `${SITE_URL}/vilkaar-for-brug`
const TITLE = "Vilkår For Brug – moms-beregner.dk"
const DESCRIPTION = "Vilkårene for at bruge moms-beregner.dk."

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
    siteName: "moms-beregner.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function VilkaarForBrugPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <h1 className="mb-2 text-balance font-heading text-[28px] leading-[1.15] font-semibold sm:text-[38px]">
          Vilkår for brug
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sidst opdateret 23. august 2026
        </p>

        <div className="flex flex-col gap-8 rounded-xl border border-border bg-card p-4 sm:p-8">
          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Brug af beregneren
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              moms-beregner.dk stiller en momsberegner til rådighed gratis,
              uden krav om oprettelse af bruger eller abonnement. Du må bruge
              beregneren til privat og erhvervsmæssig brug, herunder til at
              udregne moms af beløb i forbindelse med din virksomhed.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Ingen garanti for rigtigheden
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Beregningen er vejledende. Vi bestræber os på, at den følger de
              gældende momsregler, men vi kan ikke garantere, at resultatet
              altid er retvisende i din konkrete situation. Kontakt din
              revisor eller Skattestyrelsen, hvis du er i tvivl om et
              bindende svar.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Ansvar
            </h2>
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
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Ændringer af vilkårene
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi kan opdatere disse vilkår løbende. Den seneste version er
              altid den gældende, og datoen øverst på siden viser, hvornår
              den sidst blev ændret.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
