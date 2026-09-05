import Image from "next/image"
import Link from "next/link"

export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur print:hidden">
      <div className="mx-auto flex max-w-[1060px] items-center px-4 py-3 sm:px-8">
        <Link href="/" aria-label="fodtilmeter.dk – til forsiden" className="flex items-center">
          <Image
            src="/fodtilmeter-logo-7b-white.svg"
            alt="fodtilmeter.dk"
            width={272}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>
      <div aria-hidden="true" className="ruler-strip h-2 opacity-40" />
    </header>
  )
}
