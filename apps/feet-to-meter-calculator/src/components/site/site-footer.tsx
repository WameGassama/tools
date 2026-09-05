import Image from "next/image"
import Link from "next/link"

import { CookieSettingsLink } from "@/src/components/site/cookie-settings-link"

const FOOTER_LINKS = [
  { href: "/privatlivspolitik", label: "Privatlivspolitik" },
  { href: "/vilkaar", label: "Vilkår" },
]

const FOOTER_LINK_CLASSNAME =
  "text-sm text-neutral-400 transition-colors hover:text-white cursor-pointer"

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 print:hidden">
      <div aria-hidden="true" className="ruler-strip h-2.5 opacity-30" />
      <div className="mx-auto flex max-w-[1060px] flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-8 sm:py-14">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/fodtilmeter-logo-7b-black.svg"
              alt="fodtilmeter.dk"
              width={317}
              height={56}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-3.5 max-w-[34ch] text-sm leading-relaxed text-neutral-500">
            Gratis omregner mellem fod og meter. Regner med den officielle værdi på 0,3048 meter
            pr. fod, direkte i din browser.
          </p>
          <p className="mt-6 text-xs text-neutral-500">© 2026 fodtilmeter.dk</p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={FOOTER_LINK_CLASSNAME}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <CookieSettingsLink className={FOOTER_LINK_CLASSNAME} />
          </li>
        </ul>
      </div>
    </footer>
  )
}
