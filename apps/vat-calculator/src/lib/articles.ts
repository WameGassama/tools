export type ArticleBlock = { t: "h" | "p"; text: string }

export interface Article {
  slug: string
  title: string
  lead: string
  blocks: ArticleBlock[]
}

export const ARTICLES: Record<string, Article> = {
  "hvad-er-moms": {
    slug: "hvad-er-moms",
    title: "Hvad er moms?",
    lead: "Moms er en forbrugsafgift på 25%, som virksomheder opkræver på statens vegne. Her er den korte forklaring på, hvordan den fungerer i praksis.",
    blocks: [
      {
        t: "p",
        text: "Moms, eller merværdiafgift, lægges oveni prisen på næsten alle varer og ydelser, der sælges i Danmark. Det er kunden, der reelt betaler afgiften, mens virksomheden fungerer som opkræver: den modtager momsen sammen med betalingen og videresender den til Skattestyrelsen.",
      },
      { t: "h", text: "Salgsmoms og købsmoms" },
      {
        t: "p",
        text: "Salgsmoms er den moms, du opkræver af dine kunder. Købsmoms er den moms, du selv har betalt til dine leverandører på indkøb, der bruges i virksomheden. Ved hver momsperiode trækkes købsmomsen fra salgsmomsen, og differencen betales til staten. Har du købt mere ind, end du har solgt, får du i stedet penge tilbage.",
      },
      { t: "h", text: "Satserne" },
      {
        t: "p",
        text: "Standardsatsen er 25%. Halv moms (12,5%) og kvart moms (6,25%) er ikke selvstændige satser, men udtryk for, at kun en del af momsen kan fratrækkes. Det gælder for eksempel visse udgifter til hotelovernatning, restaurantbesøg og leasede biler, hvor der er både en privat og en erhvervsmæssig del.",
      },
      { t: "h", text: "Momsfritagne ydelser" },
      {
        t: "p",
        text: "En række ydelser er helt fritaget for moms: læge- og tandlægebehandling, undervisning, forsikring, finansielle ydelser, persontransport og udlejning af boliger. Fritagelsen betyder, at du hverken lægger moms på dine fakturaer eller kan trække købsmoms fra på de indkøb, der hører til den fritagne aktivitet.",
      },
      { t: "h", text: "Moms på fakturaen" },
      {
        t: "p",
        text: "En faktura til en anden virksomhed skal blandt andet indeholde beløbet uden moms, momsbeløbet, det samlede beløb og dit CVR-nummer. Sælger du til private, kan du nøjes med at oplyse den samlede pris inklusiv moms. Det er den pris, der skal fremgå i markedsføring rettet mod forbrugere.",
      },
    ],
  },
  momsindberetning: {
    slug: "momsindberetning",
    title: "Momsindberetning: perioder, frister og fejl",
    lead: "Sådan indberetter du moms til tiden, og hvad der sker, hvis du ikke gør.",
    blocks: [
      {
        t: "p",
        text: "Momsindberetning foregår i TastSelv Erhverv. Du oplyser periodens salgsmoms, købsmoms og eventuelle EU-handler, og systemet regner selv det beløb ud, der skal betales eller udbetales. Selv om der intet er sket i perioden, skal der indberettes, for en nulindberetning tæller også.",
      },
      { t: "h", text: "Sådan finder du din periode" },
      {
        t: "p",
        text: "Perioden afhænger af omsætningen: halvårligt under 5 mio. kr., kvartalsvis mellem 5 og 50 mio. kr. og månedligt derover. Nystartede virksomheder starter som udgangspunkt kvartalsvis. Skattestyrelsen justerer perioden, når omsætningen ændrer sig, og du får besked, hvis din frekvens lægges om.",
      },
      { t: "h", text: "Forbered tallene inden" },
      {
        t: "p",
        text: "Afstem bogføringen, før du indberetter. Kontrollér at alle salgsfakturaer i perioden er bogført, at bilag for indkøb er med, og at private udgifter ikke er røget med i købsmomsen. Køb af varer i udlandet skal håndteres som erhvervelsesmoms, hvor du både angiver moms og fradrag for samme beløb.",
      },
      { t: "h", text: "Hvis du misser fristen" },
      {
        t: "p",
        text: "Så laver Skattestyrelsen en foreløbig fastsættelse: et skøn over din moms, som der lægges gebyr oveni. Skønnet er næsten altid for højt, og det forsvinder først, når du selv indberetter de korrekte tal. Gentagne manglende indberetninger kan i sidste ende koste virksomheden dens momsregistrering.",
      },
      { t: "h", text: "Fejl i en tidligere periode" },
      {
        t: "p",
        text: "Har du indberettet forkert, kan du rette indberetningen for den pågældende periode i TastSelv. Mindre fejl bør rettes, så snart de opdages. Jo længere tid der går, jo mere arbejde er der i at rulle bogføringen tilbage.",
      },
    ],
  },
  momsregistrering: {
    slug: "momsregistrering",
    title: "Momsregistrering: hvornår og hvordan",
    lead: "Grænsen går ved 50.000 kr. i momspligtig omsætning over 12 måneder. Her er, hvad du skal gøre.",
    blocks: [
      {
        t: "p",
        text: "Sælger din virksomhed momspligtige varer eller ydelser for mere end 50.000 kr. inden for en periode på 12 måneder, skal den momsregistreres. Grænsen er rullende, så det er ikke kalenderåret, der tæller, men de seneste tolv måneder. Du skal registrere dig, inden du passerer grænsen, ikke bagefter.",
      },
      { t: "h", text: "Sådan registrerer du" },
      {
        t: "p",
        text: "Registreringen sker på virk.dk, hvor du enten opretter virksomheden og momsregistrerer den samtidig, eller tilføjer momspligten til et eksisterende CVR-nummer. Du oplyser branchekode, forventet omsætning og startdato. Behandlingen tager typisk nogle hverdage, hvorefter du kan indberette i TastSelv Erhverv.",
      },
      { t: "h", text: "Frivillig registrering" },
      {
        t: "p",
        text: "Selv under grænsen kan det give mening at registrere sig frivilligt. Sælger du primært til andre virksomheder, er momsen neutral for dine kunder, mens du selv får fradrag for købsmomsen på dine indkøb. Sælger du derimod til private, gør momsen din pris 25% dyrere, og der kan det være en fordel at vente.",
      },
      { t: "h", text: "Efter registreringen" },
      {
        t: "p",
        text: "Fra registreringsdatoen skal alle fakturaer indeholde moms og dit CVR-nummer, og du skal indberette i hver momsperiode. Husk at gemme bilag i fem år. Ophører aktiviteten, skal virksomheden afmeldes, da indberetningspligten ellers løber videre.",
      },
    ],
  },
}

export const NAV_LINKS = [
  { href: "/", label: "Beregn moms" },
  { href: "/hvad-er-moms", label: "Hvad er moms?" },
  { href: "/momsindberetning", label: "Momsindberetning" },
  { href: "/momsregistrering", label: "Momsregistrering" },
]
