"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KMH_PER_KNOT = 1.852
const KNOTS_PER_KMH = 1 / KMH_PER_KNOT

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(3).replace(/\.?0+$/, "")
}

export function KnotKmhConverter({
  title = "Knob til km/t",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [knots, setKnots] = useState("1")
  const [kmh, setKmh] = useState(formatNumber(KMH_PER_KNOT))

  function handleKnotsChange(value: string) {
    setKnots(value)
    const num = parseNumber(value)
    setKmh(num === null ? "" : formatNumber(num * KMH_PER_KNOT))
  }

  function handleKmhChange(value: string) {
    setKmh(value)
    const num = parseNumber(value)
    setKnots(num === null ? "" : formatNumber(num * KNOTS_PER_KMH))
  }

  const knotsField = (
    <div>
      <label
        htmlFor="knots"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Knob (kn)
      </label>
      <Input
        id="knots"
        type="text"
        inputMode="decimal"
        value={knots}
        onChange={(e) => handleKnotsChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const kmhField = (
    <div>
      <label
        htmlFor="kmh"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilometer i timen (km/t)
      </label>
      <Input
        id="kmh"
        type="text"
        inputMode="decimal"
        value={kmh}
        onChange={(e) => handleKmhChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? kmhField : knotsField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? knotsField : kmhField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 knob = 1,852 km/t
      </p>
    </div>
  )
}
