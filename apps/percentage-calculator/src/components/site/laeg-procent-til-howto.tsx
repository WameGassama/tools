const STEPS = [
  {
    title: "Find procentdelen",
    description:
      "Gang tallet med procenten for at finde, hvor meget procentdelen svarer til: Tal × (Procent ÷ 100).",
  },
  {
    title: "Læg procentdelen til tallet",
    description: "Læg resultatet fra trin 1 til det oprindelige tal.",
  },
  {
    title: "Aflæs det nye tal",
    description:
      "Resultatet er tallet med procentdelen lagt oveni, fx en pris med moms lagt til.",
  },
]

export function LaegProcentTilHowTo() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Hvordan lægger man procent til et tal?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Tre trin til at lægge en procentdel oveni et tal.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STEPS.map((step, index) => (
          <div key={step.title} className="rounded-xl border bg-background p-6">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {index + 1}
            </span>
            <div className="mt-3 font-semibold">{step.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border bg-background p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-lg font-semibold">
          <span>800 kr.</span>
          <span className="text-muted-foreground">→</span>
          <span>1.000 kr.</span>
          <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            +25 % moms
          </span>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Resultat = Tal × (1 + Procent ÷ 100)
          </p>
        </div>
      </div>
    </section>
  )
}
