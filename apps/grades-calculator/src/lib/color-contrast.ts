/** Strict 6-digit hex validator (no leading #) — rejects 3-digit/8-digit/named colors on purpose. */
export function isValidHexColor(value: string): boolean {
  return /^[0-9a-fA-F]{6}$/.test(value)
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  }
}

/** WCAG relative luminance (sRGB), 0 (black) to 1 (white). */
function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex)
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const channel = c / 255
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs! + 0.7152 * gs! + 0.0722 * bs!
}

/**
 * Given a validated 6-digit background hex (with #), returns a readable
 * foreground hex. Threshold 0.179 is the standard cutoff between backgrounds
 * where black text passes contrast vs. where white text passes.
 */
export function readableForegroundHex(backgroundHex: string): string {
  return relativeLuminance(backgroundHex.replace("#", "")) >= 0.179
    ? "#0a0a0a"
    : "#fafafa"
}
