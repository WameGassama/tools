const DEADLINE_ROWS = [
  {
    revenue: "Under 5 mio. kr.",
    period: "Halvårligt",
    deadline: "1. marts og 1. september",
  },
  {
    revenue: "5–50 mio. kr.",
    period: "Kvartalsvis",
    deadline: "1. i den anden måned efter kvartalet",
  },
  {
    revenue: "Over 50 mio. kr.",
    period: "Månedligt",
    deadline: "25. i måneden efter",
  },
]

export function VatExplainer() {
  return (
    <section className="mt-[52px]">
      <h2 className="mb-3.5 font-heading text-[26px] font-semibold tracking-tight">
        Hvad er moms, og hvordan regner man den ud?
      </h2>
      <p className="mb-3.5 text-pretty">
        Moms er en afgift på forbrug. Virksomheden lægger momsen oveni sin
        pris, opkræver den hos kunden og sender den videre til staten. Selve
        virksomheden ender som udgangspunkt med at være momsneutral: den
        moms, den betaler til sine leverandører (købsmoms), trækkes fra den
        moms, den har opkrævet af sine kunder (salgsmoms). Forskellen er det
        beløb, der skal afregnes.
      </p>
      <p className="mb-3.5">
        Regnestykket er enkelt, når man kender de to retninger:
      </p>
      <div className="mb-[18px] flex justify-center">
        <div className="w-full max-w-[320px] border border-dashed border-border bg-card px-[22px] pt-5 pb-4 font-mono text-[13px] shadow-sm">
          <div className="mb-1 text-center font-heading text-[13px] font-bold tracking-[0.06em] uppercase">
            Momskvittering
          </div>
          <div className="mb-3.5 text-center text-[11px] text-muted-foreground">
            Eksempel · 25% moms
          </div>
          <div className="flex justify-between py-[3px]">
            <span>Beløb ekskl. moms</span>
            <span>800,00</span>
          </div>
          <div className="flex justify-between py-[3px]">
            <span>Moms × 0,25</span>
            <span>200,00</span>
          </div>
          <div className="my-2.5 border-t border-dashed border-border" />
          <div className="flex justify-between text-sm font-bold text-primary">
            <span>I ALT INKL. MOMS</span>
            <span>1.000,00</span>
          </div>
          <div className="my-2.5 border-t border-dashed border-border" />
          <div className="flex justify-between py-[3px]">
            <span>Beløb inkl. moms</span>
            <span>1.000,00</span>
          </div>
          <div className="flex justify-between py-[3px]">
            <span>÷ 1,25</span>
            <span>800,00</span>
          </div>
          <div className="my-2.5 border-t border-dashed border-border" />
          <div className="flex justify-between text-sm font-bold text-primary">
            <span>MOMS AT TRÆKKE FRA</span>
            <span>200,00</span>
          </div>
          <div className="mt-3 text-center text-[11px] tracking-[3px] text-muted-foreground">
            ✂ · · · · · · · · · · · · · · · ✂
          </div>
        </div>
      </div>
      <p className="mb-3.5">
        Bemærk fælden: man trækker <em>ikke</em> 25% fra en pris inklusiv
        moms for at finde prisen uden moms. Momsen udgør 20% af den samlede
        pris, fordi de 25% er regnet af det mindre beløb. Derfor divideres
        der med 1,25.
      </p>

      <h3 className="mt-7 mb-2 font-heading text-xl font-semibold">
        Hvornår er en vare eller ydelse momspligtig?
      </h3>
      <p className="mb-3.5">
        Hovedreglen er, at alt erhvervsmæssigt salg af varer og ydelser i
        Danmark er momspligtigt. Der findes dog undtagelser, blandt andet
        sundhedsbehandling, undervisning, persontransport, forsikring og
        udlejning af fast ejendom. Sælger du udelukkende momsfritagne
        ydelser, skal du ikke momsregistreres, men du kan til gengæld heller
        ikke trække købsmoms fra.
      </p>

      <h3 className="mt-7 mb-2 font-heading text-xl font-semibold">
        Frister for momsindberetning
      </h3>
      <p className="mb-4">
        Hvor ofte du skal indberette, afhænger af virksomhedens momspligtige
        omsætning:
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-[10px] border border-border bg-card text-base">
          <caption className="pb-2 text-left text-sm text-muted-foreground">
            Typiske afregningsperioder efter omsætning
          </caption>
          <thead>
            <tr className="bg-accent text-left">
              <th scope="col" className="p-3 px-4 font-semibold">
                Omsætning pr. år
              </th>
              <th scope="col" className="p-3 px-4 font-semibold">
                Periode
              </th>
              <th scope="col" className="p-3 px-4 font-semibold">
                Frist
              </th>
            </tr>
          </thead>
          <tbody>
            {DEADLINE_ROWS.map((row) => (
              <tr key={row.revenue} className="border-t border-border">
                <td className="p-3 px-4">{row.revenue}</td>
                <td className="p-3 px-4">{row.period}</td>
                <td className="p-3 px-4">{row.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 mb-3.5 text-[15px] text-muted-foreground">
        Nystartede virksomheder starter typisk på kvartalsvis afregning. Tjek
        altid din egen frist i TastSelv Erhverv, hvor den står på
        virksomhedens momsperiode.
      </p>

      <h3 className="mt-7 mb-2 font-heading text-xl font-semibold">
        Hvad sker der ved for sen indberetning?
      </h3>
      <p className="mb-3.5">
        Indberetter du ikke til tiden, laver Skattestyrelsen en foreløbig
        fastsættelse af momsen. Den koster et gebyr og bygger på et skøn, der
        næsten altid er højere end det reelle beløb. Fastsættelsen fjernes
        først, når du selv indberetter de rigtige tal. Bliver der ved med at
        mangle indberetninger, kan virksomhedens momsregistrering blive
        inddraget, og der løber renter på det skyldige beløb.
      </p>

      <h3 className="mt-7 mb-2 font-heading text-xl font-semibold">
        Moms ved handel over grænsen
      </h3>
      <p className="mb-3.5">
        Sælger du varer til en momsregistreret virksomhed i et andet
        EU-land, faktureres der uden dansk moms, og køberen afregner selv
        momsen i sit eget land. Til gengæld skal salget indberettes i
        EU-salg uden moms. Ved salg til private i EU gælder
        fjernsalgsreglerne, hvor du over en samlet grænse skal afregne moms i
        kundens land, typisk via One Stop Shop. Eksport ud af EU sker uden
        moms, mens import fra lande uden for EU udløser importmoms, som
        momsregistrerede virksomheder normalt kan trække fra igen.
      </p>

      <h3 className="mt-7 mb-2 font-heading text-xl font-semibold">
        Hvor får du rådgivning?
      </h3>
      <p className="mb-3.5">
        Skattestyrelsen svarer på generelle spørgsmål og kan give bindende
        svar i konkrete sager. En revisor eller bogholder er den rigtige vej,
        når det handler om din egen virksomheds forhold, og et
        regnskabsprogram kan automatisere selve indberetningen. Er du
        selvstændig, kan en erhvervsorganisation ofte hjælpe med de første
        spørgsmål som en del af medlemskabet.
      </p>
    </section>
  )
}
