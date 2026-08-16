"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const CM_PER_INCH = 2.54
const INCH_PER_CM = 1 / CM_PER_INCH

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function InchCmConverter({
  title = "Tommer til cm",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [inch, setInch] = useState("1")
  const [cm, setCm] = useState(formatNumber(CM_PER_INCH))

  function handleInchChange(value: string) {
    setInch(value)
    const num = parseNumber(value)
    setCm(num === null ? "" : formatNumber(num * CM_PER_INCH))
  }

  function handleCmChange(value: string) {
    setCm(value)
    const num = parseNumber(value)
    setInch(num === null ? "" : formatNumber(num * INCH_PER_CM))
  }

  const inchField = (
    <div>
      <label
        htmlFor="inch"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Tommer (in)
      </label>
      <Input
        id="inch"
        type="text"
        inputMode="decimal"
        value={inch}
        onChange={(e) => handleInchChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const cmField = (
    <div>
      <label
        htmlFor="cm"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Centimeter (cm)
      </label>
      <Input
        id="cm"
        type="text"
        inputMode="decimal"
        value={cm}
        onChange={(e) => handleCmChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? cmField : inchField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? inchField : cmField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">1 tommer = 2,54 cm</p>
    </div>
  )
}
