"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KM_PER_MILE = 1.609344
const MILE_PER_KM = 1 / KM_PER_MILE

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function MileKmConverter({
  title = "Miles til km",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [miles, setMiles] = useState("1")
  const [km, setKm] = useState(formatNumber(KM_PER_MILE))

  function handleMilesChange(value: string) {
    setMiles(value)
    const num = parseNumber(value)
    setKm(num === null ? "" : formatNumber(num * KM_PER_MILE))
  }

  function handleKmChange(value: string) {
    setKm(value)
    const num = parseNumber(value)
    setMiles(num === null ? "" : formatNumber(num * MILE_PER_KM))
  }

  const milesField = (
    <div>
      <label
        htmlFor="miles"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Miles (mi)
      </label>
      <Input
        id="miles"
        type="text"
        inputMode="decimal"
        value={miles}
        onChange={(e) => handleMilesChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const kmField = (
    <div>
      <label
        htmlFor="km"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilometer (km)
      </label>
      <Input
        id="km"
        type="text"
        inputMode="decimal"
        value={km}
        onChange={(e) => handleKmChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? kmField : milesField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? milesField : kmField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 mile = 1,609 km</p>
    </div>
  )
}
