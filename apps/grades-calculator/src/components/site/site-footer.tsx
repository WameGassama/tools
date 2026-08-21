import Image from "next/image"
import Link from "next/link"

import { CookieSettingsLink } from "@/src/components/site/cookie-settings-link"
import { EDUCATION_LINKS, OVERVIEW_LINKS } from "@/src/lib/education-links"

const FOOTER_COLUMNS = [
  {
    heading: "Uddannelser",
    links: EDUCATION_LINKS,
  },
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
      ...OVERVIEW_LINKS,
      { href: "/del-beregner", label: "Del / indlejr" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
]

const FOOTER_LINK_CLASSNAME =
  "text-sm text-indigo-200 hover:text-white cursor-pointer"

export function SiteFooter() {
  return (
    <footer className="bg-indigo-950 px-6 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/gennemsnitsberegner-logo-black.svg"
                width={333}
                height={30}
                className="h-6 w-auto sm:h-7"
                alt="Gennemsnitsberegner.dk"
              />
            </Link>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-indigo-200/60">
              Karaktergennemsnitsberegner til alle danske uddannelser.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <div className="mb-3 text-xs font-semibold tracking-wide text-indigo-300/50 uppercase">
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
          <span className="text-xs text-indigo-300/50">
            © 2026 Gennemsnitsberegner.dk
          </span>
        </div>
      </div>
    </footer>
  )
}
