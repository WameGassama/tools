"use client"

import Image from "next/image"
import Link from "next/link"

import { CATEGORIES, type Category } from "@/src/lib/converters"
import { openCookiePreferences } from "@/src/components/site/cookie-consent"

const ABOUT_LINKS: Category[] = [
  { slug: "forside", title: "Forside", href: "/" },
  { slug: "om-os", title: "Om os", href: "/om-os" },
]

const LEGAL_LINKS: Category[] = [
  {
    slug: "privatlivspolitik",
    title: "Privatlivspolitik",
    href: "/privatlivspolitik",
  },
  { slug: "vilkaar", title: "Vilkår for brug", href: "/vilkaar" },
  {
    slug: "ansvarsfraskrivelse",
    title: "Ansvarsfraskrivelse",
    href: "/ansvarsfraskrivelse",
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 px-6 py-14 sm:px-10 sm:py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/omregning-logo-dark.svg"
                width={140}
                height={30}
                alt="omregning.dk ikon"
              />
            </Link>
            <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-slate-400">
              Danmarks samlede omregner. Alle dine omregnere ét sted.
            </p>
          </div>

          <FooterColumn title="Omregnere" items={CATEGORIES} />
          <FooterColumn title="Legal" items={LEGAL_LINKS}>
            <li>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="cursor-pointer text-sm text-blue-400 transition-colors hover:text-blue-300"
              >
                Cookie
              </button>
            </li>
          </FooterColumn>
          <FooterColumn title="Om" items={ABOUT_LINKS} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
          © 2026 omregning.dk
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  items,
  children,
}: {
  title: string
  items: Category[]
  children?: React.ReactNode
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold tracking-wide text-slate-500 uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.slug}>
            {item.href ? (
              <Link
                href={item.href}
                className="text-sm text-blue-400 transition-colors hover:text-blue-300"
              >
                {item.title}
              </Link>
            ) : (
              <span className="text-sm text-slate-600">{item.title}</span>
            )}
          </li>
        ))}
        {children}
      </ul>
    </div>
  )
}
