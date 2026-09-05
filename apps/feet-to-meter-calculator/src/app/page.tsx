
import { LengthConverter } from "@/src/components/calculator/length-converter"
import { Faq, faqJsonLd, type FaqItem } from "@/src/components/site/faq"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"
import { HEIGHT_TABLE_VALUES } from "@/src/lib/pages"
import {
  feetInchesToMeters,
  feetToCentimeters,
  feetToMeters,
  formatDa,
  formatDaTrim,
  metersToFeet,
} from "@/src/lib/length-convert"

const SITE_URL = "https://www.fodtilmeter.dk"

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Fod til meter omregner",
  url: SITE_URL,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "DKK" },
  inLanguage: "da",
}

const STEPS = [
  {
    number: "1",
    title: "Skriv antal fod",
    body: "Indtast den værdi i fod, du vil regne om. Du kan bruge både komma og punktum.",
  },
  {
    number: "2",
    title: "Aflæs meter",
    body: "Meterfeltet opdaterer sig selv, mens du skriver. Der er ingen knap at trykke på.",
  },
  {
    number: "3",
    title: "Tilføj tommer",
    body: "Sæt flueben i „Regn med tommer“, hvis du har en højde som 5 fod 11 tommer.",
  },
]

const COMMON_FEET = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 17, 18, 20, 25, 30, 40, 50, 100]

const COMMON_METERS = [1, 2, 3, 5, 10, 15, 20, 25, 30, 50, 100]

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Hvor mange meter er 1 fod?",
    a: "1 fod er præcis 0,3048 meter, altså 30,48 cm. Værdien er fastlagt internationalt i 1959 og er ikke en afrunding.",
  },
  {
    q: "Hvordan regner jeg fod om til meter?",
    a: "Gang antallet af fod med 0,3048. For eksempel: 6 fod × 0,3048 = 1,829 meter. Omregneren på siden gør det automatisk og viser regnestykket.",
  },
  {
    q: "Hvor mange meter er 6 fod?",
    a: "6 fod er 1,8288 meter, som normalt afrundes til 1,83 meter.",
  },
  {
    q: "Hvor mange fod er en meter?",
    a: "1 meter er cirka 3,2808 fod, altså lidt over 3 fod og 3 tommer. Skal du regne meter til fod, dividerer du bare meterværdien med 0,3048.",
  },
  {
    q: "Hvor mange meter er 20 fod?",
    a: "20 fod er 6,096 meter, som normalt afrundes til 6,1 meter.",
  },
  {
    q: "Hvor mange centimeter er 5 fod 10 tommer?",
    a: "5 fod 10 tommer er 177,8 cm. Der går 12 tommer på en fod, og hver tomme er 2,54 cm.",
  },
  {
    q: "Hvad er forskellen på fod og tommer?",
    a: "Fod og tommer er begge angelsaksiske længdemål. En fod svarer til 12 tommer, så en tomme er 2,54 cm og en fod er 30,48 cm.",
  },
  {
    q: "Hvorfor bruger man stadig fod?",
    a: "Fod bruges især i USA og Storbritannien til højde, bygningsmål og flyvehøjder. Derfor møder man tit fod i film, sport, byggevarer og rejseinformation, selvom Danmark bruger meter.",
  },
]

function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(webApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd(FAQ_ITEMS)) }}
      />
      <NavBar />
      <main className="mx-auto w-full max-w-[1060px] px-4 pb-20 sm:px-8">
        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="lg:pt-6">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-secondary px-3 py-1 font-mono text-xs font-semibold text-secondary-foreground">
              1 ft = 0,3048 m
            </span>
            <h1 className="mt-4 text-balance text-[clamp(30px,5vw,46px)] leading-[1.05] font-extrabold tracking-tight">
              Fod til meter
            </h1>
            <p className="mt-4 max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              Omregn fod til meter med det samme. Skriv en højde, en længde eller et byggemål i
              fod, og få svaret i meter, mens du skriver. Omregneren virker også den anden vej, så
              du kan regne meter til fod og tage tommer med.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-orange-900/5">
            <div aria-hidden="true" className="ruler-strip h-3" />
            <LengthConverter className="rounded-none border-0 shadow-none" />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">Sådan bruger du omregneren</h2>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-lg border border-border bg-card p-5 pl-4 border-l-[3px] border-l-primary"
              >
                <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">
                  Trin {step.number}
                </span>
                <h3 className="mt-2 text-base font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">Sådan regner du fod om til meter</h2>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            <div className="max-w-[64ch] text-pretty leading-relaxed">
              <p className="mb-4">
                En fod er et angelsaksisk længdemål, der siden 1959 har været defineret som præcis
                0,3048 meter. Derfor er omregningen helt enkel: gang antallet af fod med 0,3048, så
                har du længden i meter.
              </p>
              <p className="mb-4">
                Skal du den anden vej, dividerer du i stedet med 0,3048. En meter svarer til cirka
                3,281 fod. Hvis du kun skal bruge et hurtigt overslag, kan du gange med 0,3 og
                lægge lidt til, men brug den præcise værdi, når det gælder byggemål eller tegninger.
              </p>
              <p>
                Højder skrives ofte i fod og tommer, for eksempel 5 fod 11 tommer. Der går 12
                tommer på en fod, så du regner tommerne om ved at dividere med 12 og lægge dem til
                antallet af fod, inden du ganger med 0,3048.
              </p>
            </div>
            <div className="h-fit rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24">
              <h3 className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                Formler
              </h3>
              <dl className="mt-3.5 divide-y divide-border font-mono text-sm">
                <div className="py-2.5 first:pt-0">
                  <dt className="text-muted-foreground">fod til meter</dt>
                  <dd className="mt-1 font-bold text-primary">m = ft × 0,3048</dd>
                </div>
                <div className="py-2.5">
                  <dt className="text-muted-foreground">meter til fod</dt>
                  <dd className="mt-1 font-bold text-primary">ft = m ÷ 0,3048</dd>
                </div>
                <div className="py-2.5 last:pb-0">
                  <dt className="text-muted-foreground">tommer til cm</dt>
                  <dd className="mt-1 font-bold text-primary">cm = tm × 2,54</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">Fod til meter tabel</h2>
          <p className="mt-2 max-w-[62ch] text-pretty text-muted-foreground">
            Tabellen viser de mest almindelige fod omregnet til meter og centimeter, så du kan
            slå værdien op uden selv at regne.
          </p>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
            {COMMON_FEET.map((feet) => (
              <div key={feet} className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  {feet} fod i meter
                </h3>
                <p className="mt-1.5 font-mono text-xl font-bold text-primary tabular-nums">
                  {formatDaTrim(feetToMeters(feet, 4), 4)} m
                </p>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground tabular-nums">
                  {formatDaTrim(feetToCentimeters(feet, 2), 2)} cm
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">Meter til fod tabel</h2>
          <p className="mt-2 max-w-[62ch] text-pretty text-muted-foreground">
            Skal du regne den anden vej, viser tabellen her almindelige meterværdier omregnet til
            fod.
          </p>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
            {COMMON_METERS.map((meters) => (
              <div key={meters} className="rounded-lg border border-border bg-card p-4">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  {meters} meter i fod
                </h3>
                <p className="mt-1.5 font-mono text-xl font-bold text-primary tabular-nums">
                  {formatDaTrim(metersToFeet(meters, 4), 4)} ft
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight">Højde i fod og tommer</h2>
          <p className="mt-2 max-w-[62ch] text-pretty text-muted-foreground">
            Højder angives næsten altid i fod og tommer i USA og Storbritannien. Her er de
            almindeligste højder omregnet til meter og centimeter.
          </p>
          <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-2.5">
            {HEIGHT_TABLE_VALUES.map((height) => {
              const meters = feetInchesToMeters(height.feet, height.inches, 4)
              return (
                <div
                  key={`${height.feet}-${height.inches}`}
                  className="flex items-baseline justify-between gap-3 rounded-md border border-border bg-card px-3.5 py-2.5 font-mono text-sm tabular-nums"
                >
                  <span className="text-muted-foreground">
                    {height.feet} ft {height.inches} tm
                  </span>
                  <span className="font-bold text-primary">{formatDa(meters, 2)} m</span>
                </div>
              )
            })}
          </div>
        </section>

        <Faq items={FAQ_ITEMS} />
      </main>
      <SiteFooter />
    </div>
  )
}
