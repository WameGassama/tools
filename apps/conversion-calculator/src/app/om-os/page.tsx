import type { Metadata } from "next"
import { Edit, Flash, Lock, RotateRight, Search, Task, Verify } from "@workspace/ui/icons"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Om os – omregning.dk"
const DESCRIPTION =
  "Læs om omregning.dk – Danmarks samlede omregner. Gratis, uden login og uden gemte data."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/om-os",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/om-os",
    siteName: "omregning.dk",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const STATS = [
  { value: "52+", label: "Omregnere" },
  { value: "8", label: "Kategorier" },
  { value: "100%", label: "Gratis" },
]

const VALUES = [
  {
    icon: Verify,
    title: "100% gratis",
    description:
      "Alle omregnere på omregning.dk er gratis at bruge. Ingen login, ingen abonnement, ingen skjulte gebyrer.",
  },
  {
    icon: Lock,
    title: "Ingen data gemmes",
    description:
      "Alle beregninger foregår i din browser. Vi gemmer ikke de tal, du indtaster. Læs mere i vores privatlivspolitik.",
  },
  {
    icon: Flash,
    title: "Hurtigt og præcist",
    description:
      "Omregningerne sker direkte, mens du skriver, med anerkendte omregningsfaktorer og formler.",
  },
  {
    icon: RotateRight,
    title: "Flere omregnere på vej",
    description:
      "Sitet vokser løbende. Lige nu tilbyder vi over 50 omregnere fordelt på 8 kategorier.",
  },
]

const STEPS = [
  {
    icon: Search,
    title: "Vælg en kategori",
    description:
      "Find den type omregning, du skal bruge, fx vægt, længde eller temperatur.",
  },
  {
    icon: Edit,
    title: "Indtast din værdi",
    description:
      "Skriv tallet, du vil omregne, i det felt der passer til din enhed.",
  },
  {
    icon: Task,
    title: "Få resultatet med det samme",
    description:
      "Svaret vises i takt med at du skriver, uden at du skal trykke på noget.",
  },
]

export default function OmOsPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-primary to-blue-700 px-6 py-14 text-primary-foreground shadow-2xl ring-1 shadow-primary/30 ring-white/10 sm:px-12 sm:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-32 -right-16 h-80 w-80 rounded-full bg-white/20 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-900/30 blur-[90px]"
            aria-hidden="true"
          />

          <div className="relative max-w-xl">
            <h1 className="mb-2.5 text-[32px] leading-[1.1] font-extrabold text-balance break-words sm:text-[44px]">
              Om os
            </h1>
            <p className="mb-8 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Danmarks samlede omregner. Hurtigt, gratis og uden besvær.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl">
          <p className="mb-4 text-base leading-relaxed text-muted-foreground">
            omregning.dk er Danmarks samlede omregner. Vi samler alle de
            omregnere, du har brug for, ét sted, så du hurtigt kan finde
            svaret uden at lede efter det rigtige værktøj hver gang.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Vi er et lille, uafhængigt projekt uden store organisationer
            eller investorer bag siden. Bare et ønske om at gøre omregning
            så enkelt som muligt.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Hvorfor omregning.dk</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="flex flex-col gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Sådan virker det</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      Trin {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          Har du forslag, eller mangler du en bestemt omregner, er du
          velkommen til at skrive til os på{" "}
          <a
            href="mailto:kontakt@omregning.dk"
            className="text-primary underline"
          >
            kontakt@omregning.dk
          </a>
          .
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
