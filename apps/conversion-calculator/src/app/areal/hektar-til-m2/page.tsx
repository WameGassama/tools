import type { Metadata } from "next"

import { HektarM2Converter } from "@/src/components/site/hektar-m2-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Hektar til m² – Omregn Hektar til Kvadratmeter Online"
const DESCRIPTION =
  "Omregn hektar til m² online med det samme. Se en hektar til m² tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "hektar",
    "hvor meget er en hektar",
    "hektar til m2",
    "hvad er en hektar",
    "hvor mange kvadratmeter er en hektar",
    "hvor mange m2 er en hektar",
    "hvor stor er en hektar",
    "hvor meget er 1 hektar",
    "hvad svarer en hektar til",
    "en hektar svarer til",
    "hektar til km2",
    "ha til m2",
    "hektar in m2",
    "hektar i m2",
    "hektar til tønder",
    "fodboldbane",
    "hvor stor er en fodboldbane",
    "hvor mange hektar er en fodboldbane",
    "hvor mange fodboldbaner er en hektar",
    "hvor stor er en fodboldbane i hektar",
    "fodboldbane hektar",
    "hvor mange kvm er en hektar",
    "hvad er en hektar i kvm",
    "hvad er en hektar i m2",
  ],
  alternates: {
    canonical: "/areal/hektar-til-m2",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal/hektar-til-m2",
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

const M2_PER_HEKTAR = 10000
const COMMON_HEKTAR_VALUES = [0.5, 1, 2, 3, 5, 10, 20, 50, 100]

const FAQ_ITEMS = [
  {
    question: "Hvad er en hektar?",
    answer:
      "En hektar (ha) er en arealenhed, der svarer til 10.000 m² — altså et kvadrat på 100 × 100 meter.",
  },
  {
    question: "Hvor stor er en fodboldbane i hektar?",
    answer:
      "En standard fodboldbane (105 × 68 meter) er ca. 7.140 m², altså cirka 0,71 hektar. En hektar svarer derfor til lidt over halvanden fodboldbane.",
  },
  {
    question: "Hvor mange tønder land er en hektar?",
    answer:
      "En hektar svarer til ca. 1,81 tønder land (den gamle danske arealenhed), da 1 tønde land er ca. 0,5516 hektar.",
  },
  {
    question: "Hvor mange hektar er 1 km²?",
    answer: "1 km² svarer til 100 hektar, altså er 1 hektar = 0,01 km².",
  },
]

function formatM2(hektar: number) {
  return (hektar * M2_PER_HEKTAR).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function HektarTilM2Page() {
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
              Hektar til m²
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Omregn hektar til kvadratmeter online — indtast en værdi
              herunder for at omregne med det samme.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HektarM2Converter title="Hektar til m²" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Hektar til m² tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_HEKTAR_VALUES.map((hektar) => (
              <li
                key={hektar}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{hektar} hektar til m²</h3>
                <span className="text-muted-foreground">
                  {hektar} ha = {formatM2(hektar)} m²
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om hektar
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
