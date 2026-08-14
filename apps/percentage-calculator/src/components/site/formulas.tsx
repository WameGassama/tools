import Link from "next/link"
import { PieChart, Percent, Sigma, TrendingUp, type LucideIcon } from "lucide-react"

interface FormulaItem {
  icon: LucideIcon
  title: string
  formula: string
  description: string
  example: string
  href?: string
  linkLabel?: string
}

const FORMULAS: FormulaItem[] = [
  {
    icon: TrendingUp,
    title: "Stigning/fald",
    formula: "Ændring = ((Til − Fra) ÷ Fra) × 100",
    description: "Procentvis stigning eller fald mellem to tal.",
    example: "Fra 800 til 920: ((920 − 800) ÷ 800) × 100 = 15 %.",
    href: "/stigning-i-procent",
    linkLabel: "Læs mere om stigning i procent →",
  },
  {
    icon: PieChart,
    title: "Andel af total",
    formula: "Procent = (Del ÷ Total) × 100",
    description: "Hvor stor en andel i procent, ét tal udgør af et andet.",
    example: "30 ud af 120: (30 ÷ 120) × 100 = 25 %.",
  },
  {
    icon: Sigma,
    title: "Find hele",
    formula: "Total = Del ÷ (Procent ÷ 100)",
    description: "Det samlede tal, når du kender en del og dens procentdel.",
    example: "30 er 25 % af noget: 30 ÷ 0,25 = 120.",
  },
  {
    icon: Percent,
    title: "Beløb",
    formula: "Resultat = Tal × (Procent ÷ 100)",
    description: "Hvor meget en procentdel udgør af et tal.",
    example: "15 % af 200: 200 × 0,15 = 30.",
    href: "/",
    linkLabel: "Læs mere om procent af et tal →",
  },
]

export function Formulas() {
  return (
    <section
      id="formler"
      className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16"
    >
      <h2 className="text-[26px] font-extrabold">Procentregning Formel</h2>
      <p className="mt-2 text-muted-foreground">
        Vil du bare have formlerne? Her er alle fire, samlet ét sted.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {FORMULAS.map((item) => (
          <div key={item.title} className="rounded-xl border bg-background p-6">
            <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="size-4.5" />
            </div>
            <div className="mt-3 font-semibold">{item.title}</div>
            <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
              {item.formula}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Eksempel:</span>{" "}
              {item.example}
            </p>
            {item.href && (
              <Link
                href={item.href}
                className="mt-3 inline-block text-sm font-medium text-primary underline underline-offset-2"
              >
                {item.linkLabel}
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
