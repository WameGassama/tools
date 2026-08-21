import { KilderSektion, Regelgrundlag } from "@/src/components/site/kilder-sektion"

const PROEVE_ROWS = [
  { label: "Praktisk/musisk valgfagsprøve (8. kl.)", field: "Mundtlig" },
  { label: "Dansk", field: "Mundtlig" },
  { label: "Dansk – retskrivning", field: "Skriftlig" },
  { label: "Dansk – læsning", field: "Skriftlig" },
  { label: "Dansk – skriftlig fremstilling", field: "Skriftlig" },
  { label: "Fællesprøve i naturfag", field: "Mundtlig" },
  { label: "Matematik – uden hjælpemidler", field: "Skriftlig" },
  { label: "Matematik – med hjælpemidler", field: "Skriftlig" },
  { label: "Udtræksprøve", field: "Mundtlig" },
]

export function FolkeskoleForklaretSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Sådan beregnes dit folkeskole karaktergennemsnit
      </h2>
      <p className="mt-2 text-muted-foreground">
        I modsætning til de gymnasiale uddannelser har folkeskolens
        afgangseksamen (FP9) hverken niveauer, vægte eller bonus-A. Dit
        gennemsnit er et simpelt gennemsnit af dine 9 lovbundne prøver.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
        <div className="text-sm font-semibold">De 9 lovbundne prøver</div>
        <div className="mt-3 divide-y rounded-lg border">
          {PROEVE_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm"
            >
              <span>{row.label}</span>
              <span className="text-muted-foreground">{row.field}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Gennemsnit = ⌊ ∑ karakterer ÷ antal prøver ⌋
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Gennemsnittet rundes ned til nærmeste hele tal – ikke op eller til
            nærmeste, men altid ned.
          </p>

          <div className="mt-4 text-sm font-semibold">Eksempel</div>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Har du fx karaktererne 7, 4 og 10 i tre prøver, giver det
            (7 + 4 + 10) ÷ 3 = 7,0 i gennemsnit, hvilket rundes ned til{" "}
            <strong className="text-foreground">7</strong>. Havde
            gennemsnittet i stedet været 7,9, ville det stadig blive rundet
            ned til 7.
          </p>
        </div>

        <KilderSektion>
          <Regelgrundlag
            items={[
              {
                href: "https://www.retsinformation.dk/eli/lta/2025/1100",
                title: "Folkeskoleloven (LBK nr. 1100 af 5/9/2025)",
                description: "Folkeskolens fag, timetal og prøveret.",
              },
              {
                href: "https://www.retsinformation.dk/eli/lta/2025/678",
                title: "Prøvebekendtgørelsen (BEK nr. 678 af 13/6/2025)",
                description:
                  "De 9 lovbundne prøver og reglen om simpelt gennemsnit rundet ned.",
              },
              {
                href: "https://uvm.dk/grundskole/folkeskolen/fag-og-indhold/fag-emner-og-tvaergaaende-temaer/faelles-maal/faelles-maal-for-folkeskolens-fag/obligatoriske-fag/",
                title: "uvm.dk: Obligatoriske fag",
                description: "Ministeriets overblik over folkeskolens obligatoriske fag.",
              },
            ]}
          />
        </KilderSektion>
      </div>
    </section>
  )
}
