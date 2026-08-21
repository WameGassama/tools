import { parseGradeValue } from "@/src/lib/grades"

export const FOLKESKOLE_GRADES_COOKIE_NAME = "folkeskole-grades"

export type FolkeskoleField = "Mundtlig" | "Skriftlig"

export interface FolkeskoleSubject {
  key: string
  label: string
  field: FolkeskoleField
}

/**
 * De 9 lovbundne prøver til folkeskolens afgangseksamen (FP9), i samme
 * rækkefølge som softit.dk's beregner. Bruges til at forudfylde beregneren –
 * brugeren kan efterfølgende selv tilføje og fjerne fag.
 */
export const FOLKESKOLE_SUBJECTS: FolkeskoleSubject[] = [
  {
    key: "praktisk-musisk",
    label: "Praktisk/musisk valgfagsprøve (8. kl.)",
    field: "Mundtlig",
  },
  { key: "dansk", label: "Dansk", field: "Mundtlig" },
  {
    key: "dansk-retskrivning",
    label: "Dansk – retskrivning",
    field: "Skriftlig",
  },
  { key: "dansk-laesning", label: "Dansk – læsning", field: "Skriftlig" },
  {
    key: "dansk-skriftlig-fremstilling",
    label: "Dansk – skriftlig fremstilling",
    field: "Skriftlig",
  },
  { key: "naturfag", label: "Fællesprøve i naturfag", field: "Mundtlig" },
  {
    key: "matematik-uden-hjaelpemidler",
    label: "Matematik – uden hjælpemidler",
    field: "Skriftlig",
  },
  {
    key: "matematik-med-hjaelpemidler",
    label: "Matematik – med hjælpemidler",
    field: "Skriftlig",
  },
  { key: "udtraeksproeve", label: "Udtræksprøve", field: "Mundtlig" },
]

export interface FolkeskoleRow {
  key: string
  label: string
  field?: FolkeskoleField
  grade: string
  /** Brugertilføjet fag, i modsætning til et af de 9 forudfyldte lovbundne fag. */
  custom?: boolean
}

export function defaultFolkeskoleRows(): FolkeskoleRow[] {
  return FOLKESKOLE_SUBJECTS.map((subject) => ({
    key: subject.key,
    label: subject.label,
    field: subject.field,
    grade: "",
  }))
}

/**
 * Folkeskolens afgangseksamen har ingen niveauer eller vægte – gennemsnittet
 * er et simpelt gennemsnit af de udfyldte karakterer, rundet NED til
 * nærmeste hele tal (jf. softit.dk: "Gennemsnittet af de lovbundne prøver er
 * rundet ned til nærmeste hele tal").
 */
export function calculateFolkeskoleAverage(rows: FolkeskoleRow[]) {
  let sum = 0
  let count = 0

  for (const row of rows) {
    const grade = parseGradeValue(row.grade)
    if (grade !== undefined) {
      sum += grade
      count++
    }
  }

  const average = count > 0 ? Math.floor(sum / count) : 0

  return { average, fagCount: count, totalCount: rows.length }
}
