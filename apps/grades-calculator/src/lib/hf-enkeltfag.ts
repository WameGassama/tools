import {
  EMPTY_GYMNASIAL_GRADES,
  subjectLabels,
  type BonusThresholds,
  type GymnasialRow,
  type SubjectOption,
} from "@/src/lib/gymnasial"

export const HF_ENKELTFAG_ROWS_COOKIE_NAME = "hf-enkeltfag-rows"

/**
 * § 68 i Almen prøvebekendtgørelse nævner ikke hf som enkeltfag (kun stx,
 * hhx, htx, toårig hf-eksamen og eux) – der er derfor ingen bonus-A-ordning
 * her. Tærsklerne sættes til Infinity, så bonusMultiplier aldrig kan udløses,
 * uanset hvor mange fag på A-niveau brugeren indtaster.
 */
export const HF_ENKELTFAG_BONUS_THRESHOLDS: BonusThresholds = {
  moderate: Infinity,
  high: Infinity,
}

export const HF_ENKELTFAG_SUBJECT_OPTIONS: SubjectOption[] = [
  {
    value: "sso",
    label: "Større skriftlig opgave",
    defaultNiveau: "B",
    fixedWeight: 1.5,
  },
  {
    value: "eksamensprojekt",
    label: "Eksamensprojekt",
    defaultNiveau: "A",
    fixedWeight: 1.5,
  },
  { value: "biologi", label: "Biologi", defaultNiveau: "C" },
  { value: "dansk", label: "Dansk", defaultNiveau: "A" },
  { value: "engelsk", label: "Engelsk", defaultNiveau: "C" },
  { value: "geografi", label: "Geografi", defaultNiveau: "C" },
  { value: "historie", label: "Historie", defaultNiveau: "B" },
  { value: "kemi", label: "Kemi", defaultNiveau: "C" },
  { value: "matematik", label: "Matematik", defaultNiveau: "C" },
  { value: "religion", label: "Religion", defaultNiveau: "C" },
  { value: "samfundsfag", label: "Samfundsfag", defaultNiveau: "C" },
  { value: "afsaetning", label: "Afsætning" },
  { value: "arabisk", label: "Arabisk" },
  { value: "astronomi", label: "Astronomi" },
  { value: "billedkunst", label: "Billedkunst" },
  { value: "dans", label: "Dans" },
  { value: "datalogi", label: "Datalogi" },
  { value: "design-og-arkitektur", label: "Design og arkitektur" },
  { value: "drama", label: "Drama" },
  { value: "erhvervsoekonomi", label: "Erhvervsøkonomi" },
  { value: "filosofi", label: "Filosofi" },
  { value: "fransk-begynder", label: "Fransk begynder" },
  { value: "fransk-fortsaetter", label: "Fransk fortsætter" },
  { value: "fysik", label: "Fysik" },
  { value: "idraet", label: "Idræt" },
  { value: "informatik", label: "Informatik" },
  { value: "informationsteknologi", label: "Informationsteknologi" },
  { value: "innovation", label: "Innovation" },
  { value: "international-oekonomi", label: "International økonomi" },
  { value: "italiensk", label: "Italiensk" },
  { value: "japansk", label: "Japansk" },
  { value: "kinesisk", label: "Kinesisk" },
  { value: "kommunikation-it", label: "Kommunikation/it" },
  {
    value: "kultur-og-samfundsfaggruppe",
    label: "Kultur- og samfundsfaggruppe (KS)",
    fixedWeight: 2,
  },
  { value: "kulturforstaaelse", label: "Kulturforståelse" },
  { value: "latin", label: "Latin" },
  { value: "markedskommunikation", label: "Markedskommunikation" },
  { value: "mediefag", label: "Mediefag" },
  { value: "musik", label: "Musik" },
  {
    value: "naturvidenskabelig-faggruppe",
    label: "Naturvidenskabelig faggruppe (NF)",
    fixedWeight: 1.5,
  },
  { value: "oldtidskundskab", label: "Oldtidskundskab" },
  { value: "organisation", label: "Organisation" },
  { value: "programmering", label: "Programmering" },
  { value: "psykologi", label: "Psykologi" },
  { value: "retorik", label: "Retorik" },
  { value: "spansk", label: "Spansk" },
  { value: "teknologi", label: "Teknologi" },
  { value: "tyrkisk", label: "Tyrkisk" },
  { value: "tysk-begynder", label: "Tysk begynder" },
  { value: "tysk-fortsaetter", label: "Tysk fortsætter" },
  { value: "virksomhedsoekonomi", label: "Virksomhedsøkonomi" },
  { value: "andet", label: "Andet" },
]

export const HF_ENKELTFAG_SUBJECT_LABELS = subjectLabels(
  HF_ENKELTFAG_SUBJECT_OPTIONS
)

/**
 * Baseline fag mange HF-enkeltfagselever har, forudfyldt som standardrækker –
 * matcher softit.dk's HF (enkeltfag)-beregner. I modsætning til STX/HHX/HTX
 * afgives der ikke standpunktskarakterer på enkeltfag – kun opnået
 * eksamenskarakter (mundtlig/intern og skriftlig/ekstern), da hvert fag er en
 * selvstændig eksamen. Øvrige fag tilføjes manuelt via "Tilføj fag".
 */
export const DEFAULT_HF_ENKELTFAG_ROWS: GymnasialRow[] = [
  { fag: "sso", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "eksamensprojekt",
    customFag: "",
    niveau: "A",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "biologi", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "dansk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "engelsk", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "geografi", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "historie", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "kemi", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "matematik", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "religion", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "samfundsfag",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
]
