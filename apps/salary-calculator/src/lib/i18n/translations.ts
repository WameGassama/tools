export type Locale = "da" | "en"

const da = {
  sectionNav: {
    ariaLabel: "Sideafsnit",
    beregner: "Beregner",
    saadanBeregnes: "Sådan beregnes",
    faq: "Spørgsmål",
  },
  hero: {
    title: "Hvad får jeg udbetalt efter skat?",
    subtitle:
      "Indtast din løn og find din nettoløn efter AM-bidrag, bund-, mellem-, top- og kommuneskat — baseret på de gældende satser for 2026.",
  },
  howItWorks: {
    title: "Sådan beregnes din skat",
    subtitle:
      "Danmarks indkomstskat bygger på flere lag, der lægges oven på hinanden. Her er en kort forklaring af hvert trin.",
    steps: [
      {
        kicker: "Trin 1",
        title: "AM-bidrag",
        body: "8% af din løn går til arbejdsmarkedsbidrag, før anden skat beregnes. Alle over 18 år betaler det.",
      },
      {
        kicker: "Trin 2",
        title: "Personfradrag",
        body: "De første 54.100 kr. om året er skattefri for alle — det kaldes personfradraget.",
      },
      {
        kicker: "Trin 3",
        title: "Bundskat",
        body: "12,01% betales af alle med indkomst over personfradraget. Det er det brede skattelag, alle rammes af.",
      },
      {
        kicker: "Trin 4",
        title: "Mellem- og topskat",
        body: "Over 641.200 kr./år betaler du 7,5% mellemskat, og over 777.900 kr./år yderligere 7,5% topskat.",
      },
      {
        kicker: "Trin 5",
        title: "Kommune- og kirkeskat",
        body: "Din bopælskommune opkræver mellem 23,39% og 26,30% i lokal skat. Er du medlem af folkekirken, betaler du desuden kirkeskat.",
      },
      {
        kicker: "Trin 6",
        title: "Beskæftigelsesfradrag",
        body: "Er du i arbejde, får du automatisk et fradrag på 12,75% af lønnen (maks. 63.300 kr.), som sænker din kommuneskat.",
      },
    ],
  },
  faq: {
    title: "Ofte stillede spørgsmål",
    items: [
      {
        q: 'Skal jeg bruge "Progressiv årsskat" eller "Trækprocent"?',
        a: "Progressiv årsskat viser, hvad en given årsløn koster i skat i gennemsnit hen over året — brug den til at få et hurtigt overblik eller sammenligne jobtilbud. Trækprocent (lønseddel) regner derimod på én konkret lønperiode ud fra din trækprocent og dit skattekort (hoved- eller bikort), og tager højde for ting som bikort uden fradrag og ATP — brug den, når du vil tjekke, om din faktiske lønseddel stemmer, fx efter du har fået en ny forskudsopgørelse.",
      },
      {
        q: "Hvorfor er kommuneskatten forskellig?",
        a: "Hver kommune fastsætter selv sin skatteprocent for at finansiere lokale ydelser som skoler og ældrepleje. Satsen varierer fra 23,39% til 26,30% i 2026.",
      },
      {
        q: "Skal jeg betale kirkeskat?",
        a: "Kun hvis du er medlem af Den Danske Folkekirke. Du kan altid framelde dig og undgå kirkeskatten fremover.",
      },
      {
        q: "Hvad er forskellen på mellemskat og topskat?",
        a: "Begge er nye fra 2026: mellemskat på 7,5% betales af indkomst over 641.200 kr., og topskat på yderligere 7,5% betales af indkomst over 777.900 kr. (efter AM-bidrag).",
      },
      {
        q: "Hvorfor sænker pension min skat?",
        a: "Indbetaling til pension trækkes fra, før AM-bidrag og indkomstskat beregnes, så en del af lønnen bliver skattefri her og nu — men beskattes i stedet, når pengene udbetales som pension.",
      },
      {
        q: "Hvad er trækprocent?",
        a: "Din trækprocent er den andel af lønnen, din arbejdsgiver trækker i skat ved hver lønudbetaling. Den fremgår af dit skattekort og beregnes ud fra din forventede årsindkomst og dine fradrag, så du undgår at betale for meget eller for lidt i skat hen over året.",
      },
      {
        q: "Hvad er forskellen på brutto- og nettoløn?",
        a: "Bruttoløn er din løn, før skat og andre fradrag er trukket fra. Nettoløn er det beløb, du rent faktisk får udbetalt, når AM-bidrag, skat og eventuelt pensionsbidrag er trukket fra.",
      },
      {
        q: "Hvor meget skal jeg betale i skat?",
        a: "Det afhænger af din indkomst, kommune og eventuelle fradrag. De fleste betaler 8% i AM-bidrag og 12,01% i bundskat, plus 23-26% i kommune- og kirkeskat — mens mellem- og topskat kun rammer den del af indkomsten, der ligger over hhv. 641.200 kr. og 777.900 kr. om året. Brug beregneren ovenfor for at se dit præcise beløb.",
      },
      {
        q: "Hvor meget må jeg tjene, før jeg skal betale skat?",
        a: "De første 54.100 kr., du tjener om året, er skattefri på grund af personfradraget. Alt derover beskattes efter de almindelige satser.",
      },
    ],
  },
  footer: {
    badge: "Ingen data gemmes – alt beregnes lokalt i din browser",
    disclaimer:
      "Beregningen er vejledende og bygger på de offentliggjorte 2026-satser (Skatteministeriet). Kommuneskattesatser er illustrative pr. kommune. Kørselsfradrag beregnes ud fra en antagelse om 216 arbejdsdage/år og tager ikke højde for lavindkomsttillægget eller de særlige satser for yderkommuner. Rente-, håndværker- og servicefradrag er forenklede skøn. Beregningen viser ikke virkningen af skatteloftet eller andre særregler. Kontakt SKAT eller din kommune for et præcist tal.",
    copyright: (brand: string) => `© 2026 ${brand}`,
  },
  calculatorModes: {
    progressive: "Progressiv årsskat",
    withholding: "Trækprocent (lønseddel)",
  },
  salaryForm: {
    cardLabel: "Beregner",
    loenLabel: "Løn",
    periodeLabel: "Periode",
    prManed: "Pr. måned",
    prAar: "Pr. år",
    kommuneLabel: "Kommune",
    pensionLabel: { prefix: "Pensionsindbetaling (", suffix: "% af lønnen)" },
    atpCheckbox: "Inkluder ATP-bidrag (99 kr./md.)",
    churchCheckbox: "Medlem af folkekirken (kirkeskat)",
    under18Checkbox: "Under 18 år (intet AM-bidrag/fradrag)",
  },
  deductionForm: {
    accordionTitle: "Flere fradrag",
    commuteLabel: "Afstand til arbejde (km, tur/retur pr. dag)",
    fagforeningLabel: "Fagforeningskontingent (kr./md.)",
    fagforeningMax: "Maks. 7.000 kr./år",
    akasseLabel: "A-kasse-bidrag (kr./md.)",
    renteudgifterLabel: "Renteudgifter (kr./år)",
    haandvaerkerLabel: "Håndværkerfradrag – grøn istandsættelse (kr./år)",
    haandvaerkerMax: "Maks. 9.000 kr./år",
    serviceLabel: "Servicefradrag – rengøring, havearbejde mv. (kr./år)",
    serviceMax: "Maks. 18.300 kr./år",
  },
  withholdingForm: {
    cardLabel: "Beregner (trækprocent)",
    incomeTypeLabel: "Indkomsttype",
    incomeTypes: {
      loen: "Løn",
      pension: "Pension",
      dagpenge: "Dagpenge (A-kasse) eller kontanthjælp",
      su: "SU",
      efterloen: "Efterløn",
    },
    skattekortLabel: "Skattekort",
    hovedkort: "Hovedkort",
    bikort: "Bikort",
    grossAmountLabel: "Bruttoløn for perioden",
    atpAmountLabel: "ATP-bidrag for perioden",
    atpHint: "Se beløbet på din lønseddel — varierer med antal timer",
    traekprocentLabel: "Trækprocent",
    traekprocentHint: "Fra dit skattekort/forskudsopgørelse",
    loenperiodeLabel: "Lønperiode",
    hverAndenUge: "Hver anden uge",
    maanedsfradragLabel: "Månedsfradrag",
    maanedsfradragHintBikort: "Bikort har som udgangspunkt intet fradrag",
    maanedsfradragHintNormal:
      "Fra dit skattekort — omregnes automatisk til perioden",
    under18Checkbox: "Under 18 år (intet AM-bidrag)",
  },
  result: {
    cardLabel: "Resultat",
    nettoPer: (period: string) => `kr. netto / ${period}`,
    afBruttolon: (pct: string) => `${pct}% af bruttoløn`,
    maaned: "måned",
    aar: "år",
    periode: "periode",
    legend: {
      netto: "Netto",
      skat: "Skat",
      pensionAtp: "Pension/ATP",
    },
  },
  breakdown: {
    bruttolon: "Bruttoløn",
    pensionsopsparing: "Pensionsopsparing",
    atpBidrag: "ATP-bidrag",
    amBidrag: "AM-bidrag (8%)",
    bundskat: "Bundskat",
    mellemskat: "Mellemskat",
    topskat: "Topskat",
    topTopskat: "Top-topskat",
    kommuneskat: (municipality: string) => `Kommuneskat (${municipality})`,
    kirkeskat: "Kirkeskat",
    skattefradrag: "Skattefradrag (rente/håndværker/service)",
    askatGrundlag: "A-skat grundlag (afrundet)",
    askat: (pct: number) => `A-skat (${pct}%)`,
    tilUdbetaling: "Til udbetaling",
  },
}

const en: typeof da = {
  sectionNav: {
    ariaLabel: "Page sections",
    beregner: "Calculator",
    saadanBeregnes: "How it works",
    faq: "FAQ",
  },
  hero: {
    title: "What do I get paid after tax?",
    subtitle:
      "Enter your salary and find your take-home pay after labour-market contribution, bottom-, middle-, top- and municipal tax — based on the current 2026 rates.",
  },
  howItWorks: {
    title: "How your tax is calculated",
    subtitle:
      "Danish income tax is built from several layers stacked on top of each other. Here's a short explanation of each step.",
    steps: [
      {
        kicker: "Step 1",
        title: "Labour-market contribution",
        body: "8% of your salary goes to the labour-market contribution before any other tax is calculated. Everyone over 18 pays it.",
      },
      {
        kicker: "Step 2",
        title: "Personal allowance",
        body: "The first 54,100 kr. a year is tax-free for everyone — this is called the personal allowance.",
      },
      {
        kicker: "Step 3",
        title: "Bottom-bracket tax",
        body: "12.01% is paid by everyone with income above the personal allowance. It's the broad tax bracket that affects everyone.",
      },
      {
        kicker: "Step 4",
        title: "Middle- and top-bracket tax",
        body: "Above 641,200 kr./year you pay 7.5% middle-bracket tax, and above 777,900 kr./year a further 7.5% top-bracket tax.",
      },
      {
        kicker: "Step 5",
        title: "Municipal and church tax",
        body: "Your home municipality charges between 23.39% and 26.30% in local tax. If you're a member of the state church, you also pay church tax.",
      },
      {
        kicker: "Step 6",
        title: "Employment allowance",
        body: "If you're employed, you automatically get a deduction of 12.75% of your salary (max. 63,300 kr.), which lowers your municipal tax.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: 'Should I use "Progressive annual tax" or "Withholding percentage"?',
        a: "Progressive annual tax shows what a given annual salary costs in tax on average across the year — use it to get a quick overview or compare job offers. Withholding percentage (payslip) instead calculates a single specific pay period based on your withholding percentage and tax card (primary or secondary), and accounts for things like a secondary card having no deduction and ATP — use it when you want to check whether your actual payslip adds up, e.g. after receiving a new preliminary tax assessment.",
      },
      {
        q: "Why is the municipal tax different?",
        a: "Each municipality sets its own tax rate to fund local services like schools and elderly care. The rate varies from 23.39% to 26.30% in 2026.",
      },
      {
        q: "Do I have to pay church tax?",
        a: "Only if you're a member of the Danish National Church. You can always opt out and avoid church tax going forward.",
      },
      {
        q: "What's the difference between middle- and top-bracket tax?",
        a: "Both are new from 2026: middle-bracket tax of 7.5% is paid on income above 641,200 kr., and top-bracket tax of a further 7.5% is paid on income above 777,900 kr. (after labour-market contribution).",
      },
      {
        q: "Why does pension lower my tax?",
        a: "Pension contributions are deducted before the labour-market contribution and income tax are calculated, so part of your salary becomes tax-free right now — but it's taxed instead when the money is paid out as a pension.",
      },
      {
        q: "What is the withholding percentage (trækprocent)?",
        a: "Your withholding percentage is the share of your salary your employer deducts as tax with each pay period. It's stated on your tax card and calculated from your expected annual income and deductions, so you don't end up paying too much or too little tax over the year.",
      },
      {
        q: "What's the difference between gross and net salary?",
        a: "Gross salary (bruttoløn) is your pay before tax and other deductions. Net salary (nettoløn) is the amount you actually receive after labour-market contribution, tax, and any pension contribution are deducted.",
      },
      {
        q: "How much tax do I have to pay?",
        a: "It depends on your income, municipality, and any deductions. Most people pay 8% labour-market contribution and 12.01% bottom-bracket tax, plus 23–26% municipal and church tax — while middle- and top-bracket tax only applies to income above 641,200 kr. and 777,900 kr. a year respectively. Use the calculator above to see your exact amount.",
      },
      {
        q: "How much can I earn before I have to pay tax?",
        a: "The first 54,100 kr. you earn per year is tax-free thanks to the personal allowance. Everything above that is taxed at the standard rates.",
      },
    ],
  },
  footer: {
    badge:
      "No data is stored – everything is calculated locally in your browser",
    disclaimer:
      "This calculation is indicative and based on the published 2026 rates (Ministry of Taxation). Municipal tax rates are illustrative per municipality. The commuting deduction is calculated based on an assumption of 216 working days/year and does not account for the low-income supplement or the special rates for outlying municipalities. Interest, tradesperson and service deductions are simplified estimates. The calculation does not show the effect of the tax ceiling or other special rules. Contact SKAT or your municipality for an exact figure.",
    copyright: (brand: string) => `© 2026 ${brand}`,
  },
  calculatorModes: {
    progressive: "Progressive annual tax",
    withholding: "Withholding percentage (payslip)",
  },
  salaryForm: {
    cardLabel: "Calculator",
    loenLabel: "Salary",
    periodeLabel: "Period",
    prManed: "Per month",
    prAar: "Per year",
    kommuneLabel: "Municipality",
    pensionLabel: { prefix: "Pension contribution (", suffix: "% of salary)" },
    atpCheckbox: "Include ATP contribution (99 kr./mo.)",
    churchCheckbox: "Member of the state church (church tax)",
    under18Checkbox: "Under 18 (no labour-market contribution/allowance)",
  },
  deductionForm: {
    accordionTitle: "More deductions",
    commuteLabel: "Commute distance (km, round trip per day)",
    fagforeningLabel: "Union dues (kr./mo.)",
    fagforeningMax: "Max. 7,000 kr./year",
    akasseLabel: "Unemployment fund contribution (kr./mo.)",
    renteudgifterLabel: "Interest expenses (kr./year)",
    haandvaerkerLabel: "Tradesperson deduction – green renovation (kr./year)",
    haandvaerkerMax: "Max. 9,000 kr./year",
    serviceLabel: "Service deduction – cleaning, gardening etc. (kr./year)",
    serviceMax: "Max. 18,300 kr./year",
  },
  withholdingForm: {
    cardLabel: "Calculator (withholding percentage)",
    incomeTypeLabel: "Income type",
    incomeTypes: {
      loen: "Salary",
      pension: "Pension",
      dagpenge: "Unemployment or cash benefits",
      su: "Student grant (SU)",
      efterloen: "Early retirement pay",
    },
    skattekortLabel: "Tax card",
    hovedkort: "Primary card",
    bikort: "Secondary card",
    grossAmountLabel: "Gross pay for the period",
    atpAmountLabel: "ATP contribution for the period",
    atpHint: "See the amount on your payslip — varies with hours worked",
    traekprocentLabel: "Withholding percentage",
    traekprocentHint: "From your tax card/preliminary tax assessment",
    loenperiodeLabel: "Pay period",
    hverAndenUge: "Every other week",
    maanedsfradragLabel: "Monthly deduction",
    maanedsfradragHintBikort: "A secondary card has no deduction by default",
    maanedsfradragHintNormal:
      "From your tax card — converted automatically to the period",
    under18Checkbox: "Under 18 (no labour-market contribution)",
  },
  result: {
    cardLabel: "Result",
    nettoPer: (period: string) => `kr. net / ${period}`,
    afBruttolon: (pct: string) => `${pct}% of gross salary`,
    maaned: "month",
    aar: "year",
    periode: "period",
    legend: {
      netto: "Net",
      skat: "Tax",
      pensionAtp: "Pension/ATP",
    },
  },
  breakdown: {
    bruttolon: "Gross salary",
    pensionsopsparing: "Pension savings",
    atpBidrag: "ATP contribution",
    amBidrag: "Labour-market contribution (8%)",
    bundskat: "Bottom-bracket tax",
    mellemskat: "Middle-bracket tax",
    topskat: "Top-bracket tax",
    topTopskat: "Extra top-bracket tax",
    kommuneskat: (municipality: string) => `Municipal tax (${municipality})`,
    kirkeskat: "Church tax",
    skattefradrag: "Tax deductions (interest/tradesperson/service)",
    askatGrundlag: "A-tax base (rounded)",
    askat: (pct: number) => `A-tax (${pct}%)`,
    tilUdbetaling: "Paid out",
  },
}

export const translations: Record<Locale, typeof da> = { da, en }
