import Link from "next/link"
import Image from "next/image"

const FOOTER_LINKS = [
  { href: "/procentregning", label: "Procentregning" },
  { href: "/stigning-i-procent", label: "Stigning i procent" },
  { href: "/procentvis-afvigelse", label: "Procentvis afvigelse" },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary px-6 py-10 text-primary-foreground sm:py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/">
            <Image
              src={"logo-white.svg"}
              width={200}
              height={40}
              alt="Procent af et tal logo"
            />
          </Link>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70">
          © 2026 Procentregner.dk
        </div>
      </div>
    </footer>
  )
}
