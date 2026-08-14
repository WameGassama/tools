export function AndelAfTotalSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Hvor mange procent udgør et tal af et andet?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Sådan finder du, hvor stor en andel i procent, ét tal svarer til af
        et andet.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Del tallet (den mindre værdi) med totalen (den større værdi), og
          gang med 100. Resultatet fortæller, hvor mange procent tallet
          udgør af totalen.
        </p>

        <div className="mt-6">
          <div className="flex items-baseline justify-between text-sm">
            <span className="font-medium">30 ud af 120</span>
            <span className="font-bold text-primary">25 %</span>
          </div>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full w-1/4 rounded-full bg-primary" />
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Procent = (Del ÷ Total) × 100
          </p>
        </div>
      </div>
    </section>
  )
}
