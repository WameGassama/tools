import {
  EMPTY_GYMNASIAL_GRADES,
  subjectLabels,
  type GymnasialRow,
  type SubjectOption,
} from "@/src/lib/gymnasial"

export const HHX_ROWS_COOKIE_NAME = "hhx-rows"

export const HHX_SUBJECT_OPTIONS: SubjectOption[] = [
  { value: "dansk", label: "Dansk", defaultNiveau: "A" },
  { value: "engelsk", label: "Engelsk", defaultNiveau: "A" },
  {
    value: "virksomhedsoekonomi",
    label: "Virksomhedsøkonomi",
    defaultNiveau: "B",
  },
  { value: "afsaetning", label: "Afsætning", defaultNiveau: "B" },
  { value: "historie", label: "Historie", defaultNiveau: "B" },
  {
    value: "international-oekonomi",
    label: "International økonomi",
    defaultNiveau: "B",
  },
  { value: "matematik", label: "Matematik", defaultNiveau: "B" },
  { value: "erhvervsjura", label: "Erhvervsjura", defaultNiveau: "C" },
  { value: "informatik", label: "Informatik", defaultNiveau: "C" },
  { value: "samfundsfag", label: "Samfundsfag", defaultNiveau: "C" },
  { value: "tysk", label: "Tysk" },
  { value: "fransk", label: "Fransk" },
  { value: "spansk", label: "Spansk" },
  { value: "organisation", label: "Organisation" },
  { value: "innovation", label: "Innovation" },
  { value: "psykologi", label: "Psykologi", defaultNiveau: "C" },
  { value: "design", label: "Design", defaultNiveau: "C" },
  { value: "programmering", label: "Programmering" },
  {
    value: "sop",
    label: "Studieområdeprojekt (SOP)",
    defaultNiveau: "A",
    fixedWeight: 2,
  },
  { value: "andet", label: "Andet" },
]

export const HHX_SUBJECT_LABELS = subjectLabels(HHX_SUBJECT_OPTIONS)

/**
 * Baseline fag alle HHX-elever har (fælles obligatoriske fag + SOP), forudfyldt
 * som standardrækker – ligesom softit.dk's HHX-beregner. Studieretningsfag
 * (2. fremmedsprog, valgfag m.fl.) tilføjes manuelt via "Tilføj fag", da de
 * varierer fra elev til elev.
 */
export const DEFAULT_HHX_ROWS: GymnasialRow[] = [
  { fag: "dansk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "engelsk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "virksomhedsoekonomi",
    customFag: "",
    niveau: "B",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "afsaetning", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "historie", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "international-oekonomi",
    customFag: "",
    niveau: "B",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "matematik", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "erhvervsjura",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "informatik", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "samfundsfag",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "sop", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
]
