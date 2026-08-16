"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KMT_PER_MPH = 1.609344
const MPH_PER_KMT = 1 / KMT_PER_MPH

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(3).replace(/\.?0+$/, "")
}

export function MphKmtConverter({
  title = "Mph til km/t",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [mph, setMph] = useState("1")
  const [kmt, setKmt] = useState(formatNumber(KMT_PER_MPH))

  function handleMphChange(value: string) {
    setMph(value)
    const num = parseNumber(value)
    setKmt(num === null ? "" : formatNumber(num * KMT_PER_MPH))
  }

  function handleKmtChange(value: string) {
    setKmt(value)
    const num = parseNumber(value)
    setMph(num === null ? "" : formatNumber(num * MPH_PER_KMT))
  }

  const mphField = (
    <div>
      <label
        htmlFor="mph"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Miles i timen (mph)
      </label>
      <Input
        id="mph"
        type="text"
        inputMode="decimal"
        value={mph}
        onChange={(e) => handleMphChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const kmtField = (
    <div>
      <label
        htmlFor="mph-kmt"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilometer i timen (km/t)
      </label>
      <Input
        id="mph-kmt"
        type="text"
        inputMode="decimal"
        value={kmt}
        onChange={(e) => handleKmtChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? kmtField : mphField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? mphField : kmtField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 mph = 1,609 km/t</p>
    </div>
  )
}
