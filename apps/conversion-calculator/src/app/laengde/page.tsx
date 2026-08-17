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

const LENGTH_UNITS = [
  {
    title: "Millimeter (mm)",
    description:
      "En af de mindste almindelige længdemål, ofte brugt til tekniske mål og rørdimensioner. 1.000 mm = 1 meter.",
    href: "/laengde/mm-til-cm",
    linkLabel: "Omregn mm til cm",
  },
  {
    title: "Centimeter (cm)",
    description:
      "Et af de mest brugte måleenheder for længde i dagligdagen, fx til højde og mindre afstande. 100 cm = 1 meter.",
    href: "/laengde/cm-til-m",
    linkLabel: "Omregn cm til meter",
  },
  {
    title: "Meter (m)",
    description:
      "SI-systemets grundenhed for længde, og udgangspunktet for de fleste andre længdemål i det metriske system.",
  },
  {
    title: "Kilometer (km)",
    description:
      "Bruges til at måle længere afstande, fx mellem byer. 1.000 meter = 1 km.",
    href: "/laengde/km-til-miles",
    linkLabel: "Omregn km til miles",
  },
  {
    title: "Tommer / inch",
    description:
      "Et længdemål fra det amerikanske/britiske målesystem, ofte brugt til skærme og rørdimensioner. 1 tommer = 2,54 cm.",
    href: "/laengde/tommer-til-cm",
    linkLabel: "Omregn tommer til cm",
  },
  {
    title: "Fod / foot",
    description:
      "Et amerikansk/britisk længdemål, der bl.a. bruges til at angive højde og flyvehøjde. 1 fod = 30,48 cm.",
    href: "/laengde/fod-til-meter",
    linkLabel: "Omregn fod til meter",
  },
  {
    title: "Yard",
    description:
      "Bruges bl.a. inden for sport som amerikansk fodbold og golf. 1 yard = 0,9144 meter.",
    href: "/laengde/yard-til-meter",
    linkLabel: "Omregn yard til meter",
  },
  {
    title: "Miles",
    description:
      "Det primære længdemål for afstand på landjorden i USA og Storbritannien. 1 mile ≈ 1,609 km.",
    href: "/laengde/miles-til-km",
    linkLabel: "Omregn miles til km",
  },
  {
    title: "Sømil",
    description:
      "Bruges til navigation til søs og i luften. 1 sømil = 1,852 km.",
    href: "/laengde/soemil-til-km",
    linkLabel: "Omregn sømil til km",
  },
]

const KNOWN_LENGTHS = [
  { emoji: "👣", label: "Et almindeligt skridt", value: "ca. 0,75 m" },
  { emoji: "📄", label: "Et A4-ark", value: "29,7 cm" },
  { emoji: "⚽", label: "En fodboldbane", value: "ca. 105 m" },
  { emoji: "🗼", label: "Eiffeltårnet", value: "330 m" },
  { emoji: "🏃", label: "En maratondistance", value: "42,195 km" },
  { emoji: "✈️", label: "En Boeing 747", value: "ca. 70,6 m" },
]

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
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
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
              Omregn fod til meter hurtigt og nemt.
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
              Omregn meter til fod hurtigt og nemt.
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
              Omregn højde fra fod og tommer til cm hurtigt og nemt.
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
              Omregn tommer (inch) til cm hurtigt og nemt.
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
              Omregn cm til tommer (inch) hurtigt og nemt.
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
              Omregn tommer til mm hurtigt og nemt.
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
              Omregn mm til tommer hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/meter-til-cm" className="hover:text-primary">
                Meter til cm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn meter til cm hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/cm-til-m" className="hover:text-primary">
                Cm til meter
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn cm til meter hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/miles-til-km" className="hover:text-primary">
                Miles til km
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn miles til km hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/km-til-miles" className="hover:text-primary">
                Km til miles
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn km til miles hurtigt og nemt.
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
              Omregn sømil til km hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/yard-til-meter"
                className="hover:text-primary"
              >
                Yard til meter
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn yard til meter hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/laengde/meter-til-yard"
                className="hover:text-primary"
              >
                Meter til yard
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn meter til yard hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/mm-til-m" className="hover:text-primary">
                Mm til meter
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn mm til meter hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/m-til-mm" className="hover:text-primary">
                Meter til mm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn meter til mm hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/mm-til-cm" className="hover:text-primary">
                Mm til cm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn mm til cm hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link href="/laengde/cm-til-mm" className="hover:text-primary">
                Cm til mm
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn cm til mm hurtigt og nemt.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-1 text-lg font-bold">
            Længdemål og måleenheder
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Der findes mange forskellige længdemål og måleenheder for
            længde rundt om i verden. Herunder kan du se de mest
            almindelige, og hvad de bruges til.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LENGTH_UNITS.map((unit) => (
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

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-1 text-lg font-bold">Kendte længder</h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Nogle gange er det nemmere at forstå længder, når man kan
            sammenligne med noget kendt. Her er nogle almindelige
            referencelængder.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {KNOWN_LENGTHS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border bg-background p-5 text-center shadow-sm"
              >
                <span className="text-2xl" aria-hidden="true">
                  {item.emoji}
                </span>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-lg font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
