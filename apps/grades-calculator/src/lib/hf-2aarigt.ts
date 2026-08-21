import {
  EMPTY_GYMNASIAL_GRADES,
  subjectLabels,
  type BonusThresholds,
  type GymnasialRow,
  type SubjectOption,
} from "@/src/lib/gymnasial"

export const HF_2AARIGT_ROWS_COOKIE_NAME = "hf-2aarigt-rows"

/**
 * 2-årigt HF har kun Dansk A som obligatorisk A-niveau-baseline (mod 4 på
 * STX/HHX/HTX/EUX), så bonus udløses allerede ved det 2. og 3. A-fag.
 */
export const HF_2AARIGT_BONUS_THRESHOLDS: BonusThresholds = {
  moderate: 2,
  high: 3,
}

export const HF_2AARIGT_SUBJECT_OPTIONS: SubjectOption[] = [
  {
    value: "sso",
    label: "Større skriftlig opgave",
    defaultNiveau: "B",
    fixedWeight: 1.5,
  },
  { value: "dansk", label: "Dansk", defaultNiveau: "A" },
  { value: "engelsk", label: "Engelsk", defaultNiveau: "B" },
  {
    value: "ks",
    label: "Kultur- og samfundsfaggruppen (KS)",
    defaultNiveau: "B",
    fixedWeight: 2,
  },
  { value: "matematik", label: "Matematik", defaultNiveau: "C" },
  {
    value: "nf",
    label: "Naturvidenskabelig faggruppe (NF)",
    defaultNiveau: "C",
    fixedWeight: 1.5,
  },
  { value: "afsaetning", label: "Afsætning" },
  { value: "arabisk", label: "Arabisk" },
  { value: "astronomi", label: "Astronomi" },
  { value: "billedkunst", label: "Billedkunst" },
  { value: "biologi", label: "Biologi" },
  { value: "dans", label: "Dans" },
  { value: "datalogi", label: "Datalogi" },
  { value: "design-og-arkitektur", label: "Design og arkitektur" },
  { value: "drama", label: "Drama" },
  { value: "erhvervsoekonomi", label: "Erhvervsøkonomi" },
  { value: "filosofi", label: "Filosofi" },
  { value: "finansiering", label: "Finansiering" },
  { value: "fransk-begynder", label: "Fransk begynder" },
  { value: "fransk-fortsaetter", label: "Fransk fortsætter" },
  { value: "fysik", label: "Fysik" },
  { value: "geografi", label: "Geografi" },
  { value: "historie", label: "Historie" },
  { value: "idraet", label: "Idræt" },
  { value: "informatik", label: "Informatik" },
  { value: "informationsteknologi", label: "Informationsteknologi" },
  { value: "innovation", label: "Innovation" },
  { value: "international-oekonomi", label: "International økonomi" },
  { value: "italiensk", label: "Italiensk" },
  { value: "japansk", label: "Japansk" },
  { value: "kemi", label: "Kemi" },
  { value: "kinesisk", label: "Kinesisk" },
  { value: "kommunikation-it", label: "Kommunikation/it" },
  { value: "latin", label: "Latin" },
  { value: "mediefag", label: "Mediefag" },
  { value: "musik", label: "Musik" },
  { value: "oldtidskundskab", label: "Oldtidskundskab" },
  { value: "psykologi", label: "Psykologi" },
  { value: "religion", label: "Religion" },
  { value: "retorik", label: "Retorik" },
  { value: "samfundsfag", label: "Samfundsfag" },
  { value: "spansk", label: "Spansk" },
  { value: "tyrkisk", label: "Tyrkisk" },
  { value: "tysk-begynder", label: "Tysk begynder" },
  { value: "tysk-fortsaetter", label: "Tysk fortsætter" },
  { value: "virksomhedsoekonomi", label: "Virksomhedsøkonomi" },
  { value: "andet", label: "Andet" },
]

export const HF_2AARIGT_SUBJECT_LABELS = subjectLabels(
  HF_2AARIGT_SUBJECT_OPTIONS
)

/**
 * Baseline fag alle 2-årige HF-elever har, forudfyldt som standardrækker –
 * matcher softit.dk's HF (2 årigt)-beregner. Studieretnings- og valgfag
 * tilføjes manuelt via "Tilføj fag".
 */
export const DEFAULT_HF_2AARIGT_ROWS: GymnasialRow[] = [
  { fag: "sso", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "dansk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "engelsk", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "ks", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "matematik", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "nf", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
]
