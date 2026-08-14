const STEPS = [
  {
    title: "Find forskellen mellem de to tal",
    description:
      "Træk den oprindelige værdi (Fra) fra den nye værdi (Til). Fx 920 − 800 = 120.",
  },
  {
    title: "Divider med den oprindelige værdi",
    description:
      "Del forskellen med den oprindelige værdi (Fra). Fx 120 ÷ 800 = 0,15.",
  },
  {
    title: "Gang med 100",
    description:
      "Gang resultatet med 100 for at få procent: 0,15 × 100 = 15 %. Et negativt resultat er et fald i stedet for en stigning.",
  },
]

export function HowToCalculatePercentageIncrease() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Hvordan regner man procentstigning?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Tre trin fra to tal til procentvis ændring.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3 text-lg font-semibold">
          <span>800 kr.</span>
          <span className="text-muted-foreground">→</span>
          <span>920 kr.</span>
          <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            +15 %
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
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Ændring = ((Til − Fra) ÷ Fra) × 100
          </p>
        </div>
      </div>
    </section>
  )
}
