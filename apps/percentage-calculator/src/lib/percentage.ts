export type PercentageMode = "change" | "of-total" | "find-whole" | "of-number"

export interface ChangeInput {
  from: string
  to: string
}

export interface OfTotalInput {
  part: string
  total: string
}

export interface FindWholeInput {
  part: string
  percent: string
}

export interface OfNumberInput {
  number: string
  percent: string
}

export interface PercentageResult {
  headline: string
  suffix: string
  caption: string
  formula: string
  isValid: boolean
}

const numberFormatter = new Intl.NumberFormat("da-DK", {
  maximumFractionDigits: 2,
})

export function formatNum(n: number): string {
  if (!Number.isFinite(n)) return "–"
  return numberFormatter.format(n)
}

function parseInput(value: string): number {
  return parseFloat(value)
}

const EMPTY_RESULT: Omit<PercentageResult, "caption" | "formula"> = {
  headline: "–",
  suffix: "",
  isValid: false,
}

export function calculatePercentageChange(input: ChangeInput): PercentageResult {
  const from = parseInput(input.from)
  const to = parseInput(input.to)

  if (!Number.isFinite(from) || !Number.isFinite(to)) {
    return { ...EMPTY_RESULT, caption: "Udfyld begge felter", formula: "" }
  }

  if (from === 0) {
    return {
      ...EMPTY_RESULT,
      caption: "Kan ikke beregnes (start er 0)",
      formula: `${formatNum(from)} → ${formatNum(to)} = udefineret`,
    }
  }

  const changePct = ((to - from) / Math.abs(from)) * 100
  const headline = `${changePct >= 0 ? "+" : ""}${formatNum(changePct)}`

  return {
    headline,
    suffix: " %",
    caption: changePct >= 0 ? "stigning" : "fald",
    formula: `${formatNum(from)} → ${formatNum(to)} = ${headline} %`,
    isValid: true,
  }
}

export function calculatePercentageOfTotal(input: OfTotalInput): PercentageResult {
  const part = parseInput(input.part)
  const total = parseInput(input.total)

  if (!Number.isFinite(part) || !Number.isFinite(total)) {
    return { ...EMPTY_RESULT, caption: "Udfyld begge felter", formula: "" }
  }

  if (total === 0) {
    return {
      ...EMPTY_RESULT,
      caption: "Kan ikke beregnes (total er 0)",
      formula: `${formatNum(part)} af ${formatNum(total)} = udefineret`,
    }
  }

  const pct = (part / total) * 100
  const headline = formatNum(pct)

  return {
    headline,
    suffix: " %",
    caption: "af totalen",
    formula: `${formatNum(part)} af ${formatNum(total)} = ${headline} %`,
    isValid: true,
  }
}

export function calculateFindWhole(input: FindWholeInput): PercentageResult {
  const part = parseInput(input.part)
  const percent = parseInput(input.percent)

  if (!Number.isFinite(part) || !Number.isFinite(percent)) {
    return { ...EMPTY_RESULT, caption: "Udfyld begge felter", formula: "" }
  }

  if (percent === 0) {
    return {
      ...EMPTY_RESULT,
      caption: "Kan ikke beregnes (procent er 0)",
      formula: `${formatNum(part)} er ${formatNum(percent)} % af udefineret`,
    }
  }

  const whole = part / (percent / 100)
  const headline = formatNum(whole)

  return {
    headline,
    suffix: "",
    caption: "samlet total",
    formula: `${formatNum(part)} er ${formatNum(percent)} % af ${headline}`,
    isValid: true,
  }
}

export function calculatePercentageOfNumber(input: OfNumberInput): PercentageResult {
  const number = parseInput(input.number)
  const percent = parseInput(input.percent)

  if (!Number.isFinite(number) || !Number.isFinite(percent)) {
    return { ...EMPTY_RESULT, caption: "Udfyld begge felter", formula: "" }
  }

  const result = (percent / 100) * number
  const headline = formatNum(result)

  return {
    headline,
    suffix: "",
    caption: `${formatNum(percent)} % af ${formatNum(number)}`,
    formula: `${formatNum(percent)} % af ${formatNum(number)} = ${headline}`,
    isValid: true,
  }
}
