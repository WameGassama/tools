"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"

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
import { Add, RotateRight, Trash } from "@workspace/ui/icons"

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

  const { average, fagCount, ectsSum } = calculateWeightedAverage(rows)

  return (
    <>
      <Card className="p-4 sm:p-6">
        <CardContent className="p-0">
          <div className="mb-2.5 grid grid-cols-[1fr_58px_46px_36px] gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase sm:grid-cols-[1fr_104px_88px_40px] sm:gap-2.5">
            <span>Fag</span>
            <span>Karakter</span>
            <span>ECTS</span>
            <span />
          </div>

          {rows.map((row, index) => (
            <div
              key={index}
              className="mb-2.5 grid grid-cols-[1fr_58px_46px_36px] items-center gap-1.5 sm:grid-cols-[1fr_104px_88px_40px] sm:gap-2.5"
            >
              <Input
                className="h-10 bg-muted/60 sm:h-12"
                value={row.fag}
                onChange={(e) => updateRow(index, "fag", e.target.value)}
                placeholder="fx Matematik A"
              />
              <Select
                value={row.karakter}
                onValueChange={(value) => {
                  if (value) updateRow(index, "karakter", value)
                }}
              >
                <SelectTrigger className="h-10 w-full bg-muted/60 sm:h-12">
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
              <Input
                className="h-10 bg-muted/60 sm:h-12"
                type="number"
                min={0}
                value={row.ects}
                onChange={(e) => updateRow(index, "ects", e.target.value)}
                placeholder="10"
              />
              <Button
                variant="ghost"
                size="icon-lg"
                aria-label="Fjern fag"
                disabled={rows.length <= 1}
                onClick={() => removeRow(index)}
              >
                <Trash />
              </Button>
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
