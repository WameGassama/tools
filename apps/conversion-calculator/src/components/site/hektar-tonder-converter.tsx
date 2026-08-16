"use client"

import { useState } from "react"

import { Input } from "@workspace/ui/components/input"

const HEKTAR_PER_TONDE = 0.5516
const TONDER_PER_HEKTAR = 1 / HEKTAR_PER_TONDE

function parseNumber(value: string) {
  const normalized = value.replace(",", ".")
  const num = Number.parseFloat(normalized)
  return Number.isFinite(num) ? num : null
}

function formatNumber(num: number) {
  return num.toFixed(4).replace(/\.?0+$/, "")
}

export function HektarTonderConverter({
  title = "Hektar til tønder land",
  reversed = false,
}: {
  title?: string
  reversed?: boolean
}) {
  const [hektar, setHektar] = useState("1")
  const [tonder, setTonder] = useState(formatNumber(1 * TONDER_PER_HEKTAR))

  function handleHektarChange(value: string) {
    setHektar(value)
    const num = parseNumber(value)
    setTonder(num === null ? "" : formatNumber(num * TONDER_PER_HEKTAR))
  }

  function handleTonderChange(value: string) {
    setTonder(value)
    const num = parseNumber(value)
    setHektar(num === null ? "" : formatNumber(num * HEKTAR_PER_TONDE))
  }

  const hektarField = (
    <div>
      <label
        htmlFor="hektar-tonder"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Hektar (ha)
      </label>
      <Input
        id="hektar-tonder"
        type="text"
        inputMode="decimal"
        value={hektar}
        onChange={(e) => handleHektarChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  const tonderField = (
    <div>
      <label
        htmlFor="tonder"
        className="mb-1.5 block text-sm font-medium text-muted-foreground"
      >
        Tønder land
      </label>
      <Input
        id="tonder"
        type="text"
        inputMode="decimal"
        value={tonder}
        onChange={(e) => handleTonderChange(e.target.value)}
        className="h-14 text-lg"
      />
    </div>
  )

  return (
    <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {reversed ? tonderField : hektarField}
        <div className="hidden justify-center pb-3.5 text-lg text-muted-foreground sm:flex">
          =
        </div>
        {reversed ? hektarField : tonderField}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        1 tønde land = 0,5516 hektar
      </p>
    </div>
  )
}
