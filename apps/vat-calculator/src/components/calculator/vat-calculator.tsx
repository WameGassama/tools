"use client"

import { useMemo, useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { cn } from "@workspace/ui/lib/utils"

import {
  calculateVat,
  formatKr,
  formatRateLabel,
  parseAmount,
  type VatMode,
} from "@/src/lib/vat"

const RATES = [
  { value: 0.25, label: "Alm. moms · 25%" },
  { value: 0.125, label: "Halv moms · 12,5%" },
  { value: 0.0625, label: "Kvart moms · 6,25%" },
]

const MODES: { value: VatMode; label: string }[] = [
  { value: "ex", label: "Eksklusiv moms" },
  { value: "in", label: "Inklusiv moms" },
]

function chipClasses(on: boolean) {
  return cn(
    "inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] px-3.5 py-2 text-[15.5px] transition-colors",
    on
      ? "border-primary bg-secondary font-semibold"
      : "border-border bg-card font-normal hover:border-primary/60",
  )
}

export function VatCalculator() {
  const [amountText, setAmountText] = useState("")
  const [rate, setRate] = useState(0.25)
  const [mode, setMode] = useState<VatMode>("ex")
  const [touched, setTouched] = useState(false)

  const parsed = useMemo(() => parseAmount(amountText), [amountText])

  const showError = touched || amountText.trim() !== ""
  let error = ""
  if (showError) {
    if (parsed.empty && touched) error = "Skriv et beløb for at regne momsen ud."
    else if (parsed.bad)
      error = "Beløbet skal være et tal, f.eks. 1250 eller 1.250,50."
    else if (parsed.negative) error = "Beløbet kan ikke være negativt."
  }

  const rateLabel = formatRateLabel(rate)
  const showResult = parsed.value !== undefined && !error
  const result = showResult ? calculateVat(parsed.value!, rate, mode) : null

  function reset() {
    setAmountText("")
    setTouched(false)
    setRate(0.25)
    setMode("ex")
  }

  return (
    <section
      aria-labelledby="beregner-titel"
      className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
    >
      <h2
        id="beregner-titel"
        className="mb-[22px] text-[15px] font-semibold tracking-[0.08em] text-muted-foreground uppercase"
      >
        Momsberegner
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[26px]">
        <div>
          <Label htmlFor="belob" className="mb-2 block text-base font-semibold">
            Beløb
          </Label>
          <div className="relative">
            <Input
              id="belob"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              placeholder="0,00"
              value={amountText}
              onChange={(e) => {
                setAmountText(e.target.value)
                setTouched(true)
              }}
              aria-describedby="belob-hjaelp belob-fejl"
              aria-invalid={Boolean(error)}
              className="h-auto rounded-[10px] border-[1.5px] py-3.5 pr-[60px] pl-4 font-heading text-[30px] font-medium"
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 right-[18px] -translate-y-1/2 text-[17px] text-muted-foreground"
            >
              kr.
            </span>
          </div>
          <p id="belob-hjaelp" className="mt-2 text-sm text-muted-foreground">
            Brug komma eller punktum som decimaltegn.
          </p>
          <p
            id="belob-fejl"
            role="status"
            className={cn(
              "mt-2 text-[15px] font-medium text-destructive",
              !error && "hidden",
            )}
          >
            {error}
          </p>
        </div>

        <div className="flex flex-col gap-[22px]">
          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2.5 p-0 text-base font-semibold">
              Momssats
            </legend>
            <div className="flex flex-wrap gap-2">
              {RATES.map((opt) => (
                <label key={opt.value} className={chipClasses(rate === opt.value)}>
                  <input
                    type="radio"
                    name="momssats"
                    value={opt.value}
                    checked={rate === opt.value}
                    onChange={() => setRate(opt.value)}
                    className="m-0 accent-primary"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="m-0 border-0 p-0">
            <legend className="mb-2.5 p-0 text-base font-semibold">
              Beløbet er
            </legend>
            <div className="flex flex-wrap gap-2">
              {MODES.map((opt) => (
                <label key={opt.value} className={chipClasses(mode === opt.value)}>
                  <input
                    type="radio"
                    name="momsmode"
                    value={opt.value}
                    checked={mode === opt.value}
                    onChange={() => setMode(opt.value)}
                    className="m-0 accent-primary"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-[26px] flex flex-wrap gap-3">
        <Button
          type="button"
          size="2xl"
          className="font-heading text-[17px] font-semibold"
          onClick={() => setTouched(true)}
        >
          Udregn moms
        </Button>
        <Button
          type="button"
          variant="outline"
          size="2xl"
          className="font-heading text-[17px] font-medium"
          onClick={reset}
        >
          Nulstil
        </Button>
      </div>

      <div aria-live="polite" className={cn("mt-[26px]", !showResult && "hidden")}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-px overflow-hidden rounded-xl bg-primary/20">
          <div className="bg-secondary p-[18px_20px]">
            <div className="text-sm font-semibold tracking-wide text-primary uppercase">
              Eksklusiv moms
            </div>
            <div className="mt-1 font-heading text-[26px] font-semibold">
              {result ? formatKr(result.net) : "—"}
            </div>
          </div>
          <div className="bg-primary p-[18px_20px] text-primary-foreground">
            <div className="text-sm font-semibold tracking-wide text-primary-foreground/80 uppercase">
              Moms ({rateLabel})
            </div>
            <div className="mt-1 font-heading text-[26px] font-semibold">
              {result ? formatKr(result.vat) : "—"}
            </div>
          </div>
          <div className="bg-secondary p-[18px_20px]">
            <div className="text-sm font-semibold tracking-wide text-primary uppercase">
              Inklusiv moms
            </div>
            <div className="mt-1 font-heading text-[26px] font-semibold">
              {result ? formatKr(result.gross) : "—"}
            </div>
          </div>
        </div>
        <p className="mt-3 text-[15px] text-muted-foreground">
          {result &&
            (mode === "ex"
              ? `Der er lagt ${rateLabel} moms oveni beløbet på ${formatKr(result.net)}.`
              : `Momsen er trukket ud af beløbet på ${formatKr(result.gross)} ved ${rateLabel} moms.`)}
        </p>
      </div>
    </section>
  )
}
