"use client"

import { useEffect } from "react"
import * as CC from "vanilla-cookieconsent"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

function updateGtagConsent() {
  const granted = CC.acceptedCategory("analytics") ? "granted" : "denied"
  window.gtag?.("consent", "update", {
    analytics_storage: granted,
  })
}

export function CookieConsent() {
  useEffect(() => {
    CC.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {},
      },
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom right",
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
        },
      },
      language: {
        default: "da",
        translations: {
          da: {
            consentModal: {
              title: "Cookies",
              description:
                "Vi bruger cookies til at forbedre din oplevelse på siden og til at forstå, hvordan omregneren bliver brugt.",
              acceptAllBtn: "Accepter alle",
              acceptNecessaryBtn: "Afvis ikke nødvendige",
              showPreferencesBtn: "Administrer indstillinger",
            },
            preferencesModal: {
              title: "Administrer cookieindstillinger",
              acceptAllBtn: "Accepter alle",
              acceptNecessaryBtn: "Afvis ikke nødvendige",
              savePreferencesBtn: "Gem indstillinger",
              sections: [
                {
                  title: "Nødvendige",
                  description:
                    "Disse cookies er nødvendige for, at siden kan fungere, og kan ikke fravælges.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analyse",
                  description:
                    "Hjælper os med at forstå, hvordan siden bliver brugt, via Google Analytics.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
      onFirstConsent: () => updateGtagConsent(),
      onConsent: () => updateGtagConsent(),
      onChange: () => updateGtagConsent(),
    })
  }, [])

  return null
}
