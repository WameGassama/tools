import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"

import { CookieConsent } from "@/src/components/site/cookie-consent"

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
      <GoogleTagManager gtmId="GTM-P3W287ZX" />
      <body className="flex min-h-full flex-col bg-muted">
        {children}
        <CookieConsent />
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
      </body>
    </html>
  )
}
