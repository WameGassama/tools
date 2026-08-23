const STEPS = [
  {
    num: "1",
    title: "Vælg satsen",
    text: "Næsten alt salg i Danmark ligger på 25%. Halv og kvart moms bruges i særlige tilfælde, blandt andet ved visse former for repræsentation og blandet privat/erhvervsmæssig brug.",
  },
  {
    num: "2",
    title: "Skriv beløbet",
    text: "Resultatet opdateres, mens du taster. Du kan bruge både komma og punktum, og tallet vises altid i dansk format bagefter.",
  },
  {
    num: "3",
    title: "Inkl. eller ekskl.?",
    text: "Står prisen på en faktura til en forbruger, er den typisk inklusiv moms. Priser mellem virksomheder oplyses oftest eksklusiv moms.",
  },
]

export function HowItWorks() {
  return (
    <section id="saadan-bruger-du-beregneren" className="mt-[52px] scroll-mt-20">
      <h2 className="mb-4 font-heading text-[26px] font-semibold tracking-tight">
        Sådan bruger du beregneren
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[18px]">
        {STEPS.map((step) => (
          <div key={step.num} className="rounded-xl bg-emerald-950 p-5">
            <div className="mb-3.5 font-heading text-3xl leading-none font-bold text-emerald-300">
              {step.num}
            </div>
            <h3 className="mb-1.5 font-heading text-lg font-semibold text-white">
              {step.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-emerald-100/70">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
