"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(2).replace(/\.?0+$/, "")
}

function fahrenheitToCelsius(f: number) {
  return ((f - 32) * 5) / 9
}

function celsiusToFahrenheit(c: number) {
  return (c * 9) / 5 + 32
}

export function FahrenheitCelsiusConverter({
  title = "Fahrenheit til celsius",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [fahrenheit, setFahrenheit] = useState("350")
  const [celsius, setCelsius] = useState(formatNumber(fahrenheitToCelsius(350)))

  function handleFahrenheitChange(value: string) {
    setFahrenheit(value)
    const num = parseNumber(value)
    setCelsius(num === null ? "" : formatNumber(fahrenheitToCelsius(num)))
  }

  function handleCelsiusChange(value: string) {
    setCelsius(value)
    const num = parseNumber(value)
    setFahrenheit(num === null ? "" : formatNumber(celsiusToFahrenheit(num)))
  }

  const fahrenheitField = (
    <div>
      <label
        htmlFor="fahrenheit"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Fahrenheit (°F)
      </label>
      <Input
        id="fahrenheit"
        type="text"
        inputMode="decimal"
        value={fahrenheit}
        onChange={(e) => handleFahrenheitChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const celsiusField = (
    <div>
      <label
        htmlFor="celsius"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Celsius (°C)
      </label>
      <Input
        id="celsius"
        type="text"
        inputMode="decimal"
        value={celsius}
        onChange={(e) => handleCelsiusChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? celsiusField : fahrenheitField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? fahrenheitField : celsiusField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        {reversed
          ? "Formel: °F = °C × 9/5 + 32"
          : "Formel: °C = (°F − 32) × 5/9"}
      </p>
    </div>
  )
}
