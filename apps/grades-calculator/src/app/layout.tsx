import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { SiteAnalytics } from "@/src/components/site/site-analytics"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const SITE_NAME = "Gennemsnitsberegner.dk"
const TITLE =
  "Gennemsnitsberegner – Beregn dit karaktergennemsnit nemt og hurtigt"
const DESCRIPTION =
  "Gratis gennemsnitsberegner til den danske 7-trinsskala. Beregn dit vægtede karaktergennemsnit ud fra ECTS-point på få sekunder (ingen data gemmes)."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="da"
      className={`h-full font-sans antialiased ${inter.variable}`}
    >
      <body className="flex min-h-full flex-col bg-muted">
        {children}
        <SiteAnalytics />
      </body>
    </html>
  )
}
