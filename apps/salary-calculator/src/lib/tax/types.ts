export type Period = "month" | "year";

export interface TaxContext {
  pensionPercent: number;
  atpIncluded: boolean;
  isUnder18: boolean;
  churchMember: boolean;
  commuteKmPerDay: number; // km, round trip per day
  fagforeningDeduction: number; // kr./month, capped at FAGFORENING_MAX/year internally
  akasseDeduction: number; // kr./month, uncapped
  renteudgifter: number; // kr./year
  haandvaerkerUdgift: number; // kr./year, capped at HAANDVAERKER_MAX
  serviceUdgift: number; // kr./year, capped at SERVICE_MAX
  kommuneRate: number; // %
  kirkeRate: number; // %
}

export interface TaxBreakdown {
  pensionAnnual: number;
  atpAnnual: number;
  amBidrag: number;
  bundskat: number;
  mellemskat: number;
  topskat: number;
  topTopskat: number;
  kommuneskat: number;
  kirkeskat: number;
  boligjobCredit: number;
  totalTax: number;
  net: number;
}

export interface SalaryResult {
  grossAnnual: number;
  breakdown: TaxBreakdown;
  divisor: 1 | 12;
  marginalRatePct: number;
  bar: { netPct: number; taxPct: number; savePct: number };
}

export type IncomeType = "loen" | "pension" | "dagpenge" | "su" | "efterloen";
export type SkattekortType = "hovedkort" | "bikort";
export type LoenPeriode = "maaned" | "hver-anden-uge";

export interface WithholdingContext {
  incomeType: IncomeType;
  skattekortType: SkattekortType;
  grossAmount: number; // kr. for perioden (fra lønseddel)
  atpAmount: number; // kr. for perioden (fra lønseddel/ATP-tabel), kun for incomeType "loen"
  pensionPercent: number; // kun for incomeType "loen"
  isUnder18: boolean;
  traekprocent: number; // %, fra skattekort/forskudsopgørelse
  fradragPerPeriode: number; // kr., allerede resolvet for perioden (0 hvis bikort)
}

export interface WithholdingBreakdown {
  pensionAmount: number;
  atpAmount: number;
  amBidrag: number;
  askatGrundlag: number;
  askat: number;
  net: number;
}

export interface WithholdingResult {
  breakdown: WithholdingBreakdown;
  bar: { netPct: number; taxPct: number; savePct: number };
}
