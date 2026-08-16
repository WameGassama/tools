import { ConverterDirectory } from "@/src/components/site/converter-directory"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />
      <section className="mx-auto w-full max-w-5xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-18">
        <ConverterDirectory />
      </section>
      <SiteFooter />
    </div>
  )
}
