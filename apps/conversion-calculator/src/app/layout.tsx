import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const SITE_URL = "https://www.omregning.dk"
const SITE_NAME = "omregning.dk"
const TITLE = "Omregner – Gratis Online Omregner til Længde, Vægt, Volumen og Mere"
const DESCRIPTION =
  "Gratis omregner til alle dine omregninger. Omregn nemt mellem længde, vægt, temperatur, areal, hastighed, volumen og tryk – direkte i browseren, uden login."

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
      <body className="flex min-h-full flex-col bg-muted">{children}</body>
      <GoogleAnalytics gaId="G-XXXXXXX" />
    </html>
  )
}
