export const STATIC_ROUTES: string[] = ["/privatlivspolitik", "/vilkaar"]

/** Almindelige højder fra 4 fod 8 tommer til 6 fod 6 tommer, brugt i højdetabellen. */
export const HEIGHT_TABLE_VALUES: { feet: number; inches: number }[] = Array.from(
  { length: 23 },
  (_, i) => {
    const totalInches = 56 + i
    return { feet: Math.floor(totalInches / 12), inches: totalInches % 12 }
  },
)
