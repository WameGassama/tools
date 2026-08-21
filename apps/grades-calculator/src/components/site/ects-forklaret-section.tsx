export function EctsForklaretSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">Hvad er ECTS-point?</h2>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        ECTS står for European Credit Transfer System og er det, en ECTS
        beregner bruger til at vægte dine karakterer.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-4 sm:p-8">
        <p className="text-sm leading-relaxed text-foreground sm:text-base">
          Hvert fag på en videregående uddannelse har et ECTS-tal, der viser,
          hvor meget arbejde faget fylder i din uddannelse, typisk mellem 5
          og 30 ECTS-point. Et helt studieår svarer normalt til{" "}
          <strong>60 ECTS</strong>.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-foreground sm:text-base">
          Når du beregner dit gennemsnit, bruges ECTS-point som{" "}
          <strong>vægt</strong>: et fag på 15 ECTS tæller tre gange så meget
          som et fag på 5 ECTS. Resultatet (dit ECTS gennemsnit) bliver
          dermed mere retvisende end et simpelt gennemsnit, hvor du blot
          lægger karaktererne sammen og dividerer med antal fag.
        </p>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Eksempel</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            10 ECTS × karakter 7 = 70 vægtede point
          </p>
        </div>
      </div>
    </section>
  )
}
