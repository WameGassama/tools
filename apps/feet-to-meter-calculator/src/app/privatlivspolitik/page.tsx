import type { Metadata } from "next"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Privatlivspolitik | fodtilmeter.dk"
const DESCRIPTION =
  "Sådan behandler fodtilmeter.dk data. Læs om cookies, Google Analytics og hvorfor du ikke skal oplyse noget om dig selv for at bruge omregneren."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privatlivspolitik" },
  robots: { index: true, follow: true },
}

const SECTIONS = [
  {
    heading: "Kort fortalt",
    body: "fodtilmeter.dk kræver ingen konto, og du skal aldrig oplyse navn, mail eller andre personlige oplysninger for at bruge omregneren. De tal, du indtaster, bliver brugt til at beregne et resultat i din egen browser. De bliver hverken sendt til os eller gemt.",
  },
  {
    heading: "Nødvendige cookies",
    body: "En enkelt cookie husker, hvad du har svaret i cookiebanneret, så du ikke bliver spurgt igen ved hvert besøg. Den er nødvendig for, at siden fungerer korrekt, og kan derfor ikke fravælges.",
  },
  {
    heading: "Analysecookies",
    body: "Vi bruger Google Analytics til at se, hvilke sider der bliver brugt, og hvordan de bliver fundet. Det hjælper os med at prioritere, hvad vi forbedrer. Analysecookies bliver først sat, hvis du siger ja i cookiebanneret, og du kan altid ændre dit valg via linket „Cookieindstillinger“ nederst på siden.",
  },
  {
    heading: "Dine rettigheder",
    body: "Da vi ikke gemmer personhenførbare oplysninger om dig, har vi ingen database, du kan bede om indsigt i eller få slettet. Du kan til enhver tid blokere cookies i din browsers indstillinger eller bruge en sporingsblokering.",
  },
  {
    heading: "Ændringer",
    body: "Vi opdaterer denne politik, hvis vi tilføjer nye funktioner eller ændrer, hvordan siden virker. Væsentlige ændringer vil fremgå af denne side sammen med datoen for seneste opdatering.",
  },
  {
    heading: "Kontakt",
    body: "Har du spørgsmål til privatlivspolitikken, er du velkommen til at skrive til kontakt@fodtilmeter.dk.",
  },
]

export default function PrivatlivspolitikPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <NavBar />
      <main className="mx-auto w-full max-w-3xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
        <h1 className="text-balance text-[clamp(28px,4.5vw,40px)] leading-[1.1] font-extrabold tracking-tight">
          Privatlivspolitik
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Sidst opdateret: september 2026</p>

        <div className="mt-8 flex flex-col gap-7 rounded-xl border border-border bg-card p-5 sm:p-8">
          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-2 text-lg font-bold">{section.heading}</h2>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{section.body}</p>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
