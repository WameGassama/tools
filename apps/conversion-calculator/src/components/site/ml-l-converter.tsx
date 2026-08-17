"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const ML_PER_L = 1000
const L_PER_ML = 1 / ML_PER_L

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function MlLConverter({
  title = "Ml til liter",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [ml, setMl] = useState("1")
  const [l, setL] = useState(formatNumber(L_PER_ML))

  function handleMlChange(value: string) {
    setMl(value)
    const num = parseNumber(value)
    setL(num === null ? "" : formatNumber(num * L_PER_ML))
  }

  function handleLChange(value: string) {
    setL(value)
    const num = parseNumber(value)
    setMl(num === null ? "" : formatNumber(num * ML_PER_L))
  }

  const mlField = (
    <div>
      <label
        htmlFor="ml"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Milliliter (ml)
      </label>
      <Input
        id="ml"
        type="text"
        inputMode="decimal"
        value={ml}
        onChange={(e) => handleMlChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const lField = (
    <div>
      <label
        htmlFor="l"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Liter (l)
      </label>
      <Input
        id="l"
        type="text"
        inputMode="decimal"
        value={l}
        onChange={(e) => handleLChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? lField : mlField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? mlField : lField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 liter = 1.000 ml</p>
    </div>
  )
}
