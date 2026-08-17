import type { Metadata } from "next"

import { KmtMsConverter } from "@/src/components/site/kmt-ms-converter"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "M/s til Km/t Omregner – Omregn Meter i Sekundet til Km i Timen Online"
const DESCRIPTION =
  "Omregn m/s til km/t online hurtigt og nemt. Se en m/s til km/t tabel, eller indtast din egen værdi."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed/ms-til-km-t",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed/ms-til-km-t",
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

const KMT_PER_MS = 3.6
const COMMON_MS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20, 25, 30, 50]

const FAQ_ITEMS = [
  {
    question: "Hvordan regner man m/s til km/t?",
    answer:
      "Formlen er km/t = m/s × 3,6. Fx bliver 10 m/s til km/t: 10 × 3,6 = 36 km/t.",
  },
  {
    question: "Hvorfor ganger man med 3,6?",
    answer:
      "1 m/s svarer til 3.600 meter i timen, altså 3,6 km/t. Derfor ganger man m/s med 3,6 for at få km/t.",
  },
]

function formatKmt(ms: number) {
  return (ms * KMT_PER_MS).toLocaleString("da-DK", {
    maximumFractionDigits: 2,
  })
}

export default function MsTilKmTPage() {
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
              M/s til Km/t Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Brug vores m/s til km/t omregner til hurtigt og nemt at omregne
              meter i sekundet til km i timen. Indtast det antal meter i
              sekundet, du vil omregne, og få resultatet med det samme, eller
              brug vores tabel til hurtigt at finde den ønskede omregning.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <KmtMsConverter title="M/s til km/t" reversed />
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">M/s til km/t tabel</h2>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {COMMON_MS_VALUES.map((ms) => (
              <li
                key={ms}
                className="flex items-baseline justify-between border-b pb-3 text-sm"
              >
                <h3 className="font-semibold">{ms} m/s til km/t</h3>
                <span className="text-muted-foreground">
                  {ms} m/s = {formatKmt(ms)} km/t
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-lg font-bold">
            Ofte stillede spørgsmål om m/s og km/t
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
