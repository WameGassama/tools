import type { Metadata } from "next"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.moms-beregner.dk"
const PAGE_URL = `${SITE_URL}/privatlivspolitik`
const TITLE = "Privatlivspolitik – moms-beregner.dk"
const DESCRIPTION =
  "Læs hvordan moms-beregner.dk behandler data: hvilke cookies vi bruger, og hvorfor vi ikke beder om personoplysninger for at bruge beregneren."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/privatlivspolitik",
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

export default function PrivatlivspolitikPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <h1 className="mb-2 text-balance font-heading text-[28px] leading-[1.15] font-semibold sm:text-[38px]">
          Privatlivspolitik
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sidst opdateret 23. august 2026
        </p>

        <div className="flex flex-col gap-8 rounded-xl border border-border bg-card p-4 sm:p-8">
          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Kort fortalt
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              moms-beregner.dk kræver ingen oprettelse af bruger, og du skal
              ikke oplyse navn, e-mail eller andre personoplysninger for at
              bruge beregneren. Det beløb, du taster ind, bruges udelukkende
              til at udregne momsen i din egen browser. Det sendes aldrig
              til os og gemmes ikke.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Cookies
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi bruger to typer cookies:
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <li>
                <strong className="text-foreground">
                  Nødvendige cookies
                </strong>{" "}
                husker dit samtykke til cookie-banneret. Disse er nødvendige
                for, at siden fungerer korrekt, og kan ikke fravælges.
              </li>
              <li>
                <strong className="text-foreground">Analyse-cookies</strong>{" "}
                (Google Analytics) hjælper os med at forstå, hvordan siden
                bliver brugt, så vi kan forbedre den. Disse sættes kun, hvis
                du aktivt siger ja til dem i cookie-banneret, og du kan til
                enhver tid ændre dit valg via linket &bdquo;Cookie&ldquo;
                nederst på siden.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 font-heading text-lg font-semibold">
              Dine rettigheder
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Da vi ikke indsamler eller opbevarer personoplysninger om dig,
              har vi som udgangspunkt ingen data at give indsigt i, rette
              eller slette. Har du alligevel spørgsmål til databehandlingen,
              er du velkommen til at skrive til{" "}
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
              Ændringer
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi kan opdatere denne privatlivspolitik, hvis vi ændrer på,
              hvordan siden fungerer. Væsentlige ændringer vil fremgå af
              datoen øverst på siden.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
