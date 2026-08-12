import { AM_RATE } from "./constants";
import type { LoenPeriode, WithholdingContext, WithholdingResult } from "./types";

export function computeWithholding(ctx: WithholdingContext): WithholdingResult {
  const isLoen = ctx.incomeType === "loen";

  // Kun løn er AM-bidragspligtig — SKATs egen beregner modellerer hverken
  // AM-bidrag, ATP eller pensionsindbetaling for pension/dagpenge/SU/efterløn
  // (verificeret: Pension 10.000 kr. med 6.000 kr. fradrag gav grundlag 4.000,
  // dvs. ingen AM-bidrag-reduktion først).
  const pensionAmount = isLoen ? ctx.grossAmount * (ctx.pensionPercent / 100) : 0;
  const atpAmount = isLoen ? ctx.atpAmount : 0;
  const amGrundlag = Math.max(0, ctx.grossAmount - pensionAmount - atpAmount);
  const amBidrag = isLoen && !ctx.isUnder18 ? Math.round(amGrundlag * AM_RATE) : 0;

  // Bikort bruger intet fradrag, uanset hvad der er indtastet (verificeret mod
  // SKATs beregner: Løn 35.000 kr. med bikort gav grundlag 32.200 = 35.000 − 2.800,
  // dvs. fradraget indgår slet ikke).
  const effectiveFradrag = ctx.skattekortType === "bikort" ? 0 : ctx.fradragPerPeriode;

  // Matcher SKATs egen beregner (skat.dk/borger/forskudsopgoerelse/regn-ud-hvad-du-faar-udbetalt):
  // grundlaget afrundes til nærmeste hele krone, ikke nærmeste 100 kr. som visse
  // lønsystemers tabelbaserede beregning (verificeret mod begge kilder).
  const askatGrundlag = Math.max(0, Math.round(amGrundlag - amBidrag - effectiveFradrag));
  const askat = Math.round(askatGrundlag * (ctx.traekprocent / 100));

  const net = ctx.grossAmount - pensionAmount - atpAmount - amBidrag - askat;

  const barTotal = Math.max(1, ctx.grossAmount);
  const savePct = ((pensionAmount + atpAmount) / barTotal) * 100;
  const taxPct = ((amBidrag + askat) / barTotal) * 100;
  const netPct = Math.max(0, 100 - savePct - taxPct);

  return {
    breakdown: { pensionAmount, atpAmount, amBidrag, askatGrundlag, askat, net },
    bar: { netPct, taxPct, savePct },
  };
}

// SKATs "Månedsfradrag" omregnes til periodens fradrag som
// round(månedsfradrag × 12 / perioder pr. år) — verificeret mod SKATs beregner:
// 6.000 kr./md. → 2.769 kr. pr. 14-dages-periode.
export function resolveFradragPerPeriode(
  loenPeriode: LoenPeriode,
  maanedsfradrag: number,
): number {
  const periodsPerYear = loenPeriode === "maaned" ? 12 : 26;
  return Math.round((maanedsfradrag * 12) / periodsPerYear);
}
