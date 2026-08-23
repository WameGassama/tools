const NF = new Intl.NumberFormat("da-DK", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

export interface ParsedAmount {
  value?: number
  empty?: boolean
  bad?: boolean
  negative?: boolean
}

export function parseAmount(raw: string): ParsedAmount {
  const t = String(raw ?? "")
    .trim()
    .replace(/\s|\u00a0/g, "")
    .replace(/\.(?=\d{3}\b)/g, "")
    .replace(",", ".")

  if (t === "") return { empty: true }
  if (!/^-?\d*\.?\d*$/.test(t) || isNaN(parseFloat(t))) return { bad: true }

  const n = parseFloat(t)
  if (n < 0) return { negative: true }
  return { value: n }
}

export function formatKr(n: number): string {
  return `${NF.format(n)} kr.`
}

export type VatMode = "ex" | "in"

export interface VatResult {
  net: number
  vat: number
  gross: number
}

export function calculateVat(amount: number, rate: number, mode: VatMode): VatResult {
  if (mode === "ex") {
    const net = amount
    const vat = net * rate
    return { net, vat, gross: net + vat }
  }
  const gross = amount
  const net = gross / (1 + rate)
  return { net, vat: gross - net, gross }
}

export function formatRateLabel(rate: number): string {
  return `${(rate * 100).toString().replace(".", ",")}%`
}
