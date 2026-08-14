"use client"

import { useState } from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

import {
  calculateFindWhole,
  calculatePercentageChange,
  calculatePercentageOfNumber,
  calculatePercentageOfTotal,
  type PercentageMode,
} from "@/src/lib/percentage"

import { PercentageForm } from "./percentage-form"
import { PercentageResultPanel } from "./percentage-result-panel"

export interface PercentageFormState {
  change: { from: string; to: string }
  "of-total": { part: string; total: string }
  "find-whole": { part: string; percent: string }
  "of-number": { number: string; percent: string }
}

const DEFAULT_STATE: PercentageFormState = {
  change: { from: "", to: "" },
  "of-total": { part: "", total: "" },
  "find-whole": { part: "", percent: "" },
  "of-number": { number: "", percent: "" },
}

const MODE_LABELS: Record<PercentageMode, string> = {
  change: "Stigning/fald",
  "of-total": "Andel af total",
  "find-whole": "Find hele",
  "of-number": "Beløb",
}

const MODE_DESCRIPTIONS: Record<PercentageMode, string> = {
  change:
    "Beregn procentvis stigning eller fald mellem to tal — også kendt som procentstigning eller ændring i procent. Angiv den oprindelige værdi og den nye værdi, så finder vi forskellen i procent.",
  "of-total":
    "Find ud af, hvor stor en procentdel ét tal udgør af et andet. Angiv delen og totalen, så beregner vi, hvor mange procent delen svarer til.",
  "find-whole":
    "Find det samlede tal, når du kender en del og den tilhørende procentdel. Angiv delen og procenten, så beregner vi totalen.",
  "of-number":
    "Find hvor meget en bestemt procentdel udgør af et tal. Angiv tallet og procenten, så beregner vi beløbet, som procentdelen svarer til.",
}

interface PercentageCalculatorProps {
  lockedMode?: PercentageMode
}

export function PercentageCalculator({
  lockedMode,
}: PercentageCalculatorProps = {}) {
  const [mode, setMode] = useState<PercentageMode>(lockedMode ?? "change")
  const [state, setState] = useState<PercentageFormState>(DEFAULT_STATE)

  function updateField(field: string, value: string) {
    setState((prev) => ({
      ...prev,
      [mode]: { ...prev[mode], [field]: value },
    }))
  }

  const result =
    mode === "change"
      ? calculatePercentageChange(state.change)
      : mode === "of-total"
        ? calculatePercentageOfTotal(state["of-total"])
        : mode === "find-whole"
          ? calculateFindWhole(state["find-whole"])
          : calculatePercentageOfNumber(state["of-number"])

  return (
    <div className="flex flex-col gap-6">
      {!lockedMode && (
        <h2 className="text-[26px] font-extrabold">{MODE_LABELS[mode]}</h2>
      )}

      {!lockedMode && (
        <p className="text-base leading-relaxed text-muted-foreground">
          {MODE_DESCRIPTIONS[mode]}
        </p>
      )}

      {!lockedMode && (
        <div className="flex w-full justify-center">
          <ToggleGroup
            variant="outline"
            value={[mode]}
            onValueChange={(value) => {
              if (value[0]) setMode(value[0] as PercentageMode)
            }}
            className="flex w-full flex-col justify-center xs:flex-row sm:justify-start"
          >
            {(Object.keys(MODE_LABELS) as PercentageMode[]).map((m) => (
              <ToggleGroupItem
                key={m}
                value={m}
                className="w-full text-center whitespace-normal xs:w-auto xs:whitespace-nowrap"
              >
                {MODE_LABELS[m]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <PercentageForm
          mode={mode}
          values={state[mode]}
          onChange={updateField}
        />
        <PercentageResultPanel result={result} />
      </div>
    </div>
  )
}
