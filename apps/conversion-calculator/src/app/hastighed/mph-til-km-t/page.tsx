import type { Metadata } from "next"

import { MphKmtConverter } from "@/src/components/site/mph-kmt-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Mph til Km/t Omregner – Omregn Miles i Timen til Km i Timen Online"
const DESCRIPTION =
  "Omregn mph til km/t online hurtigt og nemt. Se en mph til km/t tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/mph-til-km-t",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/mph-til-km-t",
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

const KMT_PER_MPH = 1.609344
const COMMON_MPH_VALUES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120]

const FAQ_ITEMS = [
  {
    question: "Hvad er mph?",
    answer:
      'Mph står for "miles per hour" (miles i timen) og bruges bl.a. i USA og Storbritannien til at angive hastighed på vejskilte og speedometre.',
  },
  {
    question: "Hvordan regner man mph til km/t?",
    answer:
      "Formlen er km/t = mph × 1,609344. Fx bliver 60 mph til km/t: 60 × 1,609344 ≈ 96,56 km/t.",
  },
]

function formatKmt(mph: number) {
  return (mph * KMT_PER_MPH).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function MphTilKmTPage() {
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
              Mph til Km/t Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores mph til km/t omregner til hurtigt og nemt at omregne
              miles i timen til km i timen. Indtast det antal miles i timen,
              du vil omregne, og få resultatet med det samme, eller brug vores
              tabel til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <MphKmtConverter title="Mph til km/t" />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">Mph til km/t tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_MPH_VALUES.map((mph) => (
              <li
                key={mph}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{mph} mph til km/t</h3>
                <span className="text-muted-foreground">
                  {mph} mph = {formatKmt(mph)} km/t
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om mph og km/t
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
