"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const MM_PER_METER = 1000
const METER_PER_MM = 1 / MM_PER_METER

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function MmMConverter({
  title = "Mm til meter",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [mm, setMm] = useState("1")
  const [meter, setMeter] = useState(formatNumber(METER_PER_MM))

  function handleMmChange(value: string) {
    setMm(value)
    const num = parseNumber(value)
    setMeter(num === null ? "" : formatNumber(num * METER_PER_MM))
  }

  function handleMeterChange(value: string) {
    setMeter(value)
    const num = parseNumber(value)
    setMm(num === null ? "" : formatNumber(num * MM_PER_METER))
  }

  const mmField = (
    <div>
      <label
        htmlFor="mm"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Millimeter (mm)
      </label>
      <Input
        id="mm"
        type="text"
        inputMode="decimal"
        value={mm}
        onChange={(e) => handleMmChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const meterField = (
    <div>
      <label
        htmlFor="meter"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Meter (m)
      </label>
      <Input
        id="meter"
        type="text"
        inputMode="decimal"
        value={meter}
        onChange={(e) => handleMeterChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? meterField : mmField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? mmField : meterField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 meter = 1.000 mm</p>
    </div>
  )
}
