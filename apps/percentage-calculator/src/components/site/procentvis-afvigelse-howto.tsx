const STEPS = [
  {
    title: "Find forskellen mellem de to tal",
    description:
      "Træk den forventede værdi fra den faktiske værdi. Fx 5.400 − 5.000 = 400.",
  },
  {
    title: "Divider med den forventede værdi",
    description:
      "Del forskellen med den forventede værdi. Fx 400 ÷ 5.000 = 0,08.",
  },
  {
    title: "Gang med 100",
    description:
      "Gang resultatet med 100 for at få afvigelsen i procent: 0,08 × 100 = 8 %. Et negativt resultat betyder, at den faktiske værdi er lavere end forventet.",
  },
]

export function ProcentvisAfvigelseHowTo() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Hvordan beregner man procentvis afvigelse?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Tre trin fra forventet til faktisk afvigelse.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-lg font-semibold">
          <span>5.000 kr.</span>
          <span className="text-muted-foreground">→</span>
          <span>5.400 kr.</span>
          <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            +8 %
          </span>
        </div>

        <ol className="mt-8 flex flex-col gap-6">
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
          <h3 className="text-sm font-semibold">Procentvis afvigelse formel</h3>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Afvigelse = ((Faktisk − Forventet) ÷ Forventet) × 100
          </p>
        </div>
      </div>
    </section>
  )
}
