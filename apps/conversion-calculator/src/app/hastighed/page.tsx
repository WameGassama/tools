import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Hastighed Omregner – Konverter Knob og Km/t Online"
const DESCRIPTION =
  "Gratis hastighed omregner. Konverter nemt mellem knob og km/t online."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/hastighed",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/hastighed",
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

export default function HastighedPage() {
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
              Hastighed Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Med vores hastighed omregner konverterer du nemt mellem knob og
              km/t.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/hastighed/knob-til-km-t"
                className="hover:text-primary"
              >
                Knob til km/t
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn knob til km/t hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/hastighed/km-t-til-knob"
                className="hover:text-primary"
              >
                Km/t til knob
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn km/t til knob hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/hastighed/km-t-til-ms"
                className="hover:text-primary"
              >
                Km/t til m/s
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn km/t til m/s hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/hastighed/ms-til-km-t"
                className="hover:text-primary"
              >
                M/s til km/t
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn m/s til km/t hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/hastighed/mph-til-km-t"
                className="hover:text-primary"
              >
                Mph til km/t
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn mph til km/t hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/hastighed/km-t-til-mph"
                className="hover:text-primary"
              >
                Km/t til mph
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn km/t til mph hurtigt og nemt.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
