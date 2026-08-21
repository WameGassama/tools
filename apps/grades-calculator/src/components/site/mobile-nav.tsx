"use client"

import Link from "next/link"
import { Menu, Share2, X } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

import { buttonVariants } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"
import {
  Briefcase,
  Building,
  Calendar,
  Glass,
  Monitor,
  RulerPen,
  Task,
} from "@workspace/ui/icons"

import { EDUCATION_LINKS } from "@/src/lib/education-links"

const EDUCATION_LINK_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "/stx-snit-beregner": Glass,
  "/hhx-gennemsnit": Briefcase,
  "/eux-gennemsnit": RulerPen,
  "/htx-gennemsnit": Monitor,
  "/hf-gennemsnit": Calendar,
  "/hf-enkeltfag-gennemsnit": Task,
  "/folkeskole-karaktergennemsnit": Building,
}

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-muted sm:hidden"
        aria-label="Åbn menu"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right">
        <div className="flex items-center justify-between">
          <SheetTitle className="text-base">Menu</SheetTitle>
          <SheetClose
            className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted"
            aria-label="Luk menu"
          >
            <X className="h-4 w-4" />
          </SheetClose>
        </div>

        <nav className="flex flex-col gap-1">
          <SheetClose
            render={<Link href="/" />}
            nativeButton={false}
            className="rounded-lg p-2 text-sm font-medium hover:bg-muted"
          >
            Forside
          </SheetClose>
          {EDUCATION_LINKS.map((link) => {
            const Icon = EDUCATION_LINK_ICONS[link.href]
            return (
              <SheetClose
                key={link.href}
                render={<Link href={link.href} />}
                nativeButton={false}
                className="flex items-center gap-2 rounded-lg p-2 text-sm font-medium hover:bg-muted"
              >
                {Icon ? <Icon className="size-4 text-muted-foreground" /> : null}
                {link.label}
              </SheetClose>
            )
          })}
          <SheetClose
            render={<Link href="/del-beregner" />}
            nativeButton={false}
            className={cn(buttonVariants({ size: "lg" }), "mt-2 w-full")}
          >
            <Share2 />
            Del / indlejr
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
