"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

import type { Category } from "@/src/lib/converters"

export function MobileNav({ categories }: { categories: Category[] }) {
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
          <SheetClose
            render={<Link href="/om-os" />}
            nativeButton={false}
            className="rounded-lg p-2 text-sm font-medium hover:bg-muted"
          >
            Om os
          </SheetClose>
        </nav>

        <div className="border-t pt-4">
          <p className="mb-2 px-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Kategorier
          </p>
          <div className="flex flex-col gap-1">
            {categories.map((category) =>
              category.href ? (
                <SheetClose
                  key={category.slug}
                  render={<Link href={category.href} />}
                  nativeButton={false}
                  className="rounded-lg p-2 text-sm hover:bg-muted"
                >
                  {category.title}
                </SheetClose>
              ) : (
                <span
                  key={category.slug}
                  className="rounded-lg p-2 text-sm text-muted-foreground/40"
                >
                  {category.title}
                </span>
              ),
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
