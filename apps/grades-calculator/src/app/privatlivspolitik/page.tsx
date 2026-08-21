import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/privatlivspolitik`
const TITLE = "Privatlivspolitik – Gennemsnitsberegner.dk"
const DESCRIPTION =
  "Læs hvordan Gennemsnitsberegner.dk behandler data: hvilke cookies vi bruger, og hvorfor vi ikke beder om personoplysninger for at bruge beregnerne."

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
    siteName: "Gennemsnitsberegner.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function PrivatlivspolitikPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16">
        <h1 className="mb-2 text-balance break-words text-[21px] leading-[1.15] font-extrabold sm:text-[38px]">
          Privatlivspolitik
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">Sidst opdateret 20. august 2026</p>

        <div className="flex flex-col gap-8 rounded-xl border bg-background p-4 sm:p-8">
          <div>
            <h2 className="mb-2 text-lg font-bold">Kort fortalt</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Gennemsnitsberegner.dk kræver ingen oprettelse af bruger, og du skal ikke oplyse
              navn, e-mail eller andre personoplysninger for at bruge beregnerne. De fag og
              karakterer, du taster ind, gemmes kun lokalt i din browser, så du slipper for at
              taste dem ind igen næste gang – de sendes aldrig til os.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Cookies</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi bruger to typer cookies:
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <li>
                <strong className="text-foreground">Nødvendige cookies</strong> husker de fag og
                karakterer, du har indtastet, så de ikke forsvinder, hvis du lukker browseren.
                Disse er nødvendige for, at beregnerne virker, og kan ikke fravælges.
              </li>
              <li>
                <strong className="text-foreground">Analyse-cookies</strong> (Google Analytics)
                hjælper os med at forstå, hvordan siden bliver brugt, så vi kan forbedre den.
                Disse sættes kun, hvis du aktivt siger ja til dem i cookie-banneret, og du kan til
                enhver tid ændre dit valg via linket &bdquo;Cookie&ldquo; nederst på siden.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Indlejrede beregnere</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Hvis du møder en af vores beregnere indlejret på en anden hjemmeside (via{" "}
              <Link href="/del-beregner" className="underline underline-offset-2 hover:text-foreground">
                vores indlejringsfunktion
              </Link>
              ), sætter den indlejrede beregner ingen cookies og indeholder ingen
              analyseværktøjer.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Dine rettigheder</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Da vi ikke indsamler eller opbevarer personoplysninger om dig, har vi som
              udgangspunkt ingen data at give indsigt i, rette eller slette. Har du alligevel
              spørgsmål til databehandlingen, eller mener du, at vi behandler oplysninger om dig
              forkert, er du velkommen til at{" "}
              <Link href="/kontakt" className="underline underline-offset-2 hover:text-foreground">
                kontakte os
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ændringer</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Vi kan opdatere denne privatlivspolitik, hvis vi ændrer på, hvordan siden fungerer.
              Væsentlige ændringer vil fremgå af datoen øverst på siden.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
