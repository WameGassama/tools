import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

export default function OmOsPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Om os
        </h1>
        <p className="mb-4 text-base leading-relaxed text-muted-foreground">
          omregning.dk er Danmarks samlede omregner. Vi samler alle de
          omregnere, du har brug for — længde, valuta og mange flere på vej —
          ét sted, så du hurtigt kan finde svaret uden at lede efter det
          rigtige værktøj hver gang.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Vi arbejder løbende på at tilføje flere kategorier. Har du forslag
          eller mangler en bestemt omregner, er du velkommen til at skrive
          til os.
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
