export const COMMON_PERCENTAGES = [
  {
    percent: "1 %",
    question: "Hvordan finder man 1 % af et tal?",
    shortcut: "Flyt kommaet to pladser til venstre.",
    example: "1 % af 250 = 2,50",
  },
  {
    percent: "15 %",
    question: "Hvordan finder man 15 % af et tal?",
    shortcut:
      "Find 10 % (flyt kommaet én plads), og læg halvdelen af det oveni (5 %).",
    example: "15 % af 200: 10 % = 20, 5 % = 10, i alt 30",
  },
  {
    percent: "20 %",
    question: "Hvordan finder man 20 % af et tal?",
    shortcut: "Find 10 % (flyt kommaet én plads), og gang med 2.",
    example: "20 % af 150: 10 % = 15, gange 2 = 30",
  },
]

export function CommonPercentagesSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Genveje til almindelige procentsatser
      </h2>
      <p className="mt-2 text-muted-foreground">
        Hurtige metoder til at finde de mest søgte procentsatser i hovedet.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {COMMON_PERCENTAGES.map((item) => (
          <div
            key={item.percent}
            className="rounded-xl border bg-background p-6"
          >
            <div className="text-2xl font-extrabold text-primary">
              {item.percent}
            </div>
            <h3 className="mt-1 font-semibold">{item.question}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {item.shortcut}
            </p>
            <p className="mt-3 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
              {item.example}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
