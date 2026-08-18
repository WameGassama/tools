const EDUCATION_LEVELS = [
  {
    name: "Folkeskolen",
    description:
      "Standpunkts- og afgangskarakterer gives på 7-trinsskalaen, men gennemsnittet vægtes ikke efter ECTS-point.",
  },
  {
    name: "Gymnasiet (stx, hf, htx, hhx)",
    description:
      "Dit eksamensgennemsnit tæller med i din adgangskvotient, men beregnes som et simpelt gennemsnit af dine karakterer – ikke et ECTS-vægtet gennemsnit.",
  },
  {
    name: "Erhvervsuddannelser og eux",
    description:
      "Karaktererne følger samme 7-trinsskala som gymnasiet og folkeskolen.",
  },
  {
    name: "Universitet og andre videregående uddannelser",
    description:
      "Her vægtes karaktererne typisk efter ECTS-point, som denne beregner er lavet til.",
  },
]

export function GennemsnitUddannelserSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Karaktergennemsnit i folkeskolen, gymnasiet og på universitetet
      </h2>
      <p className="mt-2 text-muted-foreground">
        Uanset om du søger en karakter beregner til folkeskolen, gymnasiet
        eller universitetet, bruges den danske 7-trinsskala overalt – men
        gennemsnittet beregnes lidt forskelligt.
      </p>

      <div className="mt-8 divide-y rounded-xl border bg-background">
        {EDUCATION_LEVELS.map((level) => (
          <div key={level.name} className="p-6 sm:p-8">
            <div className="font-semibold">{level.name}</div>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {level.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-6 leading-relaxed text-muted-foreground">
        Går du i gymnasiet eller folkeskolen og vil have et simpelt (uvægtet)
        gennemsnit, kan du stadig bruge beregneren: skriv blot det samme
        ECTS-tal – fx 1 – ud for hvert fag. Så vejer alle fag lige meget, og
        du får dit almindelige gennemsnit.
      </p>
    </section>
  )
}
