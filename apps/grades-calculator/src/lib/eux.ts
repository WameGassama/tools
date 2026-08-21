import {
  EMPTY_GYMNASIAL_GRADES,
  subjectLabels,
  type BonusThresholds,
  type GymnasialRow,
  type SubjectOption,
} from "@/src/lib/gymnasial"

export const EUX_ROWS_COOKIE_NAME = "eux-rows"

/**
 * § 68, stk. 3 i Almen prøvebekendtgørelse lader eux følge samme princip som
 * hf: antallet af obligatoriske A-niveau-fag afhænger af den enkelte
 * erhvervsuddannelse, og bonus udløses typisk ved ét og to ekstra A-fag – dvs.
 * 2 og 3 fag i alt, ligesom 2-årigt HF. Det præcise baseline-antal varierer
 * dog mellem forløb, så tjek altid reglerne for netop dit uddannelsesforløb.
 */
export const EUX_BONUS_THRESHOLDS: BonusThresholds = {
  moderate: 2,
  high: 3,
}

export const EUX_SUBJECT_OPTIONS: SubjectOption[] = [
  { value: "dansk", label: "Dansk", defaultNiveau: "A" },
  { value: "engelsk", label: "Engelsk", defaultNiveau: "B" },
  { value: "matematik", label: "Matematik" },
  { value: "samfundsfag", label: "Samfundsfag", defaultNiveau: "C" },
  { value: "fysik", label: "Fysik" },
  { value: "kemi", label: "Kemi" },
  { value: "bioteknologi", label: "Bioteknologi" },
  { value: "teknologi", label: "Teknologi" },
  { value: "naturfag", label: "Naturfag", defaultNiveau: "C" },
  { value: "historie", label: "Historie", defaultNiveau: "B" },
  { value: "idraet", label: "Idræt", defaultNiveau: "C" },
  {
    value: "erhvervsoekonomi",
    label: "Erhvervsøkonomi",
    defaultNiveau: "B",
  },
  { value: "afsaetning", label: "Afsætning" },
  { value: "international-oekonomi", label: "International økonomi" },
  { value: "erhvervsjura", label: "Erhvervsjura", defaultNiveau: "C" },
  { value: "informatik", label: "Informatik", defaultNiveau: "C" },
  { value: "design", label: "Design" },
  { value: "tysk", label: "Tysk" },
  { value: "fransk", label: "Fransk" },
  { value: "spansk", label: "Spansk" },
  {
    value: "eop",
    label: "Erhvervsområdeprojekt (EOP)",
    defaultNiveau: "A",
    fixedWeight: 2,
  },
  { value: "andet", label: "Andet" },
]

export const EUX_SUBJECT_LABELS = subjectLabels(EUX_SUBJECT_OPTIONS)

/**
 * Baseline fag alle EUX-elever har (fælles obligatoriske fag + EOP), forudfyldt
 * som standardrækker – ligesom softit.dk's EUX-beregner. Studieretningsfag
 * (matematik, fysik, erhvervsøkonomi m.fl.) varierer mellem merkantile og
 * tekniske eux-forløb og tilføjes manuelt via "Tilføj fag".
 */
export const DEFAULT_EUX_ROWS: GymnasialRow[] = [
  { fag: "eop", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "dansk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "engelsk", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "samfundsfag",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
]
