"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const CL_PER_L = 100
const L_PER_CL = 1 / CL_PER_L

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function ClLConverter({
  title = "Cl til liter",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [cl, setCl] = useState("1")
  const [l, setL] = useState(formatNumber(L_PER_CL))

  function handleClChange(value: string) {
    setCl(value)
    const num = parseNumber(value)
    setL(num === null ? "" : formatNumber(num * L_PER_CL))
  }

  function handleLChange(value: string) {
    setL(value)
    const num = parseNumber(value)
    setCl(num === null ? "" : formatNumber(num * CL_PER_L))
  }

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
        {reversed ? lField : clField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? clField : lField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 liter = 100 cl</p>
    </div>
  )
}
