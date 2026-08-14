import Link from "next/link"

const CALCULATORS = [
  {
    href: "/",
    title: "Procent af et tal",
    description: "Find hvor meget en procentdel udgør af et tal.",
  },
  {
    href: "/procentregning",
    title: "Procentregning",
    description:
      "Beregn procent på flere måder, alle typer samlet ét sted.",
  },
  {
    href: "/stigning-i-procent",
    title: "Stigning i procent",
    description: "Beregn procentvis stigning eller fald mellem to tal.",
  },
  {
    href: "/procentvis-afvigelse",
    title: "Procentvis afvigelse",
    description: "Find afvigelsen mellem en forventet og en faktisk værdi.",
  },
]

interface OtherCalculatorsProps {
  currentPath: string
}

export function OtherCalculators({ currentPath }: OtherCalculatorsProps) {
  const others = CALCULATORS.filter((calc) => calc.href !== currentPath)

  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">Andre beregnere</h2>
      <p className="mt-2 text-muted-foreground">
        Skal du bruge en anden type procentberegning? Her er de andre
        beregnere.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {others.map((calc) => (
          <Link
            key={calc.href}
            href={calc.href}
            className="rounded-xl border bg-background p-6 transition-colors hover:border-primary/40"
          >
            <div className="font-semibold text-primary">{calc.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">
              {calc.description}
            </p>
            <p className="mt-3 text-sm font-medium text-primary">
              Gå til beregner →
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
