export const METERS_PER_FOOT = 0.3048
export const CM_PER_INCH = 2.54
export const INCHES_PER_FOOT = 12

export function round(value: number, decimals: number): number {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

export function feetToMeters(feet: number, precision = 3): number {
  return round(feet * METERS_PER_FOOT, precision)
}

export function metersToFeet(meters: number, precision = 3): number {
  return round(meters / METERS_PER_FOOT, precision)
}

export function feetInchesToMeters(feet: number, inches: number, precision = 3): number {
  return round((feet + inches / INCHES_PER_FOOT) * METERS_PER_FOOT, precision)
}

export function feetToCentimeters(feet: number, precision = 1): number {
  return round(feet * METERS_PER_FOOT * 100, precision)
}

/** Deler en meterværdi op i hele fod og nærmeste hele tomme. */
export function metersToFeetInches(meters: number): { feet: number; inches: number } {
  const totalInches = Math.round((meters * 100) / CM_PER_INCH)
  const feet = Math.floor(totalInches / INCHES_PER_FOOT)
  const inches = totalInches - feet * INCHES_PER_FOOT
  return { feet, inches }
}

/** Formaterer med dansk komma og et fast antal decimaler. */
export function formatDa(value: number, decimals: number): string {
  return value.toFixed(decimals).replace(".", ",")
}

/** Formaterer med dansk komma og fjerner overflødige nuller til sidst. */
export function formatDaTrim(value: number, maxDecimals = 3): string {
  const fixed = value.toFixed(maxDecimals)
  const trimmed = fixed.includes(".") ? fixed.replace(/0+$/, "").replace(/\.$/, "") : fixed
  return trimmed.replace(".", ",")
}

/** Læser et tal skrevet med enten komma eller punktum. Negative tal afvises. */
export function parseDaNumber(value: string): number | null {
  const normalized = value.replace(/\s/g, "").replace(",", ".")
  if (normalized === "") return null
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null
}
