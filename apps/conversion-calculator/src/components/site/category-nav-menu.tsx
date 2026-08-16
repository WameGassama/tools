import Link from "next/link"

import { NavigationMenuLink } from "@workspace/ui/components/navigation-menu"

import type { Category } from "@/src/lib/converters"

export function CategoryNavMenu({ categories }: { categories: Category[] }) {
  return (
    <div className="grid w-[min(90vw,420px)] grid-cols-2 gap-1 p-1 sm:w-[480px] sm:grid-cols-3">
      {categories.map((category) =>
        category.href ? (
          <NavigationMenuLink
            key={category.slug}
            render={<Link href={category.href} />}
          >
            {category.title}
          </NavigationMenuLink>
        ) : (
          <span
            key={category.slug}
            className="flex items-center gap-2 rounded-lg p-2 text-sm text-muted-foreground/40"
          >
            {category.title}
          </span>
        ),
      )}
    </div>
  )
}
