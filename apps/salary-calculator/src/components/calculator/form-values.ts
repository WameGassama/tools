import { PERSONFRADRAG } from "@/src/lib/tax/constants";
import type {
  IncomeType,
  LoenPeriode,
  Period,
  SkattekortType,
} from "@/src/lib/tax/types";

export type CalculatorMode = "progressive" | "withholding";

export interface FormValues {
  mode: CalculatorMode;
  grossSalary: number;
  period: Period;
  muniIndex: number;
  pensionPercent: number;
  atpIncluded: boolean;
  churchMember: boolean;
  isUnder18: boolean;
  commuteKmPerDay: number;
  fagforeningDeduction: number;
  akasseDeduction: number;
  renteudgifter: number;
  haandvaerkerUdgift: number;
  serviceUdgift: number;
  whIncomeType: IncomeType;
  whSkattekortType: SkattekortType;
  whLoenPeriode: LoenPeriode;
  whMaanedsfradrag: number;
  whGrossAmount: number;
  whAtpAmount: number;
  whPensionPercent: number;
  whIsUnder18: boolean;
  whTraekprocent: number;
}

// Gennemsnitlig månedsløn for fuldtidsbeskæftigede i Danmark (Danmarks Statistik,
// nyeste offentliggjorte tal, ekskl. pension).
const AVERAGE_MONTHLY_SALARY_DK = 46700;

export const DEFAULT_FORM_VALUES: FormValues = {
  mode: "progressive",
  grossSalary: AVERAGE_MONTHLY_SALARY_DK,
  period: "month",
  muniIndex: 0,
  pensionPercent: 5,
  atpIncluded: true,
  churchMember: true,
  isUnder18: false,
  commuteKmPerDay: 0,
  fagforeningDeduction: 0,
  akasseDeduction: 0,
  renteudgifter: 0,
  haandvaerkerUdgift: 0,
  serviceUdgift: 0,
  whIncomeType: "loen",
  whSkattekortType: "hovedkort",
  whLoenPeriode: "maaned",
  // SKATs officielle månedsfradrag = personfradraget / 12.
  whMaanedsfradrag: Math.round(PERSONFRADRAG / 12),
  whGrossAmount: AVERAGE_MONTHLY_SALARY_DK,
  whAtpAmount: 99,
  whPensionPercent: 0,
  whIsUnder18: false,
  whTraekprocent: 37,
};
