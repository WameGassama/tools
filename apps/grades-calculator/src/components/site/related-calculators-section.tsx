import Link from "next/link"
import type { ComponentType, SVGProps } from "react"

import {
  Briefcase,
  Building,
  Calendar,
  Glass,
  Monitor,
  RulerPen,
  Task,
  Teacher,
} from "@workspace/ui/icons"

import { EMBED_CALCULATORS } from "@/src/lib/embed-calculators"

const CALCULATOR_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  ects: Teacher,
  stx: Glass,
  hhx: Briefcase,
  eux: RulerPen,
  htx: Monitor,
  "hf-2aarigt": Calendar,
  "hf-enkeltfag": Task,
  folkeskole: Building,
}

export function RelatedCalculatorsSection({ currentSlug }: { currentSlug: string }) {
  const others = EMBED_CALCULATORS.filter((calculator) => calculator.slug !== currentSlug)

  return (
    <section className="bg-indigo-950 px-6 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-[26px] font-extrabold text-white">Andre gennemsnitsberegnere</h2>
        <p className="mt-2 text-indigo-200/70">
          Skal du bruge en beregner til en anden uddannelse? Vi har dedikerede beregnere til
          alle niveauer.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((calculator) => {
            const Icon = CALCULATOR_ICONS[calculator.slug] ?? Teacher
            return (
              <Link
                key={calculator.slug}
                href={calculator.pageHref}
                className="rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.08]"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-indigo-400/20 text-indigo-300">
                  <Icon className="size-5" />
                </div>
                <div className="font-semibold text-white">{calculator.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-indigo-200/70">
                  {calculator.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
