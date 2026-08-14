import { cn } from "@workspace/ui/lib/utils"

import type { PercentageResult } from "@/src/lib/percentage"

interface PercentageResultPanelProps {
  result: PercentageResult
}

export function PercentageResultPanel({ result }: PercentageResultPanelProps) {
  return (
    <div className="flex flex-col rounded-2xl bg-slate-900 p-6 text-center shadow-lg ring-1 ring-slate-800 sm:p-10">
      <span className="text-xs font-bold tracking-[0.08em] text-slate-400 uppercase">
        Resultat
      </span>
      <div
        className={cn(
          "mt-4 text-[56px] leading-none font-extrabold sm:text-[72px]",
          !result.isValid
            ? "text-slate-600"
            : result.headline.startsWith("-")
              ? "text-rose-400"
              : result.headline.startsWith("+")
                ? "text-emerald-400"
                : "text-white"
        )}
      >
        {result.headline}
        {result.suffix}
      </div>
      <div className="mt-1.5 text-[15px] text-slate-400">
        {result.caption}
      </div>
      {result.formula && (
        <div className="mt-6 border-t border-slate-800 pt-4 text-sm text-slate-500">
          {result.formula}
        </div>
      )}
    </div>
  )
}
