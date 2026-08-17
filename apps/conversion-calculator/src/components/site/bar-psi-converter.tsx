"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const PSI_PER_BAR = 14.5037738
const BAR_PER_PSI = 1 / PSI_PER_BAR

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(3).replace(/\.?0+$/, "")
}

export function BarPsiConverter({
  title = "Psi til bar",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [psi, setPsi] = useState("1")
  const [bar, setBar] = useState(formatNumber(BAR_PER_PSI))

  function handlePsiChange(value: string) {
    setPsi(value)
    const num = parseNumber(value)
    setBar(num === null ? "" : formatNumber(num * BAR_PER_PSI))
  }

  function handleBarChange(value: string) {
    setBar(value)
    const num = parseNumber(value)
    setPsi(num === null ? "" : formatNumber(num * PSI_PER_BAR))
  }

  const psiField = (
    <div>
      <label
        htmlFor="psi"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Psi
      </label>
      <Input
        id="psi"
        type="text"
        inputMode="decimal"
        value={psi}
        onChange={(e) => handlePsiChange(e.target.value)}
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
        {reversed ? barField : psiField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? psiField : barField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 bar = 14,5 psi</p>
    </div>
  )
}
