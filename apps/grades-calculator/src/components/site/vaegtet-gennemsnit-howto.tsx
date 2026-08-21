const STEPS = [
  {
    title: "Indtast dine fag",
    description: "Skriv navnet på hvert fag, du vil have med i gennemsnittet.",
  },
  {
    title: "Vælg karakter",
    description:
      "Vælg karakteren for faget på den danske 7-trinsskala (-3, 00, 02, 4, 7, 10 eller 12).",
  },
  {
    title: "Angiv ECTS-point",
    description:
      "Indtast fagets ECTS-point – det bestemmer, hvor meget faget vejer i gennemsnittet.",
  },
  {
    title: "Beregn",
    description:
      "Tryk på \"Beregn gennemsnit\", og se dit vægtede karaktergennemsnit med det samme.",
  },
]

export function VaegtetGennemsnitHowTo() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">
        Hvordan finder man gennemsnit?
      </h2>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Et vægtet gennemsnit tager højde for, at fag fylder forskelligt i din
        uddannelse.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-4 sm:p-8">
        <p className="mb-6 text-sm leading-relaxed text-foreground sm:text-base">
          <strong>Hvordan regner man gennemsnit ud?</strong> Følg de fire trin
          herunder, og få dit resultat på få sekunder.
        </p>
        <ol className="space-y-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[auto_1fr] gap-x-4">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <div className="font-semibold">{step.title}</div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Gennemsnit = ∑ (karakter × ECTS) ÷ ∑ (ECTS)
          </p>

          <div className="mt-4 text-sm font-semibold">Eksempel</div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Matematik: karakter 7 (10 ECTS) og Fysik: karakter 12 (10 ECTS)
            giver (7 × 10 + 12 × 10) ÷ 20 ={" "}
            <strong className="text-foreground">9,50</strong> i vægtet
            gennemsnit.
          </p>
        </div>
      </div>
    </section>
  )
}
