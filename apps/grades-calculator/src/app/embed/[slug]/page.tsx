import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { GradeCalculator } from "@/src/components/calculator/grade-calculator"
import { GymnasialCalculator } from "@/src/components/calculator/gymnasial-calculator"
import { FolkeskoleCalculator } from "@/src/components/calculator/folkeskole-calculator"
import { EmbedFrame } from "@/src/components/embed/embed-frame"
import { isValidHexColor } from "@/src/lib/color-contrast"
import { EMBED_CALCULATORS, findEmbedCalculator } from "@/src/lib/embed-calculators"
import { DEFAULT_EUX_ROWS, EUX_BONUS_THRESHOLDS, EUX_ROWS_COOKIE_NAME, EUX_SUBJECT_LABELS, EUX_SUBJECT_OPTIONS } from "@/src/lib/eux"
import { DEFAULT_HHX_ROWS, HHX_ROWS_COOKIE_NAME, HHX_SUBJECT_LABELS, HHX_SUBJECT_OPTIONS } from "@/src/lib/hhx"
import {
  DEFAULT_HF_2AARIGT_ROWS,
  HF_2AARIGT_BONUS_THRESHOLDS,
  HF_2AARIGT_ROWS_COOKIE_NAME,
  HF_2AARIGT_SUBJECT_LABELS,
  HF_2AARIGT_SUBJECT_OPTIONS,
} from "@/src/lib/hf-2aarigt"
import {
  DEFAULT_HF_ENKELTFAG_ROWS,
  HF_ENKELTFAG_BONUS_THRESHOLDS,
  HF_ENKELTFAG_ROWS_COOKIE_NAME,
  HF_ENKELTFAG_SUBJECT_LABELS,
  HF_ENKELTFAG_SUBJECT_OPTIONS,
} from "@/src/lib/hf-enkeltfag"
import { DEFAULT_HTX_ROWS, HTX_ROWS_COOKIE_NAME, HTX_SUBJECT_LABELS, HTX_SUBJECT_OPTIONS } from "@/src/lib/htx"
import { DEFAULT_STX_ROWS, STX_ROWS_COOKIE_NAME, STX_SUBJECT_LABELS, STX_SUBJECT_OPTIONS } from "@/src/lib/stx"

const SITE_URL = "https://www.gennemsnitsberegner.dk"

export function generateStaticParams() {
  return EMBED_CALCULATORS.map((calculator) => ({ slug: calculator.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const calculator = findEmbedCalculator(slug)

  return {
    title: calculator
      ? `${calculator.title} – Gennemsnitsberegner.dk`
      : "Gennemsnitsberegner.dk",
    robots: { index: false, follow: false },
  }
}

const HF_2_GRADE_FIELDS = [
  { key: "eksamenMundtlig" as const, label: "Mundtlig/Intern" },
  { key: "eksamenSkriftlig" as const, label: "Skriftlig/Ekstern" },
]

function renderCalculator(slug: string) {
  switch (slug) {
    case "ects":
      return <GradeCalculator />
    case "stx":
      return (
        <GymnasialCalculator
          defaultRows={DEFAULT_STX_ROWS}
          subjectOptions={STX_SUBJECT_OPTIONS}
          subjectLabels={STX_SUBJECT_LABELS}
          cookieName={STX_ROWS_COOKIE_NAME}
          resultLabel="Dit STX-gennemsnit"
        />
      )
    case "hhx":
      return (
        <GymnasialCalculator
          defaultRows={DEFAULT_HHX_ROWS}
          subjectOptions={HHX_SUBJECT_OPTIONS}
          subjectLabels={HHX_SUBJECT_LABELS}
          cookieName={HHX_ROWS_COOKIE_NAME}
          resultLabel="Dit HHX-gennemsnit"
        />
      )
    case "eux":
      return (
        <GymnasialCalculator
          defaultRows={DEFAULT_EUX_ROWS}
          subjectOptions={EUX_SUBJECT_OPTIONS}
          subjectLabels={EUX_SUBJECT_LABELS}
          cookieName={EUX_ROWS_COOKIE_NAME}
          resultLabel="Dit EUX-gennemsnit"
          bonusThresholds={EUX_BONUS_THRESHOLDS}
        />
      )
    case "htx":
      return (
        <GymnasialCalculator
          defaultRows={DEFAULT_HTX_ROWS}
          subjectOptions={HTX_SUBJECT_OPTIONS}
          subjectLabels={HTX_SUBJECT_LABELS}
          cookieName={HTX_ROWS_COOKIE_NAME}
          resultLabel="Dit HTX-gennemsnit"
        />
      )
    case "hf-2aarigt":
      return (
        <GymnasialCalculator
          defaultRows={DEFAULT_HF_2AARIGT_ROWS}
          subjectOptions={HF_2AARIGT_SUBJECT_OPTIONS}
          subjectLabels={HF_2AARIGT_SUBJECT_LABELS}
          cookieName={HF_2AARIGT_ROWS_COOKIE_NAME}
          resultLabel="Dit HF-gennemsnit"
          gradeFields={HF_2_GRADE_FIELDS}
          bonusThresholds={HF_2AARIGT_BONUS_THRESHOLDS}
        />
      )
    case "hf-enkeltfag":
      return (
        <GymnasialCalculator
          defaultRows={DEFAULT_HF_ENKELTFAG_ROWS}
          subjectOptions={HF_ENKELTFAG_SUBJECT_OPTIONS}
          subjectLabels={HF_ENKELTFAG_SUBJECT_LABELS}
          cookieName={HF_ENKELTFAG_ROWS_COOKIE_NAME}
          resultLabel="Dit gennemsnit"
          gradeFields={HF_2_GRADE_FIELDS}
          bonusThresholds={HF_ENKELTFAG_BONUS_THRESHOLDS}
        />
      )
    case "folkeskole":
      return <FolkeskoleCalculator />
    default:
      return null
  }
}

export default async function EmbedPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ color?: string }>
}) {
  const { slug } = await params
  const { color } = await searchParams
  const calculator = findEmbedCalculator(slug)
  if (!calculator) notFound()

  const content = renderCalculator(slug)
  if (!content) notFound()

  const safeColor = color && isValidHexColor(color) ? color.toLowerCase() : undefined

  return (
    <EmbedFrame color={safeColor}>
      {content}
      <div className="mt-3 text-center text-xs text-muted-foreground">
        Drevet af{" "}
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          gennemsnitsberegner.dk
        </a>
      </div>
    </EmbedFrame>
  )
}
