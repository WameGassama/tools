export interface FaqItem {
  q: string
  a: string
}

export const FAQ: FaqItem[] = [
  {
    q: "Hvor mange procent er moms i Danmark?",
    a: "Standardsatsen er 25%. Den har været uændret i mange år og gælder for langt de fleste varer og ydelser. Enkelte ydelser er helt fritaget for moms.",
  },
  {
    q: "Hvordan trækker jeg moms ud af et beløb?",
    a: "Divider beløbet med 1,25. 1.250 kr. inklusiv moms bliver til 1.000 kr. uden moms, og momsen udgør dermed 250 kr. Momsen er altså 20% af den samlede pris, ikke 25%.",
  },
  {
    q: "Hvad betyder inklusiv og eksklusiv moms?",
    a: "Inklusiv moms betyder, at momsen allerede er indeholdt i prisen. Eksklusiv moms betyder, at der endnu skal lægges moms oveni. Priser til forbrugere oplyses inklusiv moms, priser mellem virksomheder oftest eksklusiv.",
  },
  {
    q: "Hvornår skal jeg momsregistrere min virksomhed?",
    a: "Når den momspligtige omsætning overstiger 50.000 kr. over en periode på 12 måneder. Du skal registrere dig, inden grænsen passeres.",
  },
  {
    q: "Hvad er halv og kvart moms?",
    a: "Det er ikke særskilte satser, men udtryk for delvist momsfradrag, typisk ved udgifter med både privat og erhvervsmæssig anvendelse, som hotel, restaurant eller leasing.",
  },
  {
    q: "Er beregneren gratis?",
    a: "Ja. Der kræves hverken login eller betaling, og alle beregninger foregår lokalt i din browser.",
  },
]
