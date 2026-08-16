"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KM2_PER_HEKTAR = 0.01
const HEKTAR_PER_KM2 = 1 / KM2_PER_HEKTAR

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function HektarKm2Converter({
  title = "Hektar til km²",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [hektar, setHektar] = useState("100")
  const [km2, setKm2] = useState(formatNumber(100 * KM2_PER_HEKTAR))

  function handleHektarChange(value: string) {
    setHektar(value)
    const num = parseNumber(value)
    setKm2(num === null ? "" : formatNumber(num * KM2_PER_HEKTAR))
  }

  function handleKm2Change(value: string) {
    setKm2(value)
    const num = parseNumber(value)
    setHektar(num === null ? "" : formatNumber(num * HEKTAR_PER_KM2))
  }

  const hektarField = (
    <div>
      <label
        htmlFor="hektar-km2"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Hektar (ha)
      </label>
      <Input
        id="hektar-km2"
        type="text"
        inputMode="decimal"
        value={hektar}
        onChange={(e) => handleHektarChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const km2Field = (
    <div>
      <label
        htmlFor="km2"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kvadratkilometer (km²)
      </label>
      <Input
        id="km2"
        type="text"
        inputMode="decimal"
        value={km2}
        onChange={(e) => handleKm2Change(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? km2Field : hektarField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? hektarField : km2Field}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 hektar = 0,01 km² (1 km² = 100 hektar)
      </p>
    </div>
  )
}
