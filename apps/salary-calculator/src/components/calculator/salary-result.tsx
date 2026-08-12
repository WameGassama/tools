"use client"

import { useEffect, useRef, useState } from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card"
import { useLanguage } from "@/src/lib/i18n/language-context"
import { formatKr } from "@/src/lib/format"
import type { Municipality } from "@/src/lib/municipalities"
import type {
  Period,
  SalaryResult as SalaryResultData,
} from "@/src/lib/tax/types"

import { NetRatioRing } from "./net-ratio-ring"
import { TaxBreakdownTable } from "./tax-breakdown-table"

interface SalaryResultProps {
  result: SalaryResultData
  period: Period
  municipality: Municipality
}

const COPY_LABEL_DEFAULT = "Kopiér resultat"
const COPY_LABEL_COPIED = "Kopieret!"

export function SalaryResult({
  result,
  period,
  municipality,
}: SalaryResultProps) {
  const { t } = useLanguage()
  const [copyLabel, setCopyLabel] = useState(COPY_LABEL_DEFAULT)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const netDisplay = formatKr(result.breakdown.net / result.divisor)
  const periodLabel = period === "month" ? t.result.maaned : t.result.aar

  async function handleCopy() {
    const text = `Nettoløn: ${netDisplay} kr./${period === "month" ? "md." : "år"} (kommune: ${municipality.name})`
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      // clipboard access denied — ignore, button label still confirms the action was attempted
    }
    setCopyLabel(COPY_LABEL_COPIED)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(
      () => setCopyLabel(COPY_LABEL_DEFAULT),
      1500
    )
  }

  const highlights = [
    { label: "Marginalskat", value: `${result.marginalRatePct.toFixed(1)}%` },
    { label: "Kommune", value: municipality.name },
    {
      label: "Skat i alt",
      value: `${formatKr(result.breakdown.totalTax / result.divisor)} kr.`,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {t.result.cardLabel}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <NetRatioRing
          netPct={result.bar.netPct}
          taxPct={result.bar.taxPct}
          savePct={result.bar.savePct}
          netDisplay={netDisplay}
          periodLabel={periodLabel}
        />
      </CardContent>
      <CardFooter className="flex flex-col">
        <TaxBreakdownTable
          result={result}
          municipalityName={municipality.name}
        />
      </CardFooter>
    </Card>
  )
}
