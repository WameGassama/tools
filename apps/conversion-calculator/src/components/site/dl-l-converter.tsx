"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const DL_PER_L = 10
const L_PER_DL = 1 / DL_PER_L

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function DlLConverter({
  title = "Dl til liter",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [dl, setDl] = useState("1")
  const [l, setL] = useState(formatNumber(L_PER_DL))

  function handleDlChange(value: string) {
    setDl(value)
    const num = parseNumber(value)
    setL(num === null ? "" : formatNumber(num * L_PER_DL))
  }

  function handleLChange(value: string) {
    setL(value)
    const num = parseNumber(value)
    setDl(num === null ? "" : formatNumber(num * DL_PER_L))
  }

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
        {reversed ? lField : dlField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? dlField : lField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 liter = 10 dl</p>
    </div>
  )
}
