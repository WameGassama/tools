import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Længde Omregner – Konverter Længdeenheder Online"
const DESCRIPTION =
  "Gratis længde omregner. Konverter nemt mellem meter, kilometer, fod, tommer og mange flere længdeenheder online."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "længde omregner",
    "konverter længde",
    "meter til fod",
    "kilometer til mil",
    "omregn længde",
    "længdeenheder",
  ],
  alternates: {
    canonical: "/laengde",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/laengde",
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

export default function LaengdePage() {
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
              Længde Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
              Med vores længde omregner konverterer du nemt mellem meter,
              kilometer, fod, tommer og mange flere længdeenheder.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/fod-til-meter"
                className="hover:text-primary"
              >
                Fod til meter
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn fod til meter med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/meter-til-fod"
                className="hover:text-primary"
              >
                Meter til fod
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn meter til fod med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/hoejde-omregner"
                className="hover:text-primary"
              >
                Højde omregner
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn højde fra fod og tommer til cm med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/tommer-til-cm"
                className="hover:text-primary"
              >
                Tommer til cm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn tommer (inch) til cm med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/cm-til-tommer"
                className="hover:text-primary"
              >
                Cm til tommer
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn cm til tommer (inch) med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/tommer-til-mm"
                className="hover:text-primary"
              >
                Tommer til mm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn tommer til mm med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/mm-til-tommer"
                className="hover:text-primary"
              >
                Mm til tommer
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn mm til tommer med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/meter-til-cm" className="hover:text-primary">
                Meter til cm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn meter til cm med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/cm-til-m" className="hover:text-primary">
                Cm til meter
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn cm til meter med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/miles-til-km" className="hover:text-primary">
                Miles til km
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn miles til km med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/km-til-miles" className="hover:text-primary">
                Km til miles
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn km til miles med det samme.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/soemil-til-km"
                className="hover:text-primary"
              >
                Sømil til km
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn sømil til km med det samme.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
