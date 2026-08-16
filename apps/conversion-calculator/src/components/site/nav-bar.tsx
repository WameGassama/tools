import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"

import { CategoryNavMenu } from "@/src/components/site/category-nav-menu"
import { MobileNav } from "@/src/components/site/mobile-nav"
import { CATEGORIES } from "@/src/lib/converters"

export function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between gap-6 border-b bg-background px-4 py-3 sm:px-10 sm:py-4">
      <Link href="/" className="flex shrink-0 items-center gap-2">
        <Image
          src="/omregning-logo-light.svg"
          width={172}
          height={40}
          alt="omregning.dk ikon"
          className="h-8 w-auto sm:h-10"
        />
      </Link>

      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/" />}>
              Forside
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Kategori</NavigationMenuTrigger>
            <NavigationMenuContent>
              <CategoryNavMenu categories={CATEGORIES} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/om-os" />}>
              Om os
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <MobileNav categories={CATEGORIES} />
    </nav>
  )
}
