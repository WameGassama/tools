"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const GRAM_PER_KG = 1000
const KG_PER_GRAM = 1 / GRAM_PER_KG

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function GramKgConverter({
  title = "Gram til kg",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [gram, setGram] = useState("1")
  const [kg, setKg] = useState(formatNumber(KG_PER_GRAM))

  function handleGramChange(value: string) {
    setGram(value)
    const num = parseNumber(value)
    setKg(num === null ? "" : formatNumber(num * KG_PER_GRAM))
  }

  function handleKgChange(value: string) {
    setKg(value)
    const num = parseNumber(value)
    setGram(num === null ? "" : formatNumber(num * GRAM_PER_KG))
  }

  const gramField = (
    <div>
      <label
        htmlFor="gram"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Gram (g)
      </label>
      <Input
        id="gram"
        type="text"
        inputMode="decimal"
        value={gram}
        onChange={(e) => handleGramChange(e.target.value)}
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
        Kilogram (kg)
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
        {reversed ? kgField : gramField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? gramField : kgField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 kg = 1.000 gram</p>
    </div>
  )
}
