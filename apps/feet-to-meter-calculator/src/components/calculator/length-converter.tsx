"use client"

import { useState } from "react"
import { ArrowLeftRight, Check, Copy } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

import {
  INCHES_PER_FOOT,
  METERS_PER_FOOT,
  feetInchesToMeters,
  formatDa,
  formatDaTrim,
  metersToFeet,
  metersToFeetInches,
  parseDaNumber,
} from "@/src/lib/length-convert"

type Field = "feet" | "meters"

export function LengthConverter({
  reversed = false,
  initialFeet,
  initialMeters,
  className,
}: {
  reversed?: boolean
  initialFeet?: number
  initialMeters?: number
  className?: string
}) {
  const [feetFirst, setFeetFirst] = useState(!reversed)
  const [withInches, setWithInches] = useState(false)
  const [precision, setPrecision] = useState(3)
  const [copied, setCopied] = useState<Field | null>(null)
  const [lastEdited, setLastEdited] = useState<Field>(
    initialMeters !== undefined ? "meters" : "feet",
  )

  const startFeet = initialFeet ?? (initialMeters !== undefined ? metersToFeet(initialMeters, 3) : 6)
  const startMeters = initialMeters ?? feetInchesToMeters(startFeet, 0, 3)

  const [feetText, setFeetText] = useState(formatDaTrim(startFeet))
  const [inchesText, setInchesText] = useState("0")
  const [metersText, setMetersText] = useState(formatDaTrim(startMeters))

  function recalculateMeters(feetValue: string, inchesValue: string, nextPrecision: number) {
    const feet = parseDaNumber(feetValue)
    const inches = withInches ? parseDaNumber(inchesValue) : 0
    if (feet === null && inches === null) {
      setMetersText("")
      return
    }
    setMetersText(formatDa(feetInchesToMeters(feet ?? 0, inches ?? 0, nextPrecision), nextPrecision))
  }

  function recalculateFeet(metersValue: string, nextPrecision: number, useInches: boolean) {
    const meters = parseDaNumber(metersValue)
    if (meters === null) {
      setFeetText("")
      setInchesText("")
      return
    }
    if (useInches) {
      const split = metersToFeetInches(meters)
      setFeetText(String(split.feet))
      setInchesText(String(split.inches))
      return
    }
    setFeetText(formatDa(metersToFeet(meters, nextPrecision), nextPrecision))
  }

  function handleFeetChange(value: string) {
    setFeetText(value)
    setLastEdited("feet")
    recalculateMeters(value, inchesText, precision)
  }

  function handleInchesChange(value: string) {
    setInchesText(value)
    setLastEdited("feet")
    recalculateMeters(feetText, value, precision)
  }

  function handleMetersChange(value: string) {
    setMetersText(value)
    setLastEdited("meters")
    recalculateFeet(value, precision, withInches)
  }

  function handlePrecisionChange(value: string | null) {
    if (value === null) return
    const next = Number(value)
    setPrecision(next)
    if (lastEdited === "meters") recalculateFeet(metersText, next, withInches)
    else recalculateMeters(feetText, inchesText, next)
  }

  function handleInchesToggle(checked: boolean) {
    setWithInches(checked)
    if (lastEdited === "meters") {
      recalculateFeet(metersText, precision, checked)
      return
    }
    const feet = parseDaNumber(feetText) ?? 0
    const inches = checked ? (parseDaNumber(inchesText) ?? 0) : 0
    if (!checked) setInchesText("0")
    setMetersText(formatDa(feetInchesToMeters(feet, inches, precision), precision))
  }

  async function handleCopy(field: Field, value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(field)
      window.setTimeout(() => setCopied(null), 1600)
    } catch {
      // udklipsholderen er ikke tilgængelig her, så der er intet at rette op på
    }
  }

  const inchesLabel =
    withInches && inchesText !== "" && inchesText !== "0" ? ` ${inchesText} tommer` : ""
  const formula =
    lastEdited === "meters"
      ? `${metersText || "0"} meter ÷ 0,3048 = ${feetText || "0"} fod${inchesLabel}`
      : `${feetText || "0"} fod${inchesLabel} × 0,3048 = ${metersText || "0"} meter`

  const feetField = (
    <div>
      <Label htmlFor="feet" className="mb-1.5 block text-sm font-medium text-muted-foreground">
        Fod (ft)
      </Label>
      <div className="flex items-center gap-2">
        <Input
          id="feet"
          type="text"
          inputMode="decimal"
          value={feetText}
          onChange={(event) => handleFeetChange(event.target.value)}
          className="h-14 text-lg tabular-nums"
        />
        {withInches ? (
          <div className="flex items-center gap-1.5">
            <Input
              id="inches"
              type="text"
              inputMode="decimal"
              aria-label="Tommer"
              value={inchesText}
              onChange={(event) => handleInchesChange(event.target.value)}
              className="h-14 w-20 text-lg tabular-nums"
            />
            <span className="text-sm text-muted-foreground">tm</span>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Kopier antal fod"
            onClick={() => handleCopy("feet", feetText)}
          >
            {copied === "feet" ? <Check className="size-4" /> : <Copy className="size-4" />}
          </Button>
        )}
      </div>
    </div>
  )

  const metersField = (
    <div>
      <Label htmlFor="meters" className="mb-1.5 block text-sm font-medium text-muted-foreground">
        Meter (m)
      </Label>
      <div className="flex items-center gap-2">
        <Input
          id="meters"
          type="text"
          inputMode="decimal"
          value={metersText}
          onChange={(event) => handleMetersChange(event.target.value)}
          className="h-14 text-lg tabular-nums"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Kopier antal meter"
          onClick={() => handleCopy("meters", metersText)}
        >
          {copied === "meters" ? <Check className="size-4" /> : <Copy className="size-4" />}
        </Button>
      </div>
    </div>
  )

  return (
    <div className={cn("rounded-xl border border-border bg-card p-5 shadow-sm sm:p-7", className)}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-bold">Omregner</h2>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => setFeetFirst((current) => !current)}
          className="text-muted-foreground"
        >
          <ArrowLeftRight className="size-4" />
          Byt om
        </Button>
      </div>

      <div className="grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        {feetFirst ? feetField : metersField}
        <div className="hidden justify-center pb-4 text-lg text-muted-foreground sm:flex">=</div>
        {feetFirst ? metersField : feetField}
      </div>

      <p className="mt-4 rounded-md bg-muted px-3 py-2 font-mono text-sm text-muted-foreground">
        {formula}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-border pt-5">
        <div className="flex items-center gap-2">
          <Label htmlFor="precision" className="text-sm text-muted-foreground">
            Decimaler
          </Label>
          <Select value={String(precision)} onValueChange={handlePrecisionChange}>
            <SelectTrigger id="precision" size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2">2 decimaler</SelectItem>
              <SelectItem value="3">3 decimaler</SelectItem>
              <SelectItem value="4">4 decimaler</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <Checkbox checked={withInches} onCheckedChange={handleInchesToggle} />
          Regn med tommer ({INCHES_PER_FOOT} tommer pr. fod)
        </label>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        1 fod er præcis {formatDa(METERS_PER_FOOT, 4)} meter.
      </p>
    </div>
  )
}
