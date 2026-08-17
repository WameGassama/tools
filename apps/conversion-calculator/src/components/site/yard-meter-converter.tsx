"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const METERS_PER_YARD = 0.9144
const YARDS_PER_METER = 1 / METERS_PER_YARD

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function YardMeterConverter({
  title = "Yard til meter",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [yards, setYards] = useState("1")
  const [meters, setMeters] = useState(formatNumber(METERS_PER_YARD))

  function handleYardsChange(value: string) {
    setYards(value)
    const num = parseNumber(value)
    setMeters(num === null ? "" : formatNumber(num * METERS_PER_YARD))
  }

  function handleMetersChange(value: string) {
    setMeters(value)
    const num = parseNumber(value)
    setYards(num === null ? "" : formatNumber(num * YARDS_PER_METER))
  }

  const yardsField = (
    <div>
      <label
        htmlFor="yards"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Yard (yd)
      </label>
      <Input
        id="yards"
        type="text"
        inputMode="decimal"
        value={yards}
        onChange={(e) => handleYardsChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const metersField = (
    <div>
      <label
        htmlFor="meters"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Meter (m)
      </label>
      <Input
        id="meters"
        type="text"
        inputMode="decimal"
        value={meters}
        onChange={(e) => handleMetersChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? metersField : yardsField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? yardsField : metersField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 yard = 0,9144 meter
      </p>
    </div>
  )
}
