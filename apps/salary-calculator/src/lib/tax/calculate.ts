import {
  AM_RATE,
  ATP_YEAR,
  BESK_MAX,
  BESK_RATE,
  BOLIGJOB_RATE,
  BUND_RATE,
  FAGFORENING_MAX,
  HAANDVAERKER_MAX,
  JOB_MAX,
  JOB_RATE,
  JOB_THRESHOLD,
  KORSEL_FREE_KM_DAY,
  KORSEL_TIER1_MAX_KM,
  KORSEL_TIER1_RATE,
  KORSEL_TIER2_RATE,
  KORSEL_WORKDAYS_YEAR,
  MARGINAL_STEP,
  MELLEM_RATE,
  MELLEM_THRESHOLD,
  PERSONFRADRAG,
  RENTE_EXTRA_RATE,
  RENTE_THRESHOLD,
  SERVICE_MAX,
  TOP_RATE,
  TOP_THRESHOLD,
  TOPTOP_RATE,
  TOPTOP_THRESHOLD,
} from "./constants";
import type { Period, SalaryResult, TaxBreakdown, TaxContext } from "./types";

function dailyKorselsfradrag(km: number): number {
  if (km <= KORSEL_FREE_KM_DAY) return 0;
  const tier1Km = Math.min(km, KORSEL_TIER1_MAX_KM) - KORSEL_FREE_KM_DAY;
  const tier2Km = Math.max(0, km - KORSEL_TIER1_MAX_KM);
  return tier1Km * KORSEL_TIER1_RATE + tier2Km * KORSEL_TIER2_RATE;
}

export function computeTax(grossAnnual: number, ctx: TaxContext): TaxBreakdown {
  const pensionAnnual = grossAnnual * (ctx.pensionPercent / 100);
  const atpAnnual = ctx.atpIncluded ? ATP_YEAR : 0;
  const amGrundlag = Math.max(0, grossAnnual - pensionAnnual - atpAnnual);
  const amBidrag = ctx.isUnder18 ? 0 : amGrundlag * AM_RATE;
  const personalIncome = amGrundlag - amBidrag;

  // Beskæftigelses- og jobfradrag beregnes af lønnen INKLUSIVE am-bidrag, dvs. af
  // amGrundlag, ikke af personalIncome (source: skat.dk/borger/fradrag/arbejdsrelaterede-fradrag/
  // beskaeftigelses-og-jobfradrag — "beløb du mindst skal tjene for at få fuldt fradrag" for 2026
  // er 496.471 kr. og 304.089 kr., som kun stemmer med amGrundlag som grundlag).
  const beskFradrag = ctx.isUnder18 ? 0 : Math.min(amGrundlag * BESK_RATE, BESK_MAX);
  const jobFradrag = ctx.isUnder18
    ? 0
    : Math.min(Math.max(0, amGrundlag - JOB_THRESHOLD) * JOB_RATE, JOB_MAX);

  const korselsfradragAnnual = dailyKorselsfradrag(ctx.commuteKmPerDay) * KORSEL_WORKDAYS_YEAR;
  const fagforeningAnnual = Math.min(ctx.fagforeningDeduction * 12, FAGFORENING_MAX);
  const akasseAnnual = ctx.akasseDeduction * 12;
  const ligningsmaessigeFradrag =
    korselsfradragAnnual + fagforeningAnnual + akasseAnnual + ctx.renteudgifter;

  const bundskat = Math.max(0, personalIncome - PERSONFRADRAG) * BUND_RATE;
  const mellemskat = Math.max(0, personalIncome - MELLEM_THRESHOLD) * MELLEM_RATE;
  const topskat = Math.max(0, personalIncome - TOP_THRESHOLD) * TOP_RATE;
  const topTopskat = Math.max(0, personalIncome - TOPTOP_THRESHOLD) * TOPTOP_RATE;

  // kommuneBase additionally subtracts beskFradrag/jobFradrag/ligningsmaessigeFradrag, unlike
  // the state-tax brackets above — this asymmetry is intentional (source: claude/Løn Beregner.dc.html).
  const kommuneBase = Math.max(
    0,
    personalIncome - beskFradrag - jobFradrag - ligningsmaessigeFradrag - PERSONFRADRAG
  );
  const kommuneskat = kommuneBase * (ctx.kommuneRate / 100);
  const kirkeskat = ctx.churchMember ? kommuneBase * (ctx.kirkeRate / 100) : 0;

  const renteNedslag = Math.min(ctx.renteudgifter, RENTE_THRESHOLD) * RENTE_EXTRA_RATE;
  const haandvaerkerCredit = Math.min(ctx.haandvaerkerUdgift, HAANDVAERKER_MAX) * BOLIGJOB_RATE;
  const serviceCredit = Math.min(ctx.serviceUdgift, SERVICE_MAX) * BOLIGJOB_RATE;
  const boligjobCredit = renteNedslag + haandvaerkerCredit + serviceCredit;

  const totalTax = Math.max(
    0,
    amBidrag + bundskat + mellemskat + topskat + topTopskat + kommuneskat + kirkeskat - boligjobCredit
  );
  const net = grossAnnual - pensionAnnual - atpAnnual - totalTax;

  return {
    pensionAnnual,
    atpAnnual,
    amBidrag,
    bundskat,
    mellemskat,
    topskat,
    topTopskat,
    kommuneskat,
    kirkeskat,
    boligjobCredit,
    totalTax,
    net,
  };
}

export function calculateSalary(
  grossSalary: number,
  period: Period,
  ctx: TaxContext
): SalaryResult {
  const grossAnnual = period === "year" ? grossSalary : grossSalary * 12;
  const breakdown = computeTax(grossAnnual, ctx);
  const stepBreakdown = computeTax(grossAnnual + MARGINAL_STEP, ctx);
  const marginalRatePct = ((stepBreakdown.totalTax - breakdown.totalTax) / MARGINAL_STEP) * 100;

  const divisor: 1 | 12 = period === "year" ? 1 : 12;
  const barTotal = Math.max(1, grossAnnual);
  const savePct = ((breakdown.pensionAnnual + breakdown.atpAnnual) / barTotal) * 100;
  const taxPct = (breakdown.totalTax / barTotal) * 100;
  const netPct = Math.max(0, 100 - savePct - taxPct);

  return {
    grossAnnual,
    breakdown,
    divisor,
    marginalRatePct,
    bar: { netPct, taxPct, savePct },
  };
}
