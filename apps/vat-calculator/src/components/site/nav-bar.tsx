import Image from "next/image"
import Link from "next/link"

export function NavBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-card px-4 py-3 sm:px-10 sm:py-4">
      <Link href="/" aria-label="MomsBeregner – til forsiden">
        <Image
          src="/moms-beregner-logo-6c-white.svg"
          alt="moms-beregner.dk"
          width={253}
          height={40}
          priority
        />
      </Link>
    </header>
  )
}
