import Image from "next/image"
import Link from "next/link"

import { CookieSettingsLink } from "@/src/components/site/cookie-settings-link"

const FOOTER_COLUMNS = [
  {
    heading: "Legal",
    links: [
      { href: "/privatlivspolitik", label: "Privatlivspolitik" },
      { href: "/vilkaar-for-brug", label: "Vilkår for brug" },
      { href: "/ansvarsfraskrivelse", label: "Ansvarsfraskrivelse" },
    ],
  },
  {
    heading: "Navigation",
    links: [
      { href: "/", label: "Forside" },
      { href: "/#saadan-bruger-du-beregneren", label: "Sådan bruger du beregneren" },
      { href: "/#faq", label: "Ofte stillede spørgsmål" },
    ],
  },
]

const FOOTER_LINK_CLASSNAME = "text-sm text-emerald-200 hover:text-white cursor-pointer"

export function SiteFooter() {
  return (
    <footer className="bg-emerald-950 px-4 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-[940px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/moms-beregner-logo-6c-black.svg"
                width={228}
                height={36}
                className="h-7 w-auto"
                alt="moms-beregner.dk"
              />
            </Link>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-emerald-200/60">
              Gratis dansk momsberegner. Ingen login, ingen data gemmes. Alt
              regnes i din browser.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <div className="mb-3 text-xs font-semibold tracking-wide text-emerald-300/50 uppercase">
                {column.heading}
              </div>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={FOOTER_LINK_CLASSNAME}>
                      {link.label}
                    </Link>
                  </li>
                ))}
                {column.heading === "Legal" && (
                  <li>
                    <CookieSettingsLink className={FOOTER_LINK_CLASSNAME} />
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <span className="text-xs text-emerald-300/50">
            © 2026 moms-beregner.dk
          </span>
        </div>
      </div>
    </footer>
  )
}
