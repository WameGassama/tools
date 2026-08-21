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

import {
  GRADES_COOKIE_NAME,
  GRADE_OPTIONS,
  calculateWeightedAverage,
  type GradeRow,
} from "@/src/lib/grades"
import { Add, DocumentCopy, RotateRight, Trash } from "@workspace/ui/icons"

const EMPTY_ROW: GradeRow = { fag: "", karakter: "7", ects: "" }

function persistRows(rows: GradeRow[]) {
  document.cookie = `${GRADES_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(rows))}; path=/; max-age=31536000; SameSite=Lax`
}

interface GradeCalculatorProps {
  initialRows?: GradeRow[]
}

export function GradeCalculator({ initialRows }: GradeCalculatorProps) {
  const [rows, setRows] = useState<GradeRow[]>(
    initialRows && initialRows.length > 0 ? initialRows : [EMPTY_ROW]
  )
  const [calculated, setCalculated] = useState(false)
  const [karakterMode, setKarakterMode] = useState<"dropdown" | "text">(
    "dropdown"
  )

  function updateRow<K extends keyof GradeRow>(
    index: number,
    field: K,
    value: GradeRow[K]
  ) {
    setRows((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      persistRows(next)
      return next
    })
    setCalculated(false)
  }

  function addRow() {
    setRows((prev) => {
      const next = [...prev, EMPTY_ROW]
      persistRows(next)
      return next
    })
    setCalculated(false)
  }

  function removeRow(index: number) {
    setRows((prev) => {
      const next = prev.length > 1 ? prev.filter((_, i) => i !== index) : prev
      persistRows(next)
      return next
    })
    setCalculated(false)
  }

  function duplicateRow(index: number) {
    setRows((prev) => {
      const next = [...prev]
      next.splice(index + 1, 0, { ...prev[index] })
      persistRows(next)
      return next
    })
    setCalculated(false)
  }

  const { average, fagCount, ectsSum } = calculateWeightedAverage(rows)

  return (
    <>
      <Card className="p-4 sm:p-6">
        <CardContent className="p-0">
          <div className="mb-2.5 flex items-center justify-end sm:hidden">
            <Select
              value={karakterMode}
              onValueChange={(value) => {
                if (value) setKarakterMode(value as "dropdown" | "text")
              }}
            >
              <SelectTrigger
                size="sm"
                className="w-fit gap-0.5 border-none bg-transparent p-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase hover:text-foreground [&_svg]:size-3"
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

          <div className="hidden items-center gap-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase sm:mb-2.5 sm:grid sm:grid-cols-[1fr_112px_88px_40px_40px]">
            <span>Fag</span>
            <Select
              value={karakterMode}
              onValueChange={(value) => {
                if (value) setKarakterMode(value as "dropdown" | "text")
              }}
            >
              <SelectTrigger
                size="sm"
                className="w-fit gap-0.5 border-none bg-transparent p-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase hover:text-foreground [&_svg]:size-3"
              >
                <SelectValue>{() => "Karakter"}</SelectValue>
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  <SelectItem value="dropdown">Dropdown</SelectItem>
                  <SelectItem value="text">Fritekst</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <span>ECTS</span>
            <span />
            <span />
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className="mb-2.5 rounded-xl bg-muted/40 p-3 sm:grid sm:grid-cols-[1fr_112px_88px_40px_40px] sm:items-center sm:gap-2.5 sm:rounded-none sm:bg-transparent sm:p-0"
            >
              <Input
                className="h-10 bg-background sm:h-12 sm:bg-muted/60"
                value={row.fag}
                onChange={(e) => updateRow(index, "fag", e.target.value)}
                placeholder="fx. Mikroøkonomi"
              />

              <div className="mt-2 grid grid-cols-[1fr_1fr_auto] items-end gap-2 sm:contents">
                <div className="flex flex-col gap-1 sm:contents">
                  <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase sm:hidden">
                    Karakter
                  </span>
                  {karakterMode === "dropdown" ? (
                    <Select
                      value={row.karakter}
                      onValueChange={(value) => {
                        if (value) updateRow(index, "karakter", value)
                      }}
                    >
                      <SelectTrigger className="w-full bg-background data-[size=default]:h-10 sm:bg-muted/60 sm:data-[size=default]:h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {GRADE_OPTIONS.map((grade) => (
                            <SelectItem key={grade} value={grade}>
                              {grade}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      className="h-10 bg-background text-center sm:h-12 sm:bg-muted/60"
                      type="number"
                      step="any"
                      value={row.karakter}
                      onChange={(e) =>
                        updateRow(index, "karakter", e.target.value)
                      }
                      placeholder="7"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-1 sm:contents">
                  <span className="text-[10px] font-semibold tracking-wide text-muted-foreground uppercase sm:hidden">
                    ECTS
                  </span>
                  <Input
                    className="h-10 bg-background sm:h-12 sm:bg-muted/60"
                    type="number"
                    min={0}
                    value={row.ects}
                    onChange={(e) => updateRow(index, "ects", e.target.value)}
                    placeholder="10"
                  />
                </div>

                <div className="flex items-center gap-1 sm:contents">
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
                    className={"hover:bg-destructive/10 hover:text-destructive"}
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
          ))}

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t pt-4">
            <Button
              variant="ghost"
              onClick={addRow}
              className={"text-primary hover:bg-primary/10 hover:text-primary"}
              size={"2xl"}
              weight={"medium"}
            >
              <Add />
              Tilføj fag
            </Button>
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
            Dit vægtede gennemsnit
          </div>
          <div className="text-[56px] leading-none font-extrabold text-primary sm:text-[72px]">
            {average}
          </div>
          <div className="mt-1.5 text-[15px] text-muted-foreground">
            {fagCount} fag · {ectsSum} ECTS
          </div>
        </div>
      )}
    </>
  )
}
