"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@workspace/ui/components/table"
import { useLanguage } from "@/src/lib/i18n/language-context"
import { formatKr } from "@/src/lib/format"
import type { SalaryResult } from "@/src/lib/tax/types"

interface TaxBreakdownTableProps {
  result: SalaryResult
  municipalityName: string
}

export function TaxBreakdownTable({
  result,
  municipalityName,
}: TaxBreakdownTableProps) {
  const { t } = useLanguage()
  const { breakdown, divisor, grossAnnual } = result
  const row = (value: number) => formatKr(value / divisor)
  const isZero = (value: number) => Math.round(value / divisor) === 0

  const rows: Array<{
    label: string
    value: string
    negative?: boolean
    positive?: boolean
    emphasis?: boolean
  }> = [
    { label: t.breakdown.bruttolon, value: row(grossAnnual) },
    {
      label: t.breakdown.pensionsopsparing,
      value: row(breakdown.pensionAnnual),
      negative: !isZero(breakdown.pensionAnnual),
    },
    {
      label: t.breakdown.atpBidrag,
      value: row(breakdown.atpAnnual),
      negative: !isZero(breakdown.atpAnnual),
    },
    {
      label: t.breakdown.amBidrag,
      value: row(breakdown.amBidrag),
      negative: !isZero(breakdown.amBidrag),
    },
    {
      label: t.breakdown.bundskat,
      value: row(breakdown.bundskat),
      negative: !isZero(breakdown.bundskat),
    },
    {
      label: t.breakdown.mellemskat,
      value: row(breakdown.mellemskat),
      negative: !isZero(breakdown.mellemskat),
    },
    {
      label: t.breakdown.topskat,
      value: row(breakdown.topskat),
      negative: !isZero(breakdown.topskat),
    },
    {
      label: t.breakdown.topTopskat,
      value: row(breakdown.topTopskat),
      negative: !isZero(breakdown.topTopskat),
    },
    {
      label: t.breakdown.kommuneskat(municipalityName),
      value: row(breakdown.kommuneskat),
      negative: !isZero(breakdown.kommuneskat),
    },
    {
      label: t.breakdown.kirkeskat,
      value: row(breakdown.kirkeskat),
      negative: !isZero(breakdown.kirkeskat),
    },
    {
      label: t.breakdown.skattefradrag,
      value: row(breakdown.boligjobCredit),
      positive: !isZero(breakdown.boligjobCredit),
    },
  ]

  return (
    <Table>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.label}>
            <TableCell className={r.emphasis ? "font-semibold" : undefined}>
              {r.label}
            </TableCell>
            <TableCell
              className={`text-right whitespace-nowrap tabular-nums ${r.emphasis ? "font-semibold" : ""}`}
            >
              {r.negative ? "−" : ""}
              {r.positive ? "+" : ""}
              {r.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
