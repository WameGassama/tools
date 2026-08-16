import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE = "Vægt Omregner – Konverter Pund, Kg og Gram Online"
const DESCRIPTION =
  "Gratis vægt omregner. Konverter nemt mellem pund (lbs), kg og gram online."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/vaegt",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/vaegt",
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

const UNITS = [
  {
    title: "Kilogram (kg)",
    description:
      "SI-systemets grundenhed for masse, og den mest udbredte af alle vægtenheder i Danmark og resten af Europa. 1 kg = 1.000 gram.",
  },
  {
    title: "Gram (g)",
    description:
      "Bruges til at veje mindre mængder, fx i madopskrifter. 1.000 gram = 1 kg.",
    href: "/vaegt/kg-til-gram",
    linkLabel: "Omregn kg til gram",
  },
  {
    title: "Pund / lbs",
    description:
      "Den mest udbredte vægtenhed i USA og Storbritannien. 1 lbs ≈ 0,4536 kg.",
    href: "/vaegt/pund-til-kg",
    linkLabel: "Omregn pund til kg",
  },
  {
    title: "Ton (t)",
    description:
      "Bruges til at veje meget tunge ting, fx biler og gods. 1 ton = 1.000 kg.",
  },
  {
    title: "Ounce (oz)",
    description:
      "En mindre amerikansk/britisk vægtenhed, ofte brugt til mad og drikkevarer. 1 oz ≈ 28,35 gram.",
  },
  {
    title: "Stone (st)",
    description:
      "En britisk vægtenhed, der typisk bruges til at angive kropsvægt. 1 stone ≈ 6,35 kg.",
  },
]

export default function VaegtPage() {
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
              Vægt Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Med vores vægt omregner konverterer du nemt mellem pund (lbs), kg
              og gram.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/vaegt/pund-til-kg" className="hover:text-primary">
                Pund til kg
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn pund (lbs) til kg hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/vaegt/kg-til-lbs" className="hover:text-primary">
                Kg til pund
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn kg til pund (lbs) hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/vaegt/kg-til-gram" className="hover:text-primary">
                Kg til gram
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn kg til gram hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/vaegt/gram-til-kg" className="hover:text-primary">
                Gram til kg
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn gram til kg hurtigt og nemt.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-1 text-lg font-bold">Vægtenheder forklaret</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Der findes mange forskellige vægtenheder rundt om i verden. Herunder
            kan du se de mest almindelige vægtenheder, og hvad de bruges til.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {UNITS.map((unit) => (
              <div
                key={unit.title}
                className="rounded-2xl border bg-background p-5 shadow-sm"
              >
                <h3 className="mb-1.5 font-semibold">{unit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {unit.description}
                </p>
                {unit.href && (
                  <Link
                    href={unit.href}
                    className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {unit.linkLabel} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
