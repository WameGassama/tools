"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const ML_PER_DL = 100
const DL_PER_ML = 1 / ML_PER_DL

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function MlDlConverter({
  title = "Ml til dl",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [ml, setMl] = useState("1")
  const [dl, setDl] = useState(formatNumber(DL_PER_ML))

  function handleMlChange(value: string) {
    setMl(value)
    const num = parseNumber(value)
    setDl(num === null ? "" : formatNumber(num * DL_PER_ML))
  }

  function handleDlChange(value: string) {
    setDl(value)
    const num = parseNumber(value)
    setMl(num === null ? "" : formatNumber(num * ML_PER_DL))
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

  const dlField = (
    <div>
      <label
        htmlFor="dl"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Deciliter (dl)
      </label>
      <Input
        id="dl"
        type="text"
        inputMode="decimal"
        value={dl}
        onChange={(e) => handleDlChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? dlField : mlField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? mlField : dlField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 dl = 100 ml</p>
    </div>
  )
}
