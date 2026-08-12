"use client"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@workspace/ui/components/card"
import { useLanguage } from "@/src/lib/i18n/language-context"
import { formatKr } from "@/src/lib/format"
import type {
  IncomeType,
  WithholdingResult as WithholdingResultData,
} from "@/src/lib/tax/types"

import { NetRatioRing } from "./net-ratio-ring"
import { WithholdingBreakdownTable } from "./withholding-breakdown-table"

interface WithholdingResultProps {
  result: WithholdingResultData
  grossAmount: number
  traekprocent: number
  incomeType: IncomeType
}

export function WithholdingResult({
  result,
  grossAmount,
  traekprocent,
  incomeType,
}: WithholdingResultProps) {
  const { t } = useLanguage()
  const netDisplay = formatKr(result.breakdown.net)

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
          periodLabel={t.result.periode}
        />
      </CardContent>
      <CardFooter className="flex flex-col">
        <WithholdingBreakdownTable
          grossAmount={grossAmount}
          traekprocent={traekprocent}
          incomeType={incomeType}
          result={result}
        />
      </CardFooter>
    </Card>
  )
}
