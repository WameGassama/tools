import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Areal Omregner – Konverter Hektar og m² Online"
const DESCRIPTION =
  "Gratis areal omregner. Konverter nemt mellem hektar og kvadratmeter online."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "areal omregner",
    "konverter areal",
    "hektar til m2",
    "m2 til hektar",
    "omregn areal",
  ],
  alternates: {
    canonical: "/areal",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/areal",
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

export default function ArealPage() {
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
              Areal Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Med vores areal omregner konverterer du nemt mellem hektar og
              kvadratmeter.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/areal/hektar-til-m2"
                className="hover:text-primary"
              >
                Hektar til m²
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn hektar til kvadratmeter med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/areal/m2-til-hektar"
                className="hover:text-primary"
              >
                m² til hektar
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn kvadratmeter til hektar med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/areal/hektar-til-km2"
                className="hover:text-primary"
              >
                Hektar til km²
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn hektar til kvadratkilometer med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/areal/hektar-til-tonder"
                className="hover:text-primary"
              >
                Hektar til tønder land
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn hektar til tønder land med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/areal/km2-til-hektar"
                className="hover:text-primary"
              >
                km² til hektar
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn kvadratkilometer til hektar med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/areal/tonder-til-hektar"
                className="hover:text-primary"
              >
                Tønder land til hektar
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn tønder land til hektar med det samme.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
