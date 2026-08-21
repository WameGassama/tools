import { KilderSektion, Regelgrundlag } from "@/src/components/site/kilder-sektion"

const NIVEAU_ROWS = [
  { niveau: "A-niveau", weight: "2", note: "fx Dansk A" },
  { niveau: "B-niveau", weight: "1,5", note: "fx Historie B" },
  { niveau: "C-niveau", weight: "1", note: "fx Matematik C, Samfundsfag C" },
]

const FIXED_WEIGHT_ROWS = [
  { fag: "Større skriftlig opgave (SSO)", weight: "1,5" },
  { fag: "Eksamensprojekt", weight: "1,5" },
  { fag: "Kultur- og samfundsfaggruppe (KS)", weight: "2" },
  { fag: "Naturvidenskabelig faggruppe (NF)", weight: "1,5" },
]

export function HfEnkeltfagVaegtningForklaretSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-8 pb-12 sm:px-6 sm:pb-16">
      <h2 className="text-[22px] font-extrabold sm:text-[26px]">
        Sådan beregnes dit HF enkeltfag gennemsnit
      </h2>
      <p className="mt-2 text-sm text-muted-foreground sm:text-base">
        Når du tager HF som enkeltfag, får du ikke en løbende
        standpunktskarakter som på en fuld ungdomsuddannelse – hvert fag er
        en selvstændig eksamen, og kun den opnåede eksamenskarakter (mundtlig
        og/eller skriftlig) tæller med. Karaktererne vægtes efter fagets
        niveau. I modsætning til STX, HHX, HTX, EUX og 2-årigt HF findes der
        ingen bonus-A-ordning for HF taget som enkeltfag.
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
          Har du både en mundtlig/intern og en skriftlig/ekstern karakter i
          et fag, deles fagets vægt ligeligt mellem de to karakterer. Har du
          taget et fag på flere niveauer, er det kun karakteren på det
          højeste niveau, der tæller med.
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
            Disse fag/faggrupper har hver deres faste vægt uanset niveau.
          </p>
        </div>

        <div className="mt-6 border-t pt-6">
          <div className="text-sm font-semibold">Formlen</div>
          <p className="mt-2 rounded-md bg-muted px-3 py-2 font-mono text-sm text-foreground">
            Gennemsnit = ∑ karakter × niveauvægt ÷ ∑ niveauvægt
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Ingen bonusfaktor – HF som enkeltfag har ikke en bonus-A-ordning.
          </p>

          <div className="mt-4 text-sm font-semibold">Eksempel</div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Dansk A (karakter 7), Eksamensprojekt (karakter 10, fast vægt
            1,5) og Historie B (karakter 4) giver
            (7 × 2 + 10 × 1,5 + 4 × 1,5) ÷ (2 + 1,5 + 1,5) ={" "}
            <strong className="text-foreground">7,0</strong> i gennemsnit.
          </p>
        </div>

        <KilderSektion>
          <p>
            Bonus-A-reglen (§ 68) nævner ikke hf som enkeltfag, og der er
            derfor ingen bonusordning her.
          </p>
          <Regelgrundlag
            items={[
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/629",
                title: "Avu-loven (LBK nr. 629 af 17/6/2026)",
                description: "Uddannelsen til hf som enkeltfag/GSK.",
              },
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/3",
                title: "Almen prøvebekendtgørelse (BEK nr. 3 af 5/1/2026)",
                description:
                  "Niveauvægte (§ 66); ingen bonus-A-ordning for hf som enkeltfag.",
              },
              {
                href: "https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/uddannelser/hoejere-forberedelseseksamen-enkeltfag/",
                title: "uvm.dk: Hf-enkeltfag",
                description: "Ministeriets overblik over fag og niveauer.",
              },
            ]}
          />
        </KilderSektion>
      </div>
    </section>
  )
}
