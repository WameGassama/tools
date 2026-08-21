import Link from "next/link"

const EDUCATION_LEVELS = [
  {
    name: "Folkeskolen",
    description:
      "Afgangseksamenens 9 lovbundne prøver tæller lige meget – gennemsnittet er et simpelt gennemsnit rundet ned til nærmeste hele tal. Brug vores dedikerede folkeskole-beregner for det helt rigtige gennemsnit.",
  },
  {
    name: "Gymnasiet (stx, hhx, htx, hf)",
    description:
      "Dit eksamensgennemsnit vægtes efter fagets niveau (A, B eller C), og har du mange fag på A-niveau, kan du få en bonus oveni.",
    href: "/gennemsnit-gymnasium",
    linkLabel: "Se vores oversigt over gennemsnit i gymnasiet",
  },
  {
    name: "Erhvervsuddannelser og eux",
    description:
      "EUX's gymnasiale fag følger samme niveauvægtning og bonus-A-regel som gymnasiet. Brug vores dedikerede EUX-beregner for det helt rigtige gennemsnit.",
  },
  {
    name: "Universitet og andre videregående uddannelser",
    description:
      "Her vægtes karaktererne typisk efter ECTS-point, som denne beregner er lavet til.",
  },
]

export function GennemsnitUddannelserSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">
        Karaktergennemsnit i folkeskolen, gymnasiet og på universitetet
      </h2>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Uanset om du søger en karakter beregner til folkeskolen, gymnasiet
        eller universitetet, bruges den danske 7-trinsskala overalt – men
        gennemsnittet beregnes lidt forskelligt.
      </p>

      <div className="mt-8 divide-y rounded-xl border bg-background">
        {EDUCATION_LEVELS.map((level) => (
          <div key={level.name} className="p-4 sm:p-8">
            <div className="font-semibold">{level.name}</div>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {level.description}
              {level.href ? (
                <>
                  {" "}
                  <Link
                    href={level.href}
                    className="underline underline-offset-2 hover:text-foreground"
                  >
                    {level.linkLabel}
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
