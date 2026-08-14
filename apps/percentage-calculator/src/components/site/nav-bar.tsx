import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@workspace/ui/components/navigation-menu"

import Image from "next/image"

const NAV_LINKS = [
  { href: "/procentregning", label: "Procentregning" },
  { href: "/stigning-i-procent", label: "Stigning i procent" },
  { href: "/procentvis-afvigelse", label: "Procentvis afvigelse" },
]

export function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b bg-background px-4 py-3 sm:px-10 sm:py-4">
      <Link href="/">
        <Image
          src={"logo-black.svg"}
          width={200}
          height={40}
          alt="Procent af et tal logo"
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink render={<Link href={link.href} />}>
                {link.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}
