import { KilderSektion, Regelgrundlag } from "@/src/components/site/kilder-sektion"

const NIVEAU_ROWS = [
  { niveau: "A-niveau", weight: "2", note: "fx Dansk A" },
  { niveau: "B-niveau", weight: "1,5", note: "fx Engelsk B" },
  { niveau: "C-niveau", weight: "1", note: "fx Samfundsfag C, Informatik C" },
]

const FIXED_WEIGHT_ROWS = [
  { fag: "Erhvervsområdeprojekt (EOP)", weight: "2" },
]

const BONUS_ROWS = [
  { count: "1 fag på A-niveau", multiplier: "Ingen bonus" },
  { count: "2 fag på A-niveau", multiplier: "× 1,03" },
  { count: "3 fag eller flere på A-niveau", multiplier: "× 1,06" },
]

export function EuxVaegtningForklaretSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Sådan beregnes dit EUX gennemsnit
      </h2>
      <p className="mt-2 text-muted-foreground">
        I modsætning til et simpelt gennemsnit vægtes dine karakterer på
        EUX&apos;s eksamensbevis efter fagets niveau. Har du mange fag på
        A-niveau, kan du få et tillæg til gennemsnittet. Beregneren er
        forudfyldt med de fag, der går igen på tværs af eux-forløb. Resten
        af din gymnasiale fagpakke varierer mellem merkantil og teknisk eux,
        så dem tilføjer du selv.
      </p>

      <div className="mt-8 rounded-xl border bg-background p-6 sm:p-8">
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
            EOP har altid vægt 2, uanset niveau, og tæller ikke med som et af
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
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Dansk A (karakter 7), EOP (karakter 10, fast vægt 2) og Engelsk B
            (karakter 4) giver
            (7 × 2 + 10 × 2 + 4 × 1,5) ÷ (2 + 2 + 1,5) ={" "}
            <strong className="text-foreground">7,3</strong> i gennemsnit –
            uden bonus, da EOP ikke tæller med som et A-niveau-fag, og der
            kun er 1 tilbage (Dansk A).
          </p>
        </div>

        <KilderSektion>
          <p>
            Bonus-A-reglen for eux (§ 68, stk. 3) henviser til reglerne for
            den enkelte erhvervsuddannelse. Beregneren bruger samme tærskler
            som 2-årigt HF (2 og 3 fag i alt, jf. det typiske baseline-antal
            på eux), men det præcise antal kan afvige for netop dit
            uddannelsesforløb.
          </p>
          <Regelgrundlag
            items={[
              {
                href: "https://www.retsinformation.dk/eli/lta/2022/537",
                title: "EUX-loven (LBK nr. 537 af 2/5/2022)",
                description:
                  "Indretning af eux – kombination af erhvervsuddannelse og gymnasial eksamen.",
              },
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/3",
                title: "Almen prøvebekendtgørelse (BEK nr. 3 af 5/1/2026)",
                description:
                  "Niveauvægte (§ 66) og bonus-A for eux (§ 68, stk. 3).",
              },
              {
                href: "https://uvm.dk/uddannelse-til-unge/erhvervsuddannelser/uddannelser/eux/",
                title: "uvm.dk: Om eux",
                description:
                  "Ministeriets overblik – fagpakken varierer mellem det enkelte erhvervsuddannelsesforløb.",
              },
            ]}
          />
        </KilderSektion>
      </div>
    </section>
  )
}
