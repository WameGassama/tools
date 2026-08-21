import { KilderSektion, Regelgrundlag } from "@/src/components/site/kilder-sektion"

const NIVEAU_ROWS = [
  { niveau: "A-niveau", weight: "2", note: "fx Dansk A" },
  { niveau: "B-niveau", weight: "1,5", note: "fx Engelsk B" },
  { niveau: "C-niveau", weight: "1", note: "fx Matematik C" },
]

const FIXED_WEIGHT_ROWS = [
  { fag: "Større skriftlig opgave (SSO)", weight: "1,5" },
  { fag: "Kultur- og samfundsfaggruppen (KS)", weight: "2" },
  { fag: "Naturvidenskabelig faggruppe (NF)", weight: "1,5" },
]

const BONUS_ROWS = [
  { count: "1 fag på A-niveau (kun Dansk)", multiplier: "Ingen bonus" },
  { count: "2 fag på A-niveau", multiplier: "× 1,03" },
  { count: "3 fag eller flere på A-niveau", multiplier: "× 1,06" },
]

export function Hf2AarigtVaegtningForklaretSection() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 pt-8 pb-12 sm:pb-16">
      <h2 className="text-[26px] font-extrabold">
        Sådan beregnes dit HF gennemsnit
      </h2>
      <p className="mt-2 text-muted-foreground">
        På 2-årigt HF er Dansk A dit eneste obligatoriske A-niveau-fag, så
        bonussen for A-niveau-fag udløses tidligere end på STX, HHX og HTX,
        allerede ved dit 2. A-fag.
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
          Har du både en mundtlig/intern og en skriftlig/ekstern karakter i
          et fag, deles fagets vægt ligeligt mellem de to karakterer.
          Kultur- og samfundsfaggruppen (KS) og Naturvidenskabelig
          faggruppe (NF) er samlede fag, hvor din eksterne eksamenskarakter,
          uanset om du blev udtrukket i fx historie, religion eller
          samfundsfag (KS), eller biologi, geografi eller kemi (NF),
          indtastes i det ene fag.
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
            SSO, KS og NF har hver deres faste vægt uanset niveau, og ingen
            af dem tæller med som et af dine A-niveau-fag i bonus-A-reglen
            herunder.
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
            Dansk A (karakter 7), Engelsk B (karakter 4) og Matematik C
            (karakter 10) giver
            (7 × 2 + 4 × 1,5 + 10 × 1) ÷ (2 + 1,5 + 1) ={" "}
            <strong className="text-foreground">6,7</strong> i gennemsnit –
            uden bonus, da der kun er 1 fag på A-niveau.
          </p>
        </div>

        <KilderSektion>
          <Regelgrundlag
            items={[
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/629",
                title: "Avu-loven (LBK nr. 629 af 17/6/2026)",
                description:
                  "Uddannelsens indretning, obligatoriske fag og faggrupper (KS/NF).",
              },
              {
                href: "https://www.retsinformation.dk/eli/lta/2026/3",
                title: "Almen prøvebekendtgørelse (BEK nr. 3 af 5/1/2026)",
                description:
                  "Niveauvægte (§ 66) og bonus-A ved 2 og 3 fag på A-niveau (§ 68, stk. 2).",
              },
              {
                href: "https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/uddannelser/hoejere-forberedelseseksamen-hf/",
                title: "uvm.dk: Hf-uddannelsen",
                description: "Ministeriets overblik over fag, niveauer og struktur.",
              },
            ]}
          />
        </KilderSektion>
      </div>
    </section>
  )
}
