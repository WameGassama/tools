// 2026 Danish income tax rates and thresholds (illustrative, see site footer disclaimer).
export const PERSONFRADRAG = 54100;

export const BESK_RATE = 0.1275;
export const BESK_MAX = 63300;

export const JOB_RATE = 0.045;
export const JOB_THRESHOLD = 235200;
export const JOB_MAX = 3100;

export const AM_RATE = 0.08;

export const BUND_RATE = 0.1201;

export const MELLEM_THRESHOLD = 641200;
export const MELLEM_RATE = 0.075;

export const TOP_THRESHOLD = 777900;
export const TOP_RATE = 0.075;

export const TOPTOP_THRESHOLD = 2592700;
export const TOPTOP_RATE = 0.05;

export const ATP_YEAR = 1188;

export const MARGINAL_STEP = 12000;

// Kørselsfradrag (befordringsfradrag) — 2026 satser
export const KORSEL_FREE_KM_DAY = 24;
export const KORSEL_TIER1_MAX_KM = 120;
export const KORSEL_TIER1_RATE = 2.28;
export const KORSEL_TIER2_RATE = 1.14;
export const KORSEL_WORKDAYS_YEAR = 216; // approximation: standard DK full-time work-year days

// Fagforening (union dues)
export const FAGFORENING_MAX = 7000;

// Rentefradrag (interest deduction)
export const RENTE_THRESHOLD = 50000;
export const RENTE_EXTRA_RATE = 0.08;

// Håndværker- og servicefradrag (boligjobordningen)
export const HAANDVAERKER_MAX = 9000;
export const SERVICE_MAX = 18300;
export const BOLIGJOB_RATE = 0.26;

// UI-sanity-loft for løn-input — ikke lovbestemt, blot en grænse mod fejltastninger.
export const MAX_SALARY = 99_999_999;

// Realistiske øvre grænser — ikke lovbestemte, men sat ud fra hvad der reelt
// forekommer (lang pendlerafstand, typisk a-kasse-kontingent, store boliglån).
export const MAX_COMMUTE_KM_DAY = 300; // tur/retur pr. dag
export const MAX_AKASSE_MONTHLY = 1000; // kr./md. — reelle satser ligger under 700 kr.
export const MAX_RENTEUDGIFTER = 300_000; // kr./år
