import type { Metadata } from "next"

import { HektarTonderConverter } from "@/src/components/site/hektar-tonder-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Hektar til Tønder Land Omregner – Omregn Hektar til Tønder Online"
const DESCRIPTION =
  "Omregn hektar til tønder land online hurtigt og nemt. Se en hektar til tønder land tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/areal/hektar-til-tonder",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal/hektar-til-tonder",
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

const TONDER_PER_HEKTAR = 1 / 0.5516
const COMMON_HEKTAR_VALUES = [0.5516, 1, 2, 3, 5, 10, 20, 50, 100]

const FAQ_ITEMS = [
  {
    question: "Hvad er tønder land?",
    answer:
      "Tønder land er en gammel dansk arealenhed, der stadig bruges uformelt om landbrugsjord. 1 tønde land svarer til ca. 0,5516 hektar (5.516 m²).",
  },
  {
    question: "Hvor mange tønder land er en hektar?",
    answer:
      "En hektar svarer til ca. 1,81 tønder land, da 1 tønde land er ca. 0,5516 hektar.",
  },
  {
    question: "Hvordan regner man hektar til tønder land?",
    answer:
      "Formlen er tønder land = hektar ÷ 0,5516. Fx bliver 2 hektar til tønder land: 2 ÷ 0,5516 ≈ 3,63 tønder land.",
  },
]

function formatTonder(hektar: number) {
  return (hektar * TONDER_PER_HEKTAR).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function HektarTilTonderPage() {
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
            <h1 className="mb-2.5 text-balance break-words text-[32px] leading-[1.1] font-extrabold sm:text-[44px]">
              Hektar til Tønder Land Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores hektar til tønder land omregner til hurtigt og nemt
              at omregne hektar til tønder. Indtast det antal hektar, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HektarTonderConverter title="Hektar til tønder land" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Hektar til tønder land tabel
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_HEKTAR_VALUES.map((hektar) => (
              <li
                key={hektar}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{hektar} hektar til tønder</h3>
                <span className="text-muted-foreground">
                  {hektar} ha = {formatTonder(hektar)} tdr. land
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om hektar og tønder land
          </h2>
          <div className="flex flex-col gap-6">
            {FAQ_ITEMS.map((item) => (
              <div key={item.question}>
                <h3 className="mb-1.5 font-semibold">{item.question}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
