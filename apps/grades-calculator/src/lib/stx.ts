import {
  EMPTY_GYMNASIAL_GRADES,
  subjectLabels,
  type GymnasialRow,
  type SubjectOption,
} from "@/src/lib/gymnasial"

export const STX_ROWS_COOKIE_NAME = "stx-rows"

export const STX_SUBJECT_OPTIONS: SubjectOption[] = [
  { value: "dansk", label: "Dansk", defaultNiveau: "A" },
  { value: "matematik", label: "Matematik" },
  { value: "engelsk", label: "Engelsk", defaultNiveau: "B" },
  { value: "historie", label: "Historie", defaultNiveau: "A" },
  { value: "samfundsfag", label: "Samfundsfag" },
  { value: "religion", label: "Religion", defaultNiveau: "C" },
  { value: "oldtidskundskab", label: "Oldtidskundskab", defaultNiveau: "C" },
  { value: "idraet", label: "Idræt", defaultNiveau: "C" },
  { value: "fysik", label: "Fysik" },
  { value: "kemi", label: "Kemi" },
  { value: "biologi", label: "Biologi" },
  { value: "naturgeografi", label: "Naturgeografi", defaultNiveau: "C" },
  { value: "psykologi", label: "Psykologi", defaultNiveau: "C" },
  { value: "mediefag", label: "Mediefag" },
  { value: "musik", label: "Musik", defaultNiveau: "C" },
  { value: "billedkunst", label: "Billedkunst", defaultNiveau: "C" },
  { value: "dramatik", label: "Dramatik", defaultNiveau: "C" },
  { value: "tysk", label: "Tysk" },
  { value: "fransk", label: "Fransk" },
  { value: "spansk", label: "Spansk" },
  {
    value: "almen-sprogforstaaelse",
    label: "Almen sprogforståelse (AP)",
    defaultNiveau: "C",
  },
  {
    value: "naturvidenskabeligt-grundforloeb",
    label: "Naturvidenskabeligt grundforløb (NV)",
    defaultNiveau: "C",
  },
  {
    value: "srp",
    label: "Studieretningsprojekt (SRP)",
    defaultNiveau: "A",
    fixedWeight: 2,
  },
  { value: "andet", label: "Andet" },
]

export const STX_SUBJECT_LABELS = subjectLabels(STX_SUBJECT_OPTIONS)

/**
 * Baseline fag alle STX-elever har (fælles obligatoriske fag + SRP), forudfyldt
 * som standardrækker – ligesom softit.dk's STX-beregner. Studieretningsfag
 * (fysik, kemi, sprog m.fl.) tilføjes manuelt via "Tilføj fag", da de varierer
 * fra elev til elev.
 */
export const DEFAULT_STX_ROWS: GymnasialRow[] = [
  { fag: "dansk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "engelsk", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "historie", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "matematik", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "samfundsfag", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "idraet", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "religion", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "oldtidskundskab",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "srp", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
]
