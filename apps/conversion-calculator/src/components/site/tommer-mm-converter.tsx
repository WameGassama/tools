"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const MM_PER_TOMME = 25.4
const TOMME_PER_MM = 1 / MM_PER_TOMME

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function TommerMmConverter({
  title = "Tommer til mm",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [tommer, setTommer] = useState("1")
  const [mm, setMm] = useState(formatNumber(MM_PER_TOMME))

  function handleTommerChange(value: string) {
    setTommer(value)
    const num = parseNumber(value)
    setMm(num === null ? "" : formatNumber(num * MM_PER_TOMME))
  }

  function handleMmChange(value: string) {
    setMm(value)
    const num = parseNumber(value)
    setTommer(num === null ? "" : formatNumber(num * TOMME_PER_MM))
  }

  const tommerField = (
    <div>
      <label
        htmlFor="tommer-mm"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Tommer (in)
      </label>
      <Input
        id="tommer-mm"
        type="text"
        inputMode="decimal"
        value={tommer}
        onChange={(e) => handleTommerChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const mmField = (
    <div>
      <label
        htmlFor="mm-tommer"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Millimeter (mm)
      </label>
      <Input
        id="mm-tommer"
        type="text"
        inputMode="decimal"
        value={mm}
        onChange={(e) => handleMmChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? mmField : tommerField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? tommerField : mmField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 tommer = 25,4 mm</p>
    </div>
  )
}
