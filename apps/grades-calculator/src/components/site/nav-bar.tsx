import Image from "next/image"
import Link from "next/link"
import { Share2 } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

import { buttonVariants } from "@workspace/ui/components/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@workspace/ui/components/navigation-menu"
import {
  Briefcase,
  Building,
  Calendar,
  Glass,
  Monitor,
  RulerPen,
  Task,
} from "@workspace/ui/icons"

import { MobileNav } from "@/src/components/site/mobile-nav"
import { EDUCATION_LINKS, OVERVIEW_LINKS } from "@/src/lib/education-links"

const EDUCATION_LINK_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "/stx-snit-beregner": Glass,
  "/hhx-gennemsnit": Briefcase,
  "/eux-gennemsnit": RulerPen,
  "/htx-gennemsnit": Monitor,
  "/hf-gennemsnit": Calendar,
  "/hf-enkeltfag-gennemsnit": Task,
  "/folkeskole-karaktergennemsnit": Building,
}

export function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-3 sm:px-10 sm:py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={"/gennemsnitsberegner-logo-white.svg"}
          width={333}
          height={30}
          className="h-6 w-auto sm:h-7"
          alt="Gennemsnitsberegner.dk"
        />
      </Link>

      <div className="hidden items-center gap-2 sm:flex">
        <NavigationMenu align="end">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Oversigt</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[min(90vw,200px)] p-1">
                  {OVERVIEW_LINKS.map((link) => (
                    <NavigationMenuLink
                      key={link.href}
                      render={<Link href={link.href} />}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Uddannelser</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[min(90vw,320px)] grid-cols-2 gap-1 p-1">
                  {EDUCATION_LINKS.map((link) => {
                    const Icon = EDUCATION_LINK_ICONS[link.href]
                    return (
                      <NavigationMenuLink
                        key={link.href}
                        render={<Link href={link.href} />}
                        className="flex items-center gap-2"
                      >
                        {Icon ? <Icon className="size-4 text-muted-foreground" /> : null}
                        {link.label}
                      </NavigationMenuLink>
                    )
                  })}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link href="/del-beregner" className={buttonVariants({ size: "lg" })}>
          <Share2 />
          Del / indlejr
        </Link>
      </div>

      <MobileNav />
    </nav>
  )
}
