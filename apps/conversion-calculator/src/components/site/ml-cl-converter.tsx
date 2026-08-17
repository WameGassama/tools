"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const ML_PER_CL = 10
const CL_PER_ML = 1 / ML_PER_CL

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function MlClConverter({
  title = "Ml til cl",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [ml, setMl] = useState("1")
  const [cl, setCl] = useState(formatNumber(CL_PER_ML))

  function handleMlChange(value: string) {
    setMl(value)
    const num = parseNumber(value)
    setCl(num === null ? "" : formatNumber(num * CL_PER_ML))
  }

  function handleClChange(value: string) {
    setCl(value)
    const num = parseNumber(value)
    setMl(num === null ? "" : formatNumber(num * ML_PER_CL))
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

  const clField = (
    <div>
      <label
        htmlFor="cl"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Centiliter (cl)
      </label>
      <Input
        id="cl"
        type="text"
        inputMode="decimal"
        value={cl}
        onChange={(e) => handleClChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? clField : mlField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? mlField : clField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 cl = 10 ml</p>
    </div>
  )
}
