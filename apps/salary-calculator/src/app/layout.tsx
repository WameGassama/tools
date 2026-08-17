import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { cn } from "@/src/lib/utils"
import { LanguageProvider } from "@/src/lib/i18n/language-context"
import { GoogleTagManager } from "@next/third-parties/google"

import { CookieConsent } from "@/src/components/site/cookie-consent"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const SITE_URL = "https://www.hvadfårjegudbetalt.dk"
const SITE_NAME = "Hvad får jeg udbetalt"
const TITLE =
  "Hvad får jeg udbetalt efter skat? – Beregn din skat og nettoløn 2026"
const DESCRIPTION =
  "Se hvad du får udbetalt efter skat. Vores lønberegner tager højde for AM-bidrag, bund-, mellem-, top- og kommuneskat — altid med de gældende 2026-satser."

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
  icons: {
    icon: "/hfu-icon-filled.svg",
    shortcut: "/hfu-icon-filled.svg",
    apple: "/hfu-icon-filled.svg",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="da"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <GoogleTagManager gtmId="GTM-5BTB8LX5" />
      <body className="flex min-h-full flex-col bg-muted">
        <LanguageProvider>{children}</LanguageProvider>
        <CookieConsent />
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            var storedConsent = null;
            var match = document.cookie.match(/(?:^|; )hvadfarjegudbetalt-cookie-consent=([^;]*)/);
            if (match) {
              storedConsent = decodeURIComponent(match[1]);
            }
            var initialState = storedConsent === 'accepted' ? 'granted' : 'denied';
            gtag('consent', 'default', {
              'ad_storage': initialState,
              'ad_user_data': initialState,
              'ad_personalization': initialState,
              'analytics_storage': initialState,
              'wait_for_update': 500
            });
          `}
        </Script>
      </body>
    </html>
  )
}
