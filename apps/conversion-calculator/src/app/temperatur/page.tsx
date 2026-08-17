import type { Metadata } from "next"
import Link from "next/link"

import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const TITLE = "Temperatur Omregner – Konverter Fahrenheit og Celsius Online"
const DESCRIPTION =
  "Gratis temperatur omregner. Konverter nemt mellem fahrenheit og celsius online."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/temperatur",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/temperatur",
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

const SCALES = [
  {
    title: "Celsius (°C)",
    description:
      "Den mest brugte temperatur skala i Danmark og de fleste andre lande. 0 °C er vands frysepunkt, og 100 °C er vands kogepunkt ved havoverfladen.",
  },
  {
    title: "Fahrenheit (°F)",
    description:
      "Bruges primært i USA. Skalaen har et andet nulpunkt og andre intervaller end celsius, så 32 °F svarer til vands frysepunkt.",
  },
  {
    title: "Kelvin (K)",
    description:
      "Den videnskabelige temperatur skala, hvor 0 K er absolut nulpunkt — det koldest mulige. Kelvin bruger ikke gradtegn.",
  },
]

const REFERENCE_POINTS = [
  {
    label: "Absolut nulpunkt",
    celsius: "−273,15",
    fahrenheit: "−459,67",
    kelvin: "0",
  },
  {
    label: "Vands frysepunkt",
    celsius: "0",
    fahrenheit: "32",
    kelvin: "273,15",
  },
  {
    label: "Stuetemperatur",
    celsius: "20",
    fahrenheit: "68",
    kelvin: "293,15",
  },
  {
    label: "Normal kropstemperatur",
    celsius: "37",
    fahrenheit: "98,6",
    kelvin: "310,15",
  },
  {
    label: "Vands kogepunkt",
    celsius: "100",
    fahrenheit: "212",
    kelvin: "373,15",
  },
]

export default function TemperaturPage() {
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
              Temperatur Omregner
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/70 sm:text-base">
              Med vores temperatur omregner konverterer du nemt mellem
              fahrenheit og celsius.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/temperatur/fahrenheit-til-celsius"
                className="hover:text-primary"
              >
                Fahrenheit til celsius
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn fahrenheit til celsius hurtigt og nemt.
            </p>
          </div>
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h2 className="mb-1 text-lg font-bold">
              <Link
                href="/temperatur/celsius-til-fahrenheit"
                className="hover:text-primary"
              >
                Celsius til fahrenheit
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Omregn celsius til fahrenheit hurtigt og nemt.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <h2 className="mb-1 text-lg font-bold">
            Temperaturskalaer forklaret
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Der findes flere forskellige temperatur skalaer i verden. Herunder
            kan du se, hvad de tre mest almindelige skalaer betyder, og
            hvordan de svarer til hinanden ved centrale referencepunkter.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {SCALES.map((scale) => (
              <div key={scale.title}>
                <h3 className="mb-1.5 font-semibold">{scale.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {scale.description}
                </p>
              </div>
            ))}
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Referencepunkt</TableHead>
                <TableHead>Celsius</TableHead>
                <TableHead>Fahrenheit</TableHead>
                <TableHead>Kelvin</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {REFERENCE_POINTS.map((point) => (
                <TableRow key={point.label}>
                  <TableCell className="font-medium">
                    {point.label}
                  </TableCell>
                  <TableCell>{point.celsius} °C</TableCell>
                  <TableCell>{point.fahrenheit} °F</TableCell>
                  <TableCell>{point.kelvin} K</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
