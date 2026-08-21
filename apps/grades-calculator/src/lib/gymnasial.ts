import { parseGradeValue, GRADE_OPTIONS } from "@/src/lib/grades"

export type Niveau = "A" | "B" | "C"

export const NIVEAU_OPTIONS: Niveau[] = ["A", "B", "C"]

export const NIVEAU_WEIGHTS: Record<Niveau, number> = {
  A: 2,
  B: 1.5,
  C: 1,
}

/** Empty-string first entry lets a grade field be left unanswered (not every subject/dimension applies to every student). */
export const KARAKTER_SELECT_VALUES: string[] = ["", ...GRADE_OPTIONS]

export interface SubjectOption {
  value: string
  label: string
  defaultNiveau?: Niveau
  /**
   * Nogle fag/projekter har en fast vægt uafhængigt af niveau (fx SRP/SOP/EOP
   * = 2, SSO/Eksamensprojekt/NF = 1,5, KS = 2), jf. § 66 i Almen
   * prøvebekendtgørelse (BEK nr. 3 af 5. januar 2026). Er denne sat,
   * ignoreres rowens niveau ved vægtberegningen.
   */
  fixedWeight?: number
}

export interface GymnasialRow {
  fag: string
  customFag: string
  niveau: Niveau
  standpunktMundtlig: string
  standpunktSkriftlig: string
  eksamenMundtlig: string
  eksamenSkriftlig: string
}

export const EMPTY_GYMNASIAL_GRADES = {
  standpunktMundtlig: "",
  standpunktSkriftlig: "",
  eksamenMundtlig: "",
  eksamenSkriftlig: "",
}

export function subjectLabels(
  options: SubjectOption[]
): Record<string, string> {
  return Object.fromEntries(options.map((option) => [option.value, option.label]))
}

export interface BonusThresholds {
  /** Antal A-niveau-fag der udløser ×1,03. */
  moderate: number
  /** Antal A-niveau-fag der udløser ×1,06. */
  high: number
}

/**
 * STX/HHX/HTX/EUX har 4 obligatoriske A-fag som baseline, så bonus udløses
 * ved det 5. og 6. A-fag. 2-årigt HF har kun Dansk A som obligatorisk
 * baseline, så bonus udløses allerede ved det 2. og 3. A-fag – deraf den
 * separate {@link BonusThresholds}-parameter.
 */
export const DEFAULT_BONUS_THRESHOLDS: BonusThresholds = {
  moderate: 5,
  high: 6,
}

/**
 * Vægten for et fags niveau deles ligeligt mellem alle de karakterer, der rent
 * faktisk er udfyldt for faget (standpunkt/eksamen × mundtlig/skriftlig) – jf.
 * bekendtgørelsens princip om at vægten deles ligeligt, når et fag afsluttes
 * med mere end én karakter. Gælder på tværs af de gymnasiale uddannelser
 * (stx, hhx, htx, hf), som deler samme prøvebekendtgørelse.
 */
export function calculateGymnasialAverage(
  rows: GymnasialRow[],
  bonusThresholds: BonusThresholds = DEFAULT_BONUS_THRESHOLDS,
  subjectOptions?: SubjectOption[]
) {
  const fixedWeights = new Map(
    subjectOptions
      ?.filter((option) => option.fixedWeight !== undefined)
      .map((option) => [option.value, option.fixedWeight as number])
  )

  let weightSum = 0
  let weighted = 0

  for (const row of rows) {
    const niveauWeight = fixedWeights.get(row.fag) ?? NIVEAU_WEIGHTS[row.niveau]
    const grades = [
      row.standpunktMundtlig,
      row.standpunktSkriftlig,
      row.eksamenMundtlig,
      row.eksamenSkriftlig,
    ]
      .map(parseGradeValue)
      .filter((grade): grade is number => grade !== undefined)

    if (grades.length === 0) continue

    const perGradeWeight = niveauWeight / grades.length
    for (const grade of grades) {
      weightSum += perGradeWeight
      weighted += grade * perGradeWeight
    }
  }

  /**
   * Fag med fast vægt (SRP/SOP/EOP/SSO/Eksamensprojekt/KS/NF) tæller ikke som
   * "ekstra fag på A-niveau" i bonus-A-øjemed – de er obligatoriske
   * projekter/faggrupper, ikke valgfrie niveaufag.
   */
  const aNiveauCount = rows.filter(
    (row) => row.niveau === "A" && !fixedWeights.has(row.fag)
  ).length
  const bonusMultiplier =
    aNiveauCount >= bonusThresholds.high
      ? 1.06
      : aNiveauCount >= bonusThresholds.moderate
        ? 1.03
        : 1

  const avgNum = weightSum > 0 ? (weighted / weightSum) * bonusMultiplier : 0
  const average = avgNum.toFixed(1).replace(".", ",")

  return { average, fagCount: rows.length, aNiveauCount, bonusMultiplier }
}
