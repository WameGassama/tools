"use client"

import { Cookie } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@workspace/ui/components/button"

const CONSENT_KEY = "hvadfarjegudbetalt-cookie-consent"
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180

type Consent = "accepted" | "rejected"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function getConsentCookie(): string | null {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_KEY}=`))
  return match ? decodeURIComponent(match.split("=")[1]!) : null
}

function setConsentCookie(choice: Consent) {
  document.cookie = `${CONSENT_KEY}=${choice}; max-age=${CONSENT_MAX_AGE_SECONDS}; path=/; SameSite=Lax`
}

function updateConsent(choice: Consent) {
  const granted = choice === "accepted" ? "granted" : "denied"
  window.gtag?.("consent", "update", {
    ad_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    analytics_storage: granted,
  })
}

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const stored = getConsentCookie()
    if (stored === "accepted" || stored === "rejected") {
      updateConsent(stored)
    } else {
      setShowBanner(true)
    }
  }, [])

  function handleChoice(choice: Consent) {
    setConsentCookie(choice)
    updateConsent(choice)

    if (choice === "accepted") {
      window.dataLayer = window.dataLayer ?? []
      window.dataLayer.push({ event: "consent_granted" })
    }

    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-2xl border bg-background p-6 shadow-2xl sm:bottom-6 sm:right-6">
      <div className="mb-3 flex items-center gap-2">
        <Cookie className="h-5 w-5 text-primary" aria-hidden="true" />
        <span className="text-sm font-semibold text-muted-foreground">
          Cookies
        </span>
      </div>
      <p className="mb-5 text-sm leading-relaxed text-foreground">
        Vi bruger cookies på vores hjemmeside til at forbedre din
        brugeroplevelse, tilbyde personligt tilpasset indhold og analysere
        vores trafik.
      </p>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => handleChoice("accepted")}>
          Accepter alle
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleChoice("rejected")}
        >
          Afvis ikke-nødvendige
        </Button>
      </div>
    </div>
  )
}
