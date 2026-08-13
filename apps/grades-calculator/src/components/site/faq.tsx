export const FAQ_ITEMS = [
  {
    question: "Hvordan beregnes mit gennemsnit?",
    answer:
      "Vi beregner et vægtet gennemsnit ud fra dine karakterer og de tilhørende ECTS-point, så fag med flere point vejer mere: Gennemsnit = ∑ (karakter × vægt) ÷ ∑ (vægt).",
  },
  {
    question: "Hvordan regner man gennemsnit?",
    answer:
      "Der findes to metoder: et simpelt gennemsnit, hvor du lægger karaktererne sammen og deler med antal fag, og et vægtet gennemsnit, hvor hver karakter vægtes efter fagets ECTS-point. På videregående uddannelser bruges typisk det vægtede gennemsnit, så et fag med 10 ECTS tæller mere end et fag med 5 ECTS.",
  },
  {
    question: "Hvad er gennemsnit",
    answer:
      "Et gennemsnit er et samlet tal for, hvor godt du har klaret dig på tværs af flere karakterer. I stedet for bare at lægge karaktererne sammen og dele med antal fag, vægter vi hver karakter efter ECTS-point, så det afspejler den reelle arbejdsbyrde bag hver karakter.",
  },
  {
    question: "Bruger I den danske 7-trinsskala?",
    answer:
      "Ja. Vælg blot karakteren for hvert fag i dropdown-menuen, så regner beregneren automatisk med de korrekte tal.",
  },
  {
    question: "Gemmer I mine karakterer?",
    answer:
      "Nej. Alt foregår i din browser, og dine oplysninger sendes ikke videre eller gemmes nogen steder.",
  },
  {
    question: "Kan jeg rette i mine fag bagefter?",
    answer:
      "Ja. Du kan til enhver tid ændre karakter, ECTS eller fagnavn, og dit gennemsnit opdateres, næste gang du beregner.",
  },
  {
    question: "Virker det til alle uddannelser?",
    answer:
      "Nej. Beregneren bruger et ECTS-vægtet gennemsnit og er derfor lavet til videregående uddannelser. Den er ikke egnet til gymnasiale uddannelser eller folkeskolen, hvor karakterer ikke vægtes efter ECTS-point.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto w-full max-w-3xl border-t px-6 pt-8 pb-12 sm:pb-22"
    >
      <h2 className="text-[26px] font-extrabold">Ofte stillede spørgsmål</h2>
      <p className="mt-2 text-muted-foreground">
        Her er de mest stillede spørgsmål fra vores brugere.
      </p>

      <div className="mt-8 border-t">
        {FAQ_ITEMS.map((item, index) => (
          <div
            key={item.question}
            className="grid grid-cols-[auto_1fr] gap-x-6 border-b py-5 sm:py-8"
          >
            <span className="text-sm font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-base font-semibold">{item.question}</div>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
