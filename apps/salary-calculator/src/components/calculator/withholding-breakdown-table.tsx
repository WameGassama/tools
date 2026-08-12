"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@workspace/ui/components/table";
import { useLanguage } from "@/src/lib/i18n/language-context";
import { formatKr } from "@/src/lib/format";
import type { IncomeType, WithholdingResult } from "@/src/lib/tax/types";

interface WithholdingBreakdownTableProps {
  grossAmount: number;
  traekprocent: number;
  incomeType: IncomeType;
  result: WithholdingResult;
}

export function WithholdingBreakdownTable({
  grossAmount,
  traekprocent,
  incomeType,
  result,
}: WithholdingBreakdownTableProps) {
  const { t } = useLanguage();
  const { breakdown } = result;
  const isZero = (value: number) => Math.round(value) === 0;
  const isLoen = incomeType === "loen";

  const rows: Array<{
    label: string;
    value: string;
    negative?: boolean;
    positive?: boolean;
    muted?: boolean;
    emphasis?: boolean;
  }> = [
    { label: t.breakdown.bruttolon, value: formatKr(grossAmount) },
    ...(isLoen
      ? [
          {
            label: t.breakdown.pensionsopsparing,
            value: formatKr(breakdown.pensionAmount),
            negative: !isZero(breakdown.pensionAmount),
          },
          {
            label: t.breakdown.atpBidrag,
            value: formatKr(breakdown.atpAmount),
            negative: !isZero(breakdown.atpAmount),
          },
          {
            label: t.breakdown.amBidrag,
            value: formatKr(breakdown.amBidrag),
            negative: !isZero(breakdown.amBidrag),
          },
        ]
      : []),
    {
      label: t.breakdown.askatGrundlag,
      value: formatKr(breakdown.askatGrundlag),
      muted: true,
    },
    {
      label: t.breakdown.askat(traekprocent),
      value: formatKr(breakdown.askat),
      negative: !isZero(breakdown.askat),
    },
    { label: t.breakdown.tilUdbetaling, value: formatKr(breakdown.net), emphasis: true },
  ];

  return (
    <Table>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.label} className="py-3">
            <TableCell
              className={
                r.emphasis
                  ? "font-semibold"
                  : r.muted
                    ? "text-muted-foreground"
                    : undefined
              }
            >
              {r.label}
            </TableCell>
            <TableCell
              className={`text-right tabular-nums whitespace-nowrap ${r.emphasis ? "font-semibold" : ""} ${r.muted ? "text-muted-foreground" : ""}`}
            >
              {r.negative ? "−" : ""}
              {r.positive ? "+" : ""}
              {r.value}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
