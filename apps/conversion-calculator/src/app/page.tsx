import type { Metadata } from "next"

import { ConverterDirectory } from "@/src/components/site/converter-directory"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const TITLE =
  "Omregner – Gratis Online Omregner til Længde, Vægt, Volumen og Mere"
const DESCRIPTION =
  "Gratis omregner til alle dine omregninger. Omregn nemt mellem længde, vægt, temperatur, areal, hastighed, volumen og tryk."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
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

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <ConverterDirectory />
      </section>
      <SiteFooter />
    </div>
  )
}
