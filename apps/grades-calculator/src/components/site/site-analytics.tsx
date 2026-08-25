"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { GoogleTagManager } from "@next/third-parties/google"

import { CookieConsent } from "@/src/components/site/cookie-consent"

const GTM_ID = "GTM-P3W287ZX"

// Indlejrede beregnere (/embed/*) kører inde i en fremmed hjemmesides iframe –
// de må hverken vise cookie-popuppen eller loade GTM, ellers modsiger vi vores
// eget løfte om "ingen cookies, ingen trackingscripts i iframen".
export function SiteAnalytics() {
  const pathname = usePathname()
  const isEmbed = pathname === "/embed" || pathname?.startsWith("/embed/")

  if (isEmbed) return null

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
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
    </>
  )
}
