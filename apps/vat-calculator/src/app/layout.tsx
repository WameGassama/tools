import type { Metadata } from "next"
import {
  Familjen_Grotesk,
  JetBrains_Mono,
  Source_Sans_3,
} from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { GoogleTagManager } from "@next/third-parties/google"

import { CookieConsent } from "@/src/components/site/cookie-consent"

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const SITE_URL = "https://www.moms-beregner.dk"
const SITE_NAME = "moms-beregner.dk"
const TITLE = "Momsberegner – beregn 25% moms af et beløb | MomsBeregner"
const DESCRIPTION =
  "Gratis momsberegner: udregn moms af et beløb med 25%, 12,5% eller 6,25% moms – både inklusiv og eksklusiv moms. Hurtigt, uden login."

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
      className={`h-full font-sans antialiased ${familjenGrotesk.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <GoogleTagManager gtmId="GTM-5R84ZTB3" />
      <body className="flex min-h-full flex-col bg-background text-foreground">
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
