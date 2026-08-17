import type { Metadata } from "next"

import { HektarTonderConverter } from "@/src/components/site/hektar-tonder-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Tønder Land til Hektar Omregner – Omregn Tønder til Hektar Online"
const DESCRIPTION =
  "Omregn tønder land til hektar online hurtigt og nemt. Se en tønder land til hektar tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/areal/tonder-til-hektar",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal/tonder-til-hektar",
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

const HEKTAR_PER_TONDE = 0.5516
const COMMON_TONDE_VALUES = [1, 2, 3, 5, 10, 20, 50, 100]

const FAQ_ITEMS = [
  {
    question: "Hvad er tønder land?",
    answer:
      "Tønder land er en gammel dansk arealenhed, der stadig bruges uformelt om landbrugsjord. 1 tønde land svarer til ca. 0,5516 hektar (5.516 m²).",
  },
  {
    question: "Hvordan regner man tønder land til hektar?",
    answer:
      "Formlen er hektar = tønder land × 0,5516. Fx bliver 2 tønder land til hektar: 2 × 0,5516 ≈ 1,10 hektar.",
  },
]

function formatHektar(tonder: number) {
  return (tonder * HEKTAR_PER_TONDE).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function TonderTilHektarPage() {
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
              Tønder Land til Hektar Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores tønder land til hektar omregner til hurtigt og nemt
              at omregne tønder til hektar. Indtast det antal tønder, du vil
              omregne, og få resultatet med det samme, eller brug vores tabel
              til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HektarTonderConverter title="Tønder land til hektar" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Tønder land til hektar tabel
          </h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_TONDE_VALUES.map((tonder) => (
              <li
                key={tonder}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{tonder} tønder til hektar</h3>
                <span className="text-muted-foreground">
                  {tonder} tdr. land = {formatHektar(tonder)} ha
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om tønder land og hektar
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
