import type { Metadata } from "next"
import Link from "next/link"

import { DocumentCopy } from "@workspace/ui/icons"

import { ContactForm } from "@/src/components/site/contact-form"
import { NavBar } from "@/src/components/site/nav-bar"
import { SiteFooter } from "@/src/components/site/site-footer"

const SITE_URL = "https://www.gennemsnitsberegner.dk"
const PAGE_URL = `${SITE_URL}/kontakt`
const TITLE = "Kontakt Gennemsnitsberegner.dk"
const DESCRIPTION =
  "Har du spørgsmål, feedback eller har du fundet en fejl i en af beregnerne? Skriv til os."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Gennemsnitsberegner.dk",
    locale: "da_DK",
    type: "website",
  },
}

export default function KontaktPage() {
  return (
    <div className="flex flex-1 flex-col bg-muted">
      <NavBar />

      <section className="bg-indigo-950 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-lg text-center">
          <h1 className="mb-2 text-balance text-[26px] leading-[1.15] font-extrabold text-white sm:text-[32px]">
            Kontakt os
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-indigo-200/70">
            Har du spørgsmål, feedback, eller har du fundet en fejl i en af beregnerne? Udfyld
            formularen herunder, så vender vi tilbage til dig.
          </p>

          <div className="text-left">
            <ContactForm />
          </div>

          <Link
            href="/del-beregner"
            className="mt-4 flex items-center gap-3 rounded-xl border bg-background p-4 text-left shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <DocumentCopy className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Indlejr en beregner</div>
              <p className="text-xs text-muted-foreground">
                Sæt en gratis beregner på din egen hjemmeside eller blog.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
