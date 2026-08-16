"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const CM_PER_FOOT = 30.48
const CM_PER_INCH = 2.54

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(2).replace(/\.?0+$/, "")
}

export function HeightConverter() {
  const [feet, setFeet] = useState("5")
  const [inches, setInches] = useState("10")
  const [cm, setCm] = useState(formatNumber(5 * CM_PER_FOOT + 10 * CM_PER_INCH))

  function handleFeetChange(value: string) {
    setFeet(value)
    const f = parseNumber(value)
    const i = parseNumber(inches)
    if (f === null && i === null) {
      setCm("")
      return
    }
    setCm(formatNumber((f ?? 0) * CM_PER_FOOT + (i ?? 0) * CM_PER_INCH))
  }

  function handleInchesChange(value: string) {
    setInches(value)
    const f = parseNumber(feet)
    const i = parseNumber(value)
    if (f === null && i === null) {
      setCm("")
      return
    }
    setCm(formatNumber((f ?? 0) * CM_PER_FOOT + (i ?? 0) * CM_PER_INCH))
  }

  function handleCmChange(value: string) {
    setCm(value)
    const num = parseNumber(value)
    if (num === null) {
      setFeet("")
      setInches("")
      return
    }
    const totalInches = num / CM_PER_INCH
    const wholeFeet = Math.floor(totalInches / 12)
    const remainingInches = totalInches - wholeFeet * 12
    setFeet(String(wholeFeet))
    setInches(formatNumber(remainingInches))
  }

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">Højde omregner</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_1fr_auto_1fr]">
        <div>
          <label
            htmlFor="height-feet"
            className="mb-1.5 block text-sm font-medium text-muted-foreground"
          >
            Fod
          </label>
          <Input
            id="height-feet"
            type="text"
            inputMode="decimal"
            value={feet}
            onChange={(e) => handleFeetChange(e.target.value)}
            className="h-14 text-lg"
          />
        </div>
        <div>
          <label
            htmlFor="height-inches"
            className="mb-1.5 block text-sm font-medium text-muted-foreground"
          >
            Tommer
          </label>
          <Input
            id="height-inches"
            type="text"
            inputMode="decimal"
            value={inches}
            onChange={(e) => handleInchesChange(e.target.value)}
            className="h-14 text-lg"
          />
        </div>
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        <div>
          <label
            htmlFor="height-cm"
            className="mb-1.5 block text-sm font-medium text-muted-foreground"
          >
            Centimeter (cm)
          </label>
          <Input
            id="height-cm"
            type="text"
            inputMode="decimal"
            value={cm}
            onChange={(e) => handleCmChange(e.target.value)}
            className="h-14 text-lg"
          />
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 fod = 30,48 cm, 1 tommer = 2,54 cm
      </p>
    </div>
  )
}
