import Link from "next/link"

import { Badge } from "@workspace/ui/components/badge"
import { ArrowHorizontalSwap, ArrowVerticalSwap } from "@workspace/ui/icons"

import type { Category } from "@/src/lib/converters"

export function CategorySection({ categories }: { categories: Category[] }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-lg font-bold">Kategorier</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-5">
        {categories.map((category, index) => (
          <CategoryTile key={category.slug} category={category} index={index} />
        ))}
      </div>
    </div>
  )
}

function CategoryTile({ category, index }: { category: Category; index: number }) {
  const Icon = index % 2 === 0 ? ArrowHorizontalSwap : ArrowVerticalSwap

  const inner = (
    <>
      {!category.href && (
        <Badge
          variant="outline"
          className="absolute top-3 right-3 text-[10px] text-muted-foreground"
        >
          Snart
        </Badge>
      )}
      <span
        className={
          category.href
            ? "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary"
            : "flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground"
        }
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold">{category.title}</span>
    </>
  )

  if (category.href) {
    return (
      <Link
        href={category.href}
        className="relative flex flex-col items-start gap-3 rounded-xl border bg-background p-4 transition-colors hover:border-primary"
      >
        {inner}
      </Link>
    )
  }

  return (
    <div
      aria-disabled="true"
      className="relative flex flex-col items-start gap-3 rounded-xl border border-dashed bg-background/60 p-4 text-muted-foreground"
    >
      {inner}
    </div>
  )
}
