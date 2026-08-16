"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KM_PER_SOEMIL = 1.852
const SOEMIL_PER_KM = 1 / KM_PER_SOEMIL

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function SoemilKmConverter({
  title = "Sømil til km",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [soemil, setSoemil] = useState("1")
  const [km, setKm] = useState(formatNumber(KM_PER_SOEMIL))

  function handleSoemilChange(value: string) {
    setSoemil(value)
    const num = parseNumber(value)
    setKm(num === null ? "" : formatNumber(num * KM_PER_SOEMIL))
  }

  function handleKmChange(value: string) {
    setKm(value)
    const num = parseNumber(value)
    setSoemil(num === null ? "" : formatNumber(num * SOEMIL_PER_KM))
  }

  const soemilField = (
    <div>
      <label
        htmlFor="soemil"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Sømil (nm)
      </label>
      <Input
        id="soemil"
        type="text"
        inputMode="decimal"
        value={soemil}
        onChange={(e) => handleSoemilChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const kmField = (
    <div>
      <label
        htmlFor="soemil-km"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilometer (km)
      </label>
      <Input
        id="soemil-km"
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
        {reversed ? kmField : soemilField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? soemilField : kmField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 sømil = 1,852 km</p>
    </div>
  )
}
