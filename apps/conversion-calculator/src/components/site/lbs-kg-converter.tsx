"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const KG_PER_LB = 0.45359237
const LBS_PER_KG = 1 / KG_PER_LB

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function LbsKgConverter({
  title = "Lbs til kg",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [lbs, setLbs] = useState("1")
  const [kg, setKg] = useState(formatNumber(KG_PER_LB))

  function handleLbsChange(value: string) {
    setLbs(value)
    const num = parseNumber(value)
    setKg(num === null ? "" : formatNumber(num * KG_PER_LB))
  }

  function handleKgChange(value: string) {
    setKg(value)
    const num = parseNumber(value)
    setLbs(num === null ? "" : formatNumber(num * LBS_PER_KG))
  }

  const lbsField = (
    <div>
      <label
        htmlFor="lbs"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Pund (lbs)
      </label>
      <Input
        id="lbs"
        type="text"
        inputMode="decimal"
        value={lbs}
        onChange={(e) => handleLbsChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const kgField = (
    <div>
      <label
        htmlFor="kg"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Kilo (kg)
      </label>
      <Input
        id="kg"
        type="text"
        inputMode="decimal"
        value={kg}
        onChange={(e) => handleKgChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? kgField : lbsField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? lbsField : kgField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 pund = 0,4536 kg
      </p>
    </div>
  )
}
