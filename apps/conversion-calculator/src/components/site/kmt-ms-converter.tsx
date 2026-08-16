"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KMT_PER_MS = 3.6
const MS_PER_KMT = 1 / KMT_PER_MS

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(3).replace(/\.?0+$/, "")
}

export function KmtMsConverter({
  title = "Km/t til m/s",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [kmt, setKmt] = useState("1")
  const [ms, setMs] = useState(formatNumber(MS_PER_KMT))

  function handleKmtChange(value: string) {
    setKmt(value)
    const num = parseNumber(value)
    setMs(num === null ? "" : formatNumber(num * MS_PER_KMT))
  }

  function handleMsChange(value: string) {
    setMs(value)
    const num = parseNumber(value)
    setKmt(num === null ? "" : formatNumber(num * KMT_PER_MS))
  }

  const kmtField = (
    <div>
      <label
        htmlFor="kmt"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilometer i timen (km/t)
      </label>
      <Input
        id="kmt"
        type="text"
        inputMode="decimal"
        value={kmt}
        onChange={(e) => handleKmtChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const msField = (
    <div>
      <label
        htmlFor="ms"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Meter i sekundet (m/s)
      </label>
      <Input
        id="ms"
        type="text"
        inputMode="decimal"
        value={ms}
        onChange={(e) => handleMsChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? msField : kmtField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? kmtField : msField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 m/s = 3,6 km/t</p>
    </div>
  )
}
