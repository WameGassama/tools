"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KPA_PER_BAR = 100
const BAR_PER_KPA = 1 / KPA_PER_BAR

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function KpaBarConverter({
  title = "Kpa til bar",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [kpa, setKpa] = useState("1")
  const [bar, setBar] = useState(formatNumber(BAR_PER_KPA))

  function handleKpaChange(value: string) {
    setKpa(value)
    const num = parseNumber(value)
    setBar(num === null ? "" : formatNumber(num * BAR_PER_KPA))
  }

  function handleBarChange(value: string) {
    setBar(value)
    const num = parseNumber(value)
    setKpa(num === null ? "" : formatNumber(num * KPA_PER_BAR))
  }

  const kpaField = (
    <div>
      <label
        htmlFor="kpa"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilopascal (kPa)
      </label>
      <Input
        id="kpa"
        type="text"
        inputMode="decimal"
        value={kpa}
        onChange={(e) => handleKpaChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const barField = (
    <div>
      <label
        htmlFor="bar"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Bar
      </label>
      <Input
        id="bar"
        type="text"
        inputMode="decimal"
        value={bar}
        onChange={(e) => handleBarChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? barField : kpaField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? kpaField : barField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 bar = 100 kPa</p>
    </div>
  )
}
