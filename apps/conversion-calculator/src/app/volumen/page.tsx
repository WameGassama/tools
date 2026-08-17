import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Volumen Omregner – Konverter Ml, Cl, Dl og Liter Online"
const DESCRIPTION =
  "Gratis volumen omregner. Konverter nemt mellem ml, cl, dl og liter online."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/volumen",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/volumen",
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

const LINKS = [
  {
    href: "/volumen/ml-til-dl",
    title: "Ml til dl",
    description: "Omregn ml til dl hurtigt og nemt.",
  },
  {
    href: "/volumen/dl-til-ml",
    title: "Dl til ml",
    description: "Omregn dl til ml hurtigt og nemt.",
  },
  {
    href: "/volumen/ml-til-l",
    title: "Ml til liter",
    description: "Omregn ml til liter hurtigt og nemt.",
  },
  {
    href: "/volumen/l-til-ml",
    title: "Liter til ml",
    description: "Omregn liter til ml hurtigt og nemt.",
  },
  {
    href: "/volumen/cl-til-dl",
    title: "Cl til dl",
    description: "Omregn cl til dl hurtigt og nemt.",
  },
  {
    href: "/volumen/dl-til-cl",
    title: "Dl til cl",
    description: "Omregn dl til cl hurtigt og nemt.",
  },
  {
    href: "/volumen/cl-til-ml",
    title: "Cl til ml",
    description: "Omregn cl til ml hurtigt og nemt.",
  },
  {
    href: "/volumen/ml-til-cl",
    title: "Ml til cl",
    description: "Omregn ml til cl hurtigt og nemt.",
  },
  {
    href: "/volumen/cl-til-l",
    title: "Cl til liter",
    description: "Omregn cl til liter hurtigt og nemt.",
  },
  {
    href: "/volumen/l-til-cl",
    title: "Liter til cl",
    description: "Omregn liter til cl hurtigt og nemt.",
  },
  {
    href: "/volumen/dl-til-l",
    title: "Dl til liter",
    description: "Omregn dl til liter hurtigt og nemt.",
  },
  {
    href: "/volumen/l-til-dl",
    title: "Liter til dl",
    description: "Omregn liter til dl hurtigt og nemt.",
  },
]

export default function VolumenPage() {
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
              Volumen Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Med vores volumen omregner konverterer du nemt mellem ml, cl,
              dl og liter.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((link) => (
            <div
              key={link.href}
              className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8"
            >
              <h2 className="mb-1 text-lg font-bold">
                <Link href={link.href} className="hover:text-primary">
                  {link.title}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
