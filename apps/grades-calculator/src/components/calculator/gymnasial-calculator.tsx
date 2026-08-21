"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { ToggleGroup, ToggleGroupItem } from "@workspace/ui/components/toggle-group"

import {
  KARAKTER_SELECT_VALUES,
  NIVEAU_OPTIONS,
  calculateGymnasialAverage,
  type BonusThresholds,
  type GymnasialRow,
  type Niveau,
  type SubjectOption,
} from "@/src/lib/gymnasial"
import { Add, DocumentCopy, RotateLeft, Trash } from "@workspace/ui/icons"

type GradeFieldKey =
  | "standpunktMundtlig"
  | "standpunktSkriftlig"
  | "eksamenMundtlig"
  | "eksamenSkriftlig"

export interface GradeFieldConfig {
  key: GradeFieldKey
  label: string
}

export const DEFAULT_GRADE_FIELDS: GradeFieldConfig[] = [
  { key: "standpunktMundtlig", label: "Standpunkt · Mundtlig" },
  { key: "standpunktSkriftlig", label: "Standpunkt · Skriftlig" },
  { key: "eksamenMundtlig", label: "Eksamen · Mundtlig" },
  { key: "eksamenSkriftlig", label: "Eksamen · Skriftlig" },
]

const EMPTY_ROW: GymnasialRow = {
  fag: "",
  customFag: "",
  niveau: "B",
  standpunktMundtlig: "",
  standpunktSkriftlig: "",
  eksamenMundtlig: "",
  eksamenSkriftlig: "",
}

interface GymnasialCalculatorProps {
  initialRows?: GymnasialRow[]
  defaultRows: GymnasialRow[]
  subjectOptions: SubjectOption[]
  subjectLabels: Record<string, string>
  cookieName: string
  resultLabel: string
  gradeFields?: GradeFieldConfig[]
  bonusThresholds?: BonusThresholds
}

function persistRows(cookieName: string, rows: GymnasialRow[]) {
  document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(rows))}; path=/; max-age=31536000; SameSite=Lax`
}

export function GymnasialCalculator({
  initialRows,
  defaultRows,
  subjectOptions,
  subjectLabels,
  cookieName,
  resultLabel,
  gradeFields = DEFAULT_GRADE_FIELDS,
  bonusThresholds,
}: GymnasialCalculatorProps) {
  const [rows, setRows] = useState<GymnasialRow[]>(
    initialRows && initialRows.length > 0 ? initialRows : defaultRows
  )
  const [calculated, setCalculated] = useState(false)
  const [karakterMode, setKarakterMode] = useState<"dropdown" | "text">(
    "dropdown"
  )

  function updateRow<K extends keyof GymnasialRow>(
    index: number,
    field: K,
    value: GymnasialRow[K]
  ) {
    setRows((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      persistRows(cookieName, next)
      return next
    })
    setCalculated(false)
  }

  function selectFag(index: number, fag: string) {
    setRows((prev) => {
      const next = [...prev]
      const defaultNiveau = subjectOptions.find(
        (option) => option.value === fag
      )?.defaultNiveau
      next[index] = {
        ...next[index],
        fag,
        niveau: defaultNiveau ?? next[index].niveau,
      }
      persistRows(cookieName, next)
      return next
    })
    setCalculated(false)
  }

  function addRow() {
    setRows((prev) => {
      const next = [...prev, EMPTY_ROW]
      persistRows(cookieName, next)
      return next
    })
    setCalculated(false)
  }

  function resetRows() {
    setRows(defaultRows)
    persistRows(cookieName, defaultRows)
    setCalculated(false)
  }

  function removeRow(index: number) {
    setRows((prev) => {
      const next = prev.length > 1 ? prev.filter((_, i) => i !== index) : prev
      persistRows(cookieName, next)
      return next
    })
    setCalculated(false)
  }

  function duplicateRow(index: number) {
    setRows((prev) => {
      const next = [...prev]
      next.splice(index + 1, 0, { ...prev[index] })
      persistRows(cookieName, next)
      return next
    })
    setCalculated(false)
  }

  const { average, fagCount, aNiveauCount, bonusMultiplier } =
    calculateGymnasialAverage(rows, bonusThresholds, subjectOptions)

  return (
    <>
      <Card className="p-4 sm:p-6">
        <CardContent className="p-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Udfyld kun de karakterer, der gælder for dig – tomme felter
              tæller ikke med.
            </p>
            <Select
              value={karakterMode}
              onValueChange={(value) => {
                if (value) setKarakterMode(value as "dropdown" | "text")
              }}
            >
              <SelectTrigger
                size="sm"
                className="w-fit shrink-0 gap-0.5 border-none bg-transparent p-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase hover:text-foreground [&_svg]:size-3"
              >
                <SelectValue>{() => "Karakter"}</SelectValue>
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  <SelectItem value="dropdown">Dropdown</SelectItem>
                  <SelectItem value="text">Fritekst</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {rows.map((row, index) => {
            const fixedWeight = subjectOptions.find(
              (option) => option.value === row.fag
            )?.fixedWeight

            return (
            <div
              key={index}
              className="mb-3 rounded-xl border bg-muted/40 p-3 sm:p-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex flex-1 flex-col gap-1.5">
                  <Select
                    value={row.fag}
                    onValueChange={(value) => {
                      if (value) selectFag(index, value)
                    }}
                  >
                    <SelectTrigger className="w-full bg-background data-[size=default]:h-10 sm:data-[size=default]:h-11">
                      <SelectValue>
                        {(value: string | null) =>
                          value ? subjectLabels[value] : "Vælg fag"
                        }
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {subjectOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {row.fag === "andet" && (
                    <Input
                      className="h-10 bg-background sm:h-11"
                      value={row.customFag}
                      onChange={(e) =>
                        updateRow(index, "customFag", e.target.value)
                      }
                      placeholder="Skriv fagnavn"
                    />
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 sm:justify-start">
                  {fixedWeight !== undefined ? (
                    <div
                      className="flex h-10 items-center rounded-md border bg-background px-3 text-sm font-medium whitespace-nowrap text-muted-foreground sm:h-11"
                      title="Dette fag har en fast vægt uafhængigt af niveau"
                    >
                      Vægt {fixedWeight.toString().replace(".", ",")}
                    </div>
                  ) : (
                    <ToggleGroup
                      variant="outline"
                      value={[row.niveau]}
                      onValueChange={(value) => {
                        if (value[0])
                          updateRow(index, "niveau", value[0] as Niveau)
                      }}
                      className="h-10 sm:h-11"
                    >
                      {NIVEAU_OPTIONS.map((niveau) => (
                        <ToggleGroupItem
                          key={niveau}
                          value={niveau}
                          className="h-10 w-10 sm:h-11 sm:w-11"
                        >
                          {niveau}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  )}

                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon-lg"
                      aria-label="Kopiér fag"
                      onClick={() => duplicateRow(index)}
                    >
                      <DocumentCopy />
                    </Button>
                    <Button
                      variant="ghost"
                      className={
                        "hover:bg-destructive/10 hover:text-destructive"
                      }
                      size="icon-lg"
                      aria-label="Fjern fag"
                      disabled={rows.length <= 1}
                      onClick={() => removeRow(index)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className={`mt-3 grid grid-cols-2 gap-2 ${gradeFields.length > 2 ? "sm:grid-cols-4" : ""}`}
              >
                {gradeFields.map((field) => (
                  <div key={field.key} className="flex flex-col gap-1">
                    <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase">
                      {field.label}
                    </span>
                    {karakterMode === "dropdown" ? (
                      <Select
                        value={row[field.key]}
                        onValueChange={(value) => {
                          if (value !== null)
                            updateRow(index, field.key, value)
                        }}
                      >
                        <SelectTrigger className="w-full bg-background data-[size=default]:h-9">
                          <SelectValue>
                            {(value: string | null) => value || "–"}
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {KARAKTER_SELECT_VALUES.map((grade) => (
                              <SelectItem key={grade || "empty"} value={grade}>
                                {grade || "–"}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Input
                        className="h-9 bg-background text-center"
                        type="number"
                        step="any"
                        value={row[field.key]}
                        onChange={(e) =>
                          updateRow(index, field.key, e.target.value)
                        }
                        placeholder="–"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            )
          })}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="ghost"
                onClick={addRow}
                className={
                  "text-primary hover:bg-primary/10 hover:text-primary"
                }
                size={"2xl"}
                weight={"medium"}
              >
                <Add />
                Tilføj fag
              </Button>
              <Button
                variant="ghost"
                onClick={resetRows}
                className={"text-muted-foreground hover:text-foreground"}
                size={"2xl"}
                weight={"medium"}
              >
                <RotateLeft />
                Nulstil fag
              </Button>
            </div>
            <Button
              weight={"bold"}
              size="3xl"
              onClick={() => setCalculated(true)}
            >
              Beregn gennemsnit
            </Button>
          </div>
        </CardContent>
      </Card>

      {calculated && (
        <div className="mt-14 text-center">
          <div className="mb-2 text-xs font-bold tracking-[0.08em] text-muted-foreground uppercase">
            {resultLabel}
          </div>
          <div className="text-[56px] leading-none font-extrabold text-primary sm:text-[72px]">
            {average}
          </div>
          <div className="mt-1.5 text-[15px] text-muted-foreground">
            {fagCount} fag · {aNiveauCount} på A-niveau
            {bonusMultiplier > 1 &&
              ` · bonus ×${bonusMultiplier.toFixed(2).replace(".", ",")}`}
          </div>
        </div>
      )}
    </>
  )
}
