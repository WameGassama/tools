export interface GradeRow {
  fag: string
  karakter: string
  ects: string
}

export const GRADES_COOKIE_NAME = "grades-rows"

export const GRADE_OPTIONS = ["-3", "00", "02", "4", "7", "10", "12"] as const

export const GRADE_NUMERIC_VALUES: Record<string, number> = {
  "-3": -3,
  "00": 0,
  "02": 2,
  "4": 4,
  "7": 7,
  "10": 10,
  "12": 12,
}

function parseGradeValue(karakter: string): number | undefined {
  const trimmed = karakter.trim()
  if (trimmed in GRADE_NUMERIC_VALUES) return GRADE_NUMERIC_VALUES[trimmed]
  const parsed = parseFloat(trimmed)
  return Number.isNaN(parsed) ? undefined : parsed
}

export function calculateWeightedAverage(rows: GradeRow[]) {
  let ectsSum = 0
  let weighted = 0

  for (const row of rows) {
    const ects = parseFloat(row.ects) || 0
    const grade = parseGradeValue(row.karakter)
    if (ects > 0 && grade !== undefined) {
      ectsSum += ects
      weighted += ects * grade
    }
  }

  const avgNum = ectsSum > 0 ? weighted / ectsSum : 0
  const average = avgNum.toFixed(2).replace(".", ",")

  return { average, fagCount: rows.length, ectsSum }
}
