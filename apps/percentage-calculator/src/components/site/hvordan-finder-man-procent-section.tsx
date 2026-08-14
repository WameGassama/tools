import Link from "next/link"

const SCENARIOS = [
  {
    title: "Du kender et tal og en procent",
    description:
      "Gang tallet med procenten for at finde beløbet: Tal × (Procent ÷ 100).",
  },
  {
    title: "Du kender en del og en total",
    description:
      "Divider delen med totalen, og gang med 100 for at finde andelen i procent: (Del ÷ Total) × 100.",
  },
  {
    title: "Du vil sammenligne to tal",
    description:
      "Divider forskellen med det oprindelige tal, og gang med 100 for at finde stigningen eller faldet i procent.",
  },
]

export function HvordanFinderManProcentSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Hvordan finder man procent?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Det afhænger af, hvad du allerede kender. Her er tre typiske
        situationer.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
        <ol className="flex flex-col gap-6">
          {SCENARIOS.map((scenario, index) => (
            <li key={scenario.title} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <div>
                <div className="font-semibold">{scenario.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {scenario.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
