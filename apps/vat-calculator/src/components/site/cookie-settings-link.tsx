"use client"

import * as CC from "vanilla-cookieconsent"

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => CC.showPreferences()} className={className}>
      Cookie
    </button>
  )
}
