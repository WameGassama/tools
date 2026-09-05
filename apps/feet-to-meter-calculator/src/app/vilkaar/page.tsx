import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Vilkår for brug | fodtilmeter.dk"
const DESCRIPTION =
  "Vilkårene for at bruge fodtilmeter.dk. Omregneren er gratis og stilles til rådighed, som den er, uden garanti for resultaterne."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/vilkaar" },
  robots: { index: true, follow: true },
}

export default function VilkaarPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
        <h1 className="text-balance text-[clamp(28px,4.5vw,40px)] leading-[1.1] font-extrabold tracking-tight">
          Vilkår for brug
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Sidst opdateret: september 2026</p>

        <div className="mt-8 flex flex-col gap-7 rounded-xl border border-border bg-card p-5 sm:p-8">
          <div>
            <h2 className="mb-2 text-lg font-bold">Gratis at bruge</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Alle omregnere og tabeller på fodtilmeter.dk er gratis at bruge, både privat og
              erhvervsmæssigt. Du behøver ikke oprette en konto eller registrere dig.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ingen garanti for resultaterne</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Omregningerne bygger på den officielle definition af en fod som præcis 0,3048 meter,
              og vi gør vores bedste for at vise korrekte resultater. Siden stilles dog til
              rådighed, som den er, uden nogen form for garanti. Vi kan ikke holdes ansvarlige for
              tab eller skader, der opstår som følge af, at du bruger et resultat herfra. Kontroller
              altid vigtige mål, for eksempel til byggeri, tegninger eller indkøb, i en anden kilde.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Afrunding</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Resultaterne afrundes til det antal decimaler, du vælger i omregneren. Ved afrunding
              kan der opstå små afvigelser i forhold til den eksakte værdi. Vælg flere decimaler,
              hvis du har brug for større præcision.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Indhold og ophavsret</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Tekst, design og kode på siden tilhører fodtilmeter.dk. Du må gerne henvise til
              siden og linke til den, men indholdet må ikke kopieres og genudgives uden aftale.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Cookies og data</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Hvordan vi håndterer cookies og data, står i vores{" "}
              <Link
                href="/privatlivspolitik"
                className="text-primary underline underline-offset-2"
              >
                privatlivspolitik
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-bold">Ændringer af vilkårene</h2>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Vi kan opdatere disse vilkår løbende. Den gældende version står altid på denne side
              med datoen for seneste opdatering.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
