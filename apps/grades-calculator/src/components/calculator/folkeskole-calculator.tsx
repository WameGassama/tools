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

import { KARAKTER_SELECT_VALUES } from "@/src/lib/gymnasial"
import {
  FOLKESKOLE_GRADES_COOKIE_NAME,
  calculateFolkeskoleAverage,
  defaultFolkeskoleRows,
  type FolkeskoleRow,
} from "@/src/lib/folkeskole"
import { Add, RotateLeft, Trash } from "@workspace/ui/icons"

function persistRows(rows: FolkeskoleRow[]) {
  document.cookie = `${FOLKESKOLE_GRADES_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(rows))}; path=/; max-age=31536000; SameSite=Lax`
}

let customRowCounter = 0
function nextCustomKey() {
  customRowCounter += 1
  return `custom-${Date.now()}-${customRowCounter}`
}

interface FolkeskoleCalculatorProps {
  initialRows?: FolkeskoleRow[]
}

export function FolkeskoleCalculator({
  initialRows,
}: FolkeskoleCalculatorProps) {
  const [rows, setRows] = useState<FolkeskoleRow[]>(
    initialRows && initialRows.length > 0 ? initialRows : defaultFolkeskoleRows()
  )
  const [calculated, setCalculated] = useState(false)
  const [karakterMode, setKarakterMode] = useState<"dropdown" | "text">(
    "dropdown"
  )

  function updateGrade(index: number, value: string) {
    setRows((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], grade: value }
      persistRows(next)
      return next
    })
    setCalculated(false)
  }

  function updateLabel(index: number, value: string) {
    setRows((prev) => {
      const next = [...prev]
      next[index] = { ...next[index], label: value }
      persistRows(next)
      return next
    })
  }

  function addRow() {
    setRows((prev) => {
      const next = [
        ...prev,
        { key: nextCustomKey(), label: "", grade: "", custom: true },
      ]
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

  function resetRows() {
    const next = defaultFolkeskoleRows()
    setRows(next)
    persistRows(next)
    setCalculated(false)
  }

  const { average, fagCount, totalCount } = calculateFolkeskoleAverage(rows)

  return (
    <>
      <Card className="p-4 sm:p-6">
        <CardContent className="p-0">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Udfyld karaktererne for dine prøver – tilføj eller fjern fag
              efter behov.
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

          {rows.map((row, index) => (
            <div
              key={row.key}
              className="mb-2.5 flex items-center gap-2 rounded-xl border bg-muted/40 p-3 sm:p-4"
            >
              <div className="flex-1">
                {row.custom ? (
                  <Input
                    className="h-9 bg-background"
                    value={row.label}
                    onChange={(e) => updateLabel(index, e.target.value)}
                    placeholder="Skriv fagnavn"
                  />
                ) : (
                  <>
                    <div className="text-sm font-medium">{row.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {row.field}
                    </div>
                  </>
                )}
              </div>
              {karakterMode === "dropdown" ? (
                <Select
                  value={row.grade}
                  onValueChange={(value) => {
                    if (value !== null) updateGrade(index, value)
                  }}
                >
                  <SelectTrigger className="h-10 w-24 bg-background sm:h-11">
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
                  className="h-10 w-24 bg-background text-center sm:h-11"
                  type="number"
                  step="any"
                  value={row.grade}
                  onChange={(e) => updateGrade(index, e.target.value)}
                  placeholder="–"
                />
              )}
              <Button
                variant="ghost"
                className="hover:bg-destructive/10 hover:text-destructive"
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
            Dit gennemsnit
          </div>
          <div className="text-[56px] leading-none font-extrabold text-primary sm:text-[72px]">
            {average}
          </div>
          <div className="mt-1.5 text-[15px] text-muted-foreground">
            {fagCount} af {totalCount} prøver udfyldt
          </div>
        </div>
      )}
    </>
  )
}
