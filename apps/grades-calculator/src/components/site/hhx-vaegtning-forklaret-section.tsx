import { KilderSektion, Regelgrundlag } from "@/src/components/site/kilder-sektion"

const NIVEAU_ROWS = [
  { niveau: "A-niveau", weight: "2", note: "fx Dansk A, Engelsk A" },
  { niveau: "B-niveau", weight: "1,5", note: "fx Virksomhedsøkonomi B" },
  { niveau: "C-niveau", weight: "1", note: "fx Erhvervsjura C, Samfundsfag C" },
]

const FIXED_WEIGHT_ROWS = [
  { fag: "Studieområdeprojekt (SOP)", weight: "2" },
]

const BONUS_ROWS = [
  { count: "4 fag eller færre på A-niveau", multiplier: "Ingen bonus" },
  { count: "5 fag på A-niveau", multiplier: "× 1,03" },
  { count: "6 fag eller flere på A-niveau", multiplier: "× 1,06" },
]

export function HhxVaegtningForklaretSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">
        Sådan beregnes dit HHX gennemsnit
      </h2>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        I modsætning til et simpelt gennemsnit vægtes dine karakterer på
        HHX&apos;s eksamensbevis efter fagets niveau. Har du mange fag på
        A-niveau, kan du få et tillæg til gennemsnittet.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-4 sm:p-8">
        <div className="text-sm font-semibold">Vægt per niveau</div>
        <div className="mt-3 divide-y rounded-lg border">
          {NIVEAU_ROWS.map((row) => (
            <div
              key={row.niveau}
              className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm"
            >
              <div>
                <span className="font-medium">{row.niveau}</span>
                <span className="ml-1.5 text-muted-foreground">
                  · {row.note}
                </span>
              </div>
              <span className="font-mono font-semibold text-foreground">
                vægt {row.weight}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Har du både en standpunktskarakter (årskarakter) og en
          eksamenskarakter i et fag (eller både en mundtlig og en skriftlig
          karakter), deles fagets vægt ligeligt mellem de karakterer, der er
          givet. Har du fx både standpunkt og eksamen i et fag, tæller de
          hver med halv vægt.
        </p>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Fag med fast vægt</div>
          <div className="mt-3 divide-y rounded-lg border">
            {FIXED_WEIGHT_ROWS.map((row) => (
              <div
                key={row.fag}
                className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm"
              >
                <span>{row.fag}</span>
                <span className="font-mono font-semibold text-foreground">
                  vægt {row.weight}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            SOP har altid vægt 2, uanset niveau, og tæller ikke med som et af
            dine A-niveau-fag i bonus-A-reglen herunder.
          </p>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Bonus for A-niveau-fag</div>
          <div className="mt-3 divide-y rounded-lg border">
            {BONUS_ROWS.map((row) => (
              <div
                key={row.count}
                className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm"
              >
                <span>{row.count}</span>
                <span className="font-mono font-semibold text-foreground">
                  {row.multiplier}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Gennemsnit = (∑ karakter × niveauvægt ÷ ∑ niveauvægt) × bonus
          </p>

          <div className="mt-4 text-sm font-semibold">Eksempel</div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Dansk A (karakter 7), Engelsk A (karakter 10) og
            Virksomhedsøkonomi B (karakter 4) giver
            (7 × 2 + 10 × 2 + 4 × 1,5) ÷ (2 + 2 + 1,5) ={" "}
            <strong className="text-foreground">7,3</strong> i gennemsnit –
            uden bonus, da der kun er 2 fag på A-niveau.
          </p>
        </div>

        <KilderSektion>
          <Regelgrundlag
            items={[
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/624",
                title: "Lov om de gymnasiale uddannelser (LBK nr. 624 af 18/6/2026)",
                description: "Uddannelsens indretning og obligatoriske fag/niveauer.",
              },
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/3",
                title: "Almen prøvebekendtgørelse (BEK nr. 3 af 5/1/2026)",
                description:
                  "Niveauvægte (§ 66) og bonus-A ved 5 og 6 fag på A-niveau (§ 68, stk. 1).",
              },
              {
                href: "https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/uddannelser/hoejere-handelseksamen-hhx/",
                title: "uvm.dk: Hhx-uddannelsen",
                description: "Ministeriets overblik over fag, niveauer og struktur.",
              },
            ]}
          />
        </KilderSektion>
      </div>
    </section>
  )
}
