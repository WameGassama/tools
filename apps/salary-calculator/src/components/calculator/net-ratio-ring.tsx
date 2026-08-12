"use client";

import { Label, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@workspace/ui/components/chart";
import { useLanguage } from "@/src/lib/i18n/language-context";

interface NetRatioRingProps {
  netPct: number;
  taxPct: number;
  savePct: number;
  netDisplay: string;
  periodLabel: string;
}

function netDisplayFontSize(netDisplay: string): string {
  if (netDisplay.length > 9) return "text-lg";
  if (netDisplay.length > 6) return "text-2xl";
  return "text-3xl";
}

export function NetRatioRing({ netPct, taxPct, savePct, netDisplay, periodLabel }: NetRatioRingProps) {
  const { t } = useLanguage();

  const chartConfig = {
    net: { label: t.result.legend.netto, color: "var(--color-chart-1)" },
    tax: { label: t.result.legend.skat, color: "var(--color-primary)" },
    save: { label: t.result.legend.pensionAtp, color: "var(--color-muted-foreground)" },
  } satisfies ChartConfig;

  const LEGEND = [
    { key: "net", label: t.result.legend.netto, swatch: "bg-chart-1" },
    { key: "tax", label: t.result.legend.skat, swatch: "bg-primary" },
    { key: "save", label: t.result.legend.pensionAtp, swatch: "bg-muted-foreground" },
  ] as const;

  const chartData = [
    { key: "net", label: t.result.legend.netto, value: netPct, fill: "var(--color-net)" },
    { key: "tax", label: t.result.legend.skat, value: taxPct, fill: "var(--color-tax)" },
    { key: "save", label: t.result.legend.pensionAtp, value: savePct, fill: "var(--color-save)" },
  ];

  return (
    <div className="flex flex-col items-center">
      <ChartContainer config={chartConfig} className="mx-auto aspect-square w-full max-w-56">
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel formatter={(value) => `${Number(value).toFixed(0)}%`} />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="label"
            innerRadius={70}
            outerRadius={90}
            paddingAngle={3}
            strokeWidth={0}
          >
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;
                const { cx, cy } = viewBox;
                return (
                  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan
                      x={cx}
                      y={(cy ?? 0) - 14}
                      className={`fill-foreground font-heading font-semibold tracking-tight tabular-nums ${netDisplayFontSize(netDisplay)}`}
                    >
                      {netDisplay}
                    </tspan>
                    <tspan x={cx} y={(cy ?? 0) + 8} className="fill-muted-foreground text-xs">
                      {t.result.nettoPer(periodLabel)}
                    </tspan>
                    <tspan x={cx} y={(cy ?? 0) + 26} className="fill-muted-foreground text-xs">
                      {t.result.afBruttolon(netPct.toFixed(0))}
                    </tspan>
                  </text>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="mt-2 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
        {LEGEND.map((segment) => (
          <span key={segment.key} className="flex items-center gap-1.5">
            <span className={`size-2.5 rounded-sm ${segment.swatch}`} />
            {segment.label}
          </span>
        ))}
      </div>
    </div>
  );
}
