import { Input } from "@workspace/ui/components/input"
import { Search } from "@workspace/ui/icons"

import { CategorySection } from "@/src/components/site/category-section"
import { CATEGORIES } from "@/src/lib/converters"

export function ConverterDirectory() {
  return (
    <div>
      <div className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-primary to-blue-700 px-6 py-14 text-primary-foreground shadow-2xl shadow-primary/30 ring-1 ring-white/10 sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-32 -right-16 h-80 w-80 rounded-full bg-white/20 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-900/30 blur-[90px]"
          aria-hidden="true"
        />

        <div className="relative max-w-xl">
          <h1 className="mb-2.5 text-balance break-words text-[32px] leading-[1.1] font-extrabold sm:text-[44px]">
            Danmarks samlede omregner
          </h1>
          <p className="mb-8 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            omregning.dk samler alle dine omregnere ét sted — længde,
            valuta og meget mere på vej.
          </p>

          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Søg efter en omregner, fx “valuta” eller “meter”…"
              className="h-14 border-0 bg-background pl-11 text-base text-foreground shadow-xl ring-1 ring-black/5"
              aria-label="Søg efter omregner"
            />
          </div>
        </div>
      </div>

      <CategorySection categories={CATEGORIES} />
    </div>
  )
}
