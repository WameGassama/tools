"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const M2_PER_HEKTAR = 10000
const HEKTAR_PER_M2 = 1 / M2_PER_HEKTAR

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function HektarM2Converter({
  title = "Hektar til m²",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [hektar, setHektar] = useState("1")
  const [m2, setM2] = useState(formatNumber(M2_PER_HEKTAR))

  function handleHektarChange(value: string) {
    setHektar(value)
    const num = parseNumber(value)
    setM2(num === null ? "" : formatNumber(num * M2_PER_HEKTAR))
  }

  function handleM2Change(value: string) {
    setM2(value)
    const num = parseNumber(value)
    setHektar(num === null ? "" : formatNumber(num * HEKTAR_PER_M2))
  }

  const hektarField = (
    <div>
      <label
        htmlFor="hektar"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Hektar (ha)
      </label>
      <Input
        id="hektar"
        type="text"
        inputMode="decimal"
        value={hektar}
        onChange={(e) => handleHektarChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const m2Field = (
    <div>
      <label
        htmlFor="m2"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kvadratmeter (m²)
      </label>
      <Input
        id="m2"
        type="text"
        inputMode="decimal"
        value={m2}
        onChange={(e) => handleM2Change(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? m2Field : hektarField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? hektarField : m2Field}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 hektar = 10.000 m²
      </p>
    </div>
  )
}
