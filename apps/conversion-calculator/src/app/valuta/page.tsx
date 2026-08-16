import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

export default function ValutaPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-3xl px-4 pt-10 pb-10 sm:px-6 sm:pt-22 sm:pb-18">
        <h1 className="mb-2.5 text-balance break-words text-[26px] leading-[1.15] font-extrabold sm:text-[38px]">
          Valuta
        </h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          Konverter mellem valutaer. Kommer snart.
        </p>
      </section>
      <SiteFooter />
    </div>
  )
}
