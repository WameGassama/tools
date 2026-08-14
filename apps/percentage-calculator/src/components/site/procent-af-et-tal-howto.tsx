const STEPS = [
  {
    title: "Skriv procenten som decimaltal",
    description: "Del procenten med 100. 15 % bliver til 0,15.",
  },
  {
    title: "Gang decimaltallet med tallet",
    description:
      "Gang decimaltallet med det tal, du vil finde procentdelen af. Fx 0,15 × 200.",
  },
  {
    title: "Aflæs resultatet",
    description:
      "Resultatet er den del af tallet, som procenten svarer til: 0,15 × 200 = 30.",
  },
]

export function HowToFindPercentOfNumber() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Hvordan finder man procent af et tal?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Tre trin fra procent til resultat.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
        <ol className="flex flex-col gap-6">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <div>
                <div className="font-semibold">{step.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Resultat = Tal × (Procent ÷ 100)
          </p>
        </div>
      </div>
    </section>
  )
}
