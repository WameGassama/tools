import {
  EMPTY_GYMNASIAL_GRADES,
  subjectLabels,
  type GymnasialRow,
  type SubjectOption,
} from "@/src/lib/gymnasial"

export const HTX_ROWS_COOKIE_NAME = "htx-rows"

export const HTX_SUBJECT_OPTIONS: SubjectOption[] = [
  {
    value: "naturvidenskabeligt-grundforloeb",
    label: "Naturvidenskabeligt grundforløb",
    defaultNiveau: "C",
  },
  { value: "produktudvikling", label: "Produktudvikling", defaultNiveau: "B" },
  {
    value: "sop",
    label: "Studieområdeprojekt (SOP)",
    defaultNiveau: "A",
    fixedWeight: 2,
  },
  { value: "biologi", label: "Biologi", defaultNiveau: "C" },
  { value: "dansk", label: "Dansk", defaultNiveau: "A" },
  { value: "engelsk", label: "Engelsk", defaultNiveau: "B" },
  { value: "fysik", label: "Fysik", defaultNiveau: "B" },
  { value: "idehistorie", label: "Idéhistorie", defaultNiveau: "B" },
  { value: "kemi", label: "Kemi", defaultNiveau: "B" },
  { value: "matematik", label: "Matematik", defaultNiveau: "B" },
  { value: "samfundsfag", label: "Samfundsfag", defaultNiveau: "C" },
  { value: "teknikfag", label: "Teknikfag", defaultNiveau: "A" },
  { value: "teknologi", label: "Teknologi", defaultNiveau: "B" },
  { value: "astronomi", label: "Astronomi" },
  { value: "billedkunst", label: "Billedkunst" },
  { value: "bioteknologi", label: "Bioteknologi" },
  { value: "design-og-arkitektur", label: "Design og arkitektur" },
  { value: "design", label: "Design" },
  { value: "erhvervsoekonomi", label: "Erhvervsøkonomi" },
  { value: "filosofi", label: "Filosofi" },
  { value: "finansiering", label: "Finansiering" },
  { value: "geovidenskab", label: "Geovidenskab" },
  { value: "idraet", label: "Idræt" },
  { value: "informatik", label: "Informatik" },
  { value: "innovation", label: "Innovation" },
  {
    value: "international-teknologi-og-kultur",
    label: "International teknologi og kultur",
  },
  { value: "kommunikation-it", label: "Kommunikation/IT" },
  { value: "kulturforstaaelse", label: "Kulturforståelse" },
  { value: "latin", label: "Latin" },
  { value: "mediefag", label: "Mediefag" },
  { value: "materialeteknologi", label: "Materialeteknologi" },
  { value: "multimedier", label: "Multimedier" },
  { value: "musik", label: "Musik" },
  { value: "musik-og-lydproduktion", label: "Musik- og lydproduktion" },
  { value: "programmering", label: "Programmering" },
  { value: "psykologi", label: "Psykologi" },
  { value: "retorik", label: "Retorik" },
  { value: "statik-og-styrkelaere", label: "Statik og styrkelære" },
  { value: "statistik", label: "Statistik" },
  { value: "tysk-fortsaetter", label: "Tysk fortsætter" },
  { value: "andet", label: "Andet" },
]

export const HTX_SUBJECT_LABELS = subjectLabels(HTX_SUBJECT_OPTIONS)

/**
 * Baseline fag alle HTX-elever har (fælles obligatoriske fag + grundforløbs-
 * elementer og SOP), forudfyldt som standardrækker – matcher softit.dk's
 * HTX-beregner nøjagtigt (samme fag, samme rækkefølge, samme standardniveauer).
 * Teknikfag og studieretningsfag ud over disse tilføjes manuelt via
 * "Tilføj fag", da de varierer med den enkelte elevs studieretning.
 */
export const DEFAULT_HTX_ROWS: GymnasialRow[] = [
  {
    fag: "naturvidenskabeligt-grundforloeb",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  {
    fag: "produktudvikling",
    customFag: "",
    niveau: "B",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "sop", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "biologi", customFag: "", niveau: "C", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "dansk", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "engelsk", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "fysik", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "idehistorie",
    customFag: "",
    niveau: "B",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "kemi", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "matematik", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
  {
    fag: "samfundsfag",
    customFag: "",
    niveau: "C",
    ...EMPTY_GYMNASIAL_GRADES,
  },
  { fag: "teknikfag", customFag: "", niveau: "A", ...EMPTY_GYMNASIAL_GRADES },
  { fag: "teknologi", customFag: "", niveau: "B", ...EMPTY_GYMNASIAL_GRADES },
]
