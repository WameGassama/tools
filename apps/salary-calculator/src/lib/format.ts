const krFormatter = new Intl.NumberFormat("da-DK", { maximumFractionDigits: 0 });

export function formatKr(n: number): string {
  return krFormatter.format(Math.round(n));
}
